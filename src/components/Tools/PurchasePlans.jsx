import Button from "../ui/Button";
import Tooltip from "../ui/Tooltip";

function PurchasePlans({ terms }) {
  const onLiner = (termLength) => {
    switch (termLength) {
      case "1 Months":
        return "Ideal for short-term users who need basic features.";
      case "3 Months":
        return "Perfect for users who need a medium-term commitment.";
      case "6 Months":
        return "Perfect for users who need a medium-term commitment.";
      case "12 Months":
        return "Perfect for users who need a long-term commitment.";
      default:
        return "Perfect for users who need a medium-term commitment.";
    }
  };

  return (
    <div className="border border-zinc-200 p-6 rounded-lg">
      <section aria-label="Pricing Section">
        <div className="grid gap-6 md:grid-cols-3 items-start max-w-6xl px-4 mx-auto py-6">
          {terms.map((term) => (
            <>
              <div className="border border-zinc-200 p-6 rounded-lg">
                <h2 className="font-bold text-2xl mb-2">
                  {term?.termLength} Plan
                </h2>
                <p className="text-sm mb-4">{onLiner(term?.termLength)}</p>
                <div className="line-through text-gray-500 mb-2">
                  ${term?.actualPrice}
                </div>
                <div className="text-2xl font-bold mb-4">
                  ${term?.discountedPrice}
                </div>
                <Button>Buy Now</Button>{" "}
                <div className="mt-2">
                  <Tooltip
                    labelText="Terms & Conditions*"
                    theme="glass"
                    message={term?.termsAndConditions}
                  />
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PurchasePlans;
