"use client"
import { cubicBezier } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Heading2 from "../ui/Heading2";
import Paragraph from "../ui/Paragraph";
import { easeOut, motion } from "framer-motion";
function OurAppsSection() {
  const eased = cubicBezier(0.65, 0, 0.35, 1)
  return (
    <section
      id="our-app"
      className="bg-gradient-to-b overflow-x-hidden lg:bg-gradient-to-r   text-background from-[#000000] via-[#BBCCCB] to-[#D9EDEB]   w-full  px-3  sm:px-6 lg:px-12   flex items-center  justify-center   z-10   min-h-[70vh] relative "
    >

<div className="lg:flex py-12 lg:py-0 container mx-auto gap-x-12 items-center justify-center min-h-[70vh] ">
        <div className="text-center lg:text-left  basis-1/2 flex flex-col justify-center gap-y-6">
        <Heading2>Our Apps</Heading2>
          <Paragraph delay={0.1} className="leading-6">
            <span className="block">Mobile App Platform:</span>
            At the heart of EaseUp&apos;s operations is our innovative mobile app,
            providing a seamless platform for handymen and clients to connect
            effortlessly.
          </Paragraph>
          <Paragraph delay={0.2} className="leading-6">
            The app serves as a virtual marketplace, facilitating the exchange
            of services with efficiency and convenience.
          </Paragraph>
          <div>
          <motion.span transition={{delay:0.4, type:"tween", ease:eased, duration:0.75}} initial={{opacity:0}} whileInView={{opacity:1}}><a href="/products" className="py-[10px]  hover:scale-[1.1] duration-150 ease-linear z-50 cursor-pointer lg:py-[15px] lg:px-12 lg:mt-[10px] inline-block px-10 font-medium bg-foreground rounded-full text-[#EBEBEB]">See More</a></motion.span>  
          </div>

        </div>
        <motion.div initial={{ scale:0.8}} viewport={{once:true}} whileInView={{ scale:1}} transition={{type:"tween",delay:0.3, duration:0.75, ease: eased}} className="basis-1/2 flex items-center justify-center relative h-[400px]  ">
   



          <Image
             src="/ourApp2.png"
              width={300}
              height={400}
              className=" absolute lg:block hidden left-[50%] -translate-x-[calc(50%+50px)]  object-contain w-full z-10 h-full"
             alt="EaseUp mobile app - handyman profile screen"
             />
             
               <Image
             src="/ourApp1.png"
              width={300}
              height={400}
              className="absolute left-[50%] lg:block hidden -translate-x-[calc(50%-50px)] top-0 h-full object-contain  w-full"
             alt="EaseUp mobile app - service selection screen"
             />
                <Image
             src="/man-helmet.png"
              width={300}
              height={400}
              className=" absolute lg:hidden block left-[50%] -translate-x-[calc(50%+50px)]  object-contain w-full z-10 h-full"
             alt="Professional craftsman with safety helmet"
             />
             
               <Image
             src="/popular-services.png"
              width={300}
              height={400}
              className="absolute left-[50%] lg:hidden block -translate-x-[calc(50%-50px)] top-0 h-full object-contain  w-full"
             alt="EaseUp popular services screen"
             />
          
        
        </motion.div>
      </div>
    </section>
  );
}

export default OurAppsSection;
