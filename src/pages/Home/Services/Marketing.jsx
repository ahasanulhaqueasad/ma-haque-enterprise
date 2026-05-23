import React from "react";

const Marketing = () => {
  // ভিটামিন, হরমোন ও অনুখাদ্য ক্যাটাগরি ডাটা
  const vitaminProducts = [
    {
      title: "ফসলের দ্রুত বৃদ্ধি ও হরমোন (PGR)",
      category: "গাছের বৃদ্ধি ও হরমোন",
      description: "গাছের কাণ্ড ও পাতার দ্রুত বৃদ্ধি নিশ্চিত করতে এবং প্রতিকূল আবহাওয়াতেও গাছকে সতেজ রাখতে কার্যকরী প্ল্যান্ট গ্রোথ রেগুলেটর।",
      features: ["কোষ বিভাজন দ্রুত করে", "গাছকে সতেজ ও সবল রাখে", "প্রাকৃতিক হরমোনের ভারসাম্য বজায় রাখে"],
      icon: "🧪",
    },
    {
      title: "অধিক ফুল ও ফল আনার অনুখাদ্য",
      category: "ফুল-ফল বর্ধক অনুখাদ্য",
      description: "ফসলের অসময়ে ফুল ও ফল ঝরে যাওয়া রোধ করতে এবং প্রতিটি কুশিতে অধিক পরিমাণ ফলন নিশ্চিত করার সুষম পুষ্টি উপাদান।",
      features: ["মুকুল ও ফুল ঝরা বন্ধ করে", "পরাগায়ন বৃদ্ধি করে", "ফলের আকার ও রঙ আকর্ষণীয় করে"],
      icon: "🌸",
    },
    {
      title: "দস্তা, বোরন ও চিলেটেড জিঙ্ক সলিউশন",
      category: "মাইক্রো-নিউট্রিয়েন্ট (অনুখাদ্য)",
      description: "মাটির পুষ্টির ঘাটতি পূরণ করে ধানের দানা পুষ্ট করতে এবং সবজির সুষম পুষ্টি নিশ্চিত করতে উচ্চমানের বোরন ও দস্তা।",
      features: ["পাতার হলুদ ভাব দূর করে", "চিটা ধানের পরিমাণ কমায়", "মাটির উর্বরতা বাড়ায়"],
      icon: "🌾",
    },
    {
      title: "গাছের রোগ প্রতিরোধ ক্ষমতা বর্ধক",
      category: "ইমিউনিটি বুস্টার",
      description: "গাছের নিজস্ব রোগ প্রতিরোধ ক্ষমতা বাড়িয়ে তীব্র শীত, খরা বা অতিরিক্ত বৃষ্টিতেও ফসলকে সুরক্ষিত রাখার বিশেষ ভিটামিন ফর্মুলা।",
      features: ["শিকড়ের বিস্তার বাড়ায়", "খাদ্য গ্রহণ ক্ষমতা বৃদ্ধি করে", "ফসলের সামগ্রিক গুণগত মান উন্নত করে"],
      icon: "💪",
    }
  ];

  return (
    <div className="font-sans bg-base-100 min-h-screen">
      
      {/* ১. টপ হেডার সেকশন */}
      <section className="bg-gradient-to-r from-emerald-800 to-green-700 py-16 text-center text-white px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="badge bg-white/20 text-white border-none py-3 px-4 rounded-full text-xs font-semibold backdrop-blur-md">
            🌟 সুষম পুষ্টি ও বাম্পার ফলনের নিশ্চয়তা
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            ভিটামিন ও অনুখাদ্য সেবাসমূহ
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            ফসলের সঠিক পুষ্টি ও দ্রুত বৃদ্ধির জন্য প্রিমিয়াম কোয়ালিটির প্ল্যান্ট ভিটামিন, হরমোন এবং প্রয়োজনীয় অনুখাদ্য।
          </p>
        </div>
      </section>

      {/* ২. প্রোডাক্ট ও পুষ্টি ব্যবস্থাপনা গ্রিড */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">ফসলের সুষম পুষ্টি ও ফলন বৃদ্ধি</h2>
          <div className="w-12 h-1 bg-emerald-600 mx-auto mt-3 rounded-full"></div>
          <p className="text-base-content/70 mt-4 text-sm sm:text-base">
            শুধু বালাইনাশকই নয়, ফসলের আশানুরূপ ফলন পেতে প্রয়োজন সঠিক অনুখাদ্য ও ভিটামিন। আপনার ফসলের স্টেজ অনুযায়ী সঠিক উপাদানটি বেছে নিন।
          </p>
        </div>

        {/* কার্ড লেআউট */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vitaminProducts.map((item, index) => (
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
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
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

      {/* ৩. পরামর্শ ব্যানার */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-gradient-to-r from-emerald-900 to-green-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-md text-center">
          <div className="max-w-2xl mx-auto relative z-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">কখন কতটুকু ভিটামিন দেবেন, সঠিক নিয়ম জানেন তো?</h2>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              অতিরিক্ত বা ভুল সময়ে হরমোন ও ভিটামিন প্রয়োগ করলে হিতে বিপরীত হতে পারে। আপনার ফসলের বর্তমান অবস্থা জানিয়ে সঠিক ডোজ ও স্প্রে করার সঠিক সময় জেনে নিন।
            </p>
            <div className="pt-4">
              <a 
                href="/contact" 
                className="btn btn-success bg-gradient-to-r from-emerald-500 to-green-500 text-white border-none rounded-xl px-8 font-bold shadow-md hover:from-emerald-400 hover:to-green-400"
              >
                সঠিক ডোজ জেনে নিন
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Marketing;