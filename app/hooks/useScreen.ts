"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

CustomEase.create("hop", "0.9, 0, 0.1, 1");

export default function useScreen() {
  const tl = gsap.timeline({
    paused: true
  });

  useGSAP(() => {
    tl.to(".screen", {
      scaleY: 0,
      duration: 1.25,
      ease: "hop",
    });
  }, []);

  const animateScreen = () => {
    tl.play();
  }

  return animateScreen;
}
