import Container from "@/components/common/container";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-16 font-sans dark:bg-black">

        {/* Text Section */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
            <span className="block">It's your</span>
            <span className="block">world.</span>
            <span className="block">We'll help you</span>
            <span className="block">explore it.</span>
          </h2>

          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
            Explore countries around the world and learn more about <br />
            their people, cultures, capitals, languages, and geography. <br />
            Start your journey with a single click.
          </p>

          <Link href="/countries" className="w-max mx-auto md:mx-0 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            Explore Now
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/map.jpg"
            alt="World Map"
            className="w-[220px] md:w-[350px] lg:w-[400px] rounded-lg shadow-lg"
          />
        </div>

      </div>
    </Container>
  );
}