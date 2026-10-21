import { NextResponse } from "next/server";
import { churchDetails } from "@/config/church";

// Public pages use direct contact until a real delivery destination is configured.
export async function POST() {
  return NextResponse.json(
    {
      ok: false,
      error: `Online enquiries are unavailable. Please call ${churchDetails.phone}.`,
    },
    { status: 503 },
  );
}
