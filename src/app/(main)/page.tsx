import About from "./About";
import ShowStatus from "./ShowStatus";

const getFppStatus = async () => {
  const res = await fetch("http://100.96.223.4/api/fppd/status", {
    cache: "no-store",
  });
  return res.json();
};

export default async function Page() {
  const fppStatus = await getFppStatus();

  return (
    <div className='items-center justify-between text-center pb-12'>
      <About />
      {/* @ts-expect-error Server Component */}
      <ShowStatus fppStatus={fppStatus} />
    </div>
  );
}
