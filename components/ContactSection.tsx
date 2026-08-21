"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock3 } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone Number",
    value: "+91 93545 45001",
    href: "tel:+919354545001",
  },
  {
    icon: Mail,
    label: "Email Address",
    value: "rahulyadav809052@gmail.com",
    href: "mailto:rahulyadav809052@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value:
      "Plot No. 115, Sector 4, Greater Noida West, Uttar Pradesh, India - 201318",
  },
  {
    icon: Clock3,
    label: "Working Hours",
    value: "Open 6AM – 12AM · 18 Hrs",
  },
];

const ContactSection = () => {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white lg:py-28">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400">
              GET IN TOUCH
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase leading-[1.1] sm:text-4xl lg:text-5xl">
              LET&apos;S TALK
              <br />
              <span className="text-yellow-400">FITNESS</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-300 lg:text-base">
              Have questions about programs, pricing, or a free trial? Reach
              out — our team responds fast.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactInfo.map((item) => {
                const Content = (
                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 ease-out hover:border-yellow-400/20 hover:bg-yellow-400/[0.04]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10">
                      <item.icon className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-yellow-400">
                        {item.label}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-gray-200">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {Content}
                  </a>
                ) : (
                  <div key={item.label}>{Content}</div>
                );
              })}
            </div>
          </motion.div>

          {/* ================= RIGHT: FORM ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl sm:p-8"
          >
            <h3 className="text-xl font-black uppercase text-white lg:text-2xl">
              Send Enquiry
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Fill out the form and our team will contact you shortly.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="h-12 w-full rounded-2xl border border-white/10 bg-zinc-900 px-4 text-sm text-white outline-none transition-all duration-300 ease-out placeholder:text-gray-500 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 sm:h-14 sm:px-5 sm:text-base"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 w-full rounded-2xl border border-white/10 bg-zinc-900 px-4 text-sm text-white outline-none transition-all duration-300 ease-out placeholder:text-gray-500 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 sm:h-14 sm:px-5 sm:text-base"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-300">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full rounded-2xl border border-white/10 bg-zinc-900 p-4 text-sm text-white outline-none transition-all duration-300 ease-out placeholder:text-gray-500 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 sm:p-5 sm:text-base"
                />
              </div>

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center rounded-2xl bg-yellow-400 text-xs font-black uppercase tracking-[0.15em] text-black transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(250,204,21,0.35)] active:scale-95 sm:h-14 sm:text-sm"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
