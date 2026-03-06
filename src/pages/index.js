import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="page-content">
        <section className="hero-demo">
          <h1>Homepage</h1>
          <p>Scroll down to see the navbar switch to the second version.</p>
        </section>
        <section className="spacer" aria-hidden="true" />
      </main>
    </>
  );
}
