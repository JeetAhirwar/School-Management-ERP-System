import { Plus, Wallet, TrendingUp, AlertTriangle, Receipt } from "lucide-react";
import { PageIntro, Card, Button, Pill, statusTone, StatCard } from "../components/UI";
import { feeStructure, feeTransactions } from "../data/academics";

export default function FeesCollection() {
  const totalTerm = feeStructure.reduce((a, f) => a + f.termAmount, 0);
  return (
    <div className="space-y-6">
      <PageIntro
        eyebrow="Finance"
        title="Fees Collection"
        description="Track payments, dues and receipts across the school."
        right={<Button variant="amber"><Plus size={15} /> Record Payment</Button>}
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Wallet} label="Collected (Term 2)" value="₹16.9L" sub="of ₹24.8L expected" accent="success" />
        <StatCard icon={TrendingUp} label="Collection Rate" value="68%" sub="+6% vs last term" accent="amber" />
        <StatCard icon={AlertTriangle} label="Overdue Accounts" value="42" sub="Past due date" accent="alert" />
        <StatCard icon={Receipt} label="Receipts Issued" value="892" sub="This term" accent="info" />
      </div>

      <Card title="Term 2 Fee Structure (per student)">
        <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {feeStructure.map((f) => (
            <div key={f.head} className="rounded-xl bg-paper p-3.5">
              <p className="text-[11.5px] text-slate-text/70">{f.head}</p>
              <p className="font-display font-bold text-ink text-lg mt-1">₹{f.termAmount.toLocaleString("en-IN")}</p>
            </div>
          ))}
          <div className="rounded-xl bg-ink p-3.5 text-white">
            <p className="text-[11.5px] text-white/60">Total per Student</p>
            <p className="font-display font-bold text-lg mt-1">₹{totalTerm.toLocaleString("en-IN")}</p>
          </div>
        </div>
      </Card>

      <Card title="Recent Transactions">
        <div className="overflow-x-auto -mx-5">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="text-left text-slate-text/60 text-[11.5px] uppercase tracking-wide border-b border-black/[0.06]">
                <th className="px-5 py-2.5 font-semibold">Receipt No.</th>
                <th className="px-5 py-2.5 font-semibold">Student</th>
                <th className="px-5 py-2.5 font-semibold">Class</th>
                <th className="px-5 py-2.5 font-semibold">Term</th>
                <th className="px-5 py-2.5 font-semibold">Amount</th>
                <th className="px-5 py-2.5 font-semibold">Mode</th>
                <th className="px-5 py-2.5 font-semibold">Date</th>
                <th className="px-5 py-2.5 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {feeTransactions.map((t) => (
                <tr key={t.id} className="border-b border-black/[0.04] hover:bg-paper/60">
                  <td className="px-5 py-3 font-mono text-[12px] text-slate-text">{t.receipt}</td>
                  <td className="px-5 py-3 font-semibold text-ink">{t.student}</td>
                  <td className="px-5 py-3 text-slate-text">{t.class}</td>
                  <td className="px-5 py-3 text-slate-text">{t.term}</td>
                  <td className="px-5 py-3 text-slate-text font-medium">{t.amount ? `₹${t.amount.toLocaleString("en-IN")}` : "—"}</td>
                  <td className="px-5 py-3 text-slate-text">{t.mode}</td>
                  <td className="px-5 py-3 text-slate-text whitespace-nowrap">{t.date}</td>
                  <td className="px-5 py-3"><Pill tone={statusTone(t.status)}>{t.status}</Pill></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
