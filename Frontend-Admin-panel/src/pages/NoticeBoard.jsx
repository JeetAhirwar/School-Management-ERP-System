import { useState } from "react";
import { Pin, Plus } from "lucide-react";
import { PageIntro, Card, Button, Pill } from "../components/UI";
import { notices } from "../data/records";

const categoryTone = { Academic: "info", Holiday: "success", Sports: "amber", Fees: "alert", Event: "info", Transport: "neutral" };

export default function NoticeBoard() {
  const [filter, setFilter] = useState("All");
  const cats = ["All", ...new Set(notices.map((n) => n.category))];
  const filtered = filter === "All" ? notices : notices.filter((n) => n.category === filter);

  return (
    <div className="space-y-6">
      <PageIntro
        eyebrow="Admissions & Outreach"
        title="Notice Board"
        description="Official circulars and announcements for students, parents and staff."
        right={<Button variant="amber"><Plus size={15} /> Post Notice</Button>}
      />

      <div className="flex gap-2 flex-wrap">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-2 rounded-full text-[12.5px] font-semibold border transition-colors ${
              filter === c ? "bg-ink text-white border-ink" : "bg-white text-slate-text border-black/10 hover:border-ink/30"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((n) => (
          <Card key={n.id}>
            <div className="flex items-start justify-between mb-2">
              <Pill tone={categoryTone[n.category] || "neutral"}>{n.category}</Pill>
              {n.pinned && <Pin size={14} className="text-amber-dark" fill="#E8A33D" />}
            </div>
            <h3 className="font-display font-bold text-ink text-[15.5px] leading-snug">{n.title}</h3>
            <p className="text-[13px] text-slate-text mt-2 leading-relaxed">{n.body}</p>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-black/[0.06] text-[11.5px] text-slate-text/60">
              <span>For: {n.audience}</span>
              <span>{n.date}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
