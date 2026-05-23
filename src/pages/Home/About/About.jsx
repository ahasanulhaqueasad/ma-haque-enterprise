import React from "react";

const About = () => {
  // আমাদের মূল মূল্যবোধ/নীতিসমূহ
  const values = [
    {
      title: "শতভাগ খাঁটি ওষুধ",
      description: "আমরা কোনো নকল বা নিম্নমানের বালাইনাশক রাখি না। সরাসরি অনুমোদিত ডিলারের আসল পণ্য সরবরাহ করি।",
      icon: "🛡️",
    },
    {
      title: "কৃষকের পাশে সবসময়",
      description: "শুধু ব্যবসা নয়, ফসলের সঠিক যত্ন ও বালাই দমনে কৃষকদের বিনামূল্যে সঠিক পরামর্শ দেওয়া আমাদের লক্ষ্য।",
      icon: "🤝",
    },
    {
      title: "আধুনিক কৃষি প্রযুক্তি",
      description: "নতুন যুগের কার্যকরী ও পরিবেশবান্ধব বালাইনাশক এবং আধুনিক চাষাবাদ পদ্ধতির সাথে কৃষকদের পরিচয় করানো।",
      icon: "🌾",
    },
  ];

  return (
    <div className="font-sans bg-base-100 min-h-screen">
      
      {/* ১. টপ হেডার সেকশন */}
      <section className="bg-gradient-to-r from-emerald-800 to-green-700 py-16 text-center text-white px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            এম এ হক এন্টারপ্রাইজ সম্পর্কে
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            দীর্ঘদিন ধরে আমরা কৃষকদের মুখে হাসি ফোটাতে এবং ফসলের সুরক্ষায় বিশ্বস্ততার সাথে মানসম্মত কীটনাশক ও কৃষি সেবা প্রদান করে আসছি।
          </p>
        </div>
      </section>

      {/* ২. আমাদের গল্প ও লক্ষ্য (Our Story & Mission) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* টেক্সট কন্টেন্ট */}
          <div className="space-y-6">
            <div className="badge badge-success badge-outline p-3 font-semibold rounded-md">
              🌱 আমাদের লক্ষ্য
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-base-content tracking-tight">
              নিরাপদ ফসল ও সমৃদ্ধ কৃষির অঙ্গীকার নিয়ে আমাদের পথচলা
            </h2>
            <p className="text-base-content/70 text-sm sm:text-base leading-relaxed">
              এম এ হক এন্টারপ্রাইজের যাত্রা শুরু হয়েছিল কৃষকদের সঠিক মূল্যে মানসম্মত এবং আসল কীটনাশক পৌঁছে দেওয়ার একটি দৃঢ় ইচ্ছা থেকে। আমরা বিশ্বাস করি, একটি দেশের মেরুদণ্ড হলো তার কৃষি, আর সুস্থ ফসলের ওপরই নির্ভর করে কৃষকের সার্থকতা।
            </p>
            <p className="text-base-content/70 text-sm sm:text-base leading-relaxed">
              ফসল রোপণ থেকে শুরু করে ঘরে তোলা পর্যন্ত পোকা-মাকড়, ছত্রাক ও আগাছার আক্রমণ থেকে ফসলকে রক্ষা করতে আমরা সঠিক সময়ে সঠিক বালাইনাশক ব্যবহারের পরামর্শ দিয়ে থাকি। সরকার অনুমোদিত স্বনামধন্য কোম্পানির ওষুধ বিক্রয়ের মাধ্যমে আমরা নিশ্চিত করি শতভাগ কার্যকারিতা।
            </p>
          </div>

          {/* ডানদিকের হাইলাইট বক্স */}
          <div className="bg-gradient-to-br from-green-500/5 to-emerald-500/10 p-8 rounded-3xl border border-emerald-600/10 space-y-6 lg:ml-6">
            <h3 className="text-xl font-bold text-emerald-800">এক নজরে আমাদের অর্জন</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-base-100 p-4 rounded-xl shadow-sm border border-base-content/5">
                <span className="text-3xl">👨‍🌾</span>
                <div>
                  <h5 className="font-bold text-lg">১০০০+ কৃষক</h5>
                  <p className="text-xs text-base-content/60">আমাদের সেবায় সন্তুষ্ট স্থানীয় খামারি ও চাষী</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-base-100 p-4 rounded-xl shadow-sm border border-base-content/5">
                <span className="text-3xl">💊</span>
                <div>
                  <h5 className="font-bold text-lg">১০০% অনুমোদিত ওষুধ</h5>
                  <p className="text-xs text-base-content/60">শুধুমাত্র ব্র্যান্ডেড ও রেজিস্টার্ড বালাইনাশক</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ৩. আমাদের মূল চালিকাশক্তি/মূল্যবোধ (Our Values) */}
      <section className="bg-base-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">আমাদের মূল নীতিসমূহ</h2>
            <div className="w-12 h-1 bg-emerald-600 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card bg-base-100 shadow-sm border border-base-content/5 rounded-2xl p-6 text-center space-y-3">
                <div className="text-4xl bg-base-200 w-14 h-14 flex items-center justify-center rounded-2xl mx-auto">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold text-base-content">{value.title}</h4>
                <p className="text-sm text-base-content/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ৪. আমাদের সাথে যোগাযোগের জন্য আহ্বান */}
      <section className="py-20 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">যেকোনো কৃষি সমস্যায় আমাদের কাছে চলে আসুন</h2>
        <p className="text-base-content/70 mt-3 text-sm sm:text-base max-w-lg mx-auto">
          আপনার ফসলের ক্ষেতে কী পোকা লেগেছে বা কোন ওষুধ দিতে হবে তা বুঝতে না পারলে, সরাসরি আমাদের দোকানে যোগাযোগ করুন।
        </p>
        <div className="mt-8">
          <a href="/contact" className="btn btn-success bg-gradient-to-r from-emerald-600 to-green-500 text-white border-none rounded-xl px-8 shadow-md">
            যোগাযোগের ঠিকানা দেখুন
          </a>
        </div>
      </section>

    </div>
  );
};

export default About;