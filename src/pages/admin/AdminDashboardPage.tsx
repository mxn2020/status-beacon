import { Plus, Activity } from "lucide-react";
const services = [
  { id:"1", name:"Authentication", status:"Operational", group:"API" },
  { id:"2", name:"Data Processing", status:"Degraded", group:"API" },
  { id:"3", name:"Database", status:"Operational", group:"Infrastructure" }
];
export default function AdminDashboardPage() {
  return (<div style={{padding:"var(--space-8)",maxWidth:1000}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--space-6)"}}>
      <h1 style={{fontSize:"var(--font-size-2xl)",fontWeight:700,display:"flex",alignItems:"center",gap:"var(--space-2)"}}><Activity style={{color:"var(--color-accent-primary)"}}/> Services</h1>
      <button className="btn btn-primary"><Plus size={16}/> Add Service</button>
    </div>
    <div className="card">
      <table style={{width:"100%",borderCollapse:"collapse"}}>
        <thead>
          <tr style={{borderBottom:"1px solid var(--color-border)",background:"var(--color-bg-secondary)"}}>
            <th style={{textAlign:"left",padding:"12px 16px",fontSize:"12px",textTransform:"uppercase",color:"var(--color-text-secondary)"}}>Service Name</th>
            <th style={{textAlign:"left",padding:"12px 16px",fontSize:"12px",textTransform:"uppercase",color:"var(--color-text-secondary)"}}>Group</th>
            <th style={{textAlign:"left",padding:"12px 16px",fontSize:"12px",textTransform:"uppercase",color:"var(--color-text-secondary)"}}>Status</th>
            <th style={{textAlign:"right",padding:"12px 16px",fontSize:"12px",textTransform:"uppercase",color:"var(--color-text-secondary)"}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map(s=>(<tr key={s.id} style={{borderBottom:"1px solid var(--color-border)"}}>
            <td style={{padding:"16px",fontWeight:500}}>{s.name}</td>
            <td style={{padding:"16px",color:"var(--color-text-secondary)",fontSize:"14px"}}>{s.group}</td>
            <td style={{padding:"16px"}}>{s.status==="Operational"?<span className="badge badge-green">Operational</span>:<span className="badge badge-yellow">Degraded</span>}</td>
            <td style={{padding:"16px",textAlign:"right"}}><button className="btn btn-ghost btn-sm">Edit</button></td>
          </tr>))}
        </tbody>
      </table>
    </div>
  </div>);
}
