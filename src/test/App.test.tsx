import { describe, it, expect } from "vitest"; import { render, screen } from "@testing-library/react"; import { MemoryRouter, Routes, Route } from "react-router-dom";
import PublicStatusPage from "../pages/PublicStatusPage"; import AdminDashboardPage from "../pages/admin/AdminDashboardPage"; import IncidentsPage from "../pages/admin/IncidentsPage";
import Sidebar from "../components/Sidebar";
function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
  it("PublicStatusPage renders", () => { wrap(<PublicStatusPage/>); expect(screen.getByText("All Systems Operational")).toBeInTheDocument(); });
  it("AdminDashboardPage renders", () => { wrap(<AdminDashboardPage/>); expect(screen.getByText("Authentication")).toBeInTheDocument(); });
  it("IncidentsPage renders", () => { wrap(<IncidentsPage/>); expect(screen.getByText("API Latency Spikes")).toBeInTheDocument(); });
  it("Sidebar renders links", () => { wrap(<Sidebar/>); expect(screen.getByText("Beacon Admin")).toBeInTheDocument(); });
});
