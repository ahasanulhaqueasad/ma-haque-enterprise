import React from "react";

const Branding = () => {
  // টপ ব্র্যান্ডেড কীটনাশক ক্যাটাগরি ডাটা
  const pestCategories = [
    {
      title: "ধানের মাজরা ও পাতা মোড়ানো পোকা দমন",
      brand: "Syngenta / Bayer / Auto",
      description: "ধানের শিষ কাটা এবং মাজরা পোকা দমনে শতভাগ কার্যকরী ও দীর্ঘস্থায়ী সুরক্ষাসম্পন্ন দানাদার ও তরল কীটনাশক।",
      features: ["দ্রুত কার্যকারিতা", "সিস্টেমিক অ্যাকশন", "দীর্ঘদিন সুরক্ষা"],
      icon: "🌾",
    },
    {
      title: "সবজি ও ফলের শোষক পোকা (জাব) নাশক",
      brand: "BASF / Syngenta",
      description: "বেগুন, মরিচ, টমেটো বা শসার পাতা কোঁকড়ানো, সাদা মাছি, জাব পোকা ও থ্রিপস দমনের সেরা ওষুধ।",
      features: ["স্পর্শক ও পাকস্থলী গুণ", "সহজে ধুয়ে যায় না", "গাছের ক্ষতি করে না"],
      icon: "🐛",
    },
    {
      title: "লেদা ও চোষক পোকা নিয়ন্ত্রণ",
      brand: "Corteva / National",
      description: "ভুট্টা, আলু এবং বিভিন্ন ডাল জাতীয় ফসলের লেদা পোকা এবং ফল ছিদ্রকারী পোকা দ্রুত দমনের জন্য বিশ্বস্ত ফর্মুলা।",
      features: ["ডিম নষ্টকারী ক্ষমতা", "লার্ভা নিয়ন্ত্রণ", "উচ্চ কার্যকারিতা"],
      icon: "🧪",
    },
    {
      title: "আম ও ফলের মাছি পোকা দমন",
      brand: "Bayer / Local Approved",
      description: "আম, লিচু বা পেয়ারার মাছি পোকা এবং গুটি ঝরা রোধে অত্যন্ত কার্যকরী ও অনুমোদিত স্প্রে বালাইনাশক।",
      features: ["মৌমাছির জন্য নিরাপদ (নিয়ম মেনে)", "সহজ প্রয়োগ পদ্ধতি", "অধিক ফলন নিশ্চিত"],
      icon: "🥭",
    }
  ];

  return (
    <div className="font-sans bg-base-100 min-h-screen">
      
      {/* ১. টপ হেডার সেকশন */}
      <section className="bg-gradient-to-r from-emerald-800 to-green-700 py-16 text-center text-white px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="badge bg-white/20 text-white border-none py-3 px-4 rounded-full text-xs font-semibold backdrop-blur-md">
            🛡️ ১০০% অনুমোদিত ও অরিজিনাল ব্র্যান্ডস
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            উন্নত বালাইনাশক (কীটনাশক) ব্র্যান্ডিং
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            বিশ্ববিখ্যাত এবং সরকারি অনুমোদনপ্রাপ্ত ব্র্যান্ডের সঠিক কীটনাশক ব্যবহার করুন, ফসলের শতভাগ সুরক্ষা নিশ্চিত করুন।
          </p>
        </div>
      </section>

      {/* ২. প্রোডাক্ট ক্যাটাগরি গ্রিড */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">আমাদের সেরা কীটনাশক সলিউশনসমূহ</h2>
          <div className="w-12 h-1 bg-emerald-600 mx-auto mt-3 rounded-full"></div>
          <p className="text-base-content/70 mt-4 text-sm sm:text-base">
            আপনার ক্ষেতের পোকার ধরন অনুযায়ী সঠিক ব্র্যান্ডের ওষুধ বেছে নিন। আমরা কোনো ধরনের নকল পণ্য বিক্রি করি না।
          </p>
        </div>

        {/* কার্ড লেআউট */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pestCategories.map((item, index) => (
            <div 
              key={index} 
              className="card bg-base-100 border border-base-content/5 shadow-sm hover:shadow-xl hover:border-emerald-600/20 transition-all duration-300 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start group"
            >
              {/* বামে আইকন */}
              <div className="text-4xl bg-base-200 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform shrink-0">
                {item.icon}
              </div>

              {/* ডানে টেক্সট কন্টেন্ট */}
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                    {item.brand}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-base-content group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  {item.description}
                </p>
                
                {/* কী-ফিচার বা ট্যাগসমূহ */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.features.map((feature, idx) => (
                    <span key={idx} className="text-xs bg-base-200 text-base-content/80 px-2.5 py-1 rounded-lg border border-base-content/5">
                      ✓ {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ৩. ব্র্যান্ড ট্রাস্ট ও সচেতনতা ব্যানার (Premium Glassmorphism Effect) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-gradient-to-r from-emerald-900 to-green-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-md text-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=1000')] bg-cover bg-center opacity-10 mix-blend-overlay" />
          
          <div className="max-w-2xl mx-auto relative z-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">সঠিক মাত্রা ও সঠিক নিয়মে স্প্রে করুন</h2>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              কীটনাশক ব্যবহারের পূর্বে বোতল বা প্যাকেটের গায়ে লেখা নিয়মাবলী ভালো করে পড়ুন। যেকোনো কোম্পানির ওষুধের সঠিক ডোজ জানতে এবং স্প্রে করার সঠিক সময় বুঝতে আমাদের সাহায্য নিন।
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="btn btn-success bg-gradient-to-r from-emerald-500 to-green-500 text-white border-none rounded-xl px-8 font-bold shadow-md hover:from-emerald-400 hover:to-green-400"
              >
                ডোজ এবং নিয়ম জানুন
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Branding;