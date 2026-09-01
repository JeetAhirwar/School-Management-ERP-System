import { useState } from "react";
import { ShieldCheck, CreditCard, Smartphone, Landmark, CheckCircle2 } from "lucide-react";
import { PageIntro, Card, Button, Pill } from "../components/UI";
import { feeStructure } from "../data/academics";
import { students } from "../data/students";

const methods = [
  { key: "upi", label: "UPI", icon: Smartphone, desc: "Pay via Google Pay, PhonePe, Paytm" },
  { key: "card", label: "Debit / Credit Card", icon: CreditCard, desc: "Visa, Mastercard, RuPay accepted" },
  { key: "netbanking", label: "Net Banking", icon: Landmark, desc: "All major Indian banks" },
];

export default function OnlinePayment() {
  const [method, setMethod] = useState("upi");
  const [paid, setPaid] = useState(false);
  const student = students[6];
  const total = feeStructure.reduce((a, f) => a + f.termAmount, 0);

  return (
    <div className="space-y-6">
      <PageIntro
        eyebrow="Finance"
        title="Online Fees Payment"
        description="Secure, parent-facing checkout for term fee payments."
      />

      <div className="grid lg:grid-cols-3 gap-5">
        <Card title="Fee Summary" className="lg:col-span-1 h-fit">
          <div className="flex items-center gap-3 pb-4 mb-4 border-b border-black/[0.06]">
            <img src={student.avatar} alt={student.name} className="w-12 h-12 rounded-xl object-cover" />
            <div>
              <p className="font-semibold text-ink text-[13.5px]">{student.name}</p>
              <p className="text-[11.5px] text-slate-text/60">{student.id} · Class {student.class}-{student.section}</p>
            </div>
          </div>
          <div className="space-y-2">
            {feeStructure.map((f) => (
              <div key={f.head} className="flex justify-between text-[13px]">
                <span className="text-slate-text">{f.head}</span>
                <span className="text-ink font-medium">₹{f.termAmount.toLocaleString("en-IN")}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between pt-3 mt-3 border-t border-black/[0.06] font-bold text-ink">
            <span>Total (Term 2)</span>
            <span className="font-display">₹{total.toLocaleString("en-IN")}</span>
          </div>
        </Card>

        <Card className="lg:col-span-2">
          {!paid ? (
            <>
              <h3 className="font-display font-bold text-ink mb-4">Choose Payment Method</h3>
              <div className="grid sm:grid-cols-3 gap-3 mb-6">
                {methods.map((m) => (
                  <button
                    key={m.key}
                    onClick={() => setMethod(m.key)}
                    className={`text-left p-4 rounded-xl border transition-colors ${
                      method === m.key ? "border-amber bg-amber/10" : "border-black/10 hover:border-black/20"
                    }`}
                  >
                    <m.icon size={20} className={method === m.key ? "text-amber-dark" : "text-slate-text/60"} />
                    <p className="font-semibold text-ink text-[13px] mt-2">{m.label}</p>
                    <p className="text-[11.5px] text-slate-text/60 mt-0.5">{m.desc}</p>
                  </button>
                ))}
              </div>

              {method === "upi" && (
                <div className="mb-6">
                  <label className="text-[12.5px] font-semibold text-ink mb-1.5 block">UPI ID</label>
                  <input placeholder="yourname@upi" className="w-full px-3.5 py-2.5 rounded-lg border border-black/10 text-[13px] outline-none focus:border-ink/40" />
                </div>
              )}
              {method === "card" && (
                <div className="mb-6 space-y-3">
                  <input placeholder="Card Number" className="w-full px-3.5 py-2.5 rounded-lg border border-black/10 text-[13px] outline-none focus:border-ink/40" />
                  <div className="grid grid-cols-2 gap-3">
                    <input placeholder="MM / YY" className="px-3.5 py-2.5 rounded-lg border border-black/10 text-[13px] outline-none focus:border-ink/40" />
                    <input placeholder="CVV" className="px-3.5 py-2.5 rounded-lg border border-black/10 text-[13px] outline-none focus:border-ink/40" />
                  </div>
                </div>
              )}
              {method === "netbanking" && (
                <div className="mb-6">
                  <label className="text-[12.5px] font-semibold text-ink mb-1.5 block">Select Bank</label>
                  <select className="w-full px-3.5 py-2.5 rounded-lg border border-black/10 text-[13px] outline-none focus:border-ink/40">
                    <option>State Bank of India</option>
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>Axis Bank</option>
                  </select>
                </div>
              )}

              <div className="flex items-center gap-2 text-[12px] text-slate-text/60 mb-4">
                <ShieldCheck size={15} className="text-success" /> 256-bit encrypted, PCI-DSS compliant payment gateway
              </div>
              <Button variant="amber" className="w-full justify-center" onClick={() => setPaid(true)}>
                Pay ₹{total.toLocaleString("en-IN")}
              </Button>
            </>
          ) : (
            <div className="text-center py-10">
              <CheckCircle2 size={52} className="text-success mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-ink">Payment Successful</h3>
              <p className="text-[13px] text-slate-text mt-1.5">₹{total.toLocaleString("en-IN")} paid for {student.name}</p>
              <Pill tone="success">Receipt RCPT-2026-0947</Pill>
              <div className="flex justify-center gap-3 mt-6">
                <Button variant="outline">Download Receipt</Button>
                <Button variant="ghost" onClick={() => setPaid(false)}>Make Another Payment</Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
