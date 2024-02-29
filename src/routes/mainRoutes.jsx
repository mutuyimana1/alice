import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from "../App";
import HomePage from "../pages/homePage";
import Articles from '../pages/articles';
import ArticleDetails from '../components/articleDetails';
import SmallScreenHeader from '../components/smallScreenHeader';

const MainRouter = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/articles" element={<Articles/>}/>
      <Route path="/mobile" element={<SmallScreenHeader/>}/>
      <Route path="/article/details" element={<ArticleDetails/>}/>
    </Routes>
    </Router>
  );
};
export default MainRouter;
