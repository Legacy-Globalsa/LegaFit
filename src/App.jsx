import { useEffect } from "react";
import logo from "./assets/LegaFitLogo.png";
import Grainient from "./Grainient";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-cream font-sans text-neutral-700 selection:bg-teal/10 selection:text-teal-dark min-h-screen relative overflow-hidden">
      
      {/* ── Fixed Floating Navigation ── */}
      <div className="fixed top-6 inset-x-0 z-[100] px-4 pointer-events-none flex justify-center">
        <header className="w-full max-w-[1240px] h-[72px] rounded-full bg-white/90 glass shadow-sm border border-neutral-100 flex items-center px-4 sm:px-6 pointer-events-auto transition-all duration-300 hover:shadow-md relative">
          
          {/* Logo - Left */}
          <div className="flex-1 flex items-center pl-2">
            <a href="#" className="inline-flex items-center gap-2.5 group">
              <img src={logo} alt="LegaFit" className="h-10 sm:h-12 group-hover:scale-105 transition-transform duration-500" />
            </a>
          </div>

          {/* Center Nav */}
          <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-10 text-[15px] font-medium text-neutral-600">
            <a href="#services" className="hover:text-teal hover:-translate-y-0.5 transition-all">Services</a>
            <a href="#experience" className="hover:text-teal hover:-translate-y-0.5 transition-all">Experience</a>
            <a href="#fitness" className="hover:text-teal hover:-translate-y-0.5 transition-all">Fitness</a>
            <a href="#philosophy" className="hover:text-teal hover:-translate-y-0.5 transition-all">Philosophy</a>
          </nav>

          {/* Right Actions */}
          <div className="flex-1 flex items-center justify-end gap-3 hidden md:flex">
            <button className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-neutral-600 border border-neutral-200 bg-white hover:text-teal hover:border-teal/30 hover:shadow-sm transition-all focus:outline-none">
              <iconify-icon icon="lucide:search" width="16"></iconify-icon>
              Search
            </button>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full bg-teal text-white px-6 py-2.5 text-sm font-semibold hover:bg-teal-dark hover:shadow-md hover:-translate-y-px transition-all"
            >
              Book Appointment
              <iconify-icon icon="lucide:calendar" width="16"></iconify-icon>
            </a>
          </div>

          <button aria-label="Open menu" className="lg:hidden ml-auto inline-flex items-center justify-center h-10 w-10 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 transition-colors">
            <iconify-icon icon="lucide:menu" width="20" className="text-neutral-700"></iconify-icon>
          </button>
        </header>
      </div>

      {/* ── Hero Background Elements ── */}
      <div className="absolute top-0 inset-x-0 h-[120vh] -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-cream/30 z-10" />
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2800&q=80"
          alt="Hero Wellness"
          className="w-full h-full object-cover opacity-25 animate-pulse-slow object-top md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/10 via-cream/80 to-cream z-20" />
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-teal-light/20 blur-[100px] rounded-full animate-float z-20" />
        <div className="absolute top-3/4 -left-20 w-[500px] h-[500px] bg-teal/10 blur-[120px] rounded-full animate-float-delayed z-20" />
      </div>

      {/* ── Hero Section ── */}
      <section className="min-h-screen flex items-center relative pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 animate-on-scroll">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal/10 border border-teal/20 text-teal-dark text-xs font-semibold uppercase tracking-widest mb-6 shadow-sm">
                <iconify-icon icon="lucide:sparkles" width="14"></iconify-icon>
                Powered by Legacy Global
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.1] font-bricolage font-semibold tracking-tight text-neutral-800">
                Beauty, Wellness &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-teal-light">
                  Innovation.
                </span>
              </h1>
              <p className="sm:text-lg text-base text-neutral-600 max-w-2xl mt-8 leading-relaxed">
                Where aesthetic excellence meets cutting-edge technology. LEGAFIT redefines the modern personal care experience through intelligent personalization, unparalleled luxury, and data-driven wellness routines crafted uniquely for you.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-xl bg-teal text-white px-8 py-4 text-sm font-semibold shadow-lg hover:shadow-xl hover:bg-teal-dark hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Services
                </a>
                <a
                  href="#philosophy"
                  className="inline-flex items-center justify-center gap-2 border border-neutral-300 hover:border-teal/40 hover:bg-white transition-all duration-300 text-sm font-semibold text-neutral-700 bg-white/50 rounded-xl px-8 py-4 glass hover:-translate-y-1 hover:shadow-lg"
                >
                  <iconify-icon icon="lucide:play-circle" width="20" className="text-teal"></iconify-icon>
                  Our Vision
                </a>
              </div>

              {/* Stats */}
              <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-medium">
                <div className="flex items-center gap-2.5 text-neutral-700 hover:text-teal transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-teal/10 flex flex-center items-center justify-center">
                    <iconify-icon icon="lucide:shield-check" width="16" className="text-teal"></iconify-icon>
                  </div>
                  <span>Certified Experts</span>
                </div>
                <div className="flex items-center gap-2.5 text-neutral-700 hover:text-teal transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-teal/10 flex flex-center items-center justify-center">
                    <iconify-icon icon="lucide:globe" width="16" className="text-teal"></iconify-icon>
                  </div>
                  <span>Global Brands</span>
                </div>
                <div className="flex items-center gap-2.5 text-neutral-700 hover:text-teal transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-teal/10 flex flex-center items-center justify-center">
                    <iconify-icon icon="lucide:cpu" width="16" className="text-teal"></iconify-icon>
                  </div>
                  <span>AI-Powered</span>
                </div>
              </div>
            </div>

            {/* Right badge / Image element */}
            <div className="lg:col-span-5 relative animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="relative group">
                {/* Image Wrap */}
                <div className="rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl">
                  <div className="absolute inset-0 bg-teal/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10 pointer-events-none rounded-[2rem]" />
                  <img src="https://skinanalysis.pro/cdn/shop/files/AI_Skin_Analysis_1.png?v=1724868998&width=1500" alt="Facial Care" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                
                {/* Floating Tag - Positioned outside overflow-hidden */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-11/12 max-w-sm rounded-[1.5rem] p-4 sm:p-5 bg-white shadow-2xl z-30 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 border border-neutral-100 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-dark mb-1">New Experience</p>
                    <p className="text-sm sm:text-base text-neutral-900 font-bold tracking-tight">AI Skin Analysis Routine</p>
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full bg-teal text-white shadow-md">
                    <iconify-icon icon="lucide:wand-2" width="20"></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Services Overview ── */}
      <section id="services" className="relative w-full mx-auto max-w-7xl px-6 lg:px-10 py-20 animate-on-scroll">
        <div className="bg-white/80 w-full border border-white/80 rounded-3xl p-8 sm:p-12 lg:p-16 glass shadow-xl hover:shadow-2xl transition-shadow duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-teal/15 bg-teal/5 text-teal-dark text-xs font-bold uppercase tracking-widest mb-6">
                <iconify-icon icon="lucide:sparkles" width="14"></iconify-icon>
                Our Core Services
              </div>

              <h2 className="text-4xl sm:text-5xl leading-tight text-neutral-900 font-bricolage font-semibold tracking-tight">
                Comprehensive Personal Care.
              </h2>

              <p className="text-neutral-600 text-base mt-6 leading-relaxed">
                LEGAFIT merges luxury treatments with scientific precision. Our fully integrated services cover the complete spectrum of beauty, well-being, and structured fitness routines—enhanced by modern tech.
              </p>

              <div className="mt-10 space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cream-dark border border-neutral-200 flex items-center justify-center mt-1 group-hover:bg-teal group-hover:text-white transition-all duration-300 text-teal-dark shadow-sm">
                    <iconify-icon icon="lucide:scissors" width="22"></iconify-icon>
                  </div>
                  <div>
                    <h3 className="text-xl text-neutral-900 font-semibold tracking-tight mb-1 group-hover:text-teal transition-colors">Professional Beauty</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">Expert haircuts, avant-garde styling, restorative coloring routines, and advanced nail artistry executed by internationally certified technicians.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cream-dark border border-neutral-200 flex items-center justify-center mt-1 group-hover:bg-teal group-hover:text-white transition-all duration-300 text-teal-dark shadow-sm">
                    <iconify-icon icon="lucide:droplets" width="22"></iconify-icon>
                  </div>
                  <div>
                    <h3 className="text-xl text-neutral-900 font-semibold tracking-tight mb-1 group-hover:text-teal transition-colors">Skincare &amp; Spa</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">Medical-grade deep cleansing, innovative anti-aging therapies, and purely holistic relaxing massages to rejuvenate the body and mind.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-neutral-900 hover:bg-teal transition-colors duration-300 shadow-lg"
                >
                  View All Services
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative mx-auto w-full rounded-3xl bg-cream p-4 border border-neutral-200/50 shadow-inner group">
                <div className="relative overflow-hidden rounded-2xl bg-white border border-neutral-100 shadow-sm p-4 sm:p-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80", label: "Hair Care" },
                      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROEcLU1dEg2TtleIhkZcn2Jfj_3_B5SfSyAg&s", label: "Massage & Spa", tall: true },
                      { src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=600&q=80", label: "Nail Art" },
                      { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80", label: "Skincare" },
                      { src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80", label: "Premium Products" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`relative overflow-hidden rounded-xl bg-neutral-200 aspect-[4/5] shadow-sm transform hover:-translate-y-1 hover:shadow-xl transition-all duration-500 ${item.tall ? " md:row-span-2" : ""}`}
                      >
                        <img
                          src={item.src}
                          alt={item.label}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />
                        <div className={`absolute bottom-4 left-4 ${item.tall ? "text-base font-bold" : "text-sm font-semibold"} text-white tracking-wide`}>
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── New Section: Philosophy ── */}
      <section id="philosophy" className="py-24 relative animate-on-scroll">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
            <h2 className="text-3xl sm:text-4xl text-neutral-900 font-bricolage font-semibold tracking-tight mb-8">
              Beyond Surface Beauty
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-12">
              At LEGAFIT, we believe that true wellness stems from personalized care. We move beyond generic treatments by understanding your unique profile, lifestyle, and preferences. Merging the natural harmony of the body with the precision of modern science, we craft regimens that genuinely work from the inside out. Be it achieving glowing skin, increasing physical strength, or finding mental serenity—we guide your transformation every step of the way.
            </p>
            <div className="flex justify-center items-center gap-8 text-neutral-400">
                <div className="h-px bg-neutral-300 w-24"></div>
                <iconify-icon icon="lucide:sparkles" width="24" className="text-teal animate-pulse"></iconify-icon>
                <div className="h-px bg-neutral-300 w-24"></div>
            </div>
        </div>
      </section>

      {/* ── The LEGAFIT Experience (Numbered Steps) ── */}
      <section id="experience" className="max-w-7xl px-6 lg:px-10 mt-10 mx-auto animate-on-scroll">
        <div className="border border-neutral-200 overflow-hidden bg-white/70 rounded-3xl glass shadow-xl">
          <div className="flex items-end justify-between p-8 sm:p-10 border-b border-neutral-200/80 bg-white/40">
            <h2 className="text-3xl sm:text-4xl text-neutral-900 font-bricolage font-semibold tracking-tight">
              The LEGAFIT Experience
            </h2>
            <div className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal/5 border border-teal/10">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-dark">A Holistic Journey</span>
            </div>
          </div>

          {/* Step 1 */}
          <ExperienceStep
            num="01"
            title="Premium Product Distribution"
            desc="We are a trusted importer and distributor of authentic, high-quality beauty and wellness brands from Asia, Europe, the Middle East, North America, and Africa. Guaranteeing purity and potency."
            checks={["Skincare & Cosmetics", "Professional Hair Care", "Organic Brands", "Wellness Products"]}
            img="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80"
            border
          />

          {/* Step 2 */}
          <ExperienceStep
            num="02"
            title="Modern & Smart Luxury Shops"
            desc="Every LEGAFIT beauty shop is meticulously designed with absolute comfort, serene elegance, and modern innovation in mind. An environment built to instantly lower your stress levels."
            checks={["Premium Ambiance", "Digital Booking", "State-of-the-art Facilities"]}
            img="https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?cs=srgb&dl=pexels-delbeautybox-211032-853427.jpg&fm=jpg"
            border
          />

          {/* Step 3 */}
          <ExperienceStep
            num="03"
            title="AI-Driven Solutions"
            desc="We elevate classical services using advanced automated technology. Where code meets beauty—delivering hyper-personalized care, real-time tracking, and automated advice for every client."
            checks={[
              "AI Skin Analysis",
              "Virtual makeup try-on (AR)",
              "Digital history tracking",
              "Smart product mapping",
            ]}
            img="https://www.drbatras.ae/sites/default/files/2023-08/Ai-Skin-Blog-Landscape.webp"
          />
        </div>
      </section>

      {/* ── Fitness & Transformation ── */}
      <section id="fitness" className="animate-on-scroll relative mt-24 sm:mt-32 py-24 sm:py-32 overflow-hidden border-y border-neutral-200">
        <div className="absolute inset-0 z-0 opacity-80 mix-blend-multiply">
          <Grainient
            color1="#FAF7F2"
            color2="#E0F2F1"
            color3="#5BB8AE"
            timeSpeed={0.15}
            colorBalance={0}
            warpStrength={1.5}
            warpFrequency={3}
            warpSpeed={1}
            warpAmplitude={40}
            blendAngle={45}
            blendSoftness={0.1}
            rotationAmount={200}
            noiseScale={1.5}
            grainAmount={0.03}
            grainScale={1.5}
            grainAnimated={true}
            contrast={1.1}
            gamma={1.1}
            saturation={1.2}
            zoom={1}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="inline-block text-xs font-bold uppercase text-teal-dark tracking-widest mb-4 bg-white/60 px-4 py-1.5 rounded-full shadow-sm">Body &amp; Mind</span>
            <h2 className="text-4xl sm:text-5xl text-neutral-900 font-bricolage font-semibold tracking-tight">
              Fitness &amp; Transformation
            </h2>
            <p className="mt-6 text-base text-neutral-600 leading-relaxed">
              A bespoke wellness academy where creativity interlocks with physical conditioning. We empower you to smash through mental barriers and achieve robust health through highly structured, professional guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "lucide:activity",
                title: "Group & Personal Training",
                desc: "Amplify your stamina, boost your agility, and cultivate strength using yoga arrays, dynamic pilates, aerobics, and deeply dedicated 1-on-1 personal training workflows.",
                items: ["Yoga & Pilates", "1-on-1 Training"],
                offset: false,
              },
              {
                icon: "lucide:apple",
                title: "Nutrition & Weight Management",
                desc: "Access rigorous expert consultations and customized macros tailored precisely to assist your body in remaining balanced, shedding fat, and accelerating regeneration.",
                items: ["Dietary Consultations", "Macro Tracking"],
                offset: true,
              },
              {
                icon: "lucide:book-open",
                title: "Wellness Education",
                desc: "Experience compounding knowledge via specialized workshops, live seminars, and continuous content engineered to rewire your mindset toward eternal health.",
                items: ["Expert Seminars", "Health Workshops"],
                offset: false,
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`border border-neutral-200 rounded-3xl relative bg-white/70 glass p-8 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 shadow-md ${card.offset ? " mt-0 md:mt-12" : ""}`}
              >
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-teal text-white shadow-lg mb-8 transform -rotate-3 hover:rotate-0 transition-transform">
                  <iconify-icon icon={card.icon} width="26"></iconify-icon>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 tracking-tight mb-4">{card.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-8">{card.desc}</p>
                <ul className="space-y-3 text-sm font-medium text-neutral-700">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center text-teal">
                        <iconify-icon icon="lucide:check" width="14"></iconify-icon>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials / Social Proof ── */}
      <section className="py-24 mx-auto max-w-7xl px-6 lg:px-10 animate-on-scroll">
         <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-neutral-900 font-bricolage font-semibold tracking-tight">Real Transformations</h2>
            <p className="mt-4 text-neutral-600">Hear from our clients who elevated their lifestyles.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200 hover:shadow-lg transition-shadow">
               <div className="flex text-teal mb-4 gap-1">
                  {[1,2,3,4,5].map(star => <iconify-icon key={star} icon="lucide:star" className="fill-current" width="18"></iconify-icon>)}
               </div>
               <p className="text-neutral-700 italic mb-6 leading-relaxed">"The AI skin analysis completely changed my approach to skincare. They mapped out a routine that actually resolved my long-term texture issues. The facility feels like a futuristic oasis!"</p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cream-dark rounded-full overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" alt="Client" className="w-full h-full object-cover" />
                  </div>
                  <div>
                     <h4 className="font-bold text-neutral-900 text-sm">Amira S.</h4>
                     <p className="text-xs text-neutral-500">Riyadh, KSA</p>
                  </div>
               </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200 hover:shadow-lg transition-shadow">
               <div className="flex text-teal mb-4 gap-1">
                  {[1,2,3,4,5].map(star => <iconify-icon key={star} icon="lucide:star" className="fill-current" width="18"></iconify-icon>)}
               </div>
               <p className="text-neutral-700 italic mb-6 leading-relaxed">"Combining deep tissue spa treatments with their expert nutritional guidance helped me prep for my wedding flawlessly. You can genuinely trust the quality of their imported products."</p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cream-dark rounded-full overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" alt="Client" className="w-full h-full object-cover" />
                  </div>
                  <div>
                     <h4 className="font-bold text-neutral-900 text-sm">Sara M.</h4>
                     <p className="text-xs text-neutral-500">Jeddah, KSA</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Why Choose LEGAFIT ── */}
      <section className="pb-16 sm:pb-24 mx-auto max-w-7xl px-6 lg:px-10 animate-on-scroll">
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-teal-dark mb-4 px-4 py-2 bg-teal/10 rounded-full w-max">
                <iconify-icon icon="lucide:award" width="16"></iconify-icon>
                Our Guarantee
              </div>
              <h3 className="text-5xl sm:text-6xl leading-[1.1] font-semibold text-neutral-900 tracking-tight font-bricolage">
                Why Choose <br />LEGAFIT?
              </h3>
            </div>
            <div>
              <p className="text-base sm:text-lg text-neutral-600 mb-8 max-w-lg leading-relaxed">
                Experience beauty natively designed for the intelligent era. We bring together unquestionable luxury, absolute expertise, and digital innovation to deliver personalized milestones for every single client in Saudi Arabia.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Certified Professionals", "Strict Safety Standards", "Top Satisfaction"].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-700 shadow-sm hover:border-teal/50 hover:text-teal transition-colors cursor-default">
                    <iconify-icon icon="lucide:check-circle" className="text-teal"></iconify-icon>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-[2rem] overflow-hidden border border-neutral-200 shadow-xl bg-white group">
          {[
            {
              icon: "lucide:crown",
              title: "Luxury & Hygiene",
              desc: "Immaculately modern, luxurious, and hygienic environments engineered intentionally for definitive comfort and peace of mind during your visits.",
              bg: "bg-white",
            },
            {
              icon: "lucide:box",
              title: "Under One Roof",
              desc: "An incredible compilation of beauty, deep wellness, and strategic fitness services seamlessly interlinked in a single flagship destination.",
              bg: "bg-cream/40",
            },
            {
              icon: "lucide:shield-alert",
              title: "Authenticity Safe",
              desc: "Every product imported and deployed is strictly verified, authenticated, globally certified, and fully compliant with Saudi Arabia's rigorous standards.",
              bg: "bg-white",
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`p-10 ${card.bg} ${i < 2 ? "border-b md:border-b-0 md:border-r border-neutral-200" : ""} flex flex-col justify-between hover:bg-teal/5 transition-colors duration-500`}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center mb-6 text-teal">
                  <iconify-icon icon={card.icon} width="28"></iconify-icon>
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-3">{card.title}</h4>
                <p className="text-sm text-neutral-600 leading-relaxed font-medium">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="z-10 animate-on-scroll relative mt-16 pb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="overflow-hidden rounded-[3rem] relative bg-neutral-900 text-white shadow-2xl">
            <div className="absolute inset-0 bg-teal/5 mix-blend-overlay"></div>
            <div className="px-8 sm:px-12 lg:px-16 py-16 lg:py-20 relative z-10">
              <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
                <div className="max-w-sm">
                  <a href="#" className="inline-flex items-center bg-white/10 p-3 rounded-2xl backdrop-blur-md">
                    <img src={logo} alt="LegaFit" className="h-10 brightness-0 invert" />
                  </a>
                  <p className="mt-6 text-sm text-neutral-400 leading-relaxed font-medium">
                    "To be the undeniable leading beauty and overall wellness brand in Saudi Arabia, offering deeply innovative, exceedingly luxurious, and strictly technology-enhanced solutions."
                  </p>

                  <div className="mt-10 space-y-4">
                    <a href="tel:+966503602359" className="flex items-center gap-4 text-sm font-semibold text-neutral-300 hover:text-white transition group">
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-teal group-hover:border-teal transition-all">
                        <iconify-icon icon="lucide:phone" width="16"></iconify-icon>
                      </div>
                      +966 50 360 2359
                    </a>
                    <a href="mailto:info@legacyglobalsa.com" className="flex items-center gap-4 text-sm font-semibold text-neutral-300 hover:text-white transition group">
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-teal group-hover:border-teal transition-all">
                        <iconify-icon icon="lucide:mail" width="16"></iconify-icon>
                      </div>
                      info@legacyglobalsa.com
                    </a>
                    <div className="flex items-start gap-4 text-sm font-semibold text-neutral-300 mt-4 group">
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-all">
                        <iconify-icon icon="lucide:map-pin" width="16"></iconify-icon>
                      </div>
                      <span className="mt-2.5 leading-tight max-w-[200px]">Near Al Mutlaq Hotel King Abdulaziz Rd, Kingdom of Saudi Arabia</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 w-full lg:w-auto">
                  <div>
                    <p className="text-sm font-bold text-white tracking-wider uppercase mb-6 opacity-70">Services</p>
                    <ul className="space-y-4 text-sm font-medium text-neutral-400">
                      <li><a href="#" className="hover:text-teal-light transition-colors">Hair &amp; Nails</a></li>
                      <li><a href="#" className="hover:text-teal-light transition-colors">Skincare &amp; Facials</a></li>
                      <li><a href="#" className="hover:text-teal-light transition-colors">Massage &amp; Spa</a></li>
                      <li><a href="#" className="hover:text-teal-light transition-colors">Fitness Academy</a></li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white tracking-wider uppercase mb-6 opacity-70">Company</p>
                    <ul className="space-y-4 text-sm font-medium text-neutral-400">
                      <li><a href="#" className="hover:text-teal-light transition-colors">About Us</a></li>
                      <li><a href="#" className="hover:text-teal-light transition-colors">Our Vision</a></li>
                      <li><a href="#" className="hover:text-teal-light transition-colors">Distribution</a></li>
                      <li><a href="#" className="hover:text-teal-light transition-colors">AI Technology</a></li>
                    </ul>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <p className="text-sm font-bold text-white tracking-wider uppercase mb-6 opacity-70">Links</p>
                    <ul className="space-y-4 text-sm font-medium text-neutral-400">
                      <li>
                        <a href="http://www.legacyglobalsa.com" target="_blank" rel="noreferrer" className="hover:text-teal-light transition-colors flex items-center gap-2">
                          Legacy Global <iconify-icon icon="lucide:arrow-up-right" width="14"></iconify-icon>
                        </a>
                      </li>
                      <li><a href="#" className="hover:text-teal-light transition-colors">Book Appointment</a></li>
                      <li><a href="#" className="hover:text-teal-light transition-colors">Find a Shop</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-sm font-medium text-neutral-500">&copy; {new Date().getFullYear()} LEGAFIT by Legacy Global. All rights reserved.</p>
                <div className="flex items-center gap-4">
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-teal hover:border-teal transition-all text-neutral-300 hover:text-white flex-shrink-0">
                    <iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-teal hover:border-teal transition-all text-neutral-300 hover:text-white flex-shrink-0">
                    <iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Reusable Component for numbered steps ── */
function ExperienceStep({ num, title, desc, checks, img, border }) {
  return (
    <div className={`p-8 sm:p-12 hover:bg-white/80 transition-colors duration-500 ${border ? "border-b border-neutral-200/80" : ""}`}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-1 hidden md:block">
          <div className="text-5xl lg:text-6xl text-teal/20 font-bricolage font-bold tracking-tighter">
            {num}
          </div>
        </div>
        <div className="md:col-span-6">
          <h3 className="text-2xl sm:text-3xl tracking-tight font-bold text-neutral-900 mb-5 flex items-center gap-4">
            <span className="md:hidden text-teal/40 font-bricolage text-3xl">{num}</span>
            {title}
          </h3>
          <p className="text-base text-neutral-600 mb-8 leading-relaxed max-w-xl">{desc}</p>
          <div className={`grid ${checks.length > 3 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2 sm:grid-cols-3"} gap-y-4 gap-x-6`}>
            {checks.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm font-semibold text-neutral-700">
                <iconify-icon icon="lucide:check-circle" width="18" className="text-teal"></iconify-icon>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden border-8 border-white shadow-xl transform hover:scale-[1.03] hover:-rotate-1 transition-all duration-500">
            <img src={img} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
