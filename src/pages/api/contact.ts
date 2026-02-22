import type { APIRoute } from "astro";
import { Resend } from "resend";
import { z } from "astro/zod";
import sanitizeHtml from "sanitize-html";

const apiKey = import.meta.env.RESEND_API_KEY;
console.log(apiKey);

if (!apiKey) {
  console.error("Missing key");
}

const resend = new Resend(apiKey);

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required").max(40, "Name is too long"),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(1000, "Message is too long")
    .transform((val) =>
      sanitizeHtml(val, { allowedTags: [], allowedAttributes: {} }),
    ),
});

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();
  const data = Object.fromEntries(form.entries());
  const validation = ContactSchema.safeParse(data);

  if (!validation.success) {
    const fieldErrors = validation.error.flatten().fieldErrors;

    return new Response(
      JSON.stringify({
        ok: false,
        errors: fieldErrors,
      }),
      { status: 400 },
    );
  }

  const { email, message } = validation.data;

  const { data: adminMail, error: adminError } = await resend.emails.send({
    from: `${email} Portfolio Contact <onboarding@resend.dev>`,
    to: ["nahuel.lopez.r@gmail.com"],
    subject: "Nuevo mensaje del portfolio",
    html: `<p>${message}</p>`,
  });

  if (adminError) {
    return new Response(JSON.stringify({ ok: false }), {
      status: adminError.statusCode || 500,
    });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
