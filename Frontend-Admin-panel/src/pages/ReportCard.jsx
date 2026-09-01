import { Printer, Download } from "lucide-react";
import { PageIntro, Card, Button, Select } from "../components/UI";
import { subjectResults } from "../data/academics";
import { students } from "../data/students";
import { school } from "../data/school";

export default function ReportCard() {
  const student = students[3];
  const total = subjectResults.reduce((a, s) => a + s.marks, 0);
  const maxTotal = subjectResults.reduce((a, s) => a + s.max, 0);
  const pct = ((total / maxTotal) * 100).toFixed(1);
  const grade = pct >= 90 ? "A1" : pct >= 80 ? "A2" : pct >= 70 ? "B1" : "B2";

  return (
    <div className="space-y-6">
      <PageIntro
        eyebrow="Academics"
        title="Report Card"
        description="Generate and print term-wise report cards for any student."
        right={
          <div className="flex gap-2">
            <Button variant="outline"><Download size={15} /> Download PDF</Button>
            <Button variant="amber" onClick={() => window.print()}><Printer size={15} /> Print</Button>
          </div>
        }
      />

      <Card
        action={
          <Select defaultValue={student.id}>
            {students.slice(0, 10).map((s) => (
              <option key={s.id} value={s.id}>{s.name} — Class {s.class}-{s.section}</option>
            ))}
          </Select>
        }
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center border-b-2 border-ink pb-4 mb-5">
            <p className="text-3xl">{school.logo}</p>
            <h2 className="font-display text-xl font-bold text-ink mt-1">{school.name}</h2>
            <p className="text-[11.5px] text-slate-text">{school.address}</p>
            <p className="text-[11px] text-slate-text/70">{school.affiliation}</p>
            <p className="font-display font-semibold text-amber-dark mt-2 text-[13px]">TERM 2 — PROGRESS REPORT · {school.session}</p>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <img src={student.avatar} alt={student.name} className="w-16 h-16 rounded-xl object-cover" />
            <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-[12.5px] flex-1">
              <p><span className="text-slate-text/60">Student Name:</span> <b className="text-ink">{student.name}</b></p>
              <p><span className="text-slate-text/60">Roll No.:</span> <b className="text-ink">{student.roll}</b></p>
              <p><span className="text-slate-text/60">Class:</span> <b className="text-ink">{student.class}-{student.section}</b></p>
              <p><span className="text-slate-text/60">House:</span> <b className="text-ink">{student.house}</b></p>
              <p><span className="text-slate-text/60">DOB:</span> <b className="text-ink">{student.dob}</b></p>
              <p><span className="text-slate-text/60">Attendance:</span> <b className="text-ink">{student.attendance}%</b></p>
            </div>
          </div>

          <table className="w-full text-[13px] border border-black/10 rounded-lg overflow-hidden mb-5">
            <thead>
              <tr className="bg-ink text-white text-left text-[11.5px] uppercase">
                <th className="px-4 py-2.5 font-semibold">Subject</th>
                <th className="px-4 py-2.5 font-semibold text-center">Marks Obtained</th>
                <th className="px-4 py-2.5 font-semibold text-center">Max Marks</th>
                <th className="px-4 py-2.5 font-semibold text-center">Grade</th>
              </tr>
            </thead>
            <tbody>
              {subjectResults.map((s) => {
                const g = s.marks >= 90 ? "A1" : s.marks >= 80 ? "A2" : s.marks >= 70 ? "B1" : "B2";
                return (
                  <tr key={s.subject} className="border-t border-black/[0.06]">
                    <td className="px-4 py-2.5 font-medium text-ink">{s.subject}</td>
                    <td className="px-4 py-2.5 text-center text-slate-text">{s.marks}</td>
                    <td className="px-4 py-2.5 text-center text-slate-text">{s.max}</td>
                    <td className="px-4 py-2.5 text-center font-semibold text-success">{g}</td>
                  </tr>
                );
              })}
              <tr className="border-t-2 border-ink bg-paper font-bold">
                <td className="px-4 py-2.5 text-ink">Total</td>
                <td className="px-4 py-2.5 text-center text-ink">{total}</td>
                <td className="px-4 py-2.5 text-center text-ink">{maxTotal}</td>
                <td className="px-4 py-2.5 text-center text-success">{grade}</td>
              </tr>
            </tbody>
          </table>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="rounded-xl bg-paper p-4 text-center">
              <p className="font-display text-2xl font-bold text-ink">{pct}%</p>
              <p className="text-[11px] text-slate-text/60 mt-0.5">Overall Percentage</p>
            </div>
            <div className="rounded-xl bg-paper p-4 text-center">
              <p className="font-display text-2xl font-bold text-ink">{grade}</p>
              <p className="text-[11px] text-slate-text/60 mt-0.5">Overall Grade</p>
            </div>
            <div className="rounded-xl bg-paper p-4 text-center">
              <p className="font-display text-2xl font-bold text-ink">6 / 42</p>
              <p className="text-[11px] text-slate-text/60 mt-0.5">Class Rank</p>
            </div>
          </div>

          <div>
            <p className="text-[12.5px] font-semibold text-ink mb-1">Class Teacher's Remark</p>
            <p className="text-[12.5px] text-slate-text italic">
              "{student.name.split(" ")[0]} has shown consistent improvement this term, particularly in analytical subjects. Encourage more practice in written expression."
            </p>
          </div>

          <div className="flex justify-between mt-10 pt-4 border-t border-black/10 text-[11.5px] text-slate-text">
            <p>Class Teacher's Signature</p>
            <p>Principal's Signature</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
