"use client";

import { Send } from "lucide-react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { useLanguage } from "../hooks/language-provider";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { useGSAP } from "@gsap/react";
import useScreen from "../hooks/useScreen";
import gsap from "gsap";

export default function ContactPage() {
  const { language } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [finish, setFinish] = useState(false);
  const animateScreen = useScreen();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to("#contact", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const message = form.get("message") as string;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed");
      }

      toast.success("Email berhasil dikirim!", { position: "top-center" });
      formRef.current?.reset();
    } catch (error) {
      console.error(error);
      toast.error("Gagal mengirim email.", { position: "top-center" });
    }
  }

  return (
    <>
      <div
        className={`h-screen flex justify-center items-center ${finish ? "hidden" : "block"} relative`}
      >
        <h1
          id="contact"
          className="font-bold lg:text-[8rem] text-[4rem] tracking-wider text-white opacity-0 translate-y-10 z-999"
        >
          Contact
        </h1>
      </div>

      <div className="screen bg-black fixed inset-0 origin-top z-50"></div>

      <main
        id="main"
        className="w-full min-h-screen flex flex-col items-center justify-center mb-10 gap-15 lg:px-12 px-5"
      >
        <div className="max-w-3xl">
          <div className="space-y-3">
            {language === "en" ? (
              <>
                <h1 className="text-4xl font-bold tracking-tight">
                  Let&apos;s make something great together.
                </h1>

                <p className="text-muted-foreground leading-relaxed">
                  Have a project in mind, a job opportunity, or just want to say
                  hello? Fill out the form below.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-4xl font-bold tracking-tight">
                  Mari wujudkan sesuatu yang luar biasa bersama.
                </h1>

                <p className="text-muted-foreground leading-relaxed">
                  Punya ide proyek, peluang kerja sama, atau sekadar ingin
                  menyapa? Silakan isi formulir di bawah ini.
                </p>
              </>
            )}
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="John Doe" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={8}
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full h-11 rounded-xl cursor-pointer"
            >
              <Send className="mr-2 size-4" />
              Send Email
            </Button>
          </form>
        </div>
      </main>
    </>
  );
}
