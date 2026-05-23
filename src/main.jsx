import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import About from "./pages/Home/About/About";
import Contact from "./pages/Home/Contact/Contact";
import DesignServices from "./pages/Home/Services/DesignServices";
import Branding from "./pages/Home/Services/Branding";
import ErrorPage from "./ErrorPage/ErrorPage";
import Advertisement from "./pages/Home/Services/Advertisement";
import Marketing from "./pages/Home/Services/Marketing";
import Services from "./pages/Home/Services/Services";
import Medicine from "./Products/Medicine";

// আপনার ওয়েবসাইটের সমস্ত পেজের রুট/পাথ (Routes) এখানে থাকবে
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // প্রধান লেআউট (যেখানে Navbar এবং Footer থাকবে)
    children: [
      {
        path: "/",
        element: <Home />, // হোম পেজ
      },
      {
        path: "/medicine",
        element: <Medicine />,
      },
      {
        path: "/about",
        element: <About />, // আমাদের সম্পর্কে পেজ
      },
      {
        path: "/contact",
        element: <Contact />, // যোগাযোগ পেজ
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/branding",
        element: <Branding />, // ব্র্যান্ডিং পেজ
      },
      {
        path: "/services/design",
        element: <DesignServices />, // ডিজাইন পেজ
      },
      {
        path: "/services/marketing",
        element: <Marketing />, // মার্কেটিং পেজ (নতুন যুক্ত করা হয়েছে)
      },
      {
        path: "/services/advertisement",
        element: <Advertisement />, // বিজ্ঞাপন পেজ (নতুন যুক্ত করা হয়েছে)
      },
    ],
  },
  // যদি কোনো ভুল লিংকে ইউজার চলে যায়, তার জন্য Not Found (404) পেজ এখানে দিতে পারেন
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
