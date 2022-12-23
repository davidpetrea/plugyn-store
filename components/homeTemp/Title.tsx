import Link from "next/link";
import { epvpLink, trustpilotLink } from "utils/contacts";

const Title = () => {
  return (
    <section className="flex flex-col w-full">
      <div className="p-4 lg:p-8"></div>
      <h1 className="text-4xl font-bold text-center text-white">
        Welcome to the{" "}
        <span className="border-b text-gold-soft border-gold">
          Plugyn Store!
        </span>
      </h1>
      <div className="p-4 lg:p-8"></div>
      <h2 className="text-xl font-bold text-center text-white uppercase">
        Get cheap yang on your favourite{" "}
        <span className="text-gold-soft">Metin2 Server </span>and become the
        strongest today!
      </h2>
      <div className="flex flex-col items-center justify-center gap-4 my-4 text-center lg:flex-row">
        <Link
          href="/store"
          className="w-full max-w-md p-3 text-xs font-medium uppercase transition duration-200 ease-linear bg-black border rounded-sm lg:w-auto lg:px-12 bg-opacity-70 border-gold-soft lg:text-base hover:text-black hover:bg-gold-soft"
        >
          VISIT STORE
        </Link>
        <Link
          href={trustpilotLink}
          className="w-full max-w-md p-3 text-xs font-medium uppercase transition duration-200 ease-linear border rounded-sm lg:px-12 border-gold-soft hover:bg-black hover:bg-opacity-70 lg:text-base"
        >
          Check our reviews
        </Link>
      </div>
    </section>
  );
};

export default Title;
