import { Link, useLocation } from "react-router-dom";
import { Activity, AlertTriangle, Users, Settings, Radio } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar() {
  const loc = useLocation();
  const links = [
    { to: "/admin", icon: Activity, label: "Services" },
    { to: "/admin/incidents", icon: AlertTriangle, label: "Incidents" },
    { to: "/admin/subscribers", icon: Users, label: "Subscribers" },
    { to: "/admin/settings", icon: Settings, label: "Settings" }
  ];
  return (<aside style={{width:"var(--sidebar-width)",background:"var(--color-bg-card)",borderRight:"1px solid var(--color-border)",height:"100vh",position:"fixed",display:"flex",flexDirection:"column"}}>
    <div style={{padding:"var(--space-6)",display:"flex",alignItems:"center",gap:"var(--space-3)",borderBottom:"1px solid var(--color-border)"}}>
      <Radio size={24} style={{color:"var(--color-accent-primary)"}}/><strong style={{fontSize:"1.1rem"}}>Beacon Admin</strong>
    </div>
    <nav style={{padding:"var(--space-4)",flex:1,display:"flex",flexDirection:"column",gap:"var(--space-2)"}}>
      {links.map(l=><Link key={l.to} to={l.to} style={{display:"flex",alignItems:"center",gap:"var(--space-3)",padding:"var(--space-3)",borderRadius:"var(--radius-sm)",color:loc.pathname===l.to?"var(--color-accent-primary)":"var(--color-text-secondary)",background:loc.pathname===l.to?"var(--color-accent-soft)":"transparent",fontWeight:500,fontSize:"var(--font-size-sm)",transition:"all var(--transition-fast)"}}><l.icon size={18}/>{l.label}</Link>)}
    </nav>
    <div style={{padding:"var(--space-4)",borderTop:"1px solid var(--color-border)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <Link to="/" className="btn btn-ghost btn-sm" style={{color:"var(--color-text-secondary)"}}>View Status Page</Link>
      <ThemeToggle />
    </div>
  </aside>);
}
