import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SIH2024Page from "./pages/SIH2024Page";
import AboutSIHPage from "./pages/AboutSIHPage";
import Timeline from "./pages/Timeline";
import Schedule from "./pages/Schedule";
import SIH2023Page from "./pages/SIH2023Page";
import ProblemStatementsPage from "./pages/ProblemStatementPage";
import ComingSoonResultPage from "./pages/ComingSoonResultPage";
import ComingSoonWinnersPage from "./pages/ComingSoonWinnersPage";
import PreviousYearGrandFinalePage from "./pages/PreviousYearGrandFinalePage";
import PreviousYearWinnersPage from "./pages/PreviousYearWinnersPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import RegistrationPage from "./pages/RegistrationPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import { AdminLayout } from "./components/admin/Admin-Layout";
import { AdminContacts } from "./components/admin/Admin-Contacts";
import { AdminUsers } from "./components/admin/Admin-Users";
import { AdminTeams } from "./components/admin/Admin-Teams";
import { AdminLogout } from "./components/admin/Admin-Logout";
import AdminProblemStatements from "./components/admin/Admin-Problem-Statements";
import AdminResults from "./components/admin/Admin-Results";
import { AdminDashboard } from "./components/admin/Admin-Dashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/sih 2024" Component={SIH2024Page} />
        <Route exact path="/about" Component={AboutSIHPage} />
        <Route path="/timeline" Component={Timeline} />
        <Route path="/schedule" Component={Schedule} />
        <Route path="/explore" Component={SIH2023Page} />
        <Route path="/problem statements" Component={ProblemStatementsPage} />
        <Route
          path="/previous year grand finale"
          Component={PreviousYearGrandFinalePage}
        />
        <Route
          path="/previous year winners"
          Component={PreviousYearWinnersPage}
        />
        <Route path="/result" Component={ComingSoonResultPage} />
        <Route path="/winners" Component={ComingSoonWinnersPage} />
        <Route path="/contact" Component={ContactPage} />
        {/* <Route path="/register" Component={RegistrationPage} />  */}
        
        <Route path="admin-login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="admin-users" element={<AdminUsers />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="teams" element={<AdminTeams />} />
          <Route
            path="problem-statements"
            element={<AdminProblemStatements />}
          />
          <Route path="results" element={<AdminResults />} />
          <Route path="logout" element={<AdminLogout />} />
        </Route>
        <Route path="*" Component={ErrorPage} />
      </Routes>
    </>
  );
};

export default App;
