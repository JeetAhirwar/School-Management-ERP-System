import { useState } from "react";
import { Bus, MapPin, User, Users, Navigation } from "lucide-react";
import { PageIntro, Card, Pill, statusTone, StatCard } from "../components/UI";
import { busRoutes } from "../data/academics";

export default function BusTracking() {
  const [selected, setSelected] = useState(busRoutes[0]);

  // Normalize lat/lng to a simple mock 2D map area
  const lats = busRoutes.map((b) => b.lat);
  const lngs = busRoutes.map((b) => b.lng);
  const minLat = Math.min(...lats), maxLat = Math.max(...lats);
  const minLng = Math.min(...lngs), maxLng = Math.max(...lngs);
  const posOf = (b) => ({
    left: `${10 + ((b.lng - minLng) / (maxLng - minLng || 1)) * 80}%`,
    top: `${10 + (1 - (b.lat - minLat) / (maxLat - minLat || 1)) * 80}%`,
  });

  return (
    <div className="space-y-6">
      <PageIntro
        eyebrow="Operations"
        title="Bus Tracking"
        description="Live location and occupancy of the school transport fleet."
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Bus} label="Active Buses" value="4 / 5" accent="success" />
        <StatCard icon={Users} label="Students Onboard" value="178" accent="amber" />
        <StatCard icon={Navigation} label="On-Time Routes" value="3" accent="info" />
        <StatCard icon={MapPin} label="Delayed Routes" value="1" accent="alert" />
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        <Card title="Live Fleet Map" className="lg:col-span-2" bodyClassName="p-0">
          <div className="relative h-[420px] bg-[#EDEAE0] rounded-b-2xl overflow-hidden">
            <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
              {[...Array(8)].map((_, i) => <line key={`v${i}`} x1={`${i * 13}%`} y1="0" x2={`${i * 13}%`} y2="100%" stroke="#C9C4B4" strokeWidth="1" />)}
              {[...Array(8)].map((_, i) => <line key={`h${i}`} x1="0" y1={`${i * 13}%`} x2="100%" y2={`${i * 13}%`} stroke="#C9C4B4" strokeWidth="1" />)}
            </svg>
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur rounded-lg px-3 py-1.5 text-[11.5px] font-semibold text-ink shadow-sm">
              📍 Indore City Map — Live Simulation
            </div>
            {busRoutes.map((b) => {
              const pos = posOf(b);
              const active = selected.id === b.id;
              return (
                <button
                  key={b.id}
                  onClick={() => setSelected(b)}
                  style={pos}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-transform ${
                    active ? "scale-125 bg-amber" : b.status === "Delayed" ? "bg-alert" : b.status === "Not Started" ? "bg-slate-400" : "bg-success"
                  }`}>
                    <Bus size={17} className="text-white" />
                  </div>
                  <div className="absolute top-11 left-1/2 -translate-x-1/2 bg-ink text-white text-[10.5px] font-semibold px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {b.id}
                  </div>
                </button>
              );
            })}
          </div>
        </Card>

        <Card title={`${selected.id} Details`}>
          <div className="space-y-4">
            <Pill tone={statusTone(selected.status)}>{selected.status}</Pill>
            <div>
              <p className="text-[12px] text-slate-text/60">Route</p>
              <p className="text-[13.5px] font-semibold text-ink">{selected.route}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-paper p-3">
                <p className="text-[11px] text-slate-text/60">Occupancy</p>
                <p className="font-display font-bold text-ink text-lg">{selected.occupied}/{selected.capacity}</p>
              </div>
              <div className="rounded-xl bg-paper p-3">
                <p className="text-[11px] text-slate-text/60">ETA to School</p>
                <p className="font-display font-bold text-ink text-lg">{selected.eta}</p>
              </div>
            </div>
            <div className="space-y-2 text-[13px] pt-2 border-t border-black/[0.06]">
              <p className="flex items-center gap-2 text-slate-text"><User size={14} className="text-slate-text/50" /> Driver: <span className="text-ink font-medium">{selected.driver}</span></p>
              <p className="flex items-center gap-2 text-slate-text"><User size={14} className="text-slate-text/50" /> Conductor: <span className="text-ink font-medium">{selected.conductor}</span></p>
              <p className="flex items-center gap-2 text-slate-text"><MapPin size={14} className="text-slate-text/50" /> Last Stop: <span className="text-ink font-medium">{selected.lastStop}</span></p>
            </div>
          </div>
        </Card>
      </div>

      <Card title="All Routes">
        <div className="overflow-x-auto -mx-5">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="text-left text-slate-text/60 text-[11.5px] uppercase tracking-wide border-b border-black/[0.06]">
                <th className="px-5 py-2.5 font-semibold">Bus ID</th>
                <th className="px-5 py-2.5 font-semibold">Route</th>
                <th className="px-5 py-2.5 font-semibold">Driver</th>
                <th className="px-5 py-2.5 font-semibold">Occupancy</th>
                <th className="px-5 py-2.5 font-semibold">ETA</th>
                <th className="px-5 py-2.5 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {busRoutes.map((b) => (
                <tr key={b.id} onClick={() => setSelected(b)} className="border-b border-black/[0.04] hover:bg-paper/60 cursor-pointer">
                  <td className="px-5 py-3 font-semibold text-ink">{b.id}</td>
                  <td className="px-5 py-3 text-slate-text">{b.route}</td>
                  <td className="px-5 py-3 text-slate-text">{b.driver}</td>
                  <td className="px-5 py-3 text-slate-text">{b.occupied}/{b.capacity}</td>
                  <td className="px-5 py-3 text-slate-text">{b.eta}</td>
                  <td className="px-5 py-3"><Pill tone={statusTone(b.status)}>{b.status}</Pill></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
