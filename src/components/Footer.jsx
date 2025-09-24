import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-evenly p-10 gap-10">
        <div>
          <h1 className="font-bold"> Hobbycue</h1>
          <ol className="space-y-2 mt-3">
            <li>About Us</li>
            <li>Our Services</li>
            <li>Work With Us</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ol>
        </div>
        <div>
          <h1 className="font-bold">How Do i</h1>
          <ol className="space-y-2 mt-3">
            <li>Sign Up</li>
            <li>Add a Listing</li>
            <li>Claim Listing</li>
            <li>Post a Query</li>
            <li>Add a Blog Post</li>
            <li>Other Queries</li>
          </ol>
        </div>
        <div>
          <h1 className="font-bold">Quick Links</h1>
          <ol className="space-y-2 mt-3">
            <li>Listing</li>
            <li>Blog Posts </li>
            <li>Shop / Store</li>
            <li>Community</li>
          </ol>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold">Social Media</h1>
            <div className="flex gap-2 sm:gap-5">
              <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full">
                <a href="/">
                  <FaFacebookF />
                </a>
              </div>
              <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full">
                <a href="/">
                  {" "}
                  <FaTwitter />
                </a>
              </div>
              <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full">
                <a href="/">
                  <FaInstagram />
                </a>
              </div>
              <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full">
                <a href="/">
                  <FaPinterest />
                </a>
              </div>
              <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full">
                <a href="/">
                  <FaGooglePlusG />
                </a>
              </div>
              <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full">
                <a href="/">
                  <FaYoutube />
                </a>
              </div>
              <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full">
                <a href="/">
                  {" "}
                  <FaTelegramPlane />
                </a>
              </div>
              <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full">
                <a href="/">
                  {" "}
                  <CgMail />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-bold">Invite Friends</h1>
            <div className=" flex items-center justify-between  border rounded-2xl w-full  ">
              <input
                type="text"
                placeholder="Search here"
                className="h-full w-full border-l-0 pl-5 active:outline-none rounded-l-2xl rounded-r-none"
              />

              <div className="w-[60px] h-[50px] flex items-center justify-center rounded-r-2xl   bg-[#8165a2] text-white cursor-pointer ">
                Invite
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F5F9] text-center p-5">
        <p className="font-[14px] text-[#08090A]">
          © Purple Cues Private Limited
        </p>
      </div>
    </div>
  );
};

export default Footer;
