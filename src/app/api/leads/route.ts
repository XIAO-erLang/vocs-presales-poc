import { NextResponse } from "next/server";
import type { LeadPayload } from "@/lib/types";

export async function POST(request: Request) {
  const payload = (await request.json()) as LeadPayload;

  console.log("[mock lead]", {
    ...payload,
    createdAt: new Date().toISOString()
  });

  // TODO: Supabase
  // 1. Install @supabase/supabase-js.
  // 2. Add NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.
  // 3. Insert payload into a leads table.
  // 4. Add validation and rate limiting before public launch.

  return NextResponse.json({ ok: true });
}
