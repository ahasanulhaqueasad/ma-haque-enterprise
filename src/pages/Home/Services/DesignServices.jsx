import React from "react";

const DesignServices = () => {
  // ছত্রাক ও আগাছানাশক প্রোডাক্ট ক্যাটাগরি ডাটা
  const designProducts = [
    {
      title: "ধান ও সবজির পচন (Blight) ও ব্লাইট দমন",
      category: "পচন ও ধসা রোগ নাশক",
      description: "ধানের পাতা ঝলসানো রোগ, ব্লাইট, আলুর নাবী ধসা এবং টমেটোর পচন রোধে অত্যন্ত কার্যকরী ও প্রতিরোধক ছত্রাকনাশক।",
      features: ["স্পর্শক ও অন্তর্বাহী গুণ", "দ্রুত পচন রোধ করে", "নতুন কুশি গজাতে সাহায্য করে"],
      icon: "🍂",
    },
    {
      title: "ফল ও সবজির পচা ও ডাইব্যাক নিয়ন্ত্রণ",
      category: "ফল ও মূল পচা নাশক",
      description: "আমের মুকুল ঝরা ও কালো দাগ, লিচুর পচন, এবং মরিচের ডাইব্যাক বা ডাল শুকিয়ে যাওয়া রোগ দমনের সেরা সলিউশন।",
      features: ["ছত্রাকের বংশবৃদ্ধি রোধ", "ফুলের গুণগত মান বাড়ায়", "দীর্ঘমেয়াদী সুরক্ষা"],
      icon: "🍓",
    },
    {
      title: "ধান ক্ষেতের ছাবড়া ও মোথা ঘাস দমন",
      category: "আগাছানাশক (Herbicide)",
      description: "ধানের চারা রোপণের পর ক্ষতিকারক আগাছা, মোথা ঘাস ও চ্যাপ্টা ঘাস চিরতরে পরিষ্কার করার আধুনিক ও নিরাপদ আগাছানাশক।",
      features: ["ফসলের কোনো ক্ষতি করে না", "ঘাসের শিকড়সহ ধ্বংস করে", "শ্রম ও খরচ বাঁচায়"],
      icon: "🌱",
    },
    {
      title: "সবজি ও অনাবাদী জমির আগাছা পরিষ্কার",
      category: "টোটাল আগাছানাশক",
      description: "বিভিন্ন সবজি ক্ষেতের আইল বা অনাবাদী জমির সব ধরনের শক্ত ও নরম ঘাস সম্পূর্ণরূপে পুড়িয়ে পরিষ্কার করার কার্যকরী ওষুধ।",
      features: ["দ্রুত অ্যাকশন ফর্মুলা", "মাটির উর্বরতা নষ্ট করে না", "দীর্ঘদিন ঘাস গজাতে দেয় না"],
      icon: "🌾",
    }
  ];

  return (
    <div className="font-sans bg-base-100 min-h-screen">
      
      {/* ১. টপ হেডার সেকশন */}
      <section className="bg-gradient-to-r from-emerald-800 to-green-700 py-16 text-center text-white px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="badge bg-white/20 text-white border-none py-3 px-4 rounded-full text-xs font-semibold backdrop-blur-md">
            🔬 উন্নত ফর্মুলেশন ও কার্যকরী সুরক্ষা
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            ছত্রাক ও আগাছানাশক সেবাসমূহ
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            ফসলের পচন রোধে সেরা ছত্রাকনাশক এবং ক্ষেতের ক্ষতিকর ঘাস ও আগাছা পরিষ্কারের সঠিক ও মানসম্মত ওষুধ।
          </p>
        </div>
      </section>

      {/* ২. প্রোডাক্ট ও সলিউশন গ্রিড */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">ফসলের রোগ ও আগাছা ব্যবস্থাপনা</h2>
          <div className="w-12 h-1 bg-emerald-600 mx-auto mt-3 rounded-full"></div>
          <p className="text-base-content/70 mt-4 text-sm sm:text-base">
            ছত্রাক ও আগাছা ফসলের ফলন প্রায় অর্ধেক কমিয়ে দিতে পারে। সঠিক সময়ে সঠিক ওষুধ ব্যবহার করে আপনার কায়িক শ্রম ও ফসল দুটোই বাঁচান।
          </p>
        </div>

        {/* কার্ড লেআউট */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {designProducts.map((item, index) => (
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
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-800 px-2 py-0.5 rounded">
                    {item.category}
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

      {/* ৩. পরামর্শ ও সচেতনতা ব্যানার */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-gradient-to-r from-emerald-900 to-green-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-md text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
          
          <div className="max-w-2xl mx-auto relative z-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">লক্ষণ দেখে সঠিক ছত্রাকনাশক নির্বাচন করুন</h2>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              ছত্রাকজনিত রোগ ছড়ানোর আগেই প্রতিরোধক ব্যবস্থা নেওয়া বুদ্ধিমানের কাজ। আপনার ফসলের আক্রান্ত পাতা বা অংশ সরাসরি আমাদের দোকানে নিয়ে এসে সঠিক ওষুধটি বেছে নিন।
            </p>
            <div className="pt-4">
              <a 
                href="/contact" 
                className="btn btn-success bg-gradient-to-r from-emerald-500 to-green-500 text-white border-none rounded-xl px-8 font-bold shadow-md hover:from-emerald-400 hover:to-green-400"
              >
                বিনামূল্যে পরামর্শ নিন
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DesignServices;