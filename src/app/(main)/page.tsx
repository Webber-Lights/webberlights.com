import About from "./About";
import Reminders from "./reminders";
import ShowStatus from "./ShowStatus";
import ShowStatusSkeleton from "./ShowStatusSkeleton";
import { Suspense } from "react";


export default function Page() {
  return (
    <div className='items-center justify-between text-center pb-12'>
      <About />
      <Reminders />
      <Suspense fallback={<ShowStatusSkeleton />}>
        <ShowStatus />
      </Suspense>
    </div>
  );
}