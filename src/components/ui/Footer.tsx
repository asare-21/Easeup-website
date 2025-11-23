import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
function Footer() {
  
  //Please do not mind this section id be optimising
  return (
    <footer className="relative  z-10 min-h-[35vh]   w-full text-background bg-foreground pt-10">
      <div className="container mx-auto mb-[50px] lg:mb-0 h-full px-6 lg:px-12 md:flex-row flex-col gap-y-5 flex justify-between items-start">
        <div >
          <div className="relative w-[120px] mb-3 h-[34px] ">
            <Image
              fill
              sizes="120px"
              className=""
              src={"/logo.png"}
              alt="EaseUp logo"
            />
          </div>
          <ul className="text-[13px] flex flex-col gap-y-3 w-full">
            <li>Experience Effortless Task Completion with EaseUp</li>
            <li>Embrace the Power of Simplicity!</li>
          </ul>
        </div>
         <div className="text-[13px] items-center w-full md:hidden  flex flex-col gap-y-2">
          <div className="flex justify-center w-full gap-x-5"><p>Help</p><p>Live support</p></div>
          <div className="flex justify-center w-full gap-x-5"><p>Terms and conditions</p><p>Privacy Policy</p></div>
         </div>
       
      <div className="md:flex justify-between items-start basis-3/4 hidden ">
      <div className="lg:mb-0 mb-5">
          <h2 className="font-medium  mb-3 lg:text-lg">Resources</h2>
          <ul className=" text-[13px] flex flex-col gap-y-3 w-full">
            <li>Help</li>
            <li>Live support</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium mb-3 lg:text-lg">Company</h2>
          <ul className="text-[13px] flex flex-col gap-y-3 w-full">
            <li> <Link href="#about">About Us</Link></li>
            <li>Terms and conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium mb-3 lg:text-lg ">Location</h2>
          <ul className="text-[13px] flex flex-col gap-y-3 w-full">
            <li className="flex items-center gap-x-2">
              <MapPin />
              Accra, Ghana
            </li>
            <li className="flex items-center gap-x-2">
              <Phone />
             <Link href={"tel:264535539"}>26 453 5539</Link> 
            </li>
            <li className="flex items-center gap-x-2">
              <Mail />
             <Link href={"mailto:support@easeupgh.tech"}>support@easeupgh.tech</Link> 
            </li>
          </ul>
        </div>
      </div>
      </div>
      <br/>
      <div className="bg-[#121212] flex items-center justify-center w-full h-[40px] absolute bottom-0">
        <p className="text-center text-[13px]">
          © Easeup Limited Company, All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
