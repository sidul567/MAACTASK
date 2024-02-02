import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";
import FAQAccordian from "../../utils/FAQAccordian";

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

function FAQ() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="bg-[url('images/background2.png')] bg-blend-overlay bg-[#0052CC] p-4 md:p-24">
      <h5 className="text-white text-center font-light text-sm">
        Common Question
      </h5>
      <h2 className="text-white text-center font-extrabold mt-2 text-2xl">
        Frequently asked questions
      </h2>
      <div className="flex-col md:flex-row flex justify-between mt-16 md:gap-[12rem]">
        <div>
          <FAQAccordian
            id={1}
            open={open}
            handleOpen={handleOpen}
            title="What kind of data can I see in FieldX?"
            body="Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate."
          />
          <FAQAccordian
            id={2}
            open={open}
            handleOpen={handleOpen}
            title="Does Bizzy read my customers' data?"
            body="Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate."
          />
          <FAQAccordian
            id={3}
            open={open}
            handleOpen={handleOpen}
            title="What's your refund and cancellation policy?"
            body="Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate."
          />
        </div>
        <div>
          <FAQAccordian
            id={4}
            open={open}
            handleOpen={handleOpen}
            title="How do you take payments?"
            body="Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate."
          />
          <FAQAccordian
            id={5}
            open={open}
            handleOpen={handleOpen}
            title="Can I also track website analytics on fieldX?"
            body="Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate."
          />
          <FAQAccordian
            id={6}
            open={open}
            handleOpen={handleOpen}
            title="What makes Bizzy different from other analytics tools?"
            body="Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate."
          />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
