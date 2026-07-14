/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import useScreen from "./hooks/useScreen";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/all";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { ArrowUpRight } from "lucide-react";
import { DATA } from "./data/resume";
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

      <div className="screen bg-black fixed inset-0 origin-top z-50"></div>

      <div
        className={`w-full min-h-screen ${finish ? "block" : "hidden"} lg:px-12 px-8`}
      >
        <div
          id="main"
          className="min-h-screen opacity-0 translate-y-10 my-10 mb-25 gap-10 flex flex-col items-center"
        >
          {/* Hero */}
          <div className="max-w-3xl w-full h-auto flex gap-10">
            <div className="w-full flex flex-col justify-center gap-1">
              <h1 className="font-bold text-[2.5rem]">Hi, I&apos;m Rafy</h1>
              <p className="text-muted-foreground text-[1.1rem]">
                Software Engineer turned Entrepreneur. I love building things
                and helping people. Very active on Twitter.
              </p>
            </div>
            <Avatar size="lg">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          {/* About */}
          <div className="max-w-3xl w-full h-auto flex flex-col gap-3">
            <h2 className="font-bold text-[1.1rem]">About</h2>
            <p className="text-muted-foreground text-[1.1rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              natus illum ratione aut quod molestiae eum velit quis reiciendis
              voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ipsa et enim nisi nobis nulla dolorum adipisci at dolores
              dolor explicabo? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dignissimos, pariatur? Eos voluptatum ullam
              dolor sequi suscipit corrupti cupiditate quae quaerat!
            </p>
          </div>

          {/* Education */}
          <div className="max-w-3xl w-full h-auto flex flex-col gap-8">
            <h2 className="font-bold text-[1.1rem]">Education</h2>
            <div className="flex flex-col gap-8">
              {DATA.educations.map((education: any) => (
                <div
                  key={education.school}
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <Image
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                          aria-hidden
                        />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* skills */}
          <div className="max-w-3xl w-full h-auto flex flex-col gap-3">
            <h2 className="font-bold text-[1.1rem]">Skill</h2>
            <div className="flex flex-wrap gap-2">
              {DATA.skills.map((skill: any) => (
                <div
                  key={skill.name}
                  className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2"
                >
                  {skill.icon && (
                    <skill.icon className="size-4 rounded overflow-hidden object-contain" />
                  )}
                  <span className="text-foreground text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
