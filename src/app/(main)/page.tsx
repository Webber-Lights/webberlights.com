import About from "./About";
import ShowStatus from "./ShowStatus";
import ShowStatusSkeleton from "@/components/ShowStatusSkeleton";
import { Suspense } from "react";


export default function Page() {
  return (
    <div className='items-center justify-between text-center pb-12'>
      <About />
      <Suspense fallback={<ShowStatusSkeleton />}>
        <ShowStatus />
      </Suspense>
    </div>
  );
}