"use client";
import { useRouter } from "next/navigation";
import { GoogleButton } from "./buttons/GoogleButton";
import { Primarybutton } from "./buttons/Primarybutton";

export const Hero = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center justify-evenly py-28 px-32">
      <div className=" flex-col pr-20">
        <div className="flex items-center gap-2 bg-slate-100 py-2 w-fit px-3 rounded-full font-semibold mb-8">
          <span className="border border-black px-2 py-1 rounded-full">
            New
          </span>{" "}
          Zapier Enterprise is here <Arrow />
        </div>
        <div className="font-black text-8xl pb-3 ">Automate without limits</div>
        <div className="font-medium text-2xl ">
          Turn chaos into smooth operations by automating workflows yourself—no
          developers, no IT tickets, no delays. The only limit is your
          imagination.
        </div>
        <div className="flex gap-4 pt-10">
          <Primarybutton
            lable="Start free with email"
            type="big"
            onClick={() => router.push("/signup")}
          />
          <GoogleButton lable="Start free with Google" type="big" />
        </div>
      </div>
      <div className="max-w-lg">
        <img src="https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726210651/Homepage%20%E2%80%94%20Sept%202024/homepage-hero_vvpkmi.png" />
      </div>
    </div>
  );
};

export const Arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
};
