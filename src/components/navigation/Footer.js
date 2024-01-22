import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="rounded p-6 backdrop-blur">
      <div className="flex justify-between flex-wrap border-b-[1px] border-gray-400">
        <div className="1">
          <ul className="mb-5">
            <li className=" text-white pb-2">Company</li>
            <li className=" cursor-pointer pb-2 font-medium hover:text-white">
              About
            </li>
            <li className=" cursor-pointer pb-2 font-medium hover:text-white">
              Jobs
            </li>
            <li className=" cursor-pointer pb-2 font-medium hover:text-white">
              For the Record
            </li>
          </ul>
        </div>
        <div className="2">
          <ul className="mb-5">
            <li className=" text-white pb-2">Communities</li>
            <li className=" cursor-pointer pb-2 font-medium hover:text-white">
              For Artists
            </li>
            <li className=" cursor-pointer pb-2 font-medium hover:text-white">
              Developers
            </li>
            <li className=" cursor-pointer pb-2 font-medium hover:text-white">
              Advertising
            </li>
            <li className=" cursor-pointer pb-2 font-medium hover:text-white">
              Investors
            </li>
            <li className=" cursor-pointer pb-2 font-medium hover:text-white">
              Vendors
            </li>
          </ul>
        </div>
        <div className="3">
          <ul className="mb-5">
            <li className=" text-white pb-2">Useful links</li>
            <li className=" cursor-pointer pb-2 font-medium hover:text-white">
              Support
            </li>
            <li className=" cursor-pointer pb-2 font-medium hover:text-white">
              Free Mobile App
            </li>
          </ul>
        </div>
        <div className="4">
          <div className="socials-container flex items-center justify-center gap-6 p-5">
            <a
              href="https://twitter.com/spotify"
              target="_blank"
              className="social twitter hover:bg-gray-800 w-[50px] h-[50px] flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faTwitter} className=" text-white" />
            </a>
            <a
              href="https://www.facebook.com/Spotify"
              target="_blank"
              className="social facebook hover:bg-gray-800 w-[50px] h-[50px] flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faFacebook} className=" text-white" />
            </a>
            <a
              href="https://www.instagram.com/spotify/"
              target="_blank"
              className="social instagram hover:bg-gray-800 w-[50px] h-[50px] flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faInstagram} className=" text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="font-medium mt-5 flex justify-between flex-wrap">
        <div className="flex gap-4  flex-wrap">
          <p className=" hover:text-white">Legal</p>
          <p className=" hover:text-white">Privacy Center</p>
          <p className=" hover:text-white">Privacy Policy</p>
          <p className=" hover:text-white">Cookie Settings</p>
          <p className=" hover:text-white">About Ads</p>
          <p className=" hover:text-white">Accessibility</p>
        </div>
        <div className="flex">
          <p>© 2024 Spotify AB</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
