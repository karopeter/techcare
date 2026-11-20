import type { Diagnostic } from "../types/patient";

export default function DiagnosticList({ items }: { items: Diagnostic[] }) {
    return (
      <section
       aria-labelledby="diagnostic-heading"
       className="rounded-2xl bg-white p-5"
      >
      <h2 id="diagnostic-heading" className="mb-8 text-2xl font-extrabold">
      Diagnostic List 
      </h2>

      <div className="thin-scroll max-h-[230px] overflow-y-auto pr-2">
        <table className="w-full table-fixed border-collapse text-left text-[14px]">
          <thead className="sticky top-0 bg-white">
            <tr className="bg-page">
             <th className="w-[30%] rounded-l-full px-4 py-3.5 font-bold">
                Problem/Diagnosis
             </th>
             <th className="w-[45%] px-4 py-3.5 font-bold">Description</th>
             <th className="w-[25%] rounded-r-full px-4 py-3.5 font-bold">
                Status
             </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr
               key={`${item.name}-${index}`}
               className="border-b border-black/5 last:border-none"
              >
                <td className="px-4 py-4">{item.name}</td>
                <td className="px-4 py-4">{item.description}</td>
                <td className="px-4 py-4">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </section>
    )
}