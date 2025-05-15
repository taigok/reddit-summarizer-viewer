"use client";
import * as React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type Tool = {
  id: number;
  summary_id: string;
  brand?: string;
  name?: string;
  type?: string;
};

type Summary = {
  id: string;
  title?: string;
  summary?: string;
  url?: string;
  tools: Tool[];
};

export default function SummariesTable({ summaries }: { summaries: Summary[] }) {
  // typeごとに色分けマッピング
  const typeColorMap: Record<string, string> = {
    TENT: "bg-green-100 text-green-800",
    TARP: "bg-green-200 text-green-900",
    TENT_ACCESSORY: "bg-green-50 text-green-700",
    BACKPACK: "bg-blue-100 text-blue-800",
    SACK_POUCH: "bg-blue-200 text-blue-900",
    BACKPACK_ACCESSORY: "bg-blue-50 text-blue-700",
    TRAVEL_BAG: "bg-blue-300 text-blue-900",
    SLEEPING_BAG: "bg-indigo-100 text-indigo-800",
    BIVY: "bg-indigo-200 text-indigo-900",
    HAMMOCK: "bg-indigo-300 text-indigo-900",
    MAT: "bg-indigo-50 text-indigo-700",
    PILLOW: "bg-indigo-50 text-indigo-700",
    GROUNDSHEET: "bg-indigo-50 text-indigo-700",
    SLEEP_ACCESSORY: "bg-indigo-50 text-indigo-700",
    TOPS: "bg-pink-100 text-pink-800",
    TSHIRT: "bg-pink-200 text-pink-900",
    SHELL: "bg-pink-300 text-pink-900",
    INSULATION: "bg-pink-50 text-pink-700",
    BOTTOMS: "bg-yellow-100 text-yellow-800",
    PANTS: "bg-yellow-200 text-yellow-900",
    HEADGEAR: "bg-orange-100 text-orange-800",
    EYEWEAR: "bg-orange-200 text-orange-900",
    NECKWEAR: "bg-orange-50 text-orange-700",
    GLOVES: "bg-orange-50 text-orange-700",
    SOCKS: "bg-orange-50 text-orange-700",
    SHOES: "bg-orange-300 text-orange-900",
    BIKE_BAG: "bg-cyan-100 text-cyan-800",
    BIKE_ACCESSORY: "bg-cyan-200 text-cyan-900",
    COOKER: "bg-red-100 text-red-800",
    CUTLERY: "bg-red-200 text-red-900",
    TABLE: "bg-red-50 text-red-700",
    STOVE: "bg-red-300 text-red-900",
    FIRE: "bg-red-400 text-red-900",
    BOTTLE_PURIFIER: "bg-teal-100 text-teal-800",
    STUFF_SACK: "bg-gray-200 text-gray-800",
    FIELD_ACCESSORY: "bg-gray-300 text-gray-900",
    KNIFE_TOOL: "bg-gray-400 text-gray-900",
    WALLET: "bg-gray-50 text-gray-700",
    UMBRELLA: "bg-gray-50 text-gray-700",
    CRAMPONS: "bg-gray-50 text-gray-700",
    EMERGENCY: "bg-gray-900 text-white",
    LANTERN_HEADLIGHT: "bg-yellow-300 text-yellow-900",
    FOOD: "bg-lime-100 text-lime-800",
    ALCOHOL: "bg-lime-200 text-lime-900",
    OTHER: "bg-gray-100 text-gray-800",
  };
  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-48 max-w-xs truncate">Title</TableHead>
            <TableHead className="w-64 max-w-md truncate">Summary</TableHead>
            <TableHead className="w-48 max-w-xs truncate">Tools</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {summaries.map((s) => (
            <TableRow key={s.id}>
              <TableCell className="max-w-xs truncate" title={s.title}>
                {s.url ? (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-600"
                    title={s.url}
                  >
                    {s.title}
                  </a>
                ) : (
                  s.title
                )}
              </TableCell>
              <TableCell className="max-w-md whitespace-pre-line break-words truncate" title={s.summary}>{s.summary}</TableCell>
              <TableCell className="max-w-xs truncate">
                {s.tools && s.tools.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {s.tools.map((t) => {
                      const typeKey = (t.type || "").replace(/\s|\//g, "_").toUpperCase();
                      const badgeColor = typeColorMap[typeKey] || "bg-gray-200 text-gray-800";
                      return (
                        <span
                          key={t.id}
                          className={`inline-block px-2 py-1 rounded text-xs font-semibold cursor-pointer ${badgeColor}`}
                          title={`ブランド: ${t.brand || "-"}\n名前: ${t.name || "-"}\nタイプ: ${t.type || "-"}`}
                        >
                          {t.name || t.brand || t.type || "-"}
                        </span>
                      );
                    })}
                  </div>
                ) : (
                  <span>-</span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
