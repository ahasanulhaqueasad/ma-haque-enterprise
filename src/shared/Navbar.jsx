import React from "react";

const Navbar = () => {
  // ডাইনামিক মেনু স্ট্রাকচার (সাব-মেনু সহ)
  const links = [
    { name: "হোম", path: "/" },
    { name: "ওষুধ", path: "/medicine" },
    {
      name: "সেবাসমূহ",
      path: "/services", 
      subMenu: [
        { name: "উন্নত বালাইনাশক", path: "/services/branding" },
        { name: "ছত্রাক ও আগাছানাশক", path: "/services/design" },
        { name: "ভিটামিন ও অনুখাদ্য", path: "/services/marketing" },
        { name: "কৃষি প্রচারণা ও অফার", path: "/services/advertisement" },
      ],
    },
    { name: "আমাদের সম্পর্কে", path: "/about" },
    { name: "যোগাযোগ", path: "/contact" },
  ];

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-base-100/80 border-b border-base-content/5 shadow-sm font-sans">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* মোবাইল ডিভাইসের জন্য ড্রপডাউন মেনু */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              aria-label="মেনু খুলুন"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-base-content/5 space-y-1"
            >
              {links.map((link, index) => (
                <li key={index}>
                  {link.subMenu ? (
                    <details>
                      <summary>{link.name}</summary>
                      <ul className="p-2 space-y-1 bg-base-200 rounded-md">
                        {link.subMenu.map((sub, subIndex) => (
                          <li key={subIndex}>
                            <a href={sub.path}>{sub.name}</a>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <a href={link.path} className="active:bg-primary">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* লোগো সেকশন */}
          <a href="/" className="flex flex-col gap-0.5 ml-2 lg:ml-0 group">
            <span className="text-xl lg:text-2xl font-extrabold bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent tracking-tight">
              এম এ হক
            </span>
            <span className="text-[10px] lg:text-xs text-accent font-semibold tracking-widest uppercase -mt-1 block">
              এন্টারপ্রাইজ
            </span>
          </a>
        </div>

        {/* বড় স্ক্রিনের জন্য ডাইনামিক মেইন মেনু */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-medium">
            {links.map((link, index) => {
              // প্রতিটা লিংকের জন্য আলাদা আলাদা হোভার কালার ইফেক্ট
              const hoverColor =
                index === 2
                  ? "hover:text-secondary"
                  : index === 3
                    ? "hover:text-accent"
                    : "hover:text-primary";

              if (link.subMenu) {
                return (
                  <li key={index} className="dropdown dropdown-hover">
                    <div
                      tabIndex={0}
                      role="button"
                      className="hover:text-primary transition-colors duration-200 flex items-center gap-1"
                    >
                      {link.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-48 border border-base-content/5 mt-0.5"
                    >
                      {link.subMenu.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <a href={sub.path} className="hover:text-primary">
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              return (
                <li key={index}>
                  <a
                    href={link.path}
                    className={`${hoverColor} transition-colors duration-200`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ডানদিকের CTA বাটন */}
        <div className="navbar-end">
          <a
            href="/contact"
            className="btn btn-sm lg:btn-md bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-none rounded-xl shadow-md hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-200"
          >
            যোগাযোগ করুন
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
