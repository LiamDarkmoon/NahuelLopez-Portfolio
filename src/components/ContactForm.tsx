import { actions } from "astro:actions";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const form = new FormData(e.currentTarget);
    console.log(form);

    const result = await actions.sendMessage(form);

    setLoading(false);

    if (result.error) {
      setError(result.error.message);
      return;
    }

    if (result.data?.ok) {
      setSuccess(true);
      e.currentTarget.reset();
    }
  };

  return (
    <section className="flex flex-col gap-5 items-center w-full py-12 border-t border-light-border dark:border-dark-border">
      <h2 className="block w-full sm:w-2/3 text-3xl font-semibold">
        Leave a message
      </h2>
      <form
        onSubmit={handleSubmit}
        id="Contact"
        className="w-full sm:w-2/3 flex flex-col items-center gap-4 p-5 bg-light-card dark:bg-dark-card rounded-lg border border-light-border dark:border-dark-border"
      >
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="Name">Name</label>
          <input
            id="Name"
            name="name"
            type="text"
            placeholder="Michael Jackson"
            className="p-2 rounded-md border-light-border dark:border-dark-border active:ring active:ring-brand-soft"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="Email">Email</label>
          <input
            id="Email"
            name="email"
            type="email"
            placeholder="Your-Mail@gmail.dev"
            className="p-2 rounded-md border-light-border dark:border-dark-border active:ring active:ring-brand-soft"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="Message">Message</label>
          <textarea
            id="Message"
            name="message"
            placeholder="Your Message"
            rows={5}
            className="p-2 rounded-md border-light-border dark:border-dark-border active:ring ring-brand-soft"
          />
        </div>

        <button
          disabled={loading}
          type="submit"
          className="w-full rounded-lg h-12 px-6 py-3 text-dark-text-primary bg-brand hover:bg-brand-hover active:bg-brand-active"
        >
          {loading ? "Sending..." : "Send"}
        </button>

        <p className="h-5 text-red-500 text-sm">
          {error && "Ups something PUFF"}
        </p>
        <p className="h-5 text-green-500 text-sm">
          {success && "Message sent 🚀"}
        </p>
      </form>
    </section>
  );
}
