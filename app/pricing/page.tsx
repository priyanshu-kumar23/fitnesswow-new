export default function PricingPage() {
  const plans = [
    {
      title: "Basic",
      price: "₹1,499",
      duration: "/month",
      features: [
        "Unlimited Gym Access",
        "Cardio Zone Access",
        "Locker Facility",
        "Free Fitness Assessment",
      ],
    },

    {
      title: "Premium",
      price: "₹2,999",
      duration: "/month",
      popular: true,
      features: [
        "All Basic Features",
        "Personal Trainer",
        "Diet & Nutrition Plan",
        "Group Workout Classes",
        "Steam & Shower Access",
      ],
    },

    {
      title: "Elite",
      price: "₹5,499",
      duration: "/month",
      features: [
        "All Premium Features",
        "1-on-1 Elite Coaching",
        "Custom Workout Program",
        "Priority Support",
        "Body Transformation Plan",
      ],
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-white/10 py-24 sm:py-32">

        {/* Background Effects */}
        <div className="absolute inset-0">

          {/* Main Glow */}
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[140px]" />

          {/* Secondary Glow */}
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px]" />

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black to-black" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">

          {/* Tag */}
          <div className="inline-flex items-center rounded-full border border-yellow-400/20 bg-yellow-400/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-yellow-400 sm:text-xs">
            MR WOW FITNESS
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-black uppercase leading-[0.9] sm:text-7xl md:text-8xl lg:text-[80px]">

            MEMBERSHIP
            <br />

            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              PLANS
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
            Choose the perfect membership plan tailored for your fitness goals,
            transformation journey, and lifestyle.
          </p>
        </div>
      </section>

      {/* ================= PRICING SECTION ================= */}
      <section className="relative py-16 sm:py-24">

        {/* Glow */}
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">

          {/* Heading */}
          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              FLEXIBLE PRICING
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase sm:text-5xl">
              INVEST IN YOUR FITNESS
            </h2>
          </div>

          {/* Pricing Cards */}
          <div className="mt-14 grid gap-6 lg:grid-cols-3">

            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-[32px] border p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 sm:p-8 ${
                  plan.popular
                    ? "border-yellow-400/40 bg-yellow-400/[0.06] shadow-[0_0_60px_rgba(250,204,21,0.12)]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >

                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute right-4 top-4 rounded-full bg-yellow-400 px-4 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-black">
                    Most Popular
                  </div>
                )}

                {/* Plan Name */}
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
                  {plan.title}
                </p>

                {/* Price */}
                <div className="mt-6 flex items-end">

                  <h2 className="text-5xl font-black text-white">
                    {plan.price}
                  </h2>

                  <span className="ml-2 pb-1 text-sm text-gray-400">
                    {plan.duration}
                  </span>
                </div>

                {/* Divider */}
                <div className="mt-7 h-px w-full bg-white/10" />

                {/* Features */}
                <div className="mt-7 space-y-4">

                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3"
                    >

                      {/* Dot */}
                      <div className="h-2 w-2 rounded-full bg-yellow-400" />

                      {/* Feature */}
                      <p className="text-sm text-gray-300 sm:text-base">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button
                  className={`mt-10 flex h-12 w-full items-center justify-center rounded-2xl text-xs font-black uppercase tracking-[0.15em] transition-all duration-300 sm:h-14 sm:text-sm ${
                    plan.popular
                      ? "bg-yellow-400 text-black hover:shadow-[0_0_40px_rgba(250,204,21,0.35)]"
                      : "border border-white/10 bg-white/[0.05] text-white hover:border-yellow-400/30 hover:bg-yellow-400/10"
                  }`}
                >
                  Join Now
                </button>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-14 text-center">

            <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
              * Prices are for demo purposes and may vary depending on offers,
              trainer selection, and transformation programs.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}