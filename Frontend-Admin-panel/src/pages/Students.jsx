import { useMemo, useState } from "react";
import { Search, Plus, X, Phone, Mail, MapPin, Droplet, Calendar } from "lucide-react";
import { PageIntro, Card, Button, Input, Select, Pill, statusTone, Avatar } from "../components/UI";
import { students } from "../data/students";

export default function Students() {
  const [query, setQuery] = useState("");
  const [cls, setCls] = useState("All");
  const [selected, setSelected] = useState(null);

  const classOptions = ["All", ...new Set(students.map((s) => s.class))];
  const filtered = useMemo(
    () =>
      students.filter(
        (s) =>
          (cls === "All" || s.class === cls) &&
          (s.name.toLowerCase().includes(query.toLowerCase()) || s.id.toLowerCase().includes(query.toLowerCase()))
      ),
    [query, cls]
  );

  return (
    <div className="space-y-6">
      <PageIntro
        eyebrow="Academics"
        title="Student Database"
        description={`${students.length} students enrolled across Nursery to Class 12.`}
        right={<Button variant="amber"><Plus size={15} /> Add Student</Button>}
      />

      <Card
        action={
          <div className="flex gap-2">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-text/40" />
              <Input placeholder="Search by name or ID..." value={query} onChange={(e) => setQuery(e.target.value)} className="pl-8 w-56" />
            </div>
            <Select value={cls} onChange={(e) => setCls(e.target.value)}>
              {classOptions.map((c) => <option key={c} value={c}>{c === "All" ? "All Classes" : `Class ${c}`}</option>)}
            </Select>
          </div>
        }
      >
        <div className="overflow-x-auto -mx-5">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="text-left text-slate-text/60 text-[11.5px] uppercase tracking-wide border-b border-black/[0.06]">
                <th className="px-5 py-2.5 font-semibold">Student</th>
                <th className="px-5 py-2.5 font-semibold">Class</th>
                <th className="px-5 py-2.5 font-semibold">Roll No.</th>
                <th className="px-5 py-2.5 font-semibold">Attendance</th>
                <th className="px-5 py-2.5 font-semibold">Fee Status</th>
                <th className="px-5 py-2.5 font-semibold">Contact</th>
              </tr>
            </thead>
            <tbody>
              {filtered.slice(0, 25).map((s) => (
                <tr key={s.id} onClick={() => setSelected(s)} className="border-b border-black/[0.04] hover:bg-paper/60 cursor-pointer">
                  <td className="px-5 py-2.5">
                    <div className="flex items-center gap-2.5">
                      <Avatar src={s.avatar} name={s.name} size={32} />
                      <div>
                        <p className="font-semibold text-ink">{s.name}</p>
                        <p className="text-[11px] text-slate-text/60">{s.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-2.5 text-slate-text">{s.class}-{s.section}</td>
                  <td className="px-5 py-2.5 text-slate-text">{s.roll}</td>
                  <td className="px-5 py-2.5">
                    <span className={`font-semibold ${s.attendance < 85 ? "text-alert" : "text-success"}`}>{s.attendance}%</span>
                  </td>
                  <td className="px-5 py-2.5"><Pill tone={statusTone(s.feeStatus)}>{s.feeStatus}</Pill></td>
                  <td className="px-5 py-2.5 text-slate-text whitespace-nowrap">{s.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && <p className="text-center text-sm text-slate-text py-8">No students match your search.</p>}
      </Card>

      {selected && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-end" onClick={() => setSelected(null)}>
          <div className="w-full max-w-md bg-white h-full overflow-y-auto scrollbar-thin p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-end mb-2">
              <button onClick={() => setSelected(null)} className="text-slate-text/50 hover:text-ink"><X size={20} /></button>
            </div>
            <div className="text-center mb-6">
              <img src={selected.avatar} alt={selected.name} className="w-20 h-20 rounded-2xl object-cover mx-auto" />
              <h3 className="font-display font-bold text-ink text-lg mt-3">{selected.name}</h3>
              <p className="text-[12.5px] text-slate-text/70">{selected.id} · Class {selected.class}-{selected.section} · Roll {selected.roll}</p>
              <div className="flex justify-center gap-2 mt-3">
                <Pill tone={statusTone(selected.feeStatus)}>{selected.feeStatus}</Pill>
                <Pill tone="info">{selected.house} House</Pill>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-paper rounded-xl p-3 text-center">
                  <p className="font-display text-xl font-bold text-ink">{selected.attendance}%</p>
                  <p className="text-[11px] text-slate-text/60">Attendance</p>
                </div>
                <div className="bg-paper rounded-xl p-3 text-center">
                  <p className="font-display text-xl font-bold text-ink">{selected.bloodGroup}</p>
                  <p className="text-[11px] text-slate-text/60">Blood Group</p>
                </div>
              </div>
              <div className="space-y-2.5 text-[13px]">
                <p className="flex items-center gap-2 text-slate-text"><Calendar size={14} className="text-slate-text/50" /> DOB: {selected.dob}</p>
                <p className="flex items-center gap-2 text-slate-text"><Phone size={14} className="text-slate-text/50" /> {selected.contact}</p>
                <p className="flex items-center gap-2 text-slate-text"><Mail size={14} className="text-slate-text/50" /> {selected.email}</p>
                <p className="flex items-center gap-2 text-slate-text"><MapPin size={14} className="text-slate-text/50" /> {selected.address}</p>
              </div>
              <div className="border-t border-black/[0.06] pt-4">
                <p className="text-[12px] font-semibold text-slate-text/60 uppercase mb-2">Parent / Guardian</p>
                <p className="text-[13px] text-ink font-medium">Father: {selected.fatherName}</p>
                <p className="text-[13px] text-ink font-medium mt-1">Mother: {selected.motherName}</p>
              </div>
              <Button variant="amber" className="w-full justify-center mt-2">View Full Profile</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
