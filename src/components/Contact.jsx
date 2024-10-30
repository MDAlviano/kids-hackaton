import React from "react";
import ContactBg from "../assets/bg-kidi.jpeg";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-14 bg-center bg-no-repeat bg-blend-multiply"
      style={{
        backgroundImage: `url(${ContactBg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto text-start">
        <h2 className="text-4xl font-bold mb-8">Hubungi Kami</h2>
        <div className="flex justify-start">
          <div className="w-1/2">
            <div className="w-full px-4 mb-8">
              <label for="email" className="text-base font-bold">
                Email
              </label>
              <input type="email" id="email" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            </div>
            <div className="w-full px-4 mb-8">
              <label for="message" className="text-base font-bold">
                Pesan
              </label>
              <textarea type="email" id="email" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"></textarea>
            </div>
            <div class="w-full px-4">
              <button class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">Kirim</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
