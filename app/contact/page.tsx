"use client";

import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const ContactPage = () => {
  return (
    <main className="overflow-hidden bg-black text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden border-b border-white/10 bg-black py-28 sm:py-36">

        {/* Background Effects */}
        <div className="absolute inset-0">

          {/* Main Glow */}
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[140px]" />

          {/* Secondary Glow */}
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px]" />

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">

          {/* Tag */}
          <div className="inline-flex items-center rounded-full border border-yellow-400/20 bg-yellow-400/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-yellow-400 sm:text-xs">
            MR WOW FITNESS
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-3xl font-black uppercase leading-[1.05] text-white sm:text-4xl md:text-5xl lg:text-7xl">

            LET'S
            <br />

            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              CONNECT
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
            Whether you're ready to transform your body, join our fitness programs,
            or simply explore MR WOW FITNESS — our team is here to guide you.
          </p>

          {/* Bottom Stats */}
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">

              <h3 className="text-2xl font-bold text-yellow-400">
                18HRS
              </h3>

              <p className="mt-2 text-xs uppercase tracking-wider text-gray-400">
                6AM – 12AM
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">

              <h3 className="text-2xl font-bold text-yellow-400">
                PRO
              </h3>

              <p className="mt-2 text-xs uppercase tracking-wider text-gray-400">
                Expert Trainers
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">

              <h3 className="text-2xl font-bold text-yellow-400">
                ELITE
              </h3>

              <p className="mt-2 text-xs uppercase tracking-wider text-gray-400">
                Fitness Experience
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="relative overflow-hidden py-14 sm:py-20">

        {/* Background Glow */}
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">

          {/* Heading */}
          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400">
              GET IN TOUCH
            </p>

            <h2 className="mt-3 text-3xl font-bold uppercase sm:text-4xl lg:text-4xl">
              LET'S TALK FITNESS
            </h2>
          </div>

          {/* Main Grid */}
          <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-[1.1fr_0.9fr]">

            {/* ================= LEFT FORM ================= */}
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl sm:p-8">

              <h3 className="text-xl font-semibold uppercase text-white lg:text-2xl">
                Send Enquiry
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Fill out the form and our team will contact you shortly.
              </p>

              <form className="mt-8 space-y-5">

                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-300">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-zinc-900 px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 sm:h-14 sm:px-5 sm:text-base"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-300">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-zinc-900 px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 sm:h-14 sm:px-5 sm:text-base"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-300">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full rounded-2xl border border-white/10 bg-zinc-900 p-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 sm:p-5 sm:text-base"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="flex h-12 w-full items-center justify-center rounded-2xl bg-yellow-400 text-xs font-black uppercase tracking-[0.15em] text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(250,204,21,0.35)] active:scale-95 sm:h-14 sm:text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* ================= RIGHT INFO ================= */}
            <div className="space-y-5">

              {/* Phone */}
              <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:p-7">

                <div className="flex items-start gap-4 sm:gap-5">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-400/10 sm:h-14 sm:w-14">
                    <Phone className="h-5 w-5 text-yellow-400 sm:h-6 sm:w-6" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400">
                      Phone Number
                    </p>

                    <h3 className="mt-2 text-lg font-bold text-white sm:mt-3">
                      +91 93545 45001
                    </h3>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:p-7">

                <div className="flex items-start gap-4 sm:gap-5">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-400/10 sm:h-14 sm:w-14">
                    <Mail className="h-5 w-5 text-yellow-400 sm:h-6 sm:w-6" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400">
                      Email Address
                    </p>

                    <h3 className="mt-2 break-all text-lg font-bold text-white sm:mt-3">
                      rahulyadav809052@gmail.com
                    </h3>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:p-7">

                <div className="flex items-start gap-4 sm:gap-5">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-400/10 sm:h-14 sm:w-14">
                    <MapPin className="h-5 w-5 text-yellow-400 sm:h-6 sm:w-6" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400">
                      Address
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-gray-300 sm:mt-3 sm:text-base">
                      Plot No. 115, Sector 4,
                      <br />
                      Greater Noida West,
                      <br />
                      Uttar Pradesh, India - 201318
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= MAP SECTION ================= */}
      <section className="pb-14 sm:pb-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">

          <div className="mb-8 text-center">

            <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400">
              FIND US
            </p>

            <h2 className="mt-3 text-3xl font-bold uppercase sm:text-4xl lg:text-4xl">
              VISIT OUR GYM
            </h2>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-white/10 shadow-[0_0_50px_rgba(250,204,21,0.08)] sm:rounded-[32px]">

            <iframe
              src="https://www.google.com/maps?q=28.6004816,77.4425365&z=17&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 sm:h-[500px]"
            ></iframe>

          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;