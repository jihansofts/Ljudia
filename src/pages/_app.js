import "@/styles/globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <div className={poppins.variable}>
      <Navbar />
      <main id="main-content" className={isHomePage ? "" : "pt-[126px]"}>
        <Component {...pageProps} />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
