import { useState } from "react";
import { Send, Users, User, Megaphone } from "lucide-react";
import { PageIntro, Card, Button, Select, Pill } from "../components/UI";
import { messages } from "../data/records";

export default function Communication() {
  const [mode, setMode] = useState("one-to-one");
  const [selected, setSelected] = useState(messages[0]);

  return (
    <div className="space-y-6">
      <PageIntro
        eyebrow="Admissions & Outreach"
        title="Communication"
        description="Send one-to-one messages to a parent or broadcast announcements to a class, grade, or the whole school."
      />

      <div className="grid lg:grid-cols-3 gap-5">
        <Card title="Inbox" className="lg:col-span-1 max-h-[560px] flex flex-col">
          <div className="space-y-1.5 -mx-1 overflow-y-auto scrollbar-thin">
            {messages.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelected(m)}
                className={`w-full text-left p-3 rounded-xl transition-colors ${
                  selected.id === m.id ? "bg-amber/15" : "hover:bg-paper"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[12.5px] font-semibold text-ink truncate flex items-center gap-1.5">
                    {m.type === "broadcast" ? <Megaphone size={12} className="text-info shrink-0" /> : <User size={12} className="text-slate-text/50 shrink-0" />}
                    {m.from}
                  </p>
                  {m.unread && <span className="w-1.5 h-1.5 rounded-full bg-alert shrink-0" />}
                </div>
                <p className="text-[12.5px] font-medium text-ink/80 truncate">{m.subject}</p>
                <p className="text-[11.5px] text-slate-text/60 truncate mt-0.5">{m.preview}</p>
                <p className="text-[10.5px] text-slate-text/40 mt-1">{m.date} · {m.time}</p>
              </button>
            ))}
          </div>
        </Card>

        <Card title="Message" className="lg:col-span-2">
          <div className="border-b border-black/[0.06] pb-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Pill tone={selected.type === "broadcast" ? "info" : "amber"}>
                {selected.type === "broadcast" ? "Broadcast" : "One-to-one"}
              </Pill>
              <span className="text-[11.5px] text-slate-text/50">{selected.date} · {selected.time}</span>
            </div>
            <h3 className="font-display font-bold text-ink text-lg">{selected.subject}</h3>
            <p className="text-[12.5px] text-slate-text/70 mt-1">From <b className="text-ink">{selected.from}</b> to <b className="text-ink">{selected.to}</b></p>
          </div>
          <p className="text-[13.5px] text-slate-text leading-relaxed mb-8">{selected.preview} Please reach out to the class teacher during visiting hours (3:30–4:15 PM) for a detailed discussion, or reply directly to this message.</p>

          <div className="border-t border-black/[0.06] pt-4">
            <div className="flex gap-2 mb-3">
              <button
                onClick={() => setMode("one-to-one")}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-[12.5px] font-semibold border ${mode === "one-to-one" ? "bg-ink text-white border-ink" : "border-black/10 text-slate-text"}`}
              >
                <User size={14} /> Reply to Parent
              </button>
              <button
                onClick={() => setMode("broadcast")}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-[12.5px] font-semibold border ${mode === "broadcast" ? "bg-ink text-white border-ink" : "border-black/10 text-slate-text"}`}
              >
                <Users size={14} /> Broadcast Instead
              </button>
            </div>
            {mode === "broadcast" && (
              <Select className="mb-3 w-full">
                <option>Send to: All Parents</option>
                <option>Send to: Class 8 Parents</option>
                <option>Send to: Class 8-A Parents</option>
                <option>Send to: All Staff</option>
                <option>Send to: Bus Route 4 Parents</option>
              </Select>
            )}
            <textarea
              rows={3}
              placeholder="Type your message..."
              className="w-full rounded-lg border border-black/10 p-3 text-[13px] outline-none focus:border-ink/40"
              defaultValue={mode === "one-to-one" ? "Thank you for the update — will follow up during the PTM." : ""}
            />
            <div className="flex justify-end mt-3">
              <Button variant="amber"><Send size={14} /> Send Message</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
