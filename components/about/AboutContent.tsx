import Link from "next/link";
import { epvpLink } from "utils/contacts";

const AboutContent = () => {
  return (
    <div className="flex flex-col items-center mb-4 bg-black bg-opacity-10 border border-white rounded-lg p-4 border-opacity-50 text-center font-medium">
      <h2 className="font-bold text-xl">Where it all started</h2>
      <div className="p-3"></div>
      <p className="max-w-2xl">
        We are a small team of passionate gamers who are willing to bring Metin2
        trading to the next level. And with your help, we can do just that.
      </p>
      <div className="p-2"></div>
      <p className="max-w-2xl">
        More than 3 years ago we started on a journey with one thing in mind:
        creating a better experience for the Metin2 community. We wanted to make
        buying and selling yang a much safer and profficient activity for
        everyone. With this in mind, 2500 unique customers and over 4000 total
        trades later, we can now proudly call ourselves one of the most popular
        & dedicated yang stores.
      </p>
      <div className="p-2"></div>
      <p className="text-gold-soft font-bold">
        Check out our reviews on ElitePvpers and Trustpilot below:
      </p>
      <div className="p-2"></div>
      {/* Review buttons */}
      <div className="flex flex-col lg:flex-row items-center gap-4 w-full justify-center">
        <Link
          href={epvpLink}
          target="_blank"
          rel="noreferrer"
          className="w-full max-w-md p-3 text-xs font-medium uppercase transition duration-200 ease-linear bg-black border rounded-sm lg:w-auto lg:px-12 bg-opacity-70 border-gold-soft hover:text-black hover:bg-gold-soft"
        >
          Visit our EPVP profile
        </Link>

        <Link
          href="https://www.trustpilot.com/review/plugynstore.com"
          target="_blank"
          rel="noreferrer"
          className="w-full max-w-md p-3 text-xs font-medium uppercase transition duration-200 ease-linear bg-black border rounded-sm lg:w-auto lg:px-12 bg-opacity-70 border-green-400 hover:text-black hover:bg-green-400"
        >
          See Trustpilot reviews
        </Link>
      </div>

      <div className="p-2"></div>
      <p className="max-w-2xl">
        Why choose us? Not only we offer the best prices on the market, we are
        always here to help fulfill your needs. Using our reliability and deep
        respect for each individual we trade with, we are commited to offering
        you the best experience you can have.
      </p>

      <div className="p-4"></div>
      <p className="text-right self-end text-gray-400 text-sm">
        The Plugyn team
      </p>
    </div>
  );
};
export default AboutContent;
