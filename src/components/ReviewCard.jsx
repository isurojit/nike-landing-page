import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <img
        src={imgURL}
        alt={customerName}
        className="w-[120px] h-[120px] rounded-full object-cover"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="star"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          ({rating})
        </p>
      </div>
      <div>
        <h3 className="font-palanquin text-2xl font-bold mt-1 text-center">
          {customerName}
        </h3>
      </div>
    </div>
  );
};

export default ReviewCard;
