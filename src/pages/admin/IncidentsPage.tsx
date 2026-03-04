import { AlertTriangle, Plus } from "lucide-react";
import { Button, Card, Badge } from "@geenius-ui/react-css";

const incidents = [
  { id: "1", title: "API Latency Spikes", status: "Resolved", date: "Oct 24, 2026", severity: "Minor" },
  { id: "2", title: "Database Outage", status: "Resolved", date: "Sep 12, 2026", severity: "Major" }
];

export default function IncidentsPage() {
  return (<div style={{ padding: "var(--space-8)", maxWidth: 1000 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
      <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)", margin: 0 }}><AlertTriangle style={{ color: "var(--color-warning)" }} /> Incidents</h1>
      <Button variant="primary" icon={<Plus size={16} />}>Report Incident</Button>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
      {incidents.map(inc => (<Card key={inc.id} padding="lg">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-2)" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 600, margin: 0 }}>{inc.title}</h3>
          <Badge variant={inc.status === "Resolved" ? "success" : "danger"}>{inc.status}</Badge>
        </div>
        <div style={{ display: "flex", gap: "var(--space-4)", fontSize: "13px", color: "var(--color-text-secondary)" }}>
          <span>{inc.date}</span>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>Severity: <strong style={{ color: "var(--color-text-primary)" }}>{inc.severity}</strong></span>
        </div>
      </Card>))}
    </div>
  </div>);
}
