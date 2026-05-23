import React, { useState } from "react";

const Medicine = () => {
  // ক্যাটাগরি স্টেট (সব ওষুধ একসাথে দেখতে বা ফিল্টার করতে)
  const [activeTab, setActiveTab] = useState("All");

  // ৪টি সেরা কোম্পানির ৫টি করে মোট ২০টি ওষুধের কমপ্লিট ডাটাবেজ
  const medicineData = [
    // ==========================================
    // ১. SYNGENTA (সিনজেন্টা) - ৫টি প্রোডাক্ট
    // ==========================================
    {
      id: 1,
      name: "Virtako 40WG (ভার্টাকো)",
      group: "Chlorantraniliprole + Thiamethoxam",
      company: "Syngenta (সিনজেন্টা)",
      category: "Insecticide",
      categoryBangla: "কীটনাশক",
      purpose: "ধানের মাজরা পোকা ও পাতা মোড়ানো পোকা দমন।",
      useCase: "ধান রোপণের ২৫-৩০ দিনের মধ্যে প্রথমবার এবং থোড় আসার মুখে দ্বিতীয়বার একর প্রতি ডোজ মেনে প্রয়োগ করতে হয়।",
      details: "এটি একটি চমৎকার সিস্টেমিক বা অন্তর্বাহী কীটনাশক। এটি গাছের ভেতরে প্রবেশ করে দীর্ঘস্থায়ী সুরক্ষা দেয়, ফলে পোকা গাছের পাতা বা কান্ড কামড়ালেই মারা যায়।"
    },
    {
      id: 2,
      name: "Amistar Top 325SC (অ্যামিস্টার টপ)",
      group: "Azoxystrobin + Difenoconazole",
      company: "Syngenta (সিনজেন্টা)",
      category: "Fungicide",
      categoryBangla: "ছত্রাকনাশক",
      purpose: "ধানের ব্লাইট, লিফ স্পট এবং আমের মুকুল ঝরা ও কালো দাগ রোগ দমন।",
      useCase: "ধানের শীষ বের হওয়ার মুখে এবং আমের মুকুল আসার পর ও গুটি বাঁধার সময় স্প্রে করতে হয়।",
      details: "এটি ডাবল অ্যাকশনসম্পন্ন প্রিমিয়াম ছত্রাকনাশক। এটি ছত্রাক দমনের পাশাপাশি গাছের 'গ্রীনিং ইফেক্ট' বাড়ায়, ফলে পাতা দীর্ঘক্ষণ সবুজ থাকে এবং ফলন বৃদ্ধি পায়।"
    },
    {
      id: 3,
      name: "Cruiser 250FS (ক্রুজার)",
      group: "Thiamethoxam",
      company: "Syngenta (সিনজেন্টা)",
      category: "Insecticide",
      categoryBangla: "কীটনাশক (বীজ শোধন)",
      purpose: "তুলা, সবজি ও ধানের বীজ শোধন এবং প্রাথমিক চোষক পোকা নিয়ন্ত্রণ।",
      useCase: "বীজ বপন বা চারা রোপণের আগে এই তরল ওষুধ দিয়ে বীজ ভালো করে মাখিয়ে বা শোধন করে নিতে হয়।",
      details: "এটি একটি বীজ শোধনকারী বালাইনাশক। চারা গজানোর পর প্রথম কয়েক সপ্তাহ এটি গাছকে জাব পোকা, থ্রিপস এবং মাছি পোকার আক্রমণ থেকে সম্পূর্ণ মুক্ত রাখে।"
    },
    {
      id: 4,
      name: "Score 250EC (স্কোর)",
      group: "Difenoconazole",
      company: "Syngenta (সিনজেন্টা)",
      category: "Fungicide",
      categoryBangla: "ছত্রাকনাশক",
      purpose: "ধানের কাণ্ড পচা, সবজির ডাইব্যাক এবং ফালের স্ক্যাব রোগ দমন।",
      useCase: "ফসলে পচন বা দাগের লক্ষণ দেখামাত্র প্রতি লিটার পানিতে ০.৫ মিলি মিশিয়ে ৭-১০ দিন পর পর ২ বার স্প্রে করতে হবে।",
      details: "এটি একটি অন্তর্বাহী ছত্রাকনাশক যা দ্রুত পাতার ভেতরে ছড়িয়ে পড়ে। এটি ছত্রাকের কোষ প্রাচীর তৈরি হতে বাধা দেয় এবং আক্রান্ত গাছকে দ্রুত সুস্থ করে তোলে।"
    },
    {
      id: 5,
      name: "Sofit 300EC (সোফিট)",
      group: "Pretilachlor",
      company: "Syngenta (সিনজেন্টা)",
      category: "Herbicide",
      categoryBangla: "আগাছানাশক",
      purpose: "ধান ক্ষেতের বিভিন্ন প্রকার ঘাস ও মোথা জাতীয় আগাছা দমন।",
      useCase: "ধানের চারা রোপণের ৩ থেকে ৫ দিনের মধ্যে ক্ষেতে হালকা পানি থাকা অবস্থায় সমানভাবে ছিটিয়ে দিতে হবে।",
      details: "এটি একটি প্রাক-আগাছানাশক (Pre-emergence)। এটি আগাছার বীজ গজাতেই দেয় না, অথচ ধানের চারার কোনো ক্ষতি করে না। এতে শ্রমিকের খরচ অনেক বেঁচে যায়।"
    },

    // ==========================================
    // ২. BAYER CROPSCIENCE (বায়ার) - ৫টি প্রোডাক্ট
    // ==========================================
    {
      id: 6,
      name: "Nativo 75WG (নে티브ো)",
      group: "Tebuconazole + Trifloxystrobin",
      company: "Bayer CropScience (বায়ার)",
      category: "Fungicide",
      categoryBangla: "ছত্রাকনাশক",
      purpose: "ধানের গলা পচা (Neck Blight), পাতার দাগ রোগ ও সবজির পচন রোধ।",
      useCase: "ধানের গর্ভকাল বা থোড় ফেটে শীষ বের হওয়ার সময় একবার এবং শীষ ওল্টানোর সময় দ্বিতীয়বার স্প্রে করা উত্তম।",
      details: "বায়ার কোম্পানির অত্যন্ত বিশ্বস্ত এই ওষুধটি ধানের দানা চিটামুক্ত ও উজ্জ্বল সোনালী করতে জাদুর মতো কাজ করে। এটি ফলন ও মান দুটোই বৃদ্ধি করে।"
    },
    {
      id: 7,
      name: "Belt Expert 480SC (বেল্ট এক্সপার্ট)",
      group: "Flubendiamide + Thiacloprid",
      company: "Bayer CropScience (বায়ার)",
      category: "Insecticide",
      categoryBangla: "কীটনাশক",
      purpose: "বেগুন ও টমেটোর ডগা ও ফল ছিদ্রকারী পোকা এবং লেদা পোকা দমন।",
      useCase: "সবজি ক্ষেতে ডগা বা ফল ছিদ্রকারী পোকার আক্রমণ দেখা দিলে প্রতি ১০ লিটার পানিতে ৫ মিলি মিশিয়ে স্প্রে করতে হবে।",
      details: "এটি আধুনিক ফর্মুলার স্পর্শক ও পাকস্থলী গুণসম্পন্ন কীটনাশক। এটি পোকার ডিম, লার্ভা ও পূর্ণাঙ্গ পোকা—সবগুলো স্টেজকেই একসাথে ধ্বংস করতে পারে।"
    },
    {
      id: 8,
      name: "Confidor 70WG (কনফিডর)",
      group: "Imidacloprid",
      company: "Bayer CropScience (বায়ার)",
      category: "Insecticide",
      categoryBangla: "কীটনাশক",
      purpose: "সবজি, মরিচ ও চায়ের চোষক পোকা, জাব পোকা ও থ্রিপস দমন।",
      useCase: "পাতা কোঁকড়ানো বা সাদা মাছির আক্রমণ দেখা দিলে প্রতি লিটার পানিতে ০.২ গ্রাম (খুবই অল্প মাত্রা) মিশিয়ে স্প্রে করতে হয়।",
      details: "এটি বিশ্বখ্যাত একটি লিকুইড/দানাদার কীটনাশক যা গাছের রস চোষা পোকা দমনে সেরা। এটি গাছের পাতায় দ্রুত শোষিত হয়ে পোকার স্নায়ুতন্ত্র অচল করে দেয়।"
    },
    {
      id: 9,
      name: "Antracol 70WP (অ্যান্ট্রাকল)",
      group: "Propineb",
      company: "Bayer CropScience (বায়ার)",
      category: "Fungicide",
      categoryBangla: "ছত্রাকনাশক",
      purpose: "আলুর আগাম ধসা, সবজির ডাউনি মিলডিউ এবং ফলের এনথ্রাকনোজ প্রতিরোধ।",
      useCase: "বর্ষাকালে বা কুয়াশার সময় রোগ ছড়ানোর আগেই প্রতি লিটার পানিতে ২ গ্রাম হারে মিশিয়ে গাছ ভিজিয়ে স্প্রে করতে হয়।",
      details: "এটি একটি সুরক্ষামূলক কন্টাক্ট ছত্রাকনাশক। এতে জিংক (Zinc) উপাদান মিশ্রিত থাকায় এটি ছত্রাক দমনের পাশাপাশি গাছে পুষ্টি জোগায় ও গাছকে সবুজ রাখে।"
    },
    {
      id: 10,
      name: "Alion 500SC (অ্যালিয়ন)",
      group: "Indaziflam",
      company: "Bayer CropScience (বায়ার)",
      category: "Herbicide",
      categoryBangla: "আগাছানাশক",
      purpose: "বহুবর্ষজীবী ফলবাগান ও চা বাগানের সব ধরনের শক্ত আগাছা দমন।",
      useCase: "বাগানের সারির মাঝখানে ঘাস বড় হওয়ার আগে মাটিতে স্প্রে করতে হয়। খেয়াল রাখতে হবে যেন মূল গাছের পাতায় না লাগে।",
      details: "এটি একটি দীর্ঘমেয়াদী আগাছানাশক যা মাটির উপরিভাগে একটি স্তর তৈরি করে আগাছার অঙ্কুরোদগম বন্ধ করে দেয়। একবার স্প্রে করলে কয়েক মাস ঘাস গজায় না।"
    },

    // ==========================================
    // ৩. AUTO CROP CARE (অটো) - ৫টি প্রোডাক্ট
    // ==========================================
    {
      id: 11,
      name: "Mancozea 80WP (ম্যানকোজেয়া)",
      group: "Mancozeb",
      company: "Auto Crop Care (অটো)",
      category: "Fungicide",
      categoryBangla: "ছত্রাকনাশক",
      purpose: "আলুর নাবী ধসা (Late Blight) ও টমেটোর পচন রোগ প্রতিরোধ।",
      useCase: "শীতকালে অতিরিক্ত কুয়াশা পড়লে সতর্কতা হিসেবে প্রতি লিটার পানিতে ২ গ্রাম মিশিয়ে ৭-১০ দিন পর পর স্প্রে করুন।",
      details: "এটি দেশের অন্যতম জনপ্রিয় স্পর্শক ছত্রাকনাশক। এটি গাছের উপরিভাগে একটি প্রতিরক্ষামূলক স্তর তৈরি করে, যা ছত্রাকের স্পোরকে ভেতরে ঢুকতে দেয় না।"
    },
    {
      id: 12,
      name: "Mitox 5EC (মাইটক্স)",
      group: "Abamectin",
      company: "Auto Crop Care (অটো)",
      category: "Insecticide",
      categoryBangla: "মাকড়নাশক (Acaricide)",
      purpose: "مরিচ, বেগুন ও পাটের লাল মাকড় ও পাতা কোঁকড়ানো রোগ দমন।",
      useCase: "পাতার উল্টো পিঠে মাকড়ের আক্রমণ বেশি হয়, তাই স্প্রে করার সময় পাতার নিচের অংশ ভালোভাবে ভিজিয়ে দিতে হবে।",
      details: "এটি একটি অত্যন্ত কার্যকরী মাকড়নাশক। এটি পাতার ভেতরে প্রবেশ করে লুকানো মাকড় ও চোষক পোকাগুলোকে সহজেই দূর করে পাতা সতেজ করে।"
    },
    {
      id: 13,
      name: "Autostin 50WDP (অটোস্টিন)",
      group: "Carbendazim",
      company: "Auto Crop Care (অটো)",
      category: "Fungicide",
      categoryBangla: "ছত্রাকনাশক",
      purpose: "ধানের খড় পচা, পাটের কালো পট্টি এবং বিভিন্ন সবজির গোড়া পচা রোগ দমন।",
      useCase: "গাছের গোড়ায় বা আক্রান্ত পাতায় প্রতি লিটার পানিতে ২ গ্রাম হারে মিশিয়ে স্প্রে বা গোড়া ভিজিয়ে দিতে হবে।",
      details: "এটি একটি বহুমুখী অন্তর্বাহী ছত্রাকনাশক। বীজ শোধন কিংবা মাঠের ফসল—উভয় ক্ষেত্রেই এটি অত্যন্ত সুলভ ও প্রাচীন বিশ্বস্ত একটি ওষুধ।"
    },
    {
      id: 14,
      name: "Kinalux 25EC (কিলনাক্স)",
      group: "Quinalphos",
      company: "Auto Crop Care (অটো)",
      category: "Insecticide",
      categoryBangla: "কীটনাশক",
      purpose: "ধানের মাজরা পোকা, ল্যাদা পোকা এবং ছোলার পোকা দমন।",
      useCase: "পোকার আক্রমণ তীব্র হলে প্রতি লিটার পানিতে ২ মিলি মিশিয়ে বিকেলের দিকে স্প্রে করা সবচেয়ে ভালো ফল দেয়।",
      details: "এটি একটি তীব্র স্পর্শক ও পাকস্থলী বিষ ক্রিয়াযুক্ত কীটনাশক। স্প্রে করার সাথে সাথেই পোকা এর সংস্পর্শে এসে বা পাতা খেয়ে দ্রুত মারা যায়।"
    },
    {
      id: 15,
      name: "Salvodon 800WG (সালভডন)",
      group: "Sulfur 80%",
      company: "Auto Crop Care (অটো)",
      category: "Vitamin",
      categoryBangla: "ভিটামিন ও অনুখাদ্য",
      purpose: "ধানের গন্ধক বা সালফারের ঘাটতি পূরণ এবং সবজির পাউডারি মিলডিউ রোগ দমন।",
      useCase: "জমি তৈরির সময় বা সার উপরিপ্রয়োগের সময় ইউরিয়ার সাথে মিশিয়ে অথবা পানিতে গুলে স্প্রে করা যায়।",
      details: "এটি একই সাথে ছত্রাকনাশক, মাকড়নাশক এবং অত্যাবश्यकীয় সালফার পুষ্টি উপাদান হিসেবে কাজ করে। এটি গাছের খাদ্য তৈরি করার ক্ষমতা বাড়ায়।"
    },

    // ==========================================
    // ৪. SQUARE PHARMA - AGRO (স্কয়ার) - ৫টি প্রোডাক্ট
    // ==========================================
    {
      id: 16,
      name: "Squash 2.5EC (স্কোয়াশ)",
      group: "Lambda-Cyhalothrin",
      company: "Square (স্কয়ার)",
      category: "Insecticide",
      categoryBangla: "কীটনাশক",
      purpose: "সবজির এফিড, জাব পোকা, লেদা পোকা এবং আমের হপার পোকা দমন।",
      useCase: "পোকা দেখা দেওয়া মাত্রই প্রতি লিটার পানিতে ১ মিলি মিশিয়ে পুরো গাছ ভালোভাবে ভিজিয়ে স্প্রে করতে হবে।",
      details: "স্কয়ার কোম্পানির এই কীটনাশকটি পোকার ওপর দ্রুত নক-ডাউন (Knock-down) ইফেক্ট ফেলে। অর্থাৎ স্প্রে করার কিছুক্ষণের মধ্যেই পোকা অবশ হয়ে পড়ে যায়।"
    },
    {
      id: 17,
      name: "Scomit 57EC (স্কোমাইট)",
      group: "Propargite",
      company: "Square (স্কয়ার)",
      category: "Insecticide",
      categoryBangla: "মাকড়নাশক",
      purpose: "চা, মরিচ ও সবজির মারাত্মক লাল ও হলুদ মাকড় দমন।",
      useCase: "তীব্র রোদের সময় মাকড় বাড়ে, তাই মাকড়ের লক্ষণ দেখা গেলেই প্রতি লিটার পানিতে ২ মিলি মিশিয়ে স্প্রে করতে হবে।",
      details: "এটি একটি স্পেশালাইজড মাকড়নাশক যা মাকড়ের সব ধরনের প্রতিরোধী স্টেজ ধ্বংস করে এবং দীর্ঘদিন ফসলে নতুন মাকড় আসতে দেয় না।"
    },
    {
      id: 18,
      name: "Era 50SP (এরা)",
      group: "Cartap",
      company: "Square (স্কয়ার)",
      category: "Insecticide",
      categoryBangla: "কীটনাশক",
      purpose: "ধানের মাজরা পোকা এবং সবজির পাতা খাদক পোকা চিরতরে নির্মূল।",
      useCase: "একর প্রতি ২৫০ থেকে ৩০০ গ্রাম ওষুধ পর্যাপ্ত পানিতে মিশিয়ে পুরো ধান ক্ষেতে স্প্রে করতে হবে।",
      details: "কারটাপ গ্রুপের এই ওষুধটি মাজরা পোকার আক্রমণ প্রতিরোধে অত্যন্ত শক্তিশালী। এটি পোকার কেন্দ্রীয় স্নায়ুতন্ত্র বন্ধ করে দেয় এবং খাওয়া বন্ধ করিয়ে মেরে ফেলে।"
    },
    {
      id: 19,
      name: "Propicon 250EC (প্রোপিকন)",
      group: "Propiconazole",
      company: "Square (স্কয়ার)",
      category: "Fungicide",
      categoryBangla: "ছত্রাকনাশক",
      purpose: "ধানের শীষ পচা (Sheath Rot), খোল পোড়া রোগ এবং কলার সিগাটোকা রোগ দমন।",
      useCase: "ধানের থোড় বের হওয়ার সময় প্রতি লিটার পানিতে ০.৫ মিলি মিশিয়ে স্প্রে করলে শীষ পচা থেকে রক্ষা পাওয়া যায়।",
      details: "এটি একটি ট্রায়াজল গ্রুপের চমৎকার অন্তর্বাহী ছত্রাকনাশক। এটি গাছের কোষে দ্রুত শোষিত হয়ে ছত্রাকের বিস্তার সম্পূর্ণ স্তব্ধ করে দেয়।"
    },
    {
      id: 20,
      name: "Solu-Zin (সলু-জিঙ্ক)",
      group: "Zinc Sulphate (Monohydrate)",
      company: "Square (স্কয়ার)",
      category: "Vitamin",
      categoryBangla: "ভিটামিন ও অনুখাদ্য",
      purpose: "ধানের দস্তা বা জিঙ্কের ঘাটতি পূরণ, কুশি বৃদ্ধি এবং পাতার লালচে ভাব দূর করা।",
      useCase: "ধান রোপণের ১৫-২০ দিন পর বিঘাপ্রতি ১ কেজি হারে মাটির সাথে অথবা সার ছিটানোর সময় মিশিয়ে দিতে হয়।",
      details: "জিঙ্কের অভাবে ধানের কুশি গজানো কমে যায় এবং পাতা তামাটে রঙ ধারণ করে। সলু-জিঙ্ক গাছের ক্লোরোফিল তৈরিতে সাহায্য করে দ্রুত ফলন বাড়ায়।"
    }
  ];

  // ফিল্টার লজিক
  const filteredMedicines = activeTab === "All" 
    ? medicineData 
    : medicineData.filter(med => med.category === activeTab || (activeTab === "Insecticide" && med.categoryBangla.includes("মাকড়নাশক")));

  return (
    <div className="font-sans bg-base-100 min-h-screen pb-20">
      
      {/* ১. হেডার ব্যানার */}
      <section className="bg-gradient-to-r from-emerald-800 to-green-700 py-16 text-center text-white px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="badge bg-white/20 text-white border-none py-3 px-4 rounded-full text-xs font-semibold backdrop-blur-md">
            🌱 অনুমোদিত বালাইনাশক ও সঠিক পরামর্শ
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            কৃষি ওষুধ ও বালাইনাশক ক্যাটালগ
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            গ্রুপ ও কোম্পানি ভিত্তিক সঠিক বালাইনাশক নির্বাচন করুন। এখানে আমাদের স্টকের সেরা এবং মাঠপর্যায়ে কার্যকরী ২০টি ওষুধের বিবরণ দেওয়া হলো।
          </p>
        </div>
      </section>

      {/* ২. ফিল্টার ট্যাব সেকশন */}
      <section className="max-w-7xl mx-auto px-4 mt-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 bg-base-200 p-2 rounded-2xl max-w-2xl mx-auto">
          <button 
            onClick={() => setActiveTab("All")}
            className={`btn btn-sm sm:btn-md rounded-xl font-bold border-none flex-1 transition-all ${activeTab === "All" ? "btn-success text-white shadow" : "btn-ghost"}`}
          >
            সব ওষুধ
          </button>
          <button 
            onClick={() => setActiveTab("Insecticide")}
            className={`btn btn-sm sm:btn-md rounded-xl font-bold border-none flex-1 transition-all ${activeTab === "Insecticide" ? "btn-success text-white shadow" : "btn-ghost"}`}
          >
            কীটনাশক
          </button>
          <button 
            onClick={() => setActiveTab("Fungicide")}
            className={`btn btn-sm sm:btn-md rounded-xl font-bold border-none flex-1 transition-all ${activeTab === "Fungicide" ? "btn-success text-white shadow" : "btn-ghost"}`}
          >
            ছত্রাকনাশক
          </button>
          <button 
            onClick={() => setActiveTab("Vitamin")}
            className={`btn btn-sm sm:btn-md rounded-xl font-bold border-none flex-1 transition-all ${activeTab === "Vitamin" ? "btn-success text-white shadow" : "btn-ghost"}`}
          >
            ভিটামিন ও অনুখাদ্য
          </button>
        </div>
      </section>

      {/* ৩. ওষুধের ক্যাটালগ গ্রিড */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredMedicines.map((medicine) => (
            <div 
              key={medicine.id}
              className="bg-base-100 border border-base-content/5 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-emerald-500/10 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* টপ সেকশন: নাম ও ব্যাজ */}
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-base-content/5 pb-4 mb-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-base-content group-hover:text-emerald-600 transition-colors">
                      {medicine.name}
                    </h2>
                    <p className="text-xs font-semibold text-emerald-600 mt-1">
                      কোম্পানি: {medicine.company}
                    </p>
                  </div>
                  <span className="badge badge-success text-white font-bold p-3 text-xs rounded-lg">
                    {medicine.categoryBangla}
                  </span>
                </div>

                {/* গ্রুপ ও কাজ */}
                <div className="space-y-4 text-sm">
                  <div className="bg-base-200/50 p-3 rounded-xl border border-base-content/5">
                    <span className="font-bold text-base-content/60 block text-xs uppercase tracking-wider">জেনেরিক/গ্রুপ নাম:</span>
                    <span className="font-mono text-xs sm:text-sm text-base-content font-semibold">{medicine.group}</span>
                  </div>

                  <div>
                    <span className="font-bold text-emerald-700 block text-sm">🎯 প্রধান কাজ:</span>
                    <p className="text-base-content/80 font-medium mt-1">{medicine.purpose}</p>
                  </div>

                  <div>
                    <span className="font-bold text-amber-700 block text-sm">🚜 ব্যবহারের সঠিক সময় ও নিয়ম (Use Case):</span>
                    <p className="text-base-content/70 mt-1 leading-relaxed">{medicine.useCase}</p>
                  </div>

                  <div>
                    <span className="font-bold text-base-content block text-sm">📝 বিস্তারিত বিবরণ (Details):</span>
                    <p className="text-base-content/70 mt-1 leading-relaxed text-xs sm:text-sm bg-base-100 border border-dashed p-3 rounded-xl">
                      {medicine.details}
                    </p>
                  </div>
                </div>
              </div>

              {/* অ্যাকশন বাটন */}
              <div className="mt-6 pt-4 border-t border-t-base-content/5 flex justify-end">
                <a 
                  href="/contact"
                  className="btn btn-sm btn-outline btn-success rounded-xl font-bold text-xs px-4"
                >
                  দাম ও ডোজিং জানতে যোগাযোগ করুন &rarr;
                </a>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Medicine;