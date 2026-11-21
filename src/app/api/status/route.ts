import { getNowPlaying } from "@/lib/fpp";

export const dynamic = "force-dynamic";

export async function GET() {
  const nowPlaying = await getNowPlaying();
  return Response.json(nowPlaying, {
    headers: { "Cache-Control": "no-store" },
  });
}
