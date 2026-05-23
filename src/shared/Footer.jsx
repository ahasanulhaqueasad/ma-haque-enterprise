import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-base-200 to-base-300 text-base-content overflow-hidden font-sans">
      {/* উপরের আকর্ষণীয় কালারফুল বর্ডার লাইন */}
      <div className="h-[4px] w-full bg-gradient-to-r from-primary via-secondary to-accent"></div>

      <div className="footer p-10 max-w-7xl mx-auto">
        {/* কোম্পানির পরিচিতি সেকশন */}
        <aside className="flex flex-col gap-3">
          <h1 className="font-extrabold tracking-tight">
            <span className="text-4xl bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent drop-shadow-sm">
              এম এ হক
            </span> 
            <br />
            <span className="text-2xl text-accent font-semibold tracking-wide">
              এন্টারপ্রাইজ
            </span>
          </h1>
          <div className="space-y-1 text-base-content/80">
            <p className="font-medium text-base">এম এ হক এন্টারপ্রাইজ লিমিটেড</p>
            <p className="text-sm opacity-80">২০২০ সাল থেকে বিশ্বস্ততার সাথে সেবা দিয়ে আসছি</p>
            <div className="inline-block mt-2 text-xs font-medium px-2 py-1 bg-base-100 rounded-md border border-base-content/10 opacity-70">
              © {currentYear} — সর্বস্বত্ব সংরক্ষিত
            </div>
          </div>
        </aside>

        {/* আমাদের সেবাসমূহ */}
        <nav className="space-y-1">
          <h6 className="footer-title text-primary font-bold tracking-wider opacity-100 text-base">সেবাসমূহ</h6>
          <a href="/services/branding" className="link link-hover hover:text-primary transition-all duration-200 hover:translate-x-1">ব্র্যান্ডিং</a>
          <a href="/services/design" className="link link-hover hover:text-primary transition-all duration-200 hover:translate-x-1">ডিজাইন</a>
          <a href="/services/marketing" className="link link-hover hover:text-primary transition-all duration-200 hover:translate-x-1">মার্কেটিং</a>
          <a href="/services/advertisement" className="link link-hover hover:text-primary transition-all duration-200 hover:translate-x-1">বিজ্ঞাপন</a>
        </nav>

        {/* কোম্পানি পরিচিতি */}
        <nav className="space-y-1">
          <h6 className="footer-title text-secondary font-bold tracking-wider opacity-100 text-base">কোম্পানি</h6>
          <a href="/about" className="link link-hover hover:text-secondary transition-all duration-200 hover:translate-x-1">আমাদের সম্পর্কে</a>
          <a href="/contact" className="link link-hover hover:text-secondary transition-all duration-200 hover:translate-x-1">যোগাযোগ</a>
          <a href="/jobs" className="link link-hover hover:text-secondary transition-all duration-200 hover:translate-x-1">ক্যারিয়ার</a>
          <a href="/press" className="link link-hover hover:text-secondary transition-all duration-200 hover:translate-x-1">প্রেস কিট</a>
        </nav>

        {/* আইনি নীতিমালা */}
        <nav className="space-y-1">
          <h6 className="footer-title text-accent font-bold tracking-wider opacity-100 text-base">আইনি তথ্য</h6>
          <a href="/legal/terms" className="link link-hover hover:text-accent transition-all duration-200 hover:translate-x-1">ব্যবহারের শর্তাবলী</a>
          <a href="/legal/privacy" className="link link-hover hover:text-accent transition-all duration-200 hover:translate-x-1">গোপনীয়তা নীতি</a>
          <a href="/legal/cookies" className="link link-hover hover:text-accent transition-all duration-200 hover:translate-x-1">কুকি নীতি</a>
        </nav>

        {/* সোশ্যাল লিংক সেকশন */}
        <nav className="space-y-2">
          <h6 className="footer-title text-warning font-bold tracking-wider opacity-100 text-base">যুক্ত থাকুন</h6>
          <div className="flex gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="p-2.5 bg-base-100 rounded-xl shadow-sm hover:shadow-primary/20 border border-base-content/5 hover:border-primary/30 text-base-content/70 hover:text-primary hover:-translate-y-1 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-2.5 bg-base-100 rounded-xl shadow-sm hover:shadow-error/20 border border-base-content/5 hover:border-error/30 text-base-content/70 hover:text-error hover:-translate-y-1 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/xl" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2.5 bg-base-100 rounded-xl shadow-sm hover:shadow-info/20 border border-base-content/5 hover:border-info/30 text-base-content/70 hover:text-info hover:-translate-y-1 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;