import { contact } from "@/lib/utils";
import { useState } from "react";
import type { Lang, Dictionaries } from "@/lib/i18n";

type Errors =
  | {
      name?: string[];
      email?: string[];
      message?: string[];
    }
  | string;

type LangForm = {
  lan: Dictionaries[Lang]["form"];
};

export default function ContactForm({ lan }: LangForm) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrors(null);
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);

    const result = await contact(formData);

    setLoading(false);

    if (result.error) {
      setErrors(result.error);
      return;
    }

    if (result.ok) {
      setSuccess(true);
      form.reset();
    }
    setTimeout(() => {
      setSuccess(false);
    }, 30000);
  };

  const cleanError = () => {
    setErrors(null);
  };

  return (
    <section className="flex flex-col gap-5 items-center w-full py-12 border-t border-light-border dark:border-dark-border">
      <h2 className="block w-full sm:w-2/3 text-3xl font-semibold">
        {lan.title}
      </h2>
      <form
        onSubmit={handleSubmit}
        id="Contact"
        className="w-full sm:w-2/3 flex flex-col items-center gap-4 p-5 bg-light-card dark:bg-dark-card rounded-lg border border-light-border dark:border-dark-border"
      >
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="Name">{lan.fields.name}</label>
          <p className="text-error-text text-xs">
            {errors && typeof errors === "object" ? lan.errors.name : null}
          </p>
          <input
            onClick={cleanError}
            id="Name"
            name="name"
            type="text"
            placeholder="Michael Jackson"
            className="p-2 rounded-md border-light-border dark:border-dark-border active:ring active:ring-brand-soft text-light-text-primary"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="Email">{lan.fields.email}</label>
          <p className="text-error-text text-xs">
            {errors && typeof errors === "object" ? lan.errors.email : null}
          </p>
          <input
            onClick={cleanError}
            id="Email"
            name="email"
            type="email"
            placeholder="Your-Mail@gmail.dev"
            className="p-2 rounded-md border-light-border dark:border-dark-border active:ring active:ring-brand-soft text-light-text-primary"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="Message">{lan.fields.message}</label>
          <p className="text-error-text text-xs">
            {errors && typeof errors === "object" ? lan.errors.message : null}
          </p>
          <textarea
            onClick={cleanError}
            id="Message"
            name="message"
            placeholder="Your Message"
            rows={5}
            className="p-2 rounded-md border-light-border dark:border-dark-border active:ring ring-brand-soft text-light-text-primary"
          />
        </div>

        <div className="w-full text-center">
          <button
            disabled={loading}
            type="submit"
            className="w-full rounded-lg h-12 mb-4 px-6 py-3 text-dark-text-primary bg-brand hover:bg-brand-hover active:bg-brand-active"
          >
            {loading ? "Sending..." : lan.fields.button}
          </button>
          {(errors && (
            <p className="h-5 text-error-text text-sm">
              {errors && typeof errors === "string" ? lan.error : null}
            </p>
          )) ||
            (success && (
              <p className="h-5 text-success-text text-sm">
                {success && lan.success}
              </p>
            ))}
        </div>
      </form>
    </section>
  );
}
