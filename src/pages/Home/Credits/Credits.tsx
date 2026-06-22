import { Link } from "react-router-dom";
import SiteHeader from "../../../shared/ui/header";
import "../Landing/Landing.css";
import ScrollToTop from "../../../shared/ui/ScrollToTop.tsx";

export default function CreditsPage() {
  return (
    <>
        <ScrollToTop />
        <SiteHeader />

        <main className="content-wrapper">
            <div className="content">
            <h2>Credits</h2>

            <p>
                All content is created by WorldSalad unless otherwise stated.
            </p>

            <hr />

            <h2>Tools &amp; Resources</h2>

            <hr />

            <Link to="/">← Back</Link>
            </div>
        </main>
        </>
    );
}