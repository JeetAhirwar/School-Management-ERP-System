import { useMemo, useState } from "react";
import { Check, X, Clock3, Download, CalendarCheck } from "lucide-react";
import { PageIntro, Card, Button, Select, Avatar, StatCard } from "../components/UI";
import { students } from "../data/students";
import { classes } from "../data/school";
import { AreaChart, Area, ResponsiveContainer, XAxis, Tooltip, CartesianGrid, YAxis } from "recharts";
import { attendanceTrend } from "../data/academics";

const classShortMap = { "Class 1":"1","Class 2":"2","Class 3":"3","Class 4":"4","Class 5":"5","Class 6":"6","Class 7":"7","Class 8":"8","Class 9":"9","Class 10":"10" };

export default function Attendance() {
  const [cls, setCls] = useState("8");
  const [section, setSection] = useState("A");
  const list = useMemo(
    () => students.filter((s) => s.class === cls && s.section === section),
    [cls, section]
  );
  const [marks, setMarks] = useState({});

  const setMark = (id, val) => setMarks((m) => ({ ...m, [id]: val }));
  const present = list.filter((s) => (marks[s.id] || "present") === "present").length;

  return (
    <div className="space-y-6">
      <PageIntro
        eyebrow="Academics"
        title="Attendance"
        description="Mark and monitor daily attendance across classes."
        right={
          <Button variant="outline"><Download size={15} /> Export Register</Button>
        }
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={CalendarCheck} label="School Average Today" value="96.2%" sub="1,024 of 1,065 present" accent="success" />
        <StatCard icon={Check} label="Selected Class Present" value={`${present}/${list.length}`} accent="amber" />
        <StatCard icon={Clock3} label="Late Arrivals" value="14" sub="Before 9:15 AM cutoff" accent="info" />
        <StatCard icon={X} label="On Leave (Approved)" value="9" accent="alert" />
      </div>

      <Card title="Weekly Attendance Trend">
        <ResponsiveContainer width="100%" height={180}>
          <AreaChart data={attendanceTrend} margin={{ left: -20 }}>
            <defs>
              <linearGradient id="a2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3F8F5F" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#3F8F5F" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EEEAE0" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#475467" }} axisLine={false} tickLine={false} />
            <YAxis domain={[80, 100]} tick={{ fontSize: 12, fill: "#475467" }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ borderRadius: 10, border: "1px solid #eee", fontSize: 12.5 }} />
            <Area type="monotone" dataKey="attendance" stroke="#3F8F5F" strokeWidth={2.5} fill="url(#a2)" />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      <Card
        title={`Mark Attendance — ${new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}`}
        action={
          <div className="flex gap-2">
            <Select value={cls} onChange={(e) => setCls(e.target.value)}>
              {["1","2","3","4","5","6","7","8","9","10"].map((c) => <option key={c} value={c}>Class {c}</option>)}
            </Select>
            <Select value={section} onChange={(e) => setSection(e.target.value)}>
              {["A","B","C"].map((s) => <option key={s} value={s}>Section {s}</option>)}
            </Select>
          </div>
        }
      >
        <div className="divide-y divide-black/[0.06]">
          {list.length === 0 && <p className="text-sm text-slate-text py-6 text-center">No students found for this class/section.</p>}
          {list.map((s) => {
            const status = marks[s.id] || "present";
            return (
              <div key={s.id} className="flex items-center gap-3 py-3">
                <Avatar src={s.avatar} name={s.name} size={36} />
                <div className="flex-1 min-w-0">
                  <p className="text-[13.5px] font-semibold text-ink truncate">{s.name}</p>
                  <p className="text-[11.5px] text-slate-text/60">Roll No. {s.roll}</p>
                </div>
                <div className="flex gap-1.5">
                  {[
                    { key: "present", label: "P", tone: "success" },
                    { key: "absent", label: "A", tone: "alert" },
                    { key: "late", label: "L", tone: "amber" },
                  ].map((btn) => (
                    <button
                      key={btn.key}
                      onClick={() => setMark(s.id, btn.key)}
                      className={`w-9 h-9 rounded-lg text-[12.5px] font-bold border transition-colors ${
                        status === btn.key
                          ? btn.tone === "success" ? "bg-success text-white border-success"
                          : btn.tone === "alert" ? "bg-alert text-white border-alert"
                          : "bg-amber text-ink border-amber"
                          : "bg-white text-slate-text/60 border-black/10 hover:bg-paper"
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        {list.length > 0 && (
          <div className="flex justify-end mt-4 pt-4 border-t border-black/[0.06]">
            <Button variant="amber">Save Attendance</Button>
          </div>
        )}
      </Card>
    </div>
  );
}
