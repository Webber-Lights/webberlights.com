import ShowStatus from "components/ShowStatus";
import { getFPPStatus } from "./api/show/status";
import About from "components/About";

const Home = ({ status }) => {
  return (
    <div className="items-center justify-between text-center pb-12">
      <div
        className="w-full h-screen bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(/assets/images/2022_Show_Rainbow.jpg)` }}
      >
        <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
              
              Webber Lights
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium">
              Synchronized Christmas Light Display in Cumberland, RI
            </p>
          </div>
        </div>
        <div className="text-2xl font-extrabold relative bottom-40 text-red-500">
          <p>
            &ldquo;Christmas isn&apos;t about candy canes, or lights all aglow,
            it&apos;s the hearts that we touch, and the care that we
            show.&ldquo;
          </p>
          <p>- Unknown</p>
        </div>
      </div>

      <About />
      <section className="flex flex-col   p-2 justify-center items-center max-w-auto">
        <ShowStatus status={status} />
      </section>
    </div>
  );
}
export async function getStaticProps(context) {
  const status = await getFPPStatus();

  return {
    props: { status }, // will be passed to the page component as props
    revalidate: 10, // props will be passed to the page
  };
}
export default Home;