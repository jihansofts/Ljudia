import "@/styles/globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <>
      <Navbar />
      <main id="main-content" className={isHomePage ? "" : "pt-[107px]"}>
        <div className="site-shell">
          <Component {...pageProps} />
        </div>
      </main>
      <Footer />
    </>
  );
}
