import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RootLayout from "./pages/RootLayout/RootLayout";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/vite-react-router/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/vite-react-router/about',
        element: <AboutUs />
      },
      {
        path: '/vite-react-router/contact',
        element: <ContactUs />
      }
    ]

  }
])

export default router