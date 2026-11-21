import { getNowPlaying } from "@/lib/fpp";
import LiveShowStatus from "./LiveShowStatus";

export default async function ShowStatus() {
  const initial = await getNowPlaying();
  return <LiveShowStatus initial={initial} />;
}
