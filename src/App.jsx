import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from "./pages/ErrorBoundaries/screens/404Error";
import { useThemeContext } from "./themeContext";
import XploreGovHomepage from "./pages/XploreGovHome/screens/XploreGovHome";
import "./index.css";
import DataLoadingAnimatedComponent from "./pages/SplashPage/screens/dataLoadingAnimatedComponent";
import DocsPage from "./pages/DocsPage/screens/DocsPage";

const App = () => {

  const { isDark } = useThemeContext();

  return (
    <div className={isDark ? "dark-mode" : ""}>
      <Router>
        <Routes>
          <Route path="/" element={<XploreGovHomepage />} />
          <Route path='/openginxplore' element={<DataLoadingAnimatedComponent mode="orgchart" />} />
          <Route path="/orgchart" element={<DataLoadingAnimatedComponent mode="orgchart" />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/person-profile/:personId" element={<DataLoadingAnimatedComponent mode="person-profile" />} />
          <Route path="/department-profile/:departmentId" element={<DataLoadingAnimatedComponent mode="department-profile" />} />
          <Route path="/docs" element ={<DocsPage></DocsPage>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App
