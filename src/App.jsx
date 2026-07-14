import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Error404 from "./pages/ErrorBoundaries/screens/404Error";
import { useThemeContext } from "./context/themeContext";
import DataLoadingAnimatedComponent from "./pages/SplashPage/screens/dataLoadingAnimatedComponent";
import DocsPage from "./pages/DocsPage/screens/DocsPage";
import OfflineBanner from "./components/OfflineBanner";
import { usePageTracking } from "./hooks/usePageTracking";
import HomePage from "./pages/HomePage/screens/HomePage";
import Organization, { StructureView, ChangesView } from "./pages/OrganizationPage/screens/Organization";
import DataPage from "./pages/DataPage/screens/DataPage";
import SearchPage from "./pages/SearchPage/screens/SearchPage";

import PersonProfile from "./pages/PersonProfilePage/screens/PersonProfile";
import DepartmentProfile from "./pages/DepartmentPage/screens/DepartmentProfile";

const AppRoutes = () => {
  usePageTracking();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/executive-branch/structure" replace />} />
      <Route path="docs" element={<DocsPage />} />

      <Route element={<DataLoadingAnimatedComponent />}>
        <Route element={<HomePage />}>
          <Route path="executive-branch" element={<Organization />}>
            <Route index element={<Navigate to="/executive-branch/structure" replace />} />
            <Route path="structure" element={<StructureView />} />
            <Route path="changes" element={<ChangesView />} />
            <Route path="*" element={<Navigate to="/executive-branch/structure" replace />} />
          </Route>
          <Route path="data" element={<DataPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
        <Route path="person-profile/:personId" element={<PersonProfile />} />
        <Route path="department-profile/:departmentId" element={<DepartmentProfile />} />
      </Route>

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

const App = () => {
  const { isDark } = useThemeContext();

  return (
    <div className={isDark ? "dark" : ""}>
      <OfflineBanner />
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App