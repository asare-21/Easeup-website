import Image from "next/image";
import React from "react";
import Link from "next/link";

function HeroSection() {
  return (
    <React.Fragment>
    <section id="home" className="fixed  z-[1] lg:top-[100px] top-[80px] left-0 w-full  lg:h-[calc(100vh-100px)] h-[calc(90vh-80px)]  ">
     
      <div className="h-full  w-full ">

   
      <div className="h-full  relative ">
      <div className="w-full h-full flex  ">
          <div className=" w-full lg:basis-1/2 relative">
            <Image
              className="basis-1 lg:basis-1/2 object-cover"
              src={"/electrician.png"}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              alt="Professional electrician at work"
            />
          </div>
          <div className="hidden lg:block basis-1/2 relative">
            <Image
              className="basis-1/2 object-cover"
              src={"/client.png"}
              fill
              sizes="50vw"
              alt="Happy client receiving service"
            />
          </div>
        </div>

        <div className="bg-foreground/[0.25] z-50  text-background flex items-center justify-center absolute left-0 top-0    w-full h-full">
          
          <div className="container mx-auto gap-y-6 px-4 lg:px-[200px] flex-col flex items-center justify-center ">
            <h1 className="text-center  text-xl sm:text-3xl lg:text-4xl lg:leading-[54px] font-semibold">
              Connecting You with Skilled Handymen for All Your Home Improvement
              Needs
            </h1>
            <p className="text-center text-[15px] lg:text-lg leading-[24px] font-medium">
              EaseUp is a dynamic service provider offering a range of home
              improvement solutions, including plumbing, electrical work,
              tiling, painting, carpentry, and more.
            </p>
            <p className="text-center text-[15px]  lg:text-lg leading-[24px] font-medium">
              Our primary mission is to streamline the process of connecting
              clients with skilled handymen, making life easier for customers
              while simultaneously creating job opportunities for talented
              tradespeople.
            </p>
            <div>
              
           <Link href="mailto:support@easeupgh.tech" className="hover:scale-[1.1] ease-linear duration-150 py-3 px-10 lg:px-12 inline-block cursor-pointer  lg:mt-[10px] font-medium bg-foreground rounded-full text-[#EBEBEB]">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    </React.Fragment>
  );
}

export default HeroSection;
