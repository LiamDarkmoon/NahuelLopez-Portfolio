import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();

  const sended = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: ["tuemail@gmail.com"],
    subject: "Nuevo mensaje del portfolio",
    html: `<p>${data.message}</p>`,
  });

  if (sended) {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [`${data.email}`],
      subject: "Respuesta a tu mensaje del portfolio",
      html: `<p>Gracias por tu mensaje. Te responderé lo antes posible.</p>`,
    });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
