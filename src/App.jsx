import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@components/Navbar';
import Homepage from '@homepage/Homepage';
import News from '@news/News';
import NewsDetail from '@news/NewsDetail';
import NewsCards from '@news/NewsCards';
import PrivacyPolicy from '@tac/PrivacyPolicy';
import TermsOfServices from '@tac/TermsOfServices';
import RulesOfConduct from '@tac/RulesOfConduct';
import CommunityPage from '@tac/CommunityPage';
import GameResponsibly from '@gameResponsibly/GameResponsibly';
import Redeem from '@redeem/Redeem';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Homepage />} />
          <Route path="news" element={<News />}>
            <Route index element={<NewsCards />} />
            <Route path=":id" element={<NewsDetail />} />
          </Route>
          <Route path="redeem" element={<Redeem />} />
          <Route path="game_responsibly" element={<GameResponsibly />} />
          <Route path="privacy-page" element={<PrivacyPolicy />} />
          <Route path="terms-of-services" element={<TermsOfServices />} />
          <Route path="rules-of-conduct" element={<RulesOfConduct />} />
          <Route path="official-community-page" element={<CommunityPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
