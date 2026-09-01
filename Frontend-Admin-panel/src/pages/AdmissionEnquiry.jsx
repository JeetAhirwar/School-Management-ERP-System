import { useState } from "react";
import { Plus, Phone, Search } from "lucide-react";
import { PageIntro, Card, Button, Input, Pill, statusTone, StatCard } from "../components/UI";
import { admissionEnquiries } from "../data/records";
import { UserPlus, PhoneCall, CalendarCheck2, XCircle } from "lucide-react";

export default function AdmissionEnquiry() {
  const [query, setQuery] = useState("");
  const filtered = admissionEnquiries.filter((e) =>
    (e.childName + e.parentName + e.classApplied).toLowerCase().includes(query.toLowerCase())
  );

  const counts = {
    total: admissionEnquiries.length,
    confirmed: admissionEnquiries.filter((e) => e.status === "Admission Confirmed").length,
    scheduled: admissionEnquiries.filter((e) => e.status === "Campus Visit Scheduled").length,
    declined: admissionEnquiries.filter((e) => e.status === "Declined").length,
  };

  return (
    <div className="space-y-6">
      <PageIntro
        eyebrow="Admissions & Outreach"
        title="Admission Enquiry"
        description="Track prospective families from first enquiry to confirmed admission."
        right={<Button variant="amber"><Plus size={15} /> New Enquiry</Button>}
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={UserPlus} label="Total Enquiries" value={counts.total} sub="This admission cycle" accent="amber" />
        <StatCard icon={CalendarCheck2} label="Visits Scheduled" value={counts.scheduled} accent="info" />
        <StatCard icon={PhoneCall} label="Confirmed Admissions" value={counts.confirmed} accent="success" />
        <StatCard icon={XCircle} label="Declined" value={counts.declined} accent="alert" />
      </div>

      <Card
        title="All Enquiries"
        action={
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-text/40" />
            <Input placeholder="Search enquiries..." value={query} onChange={(e) => setQuery(e.target.value)} className="pl-8 w-52" />
          </div>
        }
      >
        <div className="overflow-x-auto -mx-5">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="text-left text-slate-text/60 text-[11.5px] uppercase tracking-wide border-b border-black/[0.06]">
                <th className="px-5 py-2.5 font-semibold">Child</th>
                <th className="px-5 py-2.5 font-semibold">Parent</th>
                <th className="px-5 py-2.5 font-semibold">Class Applied</th>
                <th className="px-5 py-2.5 font-semibold">Contact</th>
                <th className="px-5 py-2.5 font-semibold">Source</th>
                <th className="px-5 py-2.5 font-semibold">Enquiry Date</th>
                <th className="px-5 py-2.5 font-semibold">Follow-up</th>
                <th className="px-5 py-2.5 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((e) => (
                <tr key={e.id} className="border-b border-black/[0.04] hover:bg-paper/60">
                  <td className="px-5 py-3 font-semibold text-ink">{e.childName}</td>
                  <td className="px-5 py-3 text-slate-text">{e.parentName}</td>
                  <td className="px-5 py-3 text-slate-text">{e.classApplied}</td>
                  <td className="px-5 py-3 text-slate-text whitespace-nowrap"><span className="inline-flex items-center gap-1"><Phone size={12} />{e.contact}</span></td>
                  <td className="px-5 py-3 text-slate-text">{e.source}</td>
                  <td className="px-5 py-3 text-slate-text whitespace-nowrap">{e.date}</td>
                  <td className="px-5 py-3 text-slate-text whitespace-nowrap">{e.followUp}</td>
                  <td className="px-5 py-3"><Pill tone={statusTone(e.status)}>{e.status}</Pill></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
