import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mdojozdp");

  if (state.succeeded) {
    return (
      <p>
       We are pleased to inform you that the prayer request form has been successfully submitted. Our team has received your request and we will be lifting you up in prayer.

We understand that this may be a difficult time for you, and we want to assure you that you are not alone. Our community of believers is here to support you and we believe in the power of prayer.

Please know that your request will be kept confidential and will only be shared with our prayer team. We ask that you continue to trust in the Lord and hold fast to your faith.

If you would like to share any updates or further requests, please do not hesitate to reach out to us. We are here for you and we will continue to keep you in our prayers.

Blessings,
The Prayer Team.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      <label htmlFor="name" className="my-4 block">
        Full Name
        <input
          id="name"
          type="text"
          name="name"
          autoComplete="name"
          className="mt-2 block w-full rounded-md border border-gray-500 bg-white p-2 shadow-sm dark:border-0 dark:bg-gray-800 dark:text-gray-100"
        />
      </label>
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <label htmlFor="email" className="my-4 block">
        Email Address
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          className="mt-2 block w-full rounded-md border border-gray-500 bg-white p-2 shadow-sm dark:border-0 dark:bg-gray-800 dark:text-gray-100"
        />
      </label>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message" className="my-4 block">
        Prayer Request?
        <textarea
          id="message"
          name="message"
          rows={10}
          className="mt-2 block w-full rounded-md border border-gray-500 bg-white p-2 shadow-sm dark:border-0 dark:bg-gray-800 dark:text-gray-100"
        />
      </label>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="shadown-sm rounded-md bg-pink-600 bg-gradient-to-r from-purple-800 to-pink-600 px-4 py-2 font-display text-white"
      >
        Submit
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}