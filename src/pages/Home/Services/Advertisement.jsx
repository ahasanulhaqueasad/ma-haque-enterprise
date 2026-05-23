import React from "react";

const Advertisement = () => {
  // বিশেষ অফার ও ক্যাম্পেইন ডাটা
  const campaigns = [
    {
      title: "মৌসুমী ফসলে বিশেষ ছাড়!",
      tag: "চলতি অফার",
      badgeColor: "badge-error",
      description: "চলতি মৌসুমে ধান ও সবজি চাষীদের সুবিধার্থে নির্দিষ্ট ব্যান্ডের বালাইনাশক ও ভিটামিনের ওপর আকর্ষণীয় মূল্যছাড় চলছে।",
      icon: "🎁",
      validity: "সীমিত সময়ের জন্য"
    },
    {
      title: "ফ্রি মাঠ দিবস ও উঠান বৈঠক",
      tag: "সচেতনতা প্রোগ্রাম",
      badgeColor: "badge-info text-white",
      description: "স্থানীয় উপ-সহকারী কৃষি কর্মকর্তাদের উপস্থিতিতে আমরা নিয়মিত ফসলের রোগবালাই দমনে সচেতনতামূলক আলোচনা সভার আয়োজন করে থাকি।",
      icon: "📢",
      validity: "পরবর্তী সেশন শীঘ্রই আসছে"
    },
    {
      title: "অগ্রিম বুকিংয়ে নিশ্চিত উপহার",
      tag: "পাইকারি ও খুচরা",
      badgeColor: "badge-success text-white",
      description: "যেকোনো বড় প্রোজেক্ট বা ঘেরের জন্য অগ্রিম সার ও কীটনাশক অর্ডার করলে পাচ্ছেন নিশ্চিত ক্যাশব্যাক অথবা স্প্রে মেশিন উপহার!",
      icon: "🚜",
      validity: "শর্ত প্রযোজ্য"
    }
  ];

  return (
    <div className="font-sans bg-base-100 min-h-screen">
      
      {/* ১. টপ হেডার সেকশন */}
      <section className="bg-gradient-to-r from-emerald-800 to-green-700 py-16 text-center text-white px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            প্রচারণা ও বিশেষ অফারসমূহ
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            কৃষকদের সাশ্রয়ী মূল্যে সঠিক পণ্য পৌঁছে দিতে এবং আধুনিক চাষাবাদ পদ্ধতিতে সচেতন করতে আমাদের বিশেষ উদ্যোগ ও অফারসমূহ জেনে নিন।
          </p>
        </div>
      </section>

      {/* ২. অফার ও ক্যাম্পেইন কার্ড গ্রিড */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">আমাদের চলমান ইভেন্ট ও সুবিধা</h2>
          <div className="w-12 h-1 bg-emerald-600 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <div 
              key={index} 
              className="card bg-base-100 border border-base-content/5 shadow-sm hover:shadow-xl hover:border-emerald-500/20 transition-all duration-300 rounded-3xl overflow-hidden group"
            >
              <div className="card-body p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  {/* আইকন ও ট্যাগ */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-4xl bg-base-200 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
                      {campaign.icon}
                    </div>
                    <span className={`badge ${campaign.badgeColor} p-3 text-xs font-bold rounded-lg`}>
                      {campaign.tag}
                    </span>
                  </div>

                  {/* টাইটেল ও বর্ণনা */}
                  <h3 className="card-title text-xl font-bold mb-3 group-hover:text-emerald-600 transition-colors">
                    {campaign.title}
                  </h3>
                  <p className="text-sm text-base-content/70 leading-relaxed">
                    {campaign.description}
                  </p>
                </div>

                {/* ফুটার/মেয়াদ */}
                <div className="mt-6 pt-4 border-t border-base-content/5 flex justify-between items-center text-xs">
                  <span className="text-base-content/50">⏰ মেয়াদ:</span>
                  <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                    {campaign.validity}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ৩. নতুন প্রোডাক্ট বা লিফলেট সেকশন (SaaS স্টাইল ব্যানার) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-lg">
          {/* গ্লাস মরফিজম ব্যাকগ্রাউন্ড ইফেক্ট */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              নতুন লিফলেট ও নির্দেশিকা
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              ফ্রি ডাউনলোড করুন: "চলতি মৌসুমের বালাইনাশক নির্দেশিকা"
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              কোন ফসলে কখন এবং কী পরিমাণে কীটনাশক স্প্রে করতে হবে, তার একটি সম্পূর্ণ গাইডলাইন সংবলিত চার্ট আমরা দোকানে বিনামূল্যে দিচ্ছি। আপনি চাইলে সরাসরি যোগাযোগ করে আপনার কপিটি সংগ্রহ করতে পারেন।
            </p>
            <div className="pt-4">
              <a 
                href="/contact" 
                className="btn btn-success bg-gradient-to-r from-emerald-500 to-green-500 text-white border-none rounded-xl px-6 font-bold shadow-md shadow-emerald-950/50 hover:from-emerald-400 hover:to-green-400"
              >
                যোগাযোগ করে সংগ্রহ করুন
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Advertisement;