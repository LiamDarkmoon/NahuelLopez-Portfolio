import { contact } from "@/lib/utils";
import { useEffect, useState } from "react";
import type { Lang, Dictionaries } from "@/lib/i18n";
import { useTimer } from "@/lib/hooks/useTimer";

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

  useTimer(success, () => setSuccess(false));

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
  };

  const cleanError = (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>,
  ) => {
    const { name } = e.target;

    setErrors((prev) => {
      if (typeof prev === "string" || prev === null) return prev;

      if (!(name in prev)) return prev;

      return {
        ...prev,
        [name]: undefined,
      };
    });
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
            {errors && typeof errors === "object" && errors.name
              ? lan.errors.name
              : null}
          </p>
          <input
            onFocus={(e) => cleanError(e)}
            id="Name"
            name="name"
            type="text"
            placeholder="Michael Jackson"
            className="p-2 rounded-md bg-light-bg ring ring-light-border dark:border-dark-border focus:ring focus:ring-brand-soft text-light-text-primary"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="Email">{lan.fields.email}</label>
          <p className="text-error-text text-xs">
            {errors && typeof errors === "object" && errors.email
              ? lan.errors.email
              : null}
          </p>
          <input
            onFocus={(e) => cleanError(e)}
            id="Email"
            name="email"
            type="email"
            placeholder="Your-Mail@gmail.dev"
            className="p-2 rounded-md bg-light-bg ring ring-light-border dark:border-dark-border focus:ring focus:ring-brand-soft text-light-text-primary"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="Message">{lan.fields.message}</label>
          <p className="text-error-text text-xs">
            {errors && typeof errors === "object" && errors.message
              ? lan.errors.message
              : null}
          </p>
          <textarea
            onFocus={(e) => cleanError(e)}
            id="Message"
            name="message"
            placeholder="Your Message"
            rows={5}
            className="p-2 rounded-md bg-light-bg ring ring-light-border dark:border-dark-border focus:ring focus:ring-brand-soft text-light-text-primary"
          />
        </div>

        <div className="w-full text-center">
          <button
            disabled={loading}
            type="submit"
            className="w-full rounded-lg h-12 mb-4 px-6 py-3 text-dark-text-primary bg-linear-to-r from-brand to-brand-soft hover:from-brand-soft hover:to-brand hover:scale-105 active:scale-95 active:bg-brand-active transition-all duration-500"
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
