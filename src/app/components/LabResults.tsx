import { DownloadIcon } from "./Icons";

export default function LabResults({ results }: { results: string[] }) {
    return (
     <section
      aria-labelledby="lab-heading"
      className="shrink-0 rounded-2xl bg-white p-5"
     >
     <h2 id="lab-heading" className="mb-4 text-2xl font-extrabold">
       Lab Results
     </h2>

     <ul className="thin-scroll max-h-[250px] overflow-y-auto pr-2">
      {results.map((result) => (
        <li key={result}>
          <button
           type="button"
           className="flex w-full items-center justify-between px-3 py-2.5 text-left text-[13px] hover:bg-page"
           aria-label={`Download ${result}`}
          >
           {result}
           <DownloadIcon className="h-5 w-5" />
          </button>
        </li>
      ))}
     </ul>
     </section>
    );
}