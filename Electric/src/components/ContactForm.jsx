import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // You can add API integration here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="form-input block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-[#223729] p-4 text-gray-900 dark:text-white focus:ring-primary focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="form-input block w-full rounded-lg bg-[#223729] border-gray-300 dark:border-gray-700 p-4 text-gray-900 dark:text-white focus:ring-primary focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="subject" className="sr-only">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="form-input block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-[#223729] p-4 text-gray-900 dark:text-white focus:ring-primary focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="form-input block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-[#223729] p-4 text-gray-900 dark:text-white focus:ring-primary focus:border-primary"
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 rounded-lg shadow-sm text-sm font-bold text-background-dark bg-[#223729] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
