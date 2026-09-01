import { Plus, Boxes, AlertTriangle, PackageCheck } from "lucide-react";
import { PageIntro, Card, Button, Pill, StatCard } from "../components/UI";
import { inventory } from "../data/academics";

export default function Inventory() {
  const low = inventory.filter((i) => i.stock < i.reorderLevel);
  return (
    <div className="space-y-6">
      <PageIntro
        eyebrow="Operations"
        title="Inventory Management"
        description="Track school supplies, lab equipment, sports gear and IT assets."
        right={<Button variant="amber"><Plus size={15} /> Add Item</Button>}
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Boxes} label="Total Items Tracked" value={inventory.length} accent="amber" />
        <StatCard icon={AlertTriangle} label="Below Reorder Level" value={low.length} sub="Needs restocking" accent="alert" />
        <StatCard icon={PackageCheck} label="Categories" value={new Set(inventory.map(i=>i.category)).size} accent="info" />
        <StatCard icon={Boxes} label="Last Restock" value="2 days ago" accent="success" />
      </div>

      <Card title="Inventory List">
        <div className="overflow-x-auto -mx-5">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="text-left text-slate-text/60 text-[11.5px] uppercase tracking-wide border-b border-black/[0.06]">
                <th className="px-5 py-2.5 font-semibold">Item</th>
                <th className="px-5 py-2.5 font-semibold">Category</th>
                <th className="px-5 py-2.5 font-semibold">Current Stock</th>
                <th className="px-5 py-2.5 font-semibold">Reorder Level</th>
                <th className="px-5 py-2.5 font-semibold">Last Restocked</th>
                <th className="px-5 py-2.5 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((i) => {
                const lowStock = i.stock < i.reorderLevel;
                const pct = Math.min(100, Math.round((i.stock / (i.reorderLevel * 2)) * 100));
                return (
                  <tr key={i.id} className="border-b border-black/[0.04] hover:bg-paper/60">
                    <td className="px-5 py-3 font-semibold text-ink">{i.item}</td>
                    <td className="px-5 py-3 text-slate-text">{i.category}</td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-1.5 rounded-full bg-black/[0.06] overflow-hidden">
                          <div className={`h-full rounded-full ${lowStock ? "bg-alert" : "bg-success"}`} style={{ width: `${pct}%` }} />
                        </div>
                        <span className="text-slate-text text-[12px]">{i.stock} {i.unit}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-slate-text">{i.reorderLevel} {i.unit}</td>
                    <td className="px-5 py-3 text-slate-text whitespace-nowrap">{i.lastRestocked}</td>
                    <td className="px-5 py-3">
                      <Pill tone={lowStock ? "alert" : "success"}>{lowStock ? "Reorder Now" : "In Stock"}</Pill>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
