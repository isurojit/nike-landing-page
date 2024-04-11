import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constant";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get Shoes Ready For The New Term At Your Perfect Size In Store & Get
            Rewards.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-12 h-12 rounded-full bg-white-400"
              >
                <img src={icon.src} alt={icon.src} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 items-center justify-start cursor-pointer gap-2 font-montserrat">
          © 2024 Nike. All rights reserved.
        </div>
        <p className="font-montserrat cursor-pointer">
          Terms & conditions | Privacy policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
