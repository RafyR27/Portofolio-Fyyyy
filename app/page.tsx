/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import useScreen from "./hooks/useScreen";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/all";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { ArrowUpRight } from "lucide-react";
import { DATA_EN } from "./data/resume-en";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./components/ui/badge";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { MatchaCursor } from "./components/svgs/MatchaCursor";
import { Pointer } from "./components/ui/pointer";
import { Highlighter } from "./components/ui/highlighter";
import { InteractiveHoverButton } from "./components/ui/interactive-hover-button";
import { useLanguage } from "./hooks/language-provider";
import { DATA_ID } from "./data/resume-id";

gsap.registerPlugin(MorphSVGPlugin);

export default function Home() {
  const [finish, setFinish] = useState(false);
  const animateScreen = useScreen();
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const { language } = useLanguage();

  const DATA = language === "id" ? DATA_ID : DATA_EN;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

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

  return (
    <>
      {/* Loading screen */}
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

      {/* Main */}
      <div
        className={`w-full min-h-screen ${finish ? "block" : "hidden"} lg:px-12 px-5`}
      >
        <div
          id="main"
          className="min-h-screen opacity-0 translate-y-10 my-15 mb-25 gap-15 flex flex-col items-center"
        >
          {/* Hero */}
          <div className="max-w-3xl w-full h-auto flex lg:flex-row flex-col-reverse gap-5 lg:gap-10">
            <div className="w-full flex flex-col justify-center gap-1">
              <h1 className="font-bold text-[2.5rem]">
                Hi, I&apos;m {DATA.callname}
              </h1>
              <div className="text-muted-foreground text-[1rem]">
                {DATA.description}{" "}
                <Highlighter action="underline" color="#7BA05B">
                  <span className="text-[#7BA05B]">
                    Matcha enjoyer.
                    <Pointer
                      style={{
                        x: -65,
                        y: -70,
                      }}
                    >
                      <MatchaCursor className="size-8 hidden lg:flex" />
                    </Pointer>
                  </span>
                </Highlighter>
              </div>
            </div>
            <Avatar className="size-30 md:size-35 lg:size-40">
              <AvatarImage src={DATA_EN.profile} />
              <AvatarFallback>FY</AvatarFallback>
            </Avatar>
          </div>

          {/* About */}
          <div className="max-w-3xl w-full h-auto flex flex-col gap-3">
            <h2 className="font-bold text-[1.1rem]">About</h2>
            <p className="text-muted-foreground text-[1rem]">
              {DATA.about.map((item, index) =>
                item.highlight ? (
                  <Highlighter key={index} action="underline" color="#7BA05B">
                    {item.text}
                  </Highlighter>
                ) : (
                  <span key={index}>{item.text}</span>
                ),
              )}
            </p>
          </div>

          {/* Project */}
          <div className="max-w-3xl w-full h-auto flex flex-col gap-6">
            <div className="flex min-h-0 flex-col gap-y-8">
              <div className="flex flex-col gap-y-2 items-center justify-center">
                <div className="flex flex-col gap-y-3 items-center justify-center">
                  <h2 className="text-[1.5rem] font-bold tracking-tighter">
                    Real world projects I&apos;ve built
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-200 mx-auto auto-rows-fr">
                {DATA.projects.map((project) => (
                  <div
                    key={project.title}
                    className={
                      "flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 hover:ring-muted transition-all duration-200"
                    }
                  >
                    <div className="relative shrink-0">
                      <Link
                        href={project.active ? project.href : "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={500}
                          height={500}
                          className="w-full h-48 object-cover"
                        />
                      </Link>
                      {project.links && project.links.length > 0 && (
                        <div className="absolute top-2 right-2 flex flex-wrap gap-2">
                          {project.links.map((link, idx) => (
                            <Link
                              key={idx}
                              href={project.active ? link.href : "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Badge
                                className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                                variant="default"
                              >
                                {link.icon}
                                {link.type}
                              </Badge>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col gap-3 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex flex-col gap-1">
                          <h3 className="font-semibold">{project.title}</h3>
                          <time className="text-xs text-muted-foreground">
                            {project.dates}
                          </time>
                        </div>
                        {project.active && (
                          <Link
                            href={project.active ? project.href : "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                          >
                            <ArrowUpRight className="h-4 w-4" aria-hidden />
                          </Link>
                        )}
                      </div>
                      <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
                        {project.description}
                      </div>
                      {project.technologies &&
                        project.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-auto">
                            {project.technologies.map((tag) => (
                              <Badge
                                key={tag}
                                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                                variant="outline"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Github Contribution */}
          <div className="max-w-3xl w-full h-auto flex flex-col gap-6">
            <h2 className="font-bold text-[1.1rem]">Github Contribution</h2>
            <div className="flex flex-wrap gap-2">
              {mounted && (
                <GitHubCalendar
                  username="RafyR27"
                  colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
                />
              )}
            </div>
          </div>

          {/* Education */}
          <div className="max-w-3xl w-full h-auto flex flex-col gap-6">
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
                        width={500}
                        height={500}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-2">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
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
          <div className="max-w-3xl w-full h-auto flex flex-col gap-6">
            <h2 className="font-bold text-[1.1rem]">Skills</h2>
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

          {/* Get in touch */}
          <div className="max-w-3xl w-full h-auto flex flex-col items-center gap-6 mt-5 mb-10">
            <h2 className="font-bold text-[2rem] text-center">
              {language === "en"
                ? "Let's make something great together."
                : "Mari wujudkan sesuatu yang luar biasa bersama."}
            </h2>
            <Link href="/contact">
              <InteractiveHoverButton>Get in Touch</InteractiveHoverButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
