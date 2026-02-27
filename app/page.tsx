"use client";

import { useState } from "react";
import useScreen from "./hooks/useScreen";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/all";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import Image from "next/image";

gsap.registerPlugin(MorphSVGPlugin);

export default function Home() {
  const [finish, setFinish] = useState(false);
  const animateScreen = useScreen();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to("#hallo", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    });
    tl.to("#hallo", {
      x: () => (window.innerWidth < 500 ? -70 : -125),
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    });
    tl.to(
      "#emoji",
      {
        x: () => (window.innerWidth < 500 ? 70 : 125),
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      },
      "<",
    );
    tl.to("#wings", {
      duration: 1,
      morphSVG: "#smile",
      ease: "power2.inOut",
    });

    tl.add(() => {
      animateScreen();
      setTimeout(() => {
        setFinish(true);
      }, 500);
    });
  }, []);

  useGSAP(() => {
    if (finish) {
      gsap.to("#main", {
        y: 0,
        opacity: 1,
        ease: "power3.out",
      });
    }
  }, [finish]);

  const tl = gsap.timeline({ paused: true });

  useGSAP(() => {
    if (finish) {
      tl?.to("#wings-nav", {
        morphSVG: "#smile-nav",
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
  }, [finish]);


  return (
    <>
      <div
        className={`h-screen flex justify-center items-center ${finish ? "hidden" : "block"} relative`}
      >
        <h1
          id="hallo"
          className="font-bold lg:text-[8rem] text-[4rem] tracking-wider text-white opacity-0 translate-y-10 z-999"
        >
          Hi!
        </h1>
        <div id="emoji" className="opacity-0 -translate-x-10 z-999 absolute">
          <div className="w-auto flex justify-center items-center relative">
            <svg
              viewBox="0 0 275 174"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:w-50 lg:h-40 w-30 h-20"
            >
              <path
                d="M7.50185 147C118.502 197 231.502 140 267.502 72"
                stroke="white"
                strokeWidth="15"
                strokeLinecap="round"
              />
              <ellipse
                cx="72.9695"
                cy="52.9574"
                rx="20"
                ry="33.5"
                transform="rotate(-8 72.9695 52.9574)"
                fill="white"
              />
            </svg>
            <svg
              width="64"
              height="65"
              viewBox="0 0 64 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute lg:top-2 -top-4 lg:right-13 right-7 lg:w-12 w-7"
            >
              <path
                id="smile"
                d="M53.1889 17.704C37.6889 20.204 11.6893 36.704 11.1893 42.204C10.6893 47.704 57.6891 42.204 57.6891 42.204"
                stroke="white"
                strokeWidth="12"
                strokeLinecap="round"
                className="opacity-0 hidden"
              />
              <path
                id="wings"
                d="M15.6998 7.61096C11.5638 8.472 9.20123 10.1211 7.78521 20.776C6.3692 31.4308 10.5537 42.7269 13.095 47.1681C15.6364 51.6094 20.7571 57.4998 25.5215 56.8249M15.6998 7.61096C19.8357 6.74993 23.9232 11.3145 24.6556 12.3959C30.3191 20.7573 30.7976 23.4368 32.287 28.7068C33.9563 34.6133 33.7972 39.0541 32.5618 47.406C31.7881 52.6369 30.3913 56.135 25.5215 56.8249M15.6998 7.61096L20.1642 29.9809L25.5215 56.8249"
                stroke="white"
                strokeWidth="14"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="screen bg-black fixed inset-0 origin-top"></div>

      <div
        className={`w-full min-h-screen ${finish ? "block" : "hidden"} lg:px-12 px-8`}
      >
        <div
          id="main"
          className="w-full h-screen opacity-0 translate-y-10 py-5"
        >
          <div className="w-full h-20 flex justify-between items-center">
            <Link
              href={"/"}
              onMouseEnter={() => tl.play()}
              onMouseLeave={() => tl.reverse()}
            >
              <div className="hidden lg:block relative">
                <svg
                  viewBox="0 0 275 174"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-15 h-10"
                >
                  <path
                    d="M7.50185 147C118.502 197 231.502 140 267.502 72"
                    stroke="black"
                    strokeWidth="15"
                    strokeLinecap="round"
                  />
                  <ellipse
                    cx="72.9695"
                    cy="52.9574"
                    rx="20"
                    ry="33.5"
                    transform="rotate(-8 72.9695 52.9574)"
                    fill="black"
                  />
                </svg>
                <svg
                  width="64"
                  height="65"
                  viewBox="0 0 64 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -top-6 right-4 w-4"
                >
                  <path
                    id="smile-nav"
                    d="M53.1889 17.704C37.6889 20.204 11.6893 36.704 11.1893 42.204C10.6893 47.704 57.6891 42.204 57.6891 42.204"
                    stroke="black"
                    strokeWidth="12"
                    strokeLinecap="round"
                    className="opacity-0 hidden"
                  />
                  <path
                    id="wings-nav"
                    d="M15.6998 7.61096C11.5638 8.472 9.20123 10.1211 7.78521 20.776C6.3692 31.4308 10.5537 42.7269 13.095 47.1681C15.6364 51.6094 20.7571 57.4998 25.5215 56.8249M15.6998 7.61096C19.8357 6.74993 23.9232 11.3145 24.6556 12.3959C30.3191 20.7573 30.7976 23.4368 32.287 28.7068C33.9563 34.6133 33.7972 39.0541 32.5618 47.406C31.7881 52.6369 30.3913 56.135 25.5215 56.8249M15.6998 7.61096L20.1642 29.9809L25.5215 56.8249"
                    stroke="black"
                    strokeWidth="14"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="relative lg:hidden block w-12 h-12">
                <Image src={"/logo.svg"} alt="logo" fill className="object-contain"></Image>
              </div>
            </Link>
            <div className="flex gap-5 font-medium">
              <Link
                href={"/"}
                className="flex justify-center items-center gap-2 text-3xl duration-300 hover:text-4xl"
              >
                <FaSquareInstagram />
              </Link>
              <Link
                href={"/"}
                className="flex justify-center items-center gap-2 text-3xl duration-300 hover:text-4xl"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col h-[80vh] text-center">
            <h2 className="text-[2rem]">Hi, I&apos;m Rafyy</h2>
            <h1 className="font-bold text-[3rem] tracking-wide text-black">
              Aspiring Full-Stack Developer.
            </h1>
            <p className="pt-20 text-[1.2rem]">Scroll Down</p>
          </div>
        </div>
      </div>
    </>
  );
}
