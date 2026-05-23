import React from "react";

const Contact = () => {
  // ফর্ম সাবমিট হ্যান্ডলার (প্রয়োজন অনুযায়ী পরে ডাইনামিক করতে পারবেন)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে! আমরা দ্রুত আপনার সাথে যোগাযোগ করব।");
  };

  return (
    <div className="font-sans bg-base-100 min-h-screen">
      
      {/* ১. টপ হেডার সেকশন */}
      <section className="bg-gradient-to-r from-emerald-800 to-green-700 py-16 text-center text-white px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            আমাদের সাথে যোগাযোগ করুন
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            ফসলের যেকোনো সমস্যা, ওষুধের দাম বা সঠিক পরামর্শের জন্য সরাসরি আমাদের দোকানে চলে আসতে পারেন অথবা নিচের নম্বরে কল করুন।
          </p>
        </div>
      </section>

      {/* ২. মেইন কন্টেন্ট সেকশন (যোগাযোগের তথ্য এবং ফর্ম) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* বাম দিক: যোগাযোগের তথ্য (Contact Info) */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-base-content tracking-tight">দোকানের ঠিকানা ও তথ্য</h2>
              <div className="w-12 h-1 bg-emerald-600 mt-2 rounded-full"></div>
            </div>

            <div className="space-y-6">
              {/* ঠিকানা */}
              <div className="flex gap-4 items-start bg-base-200/50 p-5 rounded-2xl border border-base-content/5">
                <span className="text-2xl bg-emerald-100 p-3 rounded-xl">📍</span>
                <div>
                  <h4 className="font-bold text-lg text-base-content">দোকানের অবস্থান</h4>
                  <p className="text-sm text-base-content/70 mt-1 leading-relaxed">
                    ছাতিয়ানতলা,<br />
                    সাতক্ষীরা, খুলনা, বাংলাদেশ।
                  </p>
                </div>
              </div>

              {/* মোবাইল নম্বর */}
              <div className="flex gap-4 items-start bg-base-200/50 p-5 rounded-2xl border border-base-content/5">
                <span className="text-2xl bg-emerald-100 p-3 rounded-xl">📞</span>
                <div>
                  <h4 className="font-bold text-lg text-base-content">মোবাইল নম্বর</h4>
                  <p className="text-sm text-base-content/70 mt-1">
                    <a href="tel:+৮৮০১xxxxxxxxx" className="hover:text-emerald-600 transition-colors">+৮৮ ০১৮৬১-০১৫৮৯৮</a><br />
                    <a href="tel:+৮৮০১xxxxxxxxx" className="hover:text-emerald-600 transition-colors">+৮৮ ০১৮৩৮-০৪১২০৪</a>
                  </p>
                  <span className="text-[11px] badge badge-success text-white mt-2">সকাল ৮টা - রাত ১০টা</span>
                </div>
              </div>

              {/* ইমেইল */}
              <div className="flex gap-4 items-start bg-base-200/50 p-5 rounded-2xl border border-base-content/5">
                <span className="text-2xl bg-emerald-100 p-3 rounded-xl">✉️</span>
                <div>
                  <h4 className="font-bold text-lg text-base-content">ইমেইল ঠিকানা</h4>
                  <p className="text-sm text-base-content/70 mt-1">
                    <a href="mailto:info@mahoqueenterprise.com" className="hover:text-emerald-600 transition-colors">info@mahoqueenterprise.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ডান দিক: পরামর্শ ও মেসেজ ফর্ম (Contact Form) */}
          <div className="bg-base-100 p-6 sm:p-8 rounded-3xl border border-base-content/5 shadow-sm">
            <h3 className="text-xl font-bold text-base-content mb-2">অনলাইনে ওষুধের পরামর্শ নিন</h3>
            <p className="text-xs text-base-content/60 mb-6">আপনার ফসলের সমস্যা লিখে পাঠান, আমাদের অভিজ্ঞ টিম আপনাকে সঠিক ওষুধের নাম জানিয়ে দেবে।</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text font-semibold text-xs">আপনার নাম</span>
                </label>
                <input 
                  type="text" 
                  placeholder="যেমন: মোঃ আমিনুল হক" 
                  className="input input-bordered focus:input-success w-full rounded-xl text-sm" 
                  required 
                />
              </div>

              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text font-semibold text-xs">মোবাইল নম্বর</span>
                </label>
                <input 
                  type="tel" 
                  placeholder="যেমন: ০১৭XXXXXXXX" 
                  className="input input-bordered focus:input-success w-full rounded-xl text-sm" 
                  required 
                />
              </div>

              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text font-semibold text-xs">ফসলের নাম ও সমস্যা (বিস্তারিত)</span>
                </label>
                <textarea 
                  rows="4"
                  placeholder="যেমন: ধানের পাতায় বাদামী দাগ পড়েছে অথবা পোকায় কেটে দিচ্ছে..." 
                  className="textarea textarea-bordered focus:textarea-success w-full rounded-xl text-sm leading-relaxed" 
                  required 
                ></textarea>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  className="btn btn-success bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white border-none w-full rounded-xl shadow-md transition-all font-bold"
                >
                  🚀 মেসেজ পাঠান
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;