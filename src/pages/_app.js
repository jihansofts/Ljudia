import "@/styles/globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-[107px]">
        <div className="site-shell">
          <Component {...pageProps} />
        </div>
      </main>
      <Footer />
    </>
  );
}
