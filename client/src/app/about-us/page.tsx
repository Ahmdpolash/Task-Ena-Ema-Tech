"use client";
import image from "@/assest/Profile img.png";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Tilt from "react-parallax-tilt";
import Container from "@/components/Container";

const AboutUs = () => {
  return (
    <div className=" min-h-[100vh]  h-auto">
      <Navbar />
      <Container>
        <div className="w-full lg:max-w-[90%] mx-auto flex flex-col lg:flex-row justify-around mt-8 lg:mt-24 gap-y-5 lg:gap-y-0 px-4 lg:px-19">
          <div className="lg:w-full  cursor-pointer">
            <Tilt
              transitionSpeed={700}
              transitionEasing={"cubic-bezier(.03,.98,.52,.99)"}
            >
              <Image
                src={image}
                alt="polash/image"
                height={250}
                width={800}
                className="lg:w-[450px] mx-auto  border-[2px] grayscale rounded-md hover:grayscale-0 transition-all duration-500 border-[#406BBF]"
              />
            </Tilt>
          </div>

          <div className="lg:w-full ">
            <h3 className="font-bold text-2xl text-[#406BBF] lg:text-3xl mb-1 ">
              Md Polash Ahmed
            </h3>
            <p className=" text-1xl text-[#264073] lg:text-2xl mb-2 ">
              Founder of this app
            </p>
            <p className=" mt-4 lg:w-full">
              I am Polash Ahmed. I am a front-end web developer. I have been
              working in this sector for the past 1+ years. I consider coding as
              the most important thing in my life. I love to tackle complex
              problems.{" "}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
