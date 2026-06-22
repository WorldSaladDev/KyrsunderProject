import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/Landing/Landing";
import CreditsPage from "./pages/Home/Credits/Credits";
import WikiHomePage from "./pages/KyrsCodex/Landing/Landing";
import ArticlePage from "./pages/KyrsCodex/Article/KyrsCodexArticle";
import EstaraViewPage from "./pages/EstaraView/EstaraViewPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/credits" element={<CreditsPage />} />
      <Route path="/wiki" element={<WikiHomePage />} />
      <Route path="/wiki/:id" element={<ArticlePage />} />
      <Route path="/estaraview" element={<EstaraViewPage />} />
    </Routes>
  );
}