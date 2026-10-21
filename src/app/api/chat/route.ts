import { NextResponse } from "next/server";
import { churchDetails } from "@/config/church";

// The old assistant used conflicting times and a 2025 event calendar.
export async function POST() {
  return NextResponse.json(
    {
      error: `Please contact Doxa directly on ${churchDetails.phone} for current church information.`,
    },
    { status: 503 },
  );
}
