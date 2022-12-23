import Question from "components/faq/Question";
import Title from "components/faq/Title";

export default function FAQ() {
  return (
    <div>
      <Title />
      <div className="flex flex-col items-center">
        <Question
          title="Can I get banned for buying yang?"
          content="Although real money trading is mostly forbidden on all servers (with the exception of some), complications are very rare. Due to our experience in this field we have improved our methods of transfering the currency, which is why the risk of bans or anything of the sort is extremely low. In case it does happen, we will work with you to find solutions."
        />
        <Question
          title="When do I get the yang?"
          content="As soon as the payment is confirmed, we will meet in game for the transfer within a few minutes."
        />
        <Question
          title="How will I receive the yang?"
          content="Depending on the amount and the server the purchase was made on, there are different techniques that we developed in order to make the transfer as undetectable as possible. We will discuss those details before the purchase."
        />
        <Question
          title="What payment methods are accepted?"
          content="We currently support payments done via Paypal F&F, instant bank transfers, Skrill, Revolut & Crypto (mainly Bitcoin, XLM, ETH and LTC)."
        />
        <Question
          title="What is the fastest way I can reach you?"
          content="Please contact us on Discord (PlugynStore#8189) or Skype for the fastest response time."
        />
        <Question
          title="I wish to sell my yang. Are you also buying?"
          content="Yes! We are actively looking for new suppliers on the currently supported servers of our store. Please contact us with the details so we can make you a custom offer. "
        />
      </div>
    </div>
  );
}
