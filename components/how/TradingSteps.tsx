import {
  BTCIcon,
  LTCIcon,
  PaypalIcon,
  RevolutIcon,
  SkrillIcon,
  XLMIcon,
} from "@/svg/SvgComponents";
import Link from "next/link";
import { ReactElement } from "react";
import { discordLink } from "utils/contacts";

const TradingSteps = () => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-medium text-center uppercase text-gold-soft bg-black bg-opacity-30 border border-gold-soft rounded-sm p-1">
        How does it work?
      </h2>
      <div className="bg-black bg-opacity-10 p-4 flex flex-col gap-8 items-center">
        <Step
          step={1}
          text={
            <>
              First, decide the server and the amount of yang you want to buy.
              You can check our current prices and available servers on our{" "}
              <Link
                href="/store"
                className="text-gold-soft font-bold hover:underline"
              >
                store
              </Link>{" "}
              page.
            </>
          }
        />
        <Step
          step={2}
          text={
            <>
              Once you decided the server you want to buy gold or yang on,
              contact us over Discord, Skype or the Live Chat so we can discuss
              the payment. Please note that Discord{" "}
              <Link href={discordLink} className="text-gold-soft">
                (PlugynStore#8189)
              </Link>{" "}
              is the fastest way to reach us.
            </>
          }
        />
        <Step
          step={3}
          text={
            <>
              After a brief conversation in which we confirm our stock
              availability, we will proceed with the payment process. You can
              choose your preferred payment method from the ones listed below.
            </>
          }
          icons={
            <div className="py-4 flex flex-wrap gap-6 items-center justify-center">
              <PaypalIcon />
              <SkrillIcon />
              <BTCIcon />
              <XLMIcon />
              <LTCIcon />
              <RevolutIcon />
            </div>
          }
        />
        <Step
          step={4}
          text={
            <>
              As soon as we confirm the payment, we will proceed with the
              in-game transfer. Depending on the server & moment of the
              transaction, we will use different techniques to transfer the
              currency safely to your account.
            </>
          }
        />
        <p className="text-xs text-gray-400 max-w-xl text-center font-medium">
          NOTE: While we do our best to make all the trades as safe as possible,
          there is always a risk associated with real money trading. We do not
          take responsibility in such cases, although we do our best to mitigate
          the effects in the rare occasions in which this happens.
        </p>
      </div>
    </section>
  );
};

type StepProps = {
  text: ReactElement;
  step: number;
  icons?: ReactElement;
};

const Step = ({ text, step, icons }: StepProps) => {
  return (
    <div className="flex flex-col items-center">
      <p className="lining-nums text-3xl font-bold text-gold-soft rounded-full border-[3px] border-gold-soft w-10 h-10 flex items-center justify-center">
        {step}
      </p>
      <div className="p-1"></div>
      <hr className="border-gold-soft w-full max-w-lg" />
      <p className="max-w-lg text-center font-medium">{text}</p>
      {icons ? icons : null}
      <div className="p-4"></div>
    </div>
  );
};

export default TradingSteps;
