export const prerender = false;

import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData(); // 👈
  const data = Object.fromEntries(form.entries());

  console.log(data);

  const sended = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: ["nahuel.lopez.r@gmail.com"],
    subject: "Nuevo mensaje del portfolio",
    html: `<p>${data.message}</p>`,
  });

  if (sended) {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [`${data.email}`],
      subject: "Respuesta Nahuel Lopez",
      html: `<p>Tu mensaje fue resivido. Nos contactaremos a la brevedad.</p>`,
    });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
