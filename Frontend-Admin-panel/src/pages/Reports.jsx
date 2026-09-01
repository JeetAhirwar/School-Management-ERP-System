import { Download, FileBarChart2 } from "lucide-react";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend,
} from "recharts";
import { PageIntro, Card, Button, StatCard } from "../components/UI";
import { classStrength, feeCollectionTrend, attendanceTrend } from "../data/academics";
import { Users, Wallet, GraduationCap, TrendingUp } from "lucide-react";

const PIE_COLORS = ["#16213E", "#E8A33D", "#3F8F5F", "#3B6FA0", "#D65A4A"];

const reportsList = [
  { name: "Monthly Attendance Summary", type: "PDF", size: "212 KB", updated: "1 Sep 2026" },
  { name: "Term 2 Fee Collection Report", type: "XLSX", size: "148 KB", updated: "31 Aug 2026" },
  { name: "Class-wise Examination Analysis", type: "PDF", size: "540 KB", updated: "29 Aug 2026" },
  { name: "Admission Funnel — Aug 2026", type: "XLSX", size: "88 KB", updated: "28 Aug 2026" },
  { name: "Inventory Stock Audit", type: "PDF", size: "165 KB", updated: "25 Aug 2026" },
  { name: "Transport Utilization Report", type: "XLSX", size: "96 KB", updated: "22 Aug 2026" },
];

export default function Reports() {
  return (
    <div className="space-y-6">
      <PageIntro
        eyebrow="Insights"
        title="Reports & Analytics"
        description="School-wide performance across academics, finance and operations."
        right={<Button variant="outline"><Download size={15} /> Export All</Button>}
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Users} label="Total Enrollment" value="1,065" sub="+4.2% vs last session" accent="amber" />
        <StatCard icon={TrendingUp} label="Avg. Attendance" value="93.1%" sub="Across all classes" accent="success" />
        <StatCard icon={Wallet} label="Fee Realization" value="68%" sub="Term 2 to date" accent="info" />
        <StatCard icon={GraduationCap} label="Pass Percentage" value="97.4%" sub="Last annual result" accent="alert" />
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        <Card title="Enrollment by Section">
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={classStrength} dataKey="value" nameKey="name" outerRadius={95} label={(d) => d.value}>
                {classStrength.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
              </Pie>
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ borderRadius: 10, border: "1px solid #eee", fontSize: 12.5 }} />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Attendance Trend (6 Months)">
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={attendanceTrend} margin={{ left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EEEAE0" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#475467" }} axisLine={false} tickLine={false} />
              <YAxis domain={[80, 100]} tick={{ fontSize: 12, fill: "#475467" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: 10, border: "1px solid #eee", fontSize: 12.5 }} />
              <Line type="monotone" dataKey="attendance" stroke="#16213E" strokeWidth={2.5} dot={{ r: 4, fill: "#E8A33D" }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card title="Fee Collection vs Pending (5 Months)">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={feeCollectionTrend} margin={{ left: -10 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EEEAE0" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#475467" }} axisLine={false} tickLine={false} />
            <YAxis tickFormatter={(v) => `₹${v / 100000}L`} tick={{ fontSize: 11, fill: "#475467" }} axisLine={false} tickLine={false} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Tooltip formatter={(v) => `₹${v.toLocaleString("en-IN")}`} contentStyle={{ borderRadius: 10, border: "1px solid #eee", fontSize: 12.5 }} />
            <Bar dataKey="collected" fill="#3F8F5F" radius={[6, 6, 0, 0]} name="Collected" />
            <Bar dataKey="pending" fill="#D65A4A" radius={[6, 6, 0, 0]} name="Pending" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card title="Generated Reports">
        <div className="divide-y divide-black/[0.06]">
          {reportsList.map((r) => (
            <div key={r.name} className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-info/10 text-info flex items-center justify-center shrink-0">
                  <FileBarChart2 size={16} />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-ink">{r.name}</p>
                  <p className="text-[11.5px] text-slate-text/60">{r.type} · {r.size} · Updated {r.updated}</p>
                </div>
              </div>
              <button className="text-slate-text/50 hover:text-ink"><Download size={16} /></button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
