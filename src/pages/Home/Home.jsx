import React from "react";
import bannerImg from "../../assets/images/banner/banner 1.jpg";

const Home = () => {
  // আপনার কীটনাশক দোকানের মূল ৪টি সেবা/পণ্য ক্যাটাগরি
  const services = [
    {
      title: "উন্নত বালাইনাশক (কীটনাশক)",
      description:
        "ফসলের ক্ষতিকারক পোকা-মাকড় ও রোগ-বালাই দমনের জন্য সঠিক ও কার্যকরী কীটনাশক।",
      icon: "🐛",
      path: "/services/branding",
    },
    {
      title: "ছত্রাক ও আগাছানাশক",
      description:
        "ধান, সবজি ও ফলের পচন রোধে সেরা ছত্রাকনাশক এবং ক্ষেতের আগাছা পরিষ্কারের সঠিক ওষুধ।",
      icon: "🌱",
      path: "/services/design",
    },
    {
      title: "ভিটামিন ও অনুখাদ্য (হরমোন)",
      description:
        "ফসলের দ্রুত বৃদ্ধি, অধিক ফুল-ফল আনা এবং গাছের রোগ প্রতিরোধ ক্ষমতা বাড়ানোর সুষম ভিটামিন।",
      icon: "🧪",
      path: "/services/marketing",
    },
    {
      title: "কৃষি পরামর্শ ও সেবা",
      description:
        "ফসলের রোগ দেখে সঠিক ওষুধ নির্বাচন এবং কখন কতটুকু স্প্রে করবেন—তার সঠিক পরামর্শ।",
      icon: "👨‍🌾",
      path: "/services/advertisement",
    },
  ];

  return (
    <div className="font-sans overflow-hidden">
      {/* ১. হিরো সেকশন (bg-fixed ক্লাস যুক্ত করা হয়েছে) */}
      <section
        className="hero min-h-[70vh] relative overflow-hidden bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        {/* ডার্ক এবং গ্রিন গ্রেডিয়েন্ট ওভারলে */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-emerald-950/40 pointer-events-none" />

        <div className="hero-content text-center max-w-4xl px-4 mx-auto relative z-10 text-white">
          <div>
            <div className="badge badge-success badge-outline gap-2 p-4 font-semibold mb-4 rounded-full bg-success/10 text-emerald-400 border-white">
              🌾 ফসলের সুরক্ষায় বিশ্বস্ত প্রতিষ্ঠান
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              সঠিক বালাইনাশক, <br />
              <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                ভরপুর ফসল!
              </span>
            </h1>
            <p className="py-6 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              আপনার ক্ষেতের ধান, সবজি কিংবা ফলের বাগানকে পোকা-মাকড় ও রোগ-বালাই
              থেকে মুক্ত রাখতে আমরা দিচ্ছি শতভাগ খাঁটি ও কার্যকরী কীটনাশক ও কৃষি
              পরামর্শ।
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="btn btn-success bg-gradient-to-r from-emerald-600 to-green-500 text-white border-none rounded-xl px-6 shadow-lg shadow-green-900/30 hover:from-emerald-500 hover:to-green-400 hover:-translate-y-0.5 transition-all"
              >
                ওষুধের পরামর্শ নিন
              </a>
              <a
                href="#products"
                className="btn btn-outline border-white/40 text-white hover:bg-white hover:text-black rounded-xl px-6 transition-all"
              >
                আমাদের পণ্যসমূহ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ২. পণ্য ও সেবাসমূহ সেকশন */}
      <section
        id="products"
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            আমাদের পণ্য ও সেবাসমূহ
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-base-content/70 mt-4 text-sm sm:text-base">
            কৃষকদের চাহিদামত নামী-দামী ব্র্যান্ডের অনুমোদিত এবং মানসম্মত
            বালাইনাশক আমরা সাশ্রয়ী মূল্যে বিক্রি করে থাকি।
          </p>
        </div>

        {/* পণ্য গ্রিড */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card bg-base-100 border border-base-content/5 shadow-sm hover:shadow-md hover:border-emerald-600/20 transition-all duration-300 rounded-2xl group"
            >
              <div className="card-body p-6 flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-4 bg-base-200 w-12 h-12 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="card-title text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-base-content/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="card-actions justify-end mt-6">
                  <a
                    href={service.path}
                    className="text-sm font-semibold text-emerald-600 flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    বিস্তারিত দেখুন <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ৩. কেন আমাদের দোকান থেকে কিনবেন? */}
      <section className="bg-base-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold">কেন আমরাই সেরা?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <div className="text-3xl mb-2">✅</div>
              <h4 className="text-lg font-bold mb-1">১০০% আসল পণ্য</h4>
              <p className="text-sm text-base-content/70">
                সরকার অনুমোদিত এবং নামী কোম্পানির অরিজিনাল ওষুধ ও কীটনাশক।
              </p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">💰</div>
              <h4 className="text-lg font-bold mb-1">ন্যায্য মূল্য</h4>
              <p className="text-sm text-base-content/70">
                খুচরা ও পাইকারি বাজারে সবচেয়ে সাশ্রয়ী ও সঠিক দামে বিক্রয়।
              </p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">❤️</div>
              <h4 className="text-lg font-bold mb-1">অভিজ্ঞ পরামর্শ</h4>
              <p className="text-sm text-base-content/70">
                ফসলের সমস্যা শুনে বিনামূল্যে সঠিক ওষুধ ও ব্যবহারের নিয়ম বাতলে
                দেওয়া।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ৪. ফাইনাল কল-টু-অ্যাকশন */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="hero min-h-[50vh] sm:min-h-[60vh] rounded-3xl overflow-hidden relative bg-cover bg-center bg-fixed shadow-xl"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          {/* ইমেজের ওপর কালো ডার্ক ওভারলে (লেখা পরিষ্কার দেখার জন্য) */}
          <div className="hero-overlay bg-black/60 backdrop-blur-[2px]"></div>

          {/* মেইন টেক্সট ও বাটন কন্টেন্ট বক্স */}
          <div className="hero-content text-center text-neutral-content relative z-10 px-4">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                ফসলে কোনো রোগ বা পোকা লেগেছে?
              </h2>

              <p className="text-gray-200 max-w-xl mx-auto text-base sm:text-lg leading-relaxed font-medium">
                দেরি না করে সরাসরি আমাদের দোকানে চলে আসুন অথবা ফোনে আমাদের সাথে
                যোগাযোগ করে আপনার ফসলের সুরক্ষার সঠিক সমাধান জেনে নিন।
              </p>

              <div className="pt-2">
                <a
                  href="/contact"
                  className="btn btn-success bg-gradient-to-r from-emerald-500 to-green-500 text-white border-none rounded-xl px-10 py-3 font-bold shadow-lg shadow-green-900/30 hover:from-emerald-400 hover:to-green-400 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  📞 আমাদের সাথে যোগাযোগ করুন
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
