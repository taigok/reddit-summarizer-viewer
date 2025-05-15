import { NextResponse } from 'next/server';
// @ts-ignore
import sqlite3 from 'sqlite3';
// @ts-ignore
import { open } from 'sqlite';

export async function GET() {
  // ダミーデータ（10件以上）
  const summaries = Array.from({ length: 15 }).map((_, i) => ({
    id: `dummy${i+1}`,
    title: `Sample Title ${i+1}`,
    summary: `This is a summary for post #${i+1}. It contains example text and details for demonstration purposes. 例文データ${i+1}。` + (i % 3 === 0 ? " さらに日本語の説明も含みます。" : ""),
    url: `https://example.com/post/${i+1}`,
    tools: Array.from({ length: (i % 4) + 1 }).map((_, j) => ({
      id: i * 10 + j,
      summary_id: `dummy${i+1}`,
      brand: ["GoLite", "Nitecore", "Apple", "Patagonia", "Zpacks"][j % 5],
      name: ["Shangri-La 3", "NB10000", "Apple Watch", "Capiline Air Hoody", "Pivot Solo"][j % 5],
      type: ["Tent", "Other", "Watch", "Hoody", "Tent"][j % 5]
    }))
  }));
  return NextResponse.json(summaries);
}


