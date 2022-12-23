import Question from "components/faq/Question";
import Title from "components/faq/Title";

export default function FAQ() {
  return (
    <div>
      <Title />
      <div className="bg-black bg-opacity-10 flex flex-col items-center">
        <Question title="What is paypal balance?" />
        <Question title="What is paypal balance?" />
        <Question title="What is paypal balance?" />
        <Question title="What is paypal balance?" />
        <Question title="What is paypal balance?" />
      </div>
    </div>
  );
}
