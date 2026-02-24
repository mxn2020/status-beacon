import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import PublicStatusPage from "./pages/PublicStatusPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import IncidentsPage from "./pages/admin/IncidentsPage";

function AdminLayout() {
  return (<div style={{display:"flex"}}>
    <Sidebar />
    <main style={{marginLeft:"var(--sidebar-width)",flex:1,minHeight:"100vh"}}><Outlet /></main>
  </div>);
}

export default function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<PublicStatusPage />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboardPage />} />
        <Route path="incidents" element={<IncidentsPage />} />
        <Route path="*" element={<AdminDashboardPage />} />
      </Route>
    </Routes>
  </BrowserRouter>);
}
