import About from "./About";
import ShowStatus from "./ShowStatus";
const fallbackStatus = {
  status_name: "idle",
  current_sequence: null,
  message: "Fallback data",
};
const getFppStatus = async () => {
  try {
    const res = await fetch("http://100.117.192.60/api/fppd/status", {
      cache: "no-store",
    });
    if (!res.ok) {
      return null; // or {}
    }
    return await res.json();
  } catch {
    return fallbackStatus; // or {}
  }
};

export default async function Page() {
  const fppStatus = await getFppStatus();

  return (
    <div className='items-center justify-between text-center pb-12'>
      <About />
      <ShowStatus fppStatus={fppStatus} />
    </div>
  );
}
