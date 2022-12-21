import { EpvpIconLarge } from "@/svg/SvgComponents";
import Link from "next/link";
import { epvpLink } from "utils/contacts";
const EpvpSection = ({ rating }: { rating: number | undefined }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <EpvpIconLarge className="text-gold-soft" />
      <p className="text-3xl font-bold text-green-400">{rating}</p>
      <p className="uppercase font-medium">
        satisfied unique customers on ElitePvPers
      </p>
      <div className="p-2"></div>
      <Link
        href={epvpLink}
        target="_blank"
        rel="noreferrer"
        className="w-full max-w-md p-3 text-xs font-medium uppercase transition duration-200 ease-linear bg-black border rounded-sm lg:w-auto lg:px-12 bg-opacity-70 border-gold-soft lg:text-base hover:text-black hover:bg-gold-soft"
      >
        Visit our EPVP profile
      </Link>
      <div className="p-2"></div>
      <Link
        href="https://www.trustpilot.com/review/plugynstore.com"
        target="_blank"
        rel="noreferrer"
        className="w-full max-w-md p-3 text-xs font-medium uppercase transition duration-200 ease-linear bg-black border rounded-sm lg:w-auto lg:px-12 bg-opacity-70 border-green-400 lg:text-base hover:text-black hover:bg-green-400"
      >
        Check out our reviews on Trustpilot
      </Link>
    </div>
  );
};

export default EpvpSection;
