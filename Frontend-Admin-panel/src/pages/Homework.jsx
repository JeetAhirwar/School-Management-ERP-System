import { useState } from "react";
import { Plus, BookOpenCheck } from "lucide-react";
import { PageIntro, Card, Button, Pill, statusTone, Select } from "../components/UI";
import { homework } from "../data/records";

export default function Homework() {
  const [cls, setCls] = useState("All");
  const classes = ["All", ...new Set(homework.map((h) => h.class))];
  const filtered = cls === "All" ? homework : homework.filter((h) => h.class === cls);

  return (
    <div className="space-y-6">
      <PageIntro
        eyebrow="Academics"
        title="Homework"
        description="Assignments given across classes and their submission status."
        right={<Button variant="amber"><Plus size={15} /> Assign Homework</Button>}
      />

      <Card
        title="All Assignments"
        action={
          <Select value={cls} onChange={(e) => setCls(e.target.value)}>
            {classes.map((c) => <option key={c} value={c}>{c}</option>)}
          </Select>
        }
      >
        <div className="space-y-3">
          {filtered.map((h) => (
            <div key={h.id} className="flex items-start gap-3 p-3.5 rounded-xl border border-black/[0.06]">
              <div className="w-10 h-10 rounded-lg bg-amber/15 text-amber-dark flex items-center justify-center shrink-0">
                <BookOpenCheck size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-[13.5px] font-semibold text-ink">{h.subject}</p>
                  <span className="text-[11px] text-slate-text/50">· {h.class}-{h.section}</span>
                </div>
                <p className="text-[13px] text-slate-text mt-0.5">{h.title}</p>
                <p className="text-[11.5px] text-slate-text/60 mt-1.5">By {h.teacher} · Assigned {h.assignedDate} · Due {h.dueDate}</p>
              </div>
              <Pill tone={statusTone(h.status)}>{h.status}</Pill>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
