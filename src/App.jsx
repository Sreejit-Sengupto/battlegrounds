import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage/Homepage";
import News from "./components/pages/News/News";
import NewsDetail from "./components/pages/News/NewsDetail";
import NewsCards from "./components/pages/News/NewsCards";
import PrivacyPolicy from "./components/pages/TermsConditions/PrivacyPolicy";
import TermsOfServices from "./components/pages/TermsConditions/TermsOfServices";
import RulesOfConduct from "./components/pages/TermsConditions/RulesOfConduct";
import CommunityPage from "./components/pages/TermsConditions/CommunityPage";
import GameResponsibly from "./components/pages/Game Responsibly/GameResponsibly";
import Redeem from "./components/pages/Redeem/Redeem";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Homepage />}/>
          <Route path="news" element={<News />}>
            <Route index element={<NewsCards/>} />
            <Route path=":id" element={<NewsDetail/>} />
          </Route>
          <Route path="redeem" element={<Redeem />} />
          <Route path="game_responsibly" element={<GameResponsibly />} />
          <Route path="privacy-page" element={<PrivacyPolicy />}/>
          <Route path="terms-of-services" element={<TermsOfServices />}/>
          <Route path="rules-of-conduct" element={<RulesOfConduct />}/>
          <Route path="official-community-page" element={<CommunityPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
