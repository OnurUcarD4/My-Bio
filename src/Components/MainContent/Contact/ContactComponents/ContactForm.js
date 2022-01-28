import "./ContactForm.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { message } from "antd";

const success = () => {
  message.success("Message sent!");
};

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3htb5om",
        "template_erpatao",
        form.current,
        "user_ld5gefYYXNaSP1khMQ1BM"
      )
      .then(
        (result) => {
          message.success("Message sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="blog-card  w-full h-full rounded-2xl p-8">
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-1 flex flex-col gap-2">
              <span className="text-[#a0a8b3] text-sm font-medium">
                YOUR NAME
              </span>
              <input name="from_name" required className="form-input" />
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <span className="text-[#a0a8b3] text-sm font-medium">
                PHONE NUMBER
              </span>
              <input name="contact_number" required className="form-input" />
            </div>
            <div className="col-span-2     flex flex-col gap-2">
              <span className="text-[#a0a8b3] text-sm font-medium">EMAIL</span>
              <input name="reply_to" required className="form-input" />
            </div>
            <div className="col-span-2     flex flex-col gap-2">
              <span className="text-[#a0a8b3] text-sm font-medium">
                SUBJECT
              </span>
              <input name="subject" required className="form-input" />
            </div>
            <div className="col-span-2     flex flex-col gap-2">
              <span className="text-[#a0a8b3] text-sm font-medium">
                YOUR MESSAGE
              </span>
              <textarea name="message" required className="form-input" />
            </div>
          </div>
          <button
            onSubmit={success}
            type="submit"
            className="text-[#ff014f] py-4 px-6 font-bold blog-card  mt-12 rounded-md hover:scale-105 duration-300 mb-10"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
