import { Plus, Activity } from "lucide-react";
import { Button, Card, Badge } from "@geenius-ui/react-css";

const services = [
  { id: "1", name: "Authentication", status: "Operational", group: "API" },
  { id: "2", name: "Data Processing", status: "Degraded", group: "API" },
  { id: "3", name: "Database", status: "Operational", group: "Infrastructure" }
];

export default function AdminDashboardPage() {
  return (<div style={{ padding: "var(--space-8)", maxWidth: 1000 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
      <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)", margin: 0 }}><Activity style={{ color: "var(--color-accent-primary)" }} /> Services</h1>
      <Button variant="primary" icon={<Plus size={16} />}>Add Service</Button>
    </div>
    <Card padding="none">
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-secondary)" }}>
            <th style={{ textAlign: "left", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Service Name</th>
            <th style={{ textAlign: "left", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Group</th>
            <th style={{ textAlign: "left", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Status</th>
            <th style={{ textAlign: "right", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map(s => (<tr key={s.id} style={{ borderBottom: "1px solid var(--color-border)" }}>
            <td style={{ padding: "16px", fontWeight: 500 }}>{s.name}</td>
            <td style={{ padding: "16px", color: "var(--color-text-secondary)", fontSize: "14px" }}>{s.group}</td>
            <td style={{ padding: "16px" }}>{s.status === "Operational" ? <Badge variant="success">Operational</Badge> : <Badge variant="warning">Degraded</Badge>}</td>
            <td style={{ padding: "16px", textAlign: "right" }}><Button variant="ghost" size="sm">Edit</Button></td>
          </tr>))}
        </tbody>
      </table>
    </Card>
  </div>);
}
