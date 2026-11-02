import { Check, Minus } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import { compareRows } from "@/data/plans";

function Cell({ yes }) {
  return (
    <td className="px-4 py-4 text-center">
      {yes ? (
        <Check size={20} strokeWidth={3} className="mx-auto text-brand" aria-label="Included" />
      ) : (
        <Minus size={20} className="mx-auto text-slate-300" aria-label="Not included" />
      )}
    </td>
  );
}

export default function ComparePlans() {
  return (
    <section className="py-16">
      <Container className="max-w-4xl">
        <SectionHeading
          badge="Compare"
          title="Compare"
          highlight="Plans"
          subtitle="See exactly what you get with each membership."
        />

        <FadeIn className="mt-12 overflow-x-auto rounded-3xl border border-orange-100 bg-white">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="border-b border-orange-100">
                <th className="px-6 py-4 text-left font-extrabold">Feature</th>
                <th className="px-4 py-4 text-center font-extrabold text-brand">Basic</th>
                <th className="px-4 py-4 text-center font-extrabold text-brand">Pro</th>
                <th className="px-4 py-4 text-center font-extrabold text-brand">Elite</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-orange-50 transition-colors last:border-0 hover:bg-orange-50/60"
                >
                  <td className="px-6 py-4 font-semibold">{row.label}</td>
                  <Cell yes={row.basic} />
                  <Cell yes={row.pro} />
                  <Cell yes={row.elite} />
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>
      </Container>
    </section>
  );
}