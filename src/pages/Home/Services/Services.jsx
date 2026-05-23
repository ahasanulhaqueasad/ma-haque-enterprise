import React from "react";

const Services = () => {
  // আমাদের মূল ৪টি কৃষি ও বালাইনাশক সেবা
  const servicesList = [
    {
      title: "উন্নত বালাইনাশক (কীটনাশক)",
      category: "Crop Protection",
      description: "ফসলের ক্ষতিকারক পোকা-মাকড় ও রোগ-বালাই দমনের জন্য শীর্ষস্থানীয় ব্র্যান্ডের শতভাগ কার্যকরী ও আসল কীটনাশক।",
      icon: "🐛",
      path: "/services/branding",
      badgeColor: "bg-emerald-100 text-emerald-800",
    },
    {
      title: "ছত্রাক ও আগাছানাশক",
      category: "Disease & Weed Control",
      description: "ধান, সবজি ও ফলের পচন (Blight) রোধে সেরা ছত্রাকনাশক এবং ক্ষেতের ক্ষতিকর ঘাস পরিষ্কারের আধুনিক আগাছানাশক।",
      icon: "🌱",
      path: "/services/design",
      badgeColor: "bg-green-100 text-green-800",
    },
    {
      title: "ভিটামিন ও অনুখাদ্য (হরমোন)",
      category: "Plant Nutrition",
      description: "ফসলের দ্রুত বৃদ্ধি, অধিক ফুল-ফল আনা, দানা পুষ্ট করা এবং গাছের রোগ প্রতিরোধ ক্ষমতা বাড়ানোর সুষম পুষ্টি উপাদান।",
      icon: "🧪",
      path: "/services/marketing",
      badgeColor: "bg-teal-100 text-teal-800",
    },
    {
      title: "কৃষি পরামর্শ ও প্রচারণা",
      category: "Agri Consultation",
      description: "ফসলের রোগ দেখে সঠিক ওষুধ নির্বাচন, ব্যবহারের সঠিক নিয়ম এবং আমাদের চলমান কৃষি ক্যাম্পেইনের যাবতীয় তথ্য।",
      icon: "👨‍🌾",
      path: "/services/advertisement",
      badgeColor: "bg-lime-100 text-lime-900",
    },
  ];

  return (
    <div className="font-sans bg-base-100 min-h-screen">
      
      {/* ১. টপ হেডার সেকশন */}
      <section className="bg-gradient-to-r from-emerald-800 to-green-700 py-16 text-center text-white px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            আমাদের পণ্য ও সেবাসমূহ
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            এম এ হক এন্টারপ্রাইজ কৃষকদের চাহিদা অনুযায়ী সাশ্রয়ী মূল্যে মানসম্মত কৃষি উপকরণ সরবরাহ এবং সঠিক পরামর্শ দিতে সর্বদা প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>
      </section>

      {/* ২. সেবাসমূহের মেইন গ্রিড সেকশন */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">আধুনিক চাষাবাদ ও ফসল সুরক্ষা সেবা</h2>
          <div className="w-12 h-1 bg-emerald-600 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* ৪টি মেইন সার্ভিস কার্ড */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="card bg-base-100 border border-base-content/5 shadow-sm hover:shadow-xl hover:border-emerald-600/20 transition-all duration-300 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start group"
            >
              {/* সার্ভিস আইকন বক্স */}
              <div className="text-4xl bg-base-200 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl group-hover:scale-110 group-hover:bg-emerald-50 transition-all shrink-0">
                {service.icon}
              </div>

              {/* সার্ভিস কন্টেন্ট */}
              <div className="space-y-3 flex-1 flex flex-col justify-between h-full">
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${service.badgeColor}`}>
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-base-content mt-2 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-base-content/70 leading-relaxed mt-1">
                    {service.description}
                  </p>
                </div>
                
                {/* বিস্তারিত বাটন লিংক */}
                <div className="pt-4">
                  <a 
                    href={service.path} 
                    className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    বিস্তারিত এবং পণ্যসমূহ <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ৩. ফ্রি প্রেসক্রিপশন ও কৃষি তথ্য সেকশন ব্যানার */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
            <div className="lg:col-span-2 space-y-3">
              <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                ফ্রি স্পেশাল সার্ভিস
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                আপনার ফসলের জন্য সঠিক "ডিজিটাল প্রেসক্রিপশন" নিন
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                ফসলের আক্রান্ত অংশের ছবি তুলে বা সমস্যা বিস্তারিত লিখে আমাদের জানান। আমাদের অভিজ্ঞ কৃষি রিপ্রেজেন্টেটিভরা কোনো ফি ছাড়াই আপনাকে সঠিক বালাইনাশক ও ডোজ নির্ধারণ করে দেবেন।
              </p>
            </div>
            
            <div className="lg:text-right">
              <a 
                href="/contact" 
                className="btn btn-success bg-gradient-to-r from-emerald-500 to-green-500 text-white border-none rounded-xl px-8 font-bold shadow-md hover:from-emerald-400 hover:to-green-400 w-full lg:w-auto"
              >
                💬 ফ্রি পরামর্শ শুরু করুন
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;