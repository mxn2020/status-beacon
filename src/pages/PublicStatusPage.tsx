import { CheckCircle2, AlertCircle, Clock, Link as LinkIcon } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import { Link } from "react-router-dom";
import { Button, Card, Badge } from "@geenius-ui/react-css";

const services = [
  { group: "API", items: [{ name: "Authentication", status: "Operational", uptime: "99.99%" }, { name: "Data Processing", status: "Degraded", uptime: "99.90%" }] },
  { group: "Infrastructure", items: [{ name: "Database", status: "Operational", uptime: "100%" }, { name: "Storage", status: "Operational", uptime: "99.98%" }] }
];

export default function PublicStatusPage() {
  return (<div style={{ minHeight: "100vh", background: "var(--color-bg-primary)" }}>
    <header style={{ padding: "var(--space-4) var(--space-8)", display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--color-bg-card)", borderBottom: "1px solid var(--color-border)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--color-accent-primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700 }}>AC</div>
        <span style={{ fontWeight: 600, fontSize: "18px" }}>Acme Corp Status</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
        <Button variant="primary" size="sm">Subscribe to Updates</Button>
        <ThemeToggle />
        <Link to="/admin" style={{ textDecoration: 'none' }}>
          <Button variant="ghost" size="sm">Admin</Button>
        </Link>
      </div>
    </header>

    <main style={{ maxWidth: 800, margin: "0 auto", padding: "var(--space-8)" }}>
      <Card padding="xl" style={{ marginBottom: "var(--space-8)", background: "var(--color-success-soft)", border: "1px solid var(--color-success)", display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
        <CheckCircle2 size={32} style={{ color: "var(--color-success)" }} />
        <div>
          <h2 style={{ fontSize: "20px", fontWeight: 600, color: "var(--color-success)", margin: 0 }}>All Systems Operational</h2>
          <p style={{ color: "var(--color-text-secondary)", fontSize: "14px", marginTop: 4, marginBottom: 0 }}>Last updated just now.</p>
        </div>
      </Card>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
        {services.map(g => (<div key={g.group}>
          <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "var(--space-4)", marginTop: 0 }}>{g.group}</h3>
          <Card padding="none" style={{ display: "flex", flexDirection: "column" }}>
            {g.items.map((srv, idx) => (<div key={srv.name} style={{ padding: "var(--space-4)", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: idx !== g.items.length - 1 ? "1px solid var(--color-border)" : "none" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontWeight: 500 }}>{srv.name}</span>
                <span style={{ fontSize: "12px", color: "var(--color-text-tertiary)" }}>{srv.uptime} uptime (90 days)</span>
              </div>
              {srv.status === "Operational" ? <Badge variant="success">Operational</Badge> : <Badge variant="warning">Degraded Performance</Badge>}
            </div>))}
          </Card>
        </div>))}
      </div>

      <div style={{ marginTop: "var(--space-8)" }}>
        <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "var(--space-4)" }}>Past Incidents</h3>
        <div style={{ borderLeft: "2px solid var(--color-border)", paddingLeft: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-6)", marginLeft: "var(--space-2)" }}>
          <div>
            <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 8 }}>Oct 24, 2026</div>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: 4, marginTop: 0 }}>API Latency Spikes</h4>
            <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", margin: 0 }}>We experienced elevated latency in our core Authentication API for approximately 45 minutes. The issue has been fully resolved.</p>
          </div>
        </div>
      </div>
    </main>
  </div>);
}
