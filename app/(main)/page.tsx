import About from "components/main/About";

export default function Page() {
  return (
    <div className="items-center justify-between text-center pb-12">
      <About />
      <section className="flex flex-col   p-2 justify-center items-center max-w-auto">
        {/* <ShowStatus status={status} /> */}
      </section>
    </div>
  );
}
