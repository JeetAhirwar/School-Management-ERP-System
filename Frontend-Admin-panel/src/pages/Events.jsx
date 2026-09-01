import { Plus, MapPin, Clock } from "lucide-react";
import { PageIntro, Card, Button, Pill } from "../components/UI";
import { events } from "../data/records";

export default function Events() {
  return (
    <div className="space-y-6">
      <PageIntro
        eyebrow="Admissions & Outreach"
        title="Events"
        description="Upcoming school events, celebrations and important dates."
        right={<Button variant="amber"><Plus size={15} /> Create Event</Button>}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.map((e) => (
          <Card key={e.id} className="overflow-hidden" bodyClassName="p-0">
            <img src={e.image} alt={e.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <Pill tone="amber">{e.category}</Pill>
              <h3 className="font-display font-bold text-ink text-[15.5px] mt-2 leading-snug">{e.title}</h3>
              <div className="mt-3 space-y-1.5 text-[12.5px] text-slate-text">
                <p className="flex items-center gap-1.5"><Clock size={13} /> {e.date} · {e.time}</p>
                <p className="flex items-center gap-1.5"><MapPin size={13} /> {e.venue}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
