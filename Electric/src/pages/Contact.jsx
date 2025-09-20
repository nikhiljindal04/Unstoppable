import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <div>
        <div className="flex flex-col flex-items-center min-h-screen bg-gradient-to-b from-[#102116] via-[#102116] to-[#151816] text-white text-center">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-20">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Contact Us
                  </h2>
                  <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
                    We're here to help. Reach out to us with any questions or
                    feedback.
                  </p>
                </div>

                <ContactForm />

                <ContactInfo />
              </div>

              <div className="lg:sticky lg:top-32 self-start">
                <div className="aspect-[16/12] w-full">
                  <iframe
                    className="w-full h-full rounded-xl"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.719602513903!2d-118.41164968478441!3d34.05116798060641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d60b5555%3A0x8f7f4a5a5a5a5a5a!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1678886655444!5m2!1sen!2sus"
                  ></iframe>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
