import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      que: "What is digital marketing?",
      ans: "Digital marketing is the practice of promoting products or services using digital channels such as search engines, social media, email, and websites",
    },
    {
      que: "What is web development?",
      ans: "Web development refers to the process of creating and maintaining websites. It involves coding, designing, and optimizing websites for functionality and user experience",
    },
    {
      que: "What is graphic design?",
      ans: "Graphic design is the art of creating visual content to communicate messages. It involves using typography, images, and colors to convey information and evoke emotions",
    },
    {
      que: "Why choose our services?",
      ans: "Our services are tailored to meet your specific needs and goals. We have a team of experienced professionals who are dedicated to delivering high-quality results.",
    },
    {
      que: "How can I contact you?",
      ans: "You can contact us through the provided contact information on our website. We are available to answer any further questions you may have.",
    },
  ];
  return (
    <section id="faq" className="h-max flex flex-col p-4 sm:px-14 lg:px-24 py-8">
      <h1 className="text-3xl font-bold">FAQs</h1>
      <p className="mt-4 text-sm sm:text-md">
        Find answers to common questions about our digital marketing, web
        development and graphic design services.
      </p>
      <hr className="mt-8  border-solid border-black" />
      <div className="flex flex-col">
        <Accordion type="single" collapsible>
          {faqs.map((obj, index) => (
            <div key={index} className="flex flex-col gap-4">
              <AccordionItem value={index + 1} className={'border-b border-black'}>
                <AccordionTrigger className={'text-lg'}>{obj.que}</AccordionTrigger>
                <AccordionContent className={'sm:pr-44'}>{obj.ans}</AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
      <div className="flex flex-col gap-4 mt-12">
        <h1 className="text-2xl font-bold">Still have any questions?</h1>
        <h5>Contact us for more information or get started.</h5>
        <a href="mailto:reddmatrixmedia@gmail.com" className="btn">Contact</a>
      </div>
    </section>
  );
};

export default FAQ;
