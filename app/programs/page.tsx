export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-white/10 py-28 sm:py-36">

        {/* Glow Effects */}
        <div className="absolute inset-0">

          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[140px]" />

          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px]" />

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">

          <div className="inline-flex rounded-full border border-yellow-400/20 bg-yellow-400/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-yellow-400 sm:text-xs">
            MR WOW FITNESS
          </div>

          <h1 className="mt-8 text-5xl font-black uppercase leading-[0.9] sm:text-7xl md:text-8xl lg:text-[100px]">

            TRAIN
            <br />

            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              HARDCORE
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
            Explore elite fitness programs designed for strength,
            transformation, endurance, and peak performance.
          </p>
        </div>
      </section>

      {/* ================= PROGRAMS ================= */}
      <section className="relative py-16 sm:py-24">

        {/* Background Glow */}
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">

          {/* Heading */}
          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              OUR PROGRAMS
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase sm:text-5xl">
              LEVEL UP YOUR FITNESS
            </h2>
          </div>

          {/* Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {[
              {
                title: "Strength Training",
                desc: "Build muscle, increase power, and unlock your full strength potential.",
              },
              {
                title: "Fat Loss",
                desc: "High-intensity workouts designed to burn fat and boost metabolism.",
              },
              {
                title: "Personal Training",
                desc: "One-on-one coaching tailored to your fitness goals and transformation.",
              },
              {
                title: "Cardio Sessions",
                desc: "Improve stamina, endurance, and heart health with dynamic cardio routines.",
              },
              {
                title: "Functional Training",
                desc: "Enhance agility, mobility, balance, and overall body performance.",
              },
              {
                title: "Muscle Building",
                desc: "Advanced hypertrophy-focused programs for serious gains and aesthetics.",
              },
            ].map((program, index) => (
              <div
                key={index}
                className="group rounded-[30px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/30 hover:bg-yellow-400/[0.03]"
              >

                {/* Number */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10 text-xl font-black text-yellow-400">
                  0{index + 1}
                </div>

                {/* Title */}
                <h3 className="mt-7 text-2xl font-black uppercase text-white">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:text-base">
                  {program.desc}
                </p>

                {/* Bottom Line */}
                <div className="mt-8 h-[2px] w-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500 group-hover:w-28" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}