import {
  GamingIconOne,
  BestPricesIcon,
  SecureIcon,
  ClockIcon,
} from "@/svg/SvgComponents";

const ChooseUs = () => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-medium text-center uppercase text-gold-soft bg-black bg-opacity-30 border border-gold-soft rounded-sm p-1">
        Why choose us?
      </h2>

      <TraitItem
        text={
          <>
            <h3 className="text-xl font-medium text-gray-400 uppercase">
              Who we are
            </h3>
            We are a small team of passionate and experienced gamers, therefore{" "}
            <span className="text-gold-soft">
              we know what the grind feels like!
            </span>{" "}
            So we consider our mission as simple as this: to help people achieve
            smooth gaming experiences with less time invested into some boring
            and repetitive tasks.
          </>
        }
        Icon={GamingIconOne}
        iconOnRight={false}
      />
      <TraitItem
        text={
          <>
            <h3 className="text-xl font-medium text-gray-400 uppercase">
              Best prices on the market
            </h3>
            We believe that our clients deserve the best prices on the market,
            and so we have made it our mission to always stay ahead of the
            competition and offer you{" "}
            <span className="text-gold-soft">
              the best buying & selling rates.
            </span>
          </>
        }
        Icon={BestPricesIcon}
        iconOnRight={true}
      />
      <TraitItem
        text={
          <>
            <h3 className="text-xl font-medium text-gray-400 uppercase">
              Secured trades and payments
            </h3>
            By using our experience in this field we know how to trade the yang
            & items safely, using tested and secure methods. Furthermore, we use
            only safe payment methods like{" "}
            <span className="text-gold-soft">
              Paypal, Crypto, Instant bank transfer, Skrill & Revolut.
            </span>
          </>
        }
        Icon={SecureIcon}
        iconOnRight={false}
      />
      
      <TraitItem
        text={
          <>
            <h3 className="text-xl font-medium text-gray-400 uppercase">
              Support available all around the clock
            </h3>
            We know how important time is for our clients. Because we value
            that, we dedicate ourselves to you and{" "}
            <span className="text-gold-soft">
              we are online most of the day.
            </span>{" "}
            If you decide to purchase from us or just want to ask questions,
            contact us on discord, skype or live chat and you are sure to get
            the fastest response.
          </>
        }
        Icon={ClockIcon}
        iconOnRight={true}
      />
    </section>
  );
};

interface SVGFCComponentProps {
  fill: string;
  className: string;
}

const TraitItem = ({
  text,
  Icon,
  iconOnRight = false,
}: {
  text: JSX.Element;
  Icon: React.FC<SVGFCComponentProps>;
  iconOnRight: boolean;
}) => {
  if (iconOnRight)
    return (
      <div className="flex flex-col items-center justify-end gap-4 p-4 bg-black lg:flex-row group bg-opacity-10 border-gold-soft">
        <div className="max-w-lg text-sm font-medium text-center lg:text-right">
          {text}
        </div>
        <Icon
          fill="#DFC777"
          className="order-first transition ease-linear duration-140 opacity-70 group-hover:opacity-100 lg:order-none"
        />
      </div>
    );
  return (
    <div className="flex flex-col items-center justify-start gap-4 p-4 bg-black lg:flex-row group bg-opacity-10 border-gold-soft">
      <Icon
        fill="#DFC777"
        className="order-first transition ease-linear lg:order-none duration-140 opacity-70 group-hover:opacity-100"
      />
      <div className="max-w-lg text-sm font-medium text-center lg:text-left">
        {text}
      </div>
    </div>
  );
};

export default ChooseUs;
