import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "verafied-vets",
    timestamp: new Date().toISOString(),
  });
}
