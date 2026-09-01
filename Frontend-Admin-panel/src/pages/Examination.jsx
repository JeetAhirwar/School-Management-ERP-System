import { Plus, MapPin } from "lucide-react";
import { PageIntro, Card, Button, Pill } from "../components/UI";
import { examSchedule } from "../data/academics";

export default function Examination() {
  const grouped = examSchedule.reduce((acc, e) => {
    acc[e.class] = acc[e.class] || [];
    acc[e.class].push(e);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <PageIntro
        eyebrow="Academics"
        title="Examination"
        description="Term 2 mid-term examination schedule across classes."
        right={<Button variant="amber"><Plus size={15} /> Schedule Exam</Button>}
      />

      {Object.entries(grouped).map(([cls, exams]) => (
        <Card key={cls} title={`${cls} — ${exams[0].exam}`}>
          <div className="overflow-x-auto -mx-5">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="text-left text-slate-text/60 text-[11.5px] uppercase tracking-wide border-b border-black/[0.06]">
                  <th className="px-5 py-2.5 font-semibold">Subject</th>
                  <th className="px-5 py-2.5 font-semibold">Date</th>
                  <th className="px-5 py-2.5 font-semibold">Time</th>
                  <th className="px-5 py-2.5 font-semibold">Room</th>
                  <th className="px-5 py-2.5 font-semibold">Max Marks</th>
                </tr>
              </thead>
              <tbody>
                {exams.map((e) => (
                  <tr key={e.id} className="border-b border-black/[0.04] last:border-0">
                    <td className="px-5 py-3 font-semibold text-ink">{e.subject}</td>
                    <td className="px-5 py-3 text-slate-text">{e.date}</td>
                    <td className="px-5 py-3 text-slate-text">{e.time}</td>
                    <td className="px-5 py-3 text-slate-text"><span className="inline-flex items-center gap-1"><MapPin size={12} />{e.room}</span></td>
                    <td className="px-5 py-3"><Pill tone="info">{e.maxMarks} marks</Pill></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      ))}
    </div>
  );
}
