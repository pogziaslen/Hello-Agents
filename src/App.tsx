import { LanguageProvider } from "./i18n";
import { AuthProvider } from "./auth";
import { RouterProvider, useRouter } from "./router";
import { COOKIES_DOC, PRIVACY_DOC, TERMS_DOC } from "./content";
import MorphBackground from "./components/MorphBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import RoadmapPage from "./pages/RoadmapPage";
import LoginPage from "./pages/LoginPage";
import LegalPage from "./pages/LegalPage";

function Shell() {
  const { route } = useRouter();

  return (
    <div className="relative min-h-screen text-ink">
      <MorphBackground />
      <Navbar />
      <main className="relative z-10">
        {route === "/" && <Home />}
        {route === "/about" && <AboutPage />}
        {route === "/roadmap" && <RoadmapPage />}
        {route === "/login" && <LoginPage />}
        {route === "/cookies" && <LegalPage doc={COOKIES_DOC} />}
        {route === "/privacy" && <LegalPage doc={PRIVACY_DOC} />}
        {route === "/terms" && <LegalPage doc={TERMS_DOC} />}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <RouterProvider>
          <Shell />
        </RouterProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}
