import { PageIntro, Card, Select, Pill } from "../components/UI";
import { timetable, periods } from "../data/academics";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const subjectColor = {
  Mathematics: "bg-info/10 text-info", English: "bg-amber/15 text-amber-dark", Science: "bg-success/10 text-success",
  "Social Science": "bg-alert/10 text-alert", Hindi: "bg-[#6B4F9C]/10 text-[#6B4F9C]", "Computer Science": "bg-ink/10 text-ink",
  "Physical Education": "bg-success/10 text-success", Art: "bg-amber/15 text-amber-dark", Music: "bg-[#6B4F9C]/10 text-[#6B4F9C]",
  Library: "bg-info/10 text-info", Sports: "bg-success/10 text-success", Break: "bg-slate-100 text-slate-500", "—": "bg-slate-50 text-slate-300",
};

export default function Timetable() {
  const data = timetable["Class 8-A"];
  return (
    <div className="space-y-6">
      <PageIntro
        eyebrow="Academics"
        title="Timetable"
        description="Weekly class schedule with subject and period mapping."
        right={
          <div className="flex gap-2">
            <Select defaultValue="8"><option value="8">Class 8</option></Select>
            <Select defaultValue="A"><option value="A">Section A</option></Select>
          </div>
        }
      />

      <Card title="Class 8-A · Weekly Schedule">
        <div className="overflow-x-auto">
          <table className="w-full text-[12.5px] border-separate border-spacing-1.5 min-w-[900px]">
            <thead>
              <tr>
                <th className="text-left text-slate-text/60 text-[11px] uppercase font-semibold px-2 w-24">Day</th>
                {periods.map((p) => (
                  <th key={p} className="text-slate-text/60 text-[10.5px] font-semibold pb-1">{p}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {days.map((day) => (
                <tr key={day}>
                  <td className="font-semibold text-ink text-[12.5px] px-2 whitespace-nowrap">{day}</td>
                  {data[day].map((subj, i) => (
                    <td key={i}>
                      <div className={`rounded-lg py-2.5 text-center font-semibold ${subjectColor[subj] || "bg-slate-50 text-slate-500"}`}>
                        {subj}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
