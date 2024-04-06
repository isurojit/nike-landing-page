import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span>
          &nbsp;Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Looking to upgrade your sneaker game? Now's the time to lace up in
          style with a fantastic offer on Nike shoes! With discounts of up to
          30% off, you can step out in the latest kicks without breaking the
          bank.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Don't miss out on this limited-time opportunity to snag your favorite
          pair at a fraction of the price. Hurry, before this offer runs out!
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label={"Shop Now"} iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
