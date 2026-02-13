import { defineAction } from "astro:actions";
import { z } from "astro/zod";
import { Resend } from "resend";

const apiKey = import.meta.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error("RESEND_API_KEY is not defined");
}

const resend = new Resend(apiKey);

export const server = {
  sendMessage: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(2),
      email: z.string().email(),
      message: z.string().min(5).max(2000),
    }),

    handler: async ({ name, email, message }) => {
      console.log("sending email from:", name);
      try {
        const { error } = await resend.emails.send({
          from: "Portfolio <onboarding@resend.dev>",
          to: ["nahuel.lopez.r@gmail.com"],
          subject: `Nuevo contacto — ${name}`,
          html: `
            <div style="font-family: system-ui, sans-serif;">
              <h2>Nuevo mensaje desde el portfolio</h2>
              <p><b>Nombre:</b> ${name}</p>
              <p><b>Email:</b> ${email}</p>
              <hr/>
              <p>${message.replace(/\n/g, "<br/>")}</p>
            </div>
          `,
        });

        if (error) {
          console.error("Resend error:", error);
          return { ok: false, error: "MAIL_FAILED" };
        }

        return { ok: true };
      } catch (err) {
        console.error("Contact action error:", err);
        return { ok: false, error: "SERVER_ERROR" };
      }
    },
  }),
};
