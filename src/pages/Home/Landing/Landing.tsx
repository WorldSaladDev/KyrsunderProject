import { Link } from "react-router-dom";
import SiteHeader from "../../../shared/ui/header";
import "./Landing.css";
import ScrollToTop from "../../../shared/ui/ScrollToTop.tsx";

export default function HomePage() {
  return (
    <>
      <ScrollToTop />
      <SiteHeader />

      <main className="content-wrapper">
        <div className="content">
          <h2>Welcome to the Kyrsunder Portal</h2>

          <p>
            <em>Kyrsunder</em> is a fictional universe created by WorldSalad. It's an endeavor through which I can explore a variety of fields, skills, and tools, and work on different types of projects while
            contributing to the same world.
          </p>

          <p>
            Explore Kyrsunder through interactive exhibits, in-world media, and detailed articles.
          </p>

          <p>
            NOTICE: This site is built desktop viewing.
          </p>

          <hr />

          <section className="grid">
            <Link className="grid-item" to="/">
              <img src={`${import.meta.env.BASE_URL}common_assets/kyrscodex_logo.svg`} alt="KyrsCodex Logo" className="logo"/>
              <h3>KyrsCodex</h3>
              <p>A collection of media recovered from the Kyrsunder universe.</p>
              <p>
                <em>Coming Soon.</em>
              </p>
            </Link>

            <Link className="grid-item" to="/estaraview">
              <img src={`${import.meta.env.BASE_URL}common_assets/estaraview_logo.svg`} alt="Estaraview Logo" className="logo"/>
              <h3>EstaraView</h3>
              <p>View Estara on a Google Earth-style globe.</p>
            </Link>
          </section>

          <hr />

          <h2>About Kyrsunder & Estara</h2>

          <p>
            Kyrsunder is the name given to this universe and the ancient event
            that shaped it:
          </p>

          <p>
            <em>
              "At the dawn of existence, when the cosmos was a roiling storm of carefully designed chaos, the primordial beings known as the Wills wove a sigil of incomprehensible scale; a cosmic pattern formed by
              galactic filaments, the spin of particles, and the flow of time. This spell, the Kyrsunder, stilled the endlessly shifting cosmos."
            </em>
          </p>

          <p>
            Among Kyrsunder's countless worlds, Estara is of special interest. As an Earth-like planet home to intelligent bipedal organisms rather similar to humans, Estara makes the perfect starting point
            to explore Kyrsunder, and is the focal point of many of the stories told here.
          </p>

          <footer className="footer">
            <hr />
            <p>
              © 2025-2026 WorldSalad. All rights reserved.{" "}
              <Link to="/credits">Credits</Link>
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}