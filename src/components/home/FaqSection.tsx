"use client"
import Image from "next/image";
import DropDown from "../ui/DropDown";
import { faqData } from "@/contents/faq";
import { motion } from "framer-motion";
import Heading2 from "../ui/Heading2";
import Paragraph from "../ui/Paragraph";
import { cubicBezier } from "framer-motion";
function FaqSection() {
  const eased = cubicBezier(0.65, 0, 0.35, 1)
  return (
    <section className="w-full relative  lg:px-12 px-3 sm:px-6  min-h-[90vh]  z-10 bg-inherit flex items-center justify-center">
      <div className="container mx-auto gap-x-12 lg:px-12 lg:flex items-center justify-center h-[80%] ">
        <div className="basis-2/5 text-center lg:text-left">
          <div className="mb-6">
            <Heading2 className="mb-6">Frequently asked questions</Heading2>
          </div>

          <Paragraph delay={0.2} className="leading-7">
            We&apos;ve compiled a list of commonly asked questions to provide you with
            quick and easy access to the information you need. We&apos;re always
            expanding our FAQ section, so if you don&apos;t find the answer to your
            question here, please feel free to contact us.
          </Paragraph>
        </div>
        <motion.div
          initial={{ y: 120, scale: 0.9 }}
          whileInView={{ y: 0, scale: 1 }}
          transition={{
            type: "tween",
            ease: eased,
            delay: 0.2,
            duration: 0.75,
          }}
          viewport={{ once: true }}
          className="basis-3/5 mt-8 lg:mt-0"
        >
          <div className="text-[15px] ">
            {faqData.map((faq, id) => (
              <DropDown question={faq.question} answer={faq.answer} key={id} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FaqSection;
