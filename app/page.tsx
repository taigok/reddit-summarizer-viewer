import SummariesTable from "./components/summaries-table";

import { headers } from "next/headers";

export default async function Home() {
  // SSR: get absolute URL using headers
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const url = `${protocol}://${host}/api/summaries`;
  const res = await fetch(url, { cache: "no-store" });
  const summaries = await res.json();
  return (
    <main className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Summaries</h1>
      <SummariesTable summaries={summaries} />
    </main>
  );
}


