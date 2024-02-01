import React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-0" : "-rotate-90"
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function FAQAccordian({ id, open, handleOpen, title, body }) {
  return (
    <Accordion
      open={open === id}
      icon={<Icon id={id} open={open} />}
      className="shadow-md bg-white p-4 rounded-md mb-3"
    >
      <AccordionHeader
        onClick={() => handleOpen(id)}
        className="text-[#0B141F] border-b-0 p-0 font-semibold text-base"
      >
        {title}
      </AccordionHeader>
      <AccordionBody className="text-sm font-light text-[#4E4E4E]">
        {body}
      </AccordionBody>
    </Accordion>
  );
}

export default FAQAccordian;
