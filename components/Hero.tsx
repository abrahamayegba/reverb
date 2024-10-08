import localFont from "next/font/local";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const clashDisplay = localFont({
  src: "../app/fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clash",
  weight: "100 900",
});

const Hero = () => {
  return (
    <div>
      <div className="relative isolate pt-14">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-16 lg:flex lg:items-start lg:gap-x-10 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-[750px] lg:mx-0 lg:flex-auto">
            <h1
              className={`${clashDisplay.className} max-w-[750px] text-4xl sm:leading-[70px] font-semibold text-[#131313] sm:text-6xl`}
            >
              Chat with customers anywhere, anytime with Reverb
            </h1>
            <p className="mt-6 text-lg max-w-[460px] leading-8 text-gray-600">
              Great software that allows you to chat from any place at any time
              without interruption.
            </p>
            <div className="mt-6 flex items-center gap-x-6">
              <Link
                href="https://beta.verzo.app/"
                className="rounded-[4px] md:px-7 px-5 py-2.5 text-base text-white bg-primary-blue font-medium "
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="mt-16 sm:mt-16 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <Image src="/hero.png" alt="hero" width={500} height={488} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
