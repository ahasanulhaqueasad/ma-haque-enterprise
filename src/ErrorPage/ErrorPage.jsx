import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 text-center p-6 font-sans">
      <div className="max-w-md w-full space-y-6">
        {/* সুন্দর 404 এরর ইমেজ */}
        <div className="w-full flex justify-center">
          <img
            src="https://i.ibb.co.cn/zV77L16/404-error-template.png" // আপনি চাইলে আপনার নিজের যেকোনো সুন্দর ৪MD৪ ইমেজের লিংক এখানে দিতে পারেন
            alt="Page Not Found"
            className="w-72 h-auto object-contain animate-pulse"
          />
        </div>

        {/* টেক্সট মেসেজ */}
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold text-base-content tracking-tight">
            পেজটি খুঁজে পাওয়া যায়নি!
          </h2>
          <p className="text-base-content/70 text-sm max-w-sm mx-auto">
            দুঃখিত, আপনি যে লিংকটি খুঁজছেন তা হয়তো পরিবর্তন করা হয়েছে অথবা
            অস্তিত্বই নেই। দয়া করে সঠিক ইউআরএল চেক করুন।
          </p>
        </div>

        {/* অ্যাকশন বাটন */}
        <div>
          <Link
            to="/"
            className="btn btn-primary bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-none px-8 rounded-xl shadow-md hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-200"
          >
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
