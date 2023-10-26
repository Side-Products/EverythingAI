// components/StarRating.js

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ rating }) => {
  const stars = [];
  let remaining = Math.floor(rating);
  let hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (remaining >= 1) {
      stars.push("full");
      remaining--;
    } else if (hasHalfStar) {
      stars.push("half");
      hasHalfStar = false; // Only add one half star
    } else {
      stars.push("empty");
    }
  }

  return (
    <div className="flex items-center ">
      {stars.map((type, index) => (
        <FontAwesomeIcon
          key={index}
          icon={type === "full" ? faStar : type === "half" ? faStarHalf : null}
          className={`w-10 h-8 py-1 text-sm text-${
            type === "empty" ? "gray" : "yellow"
          }-500`}
        />
      ))}
    </div>
  );
};

export default StarRating;
