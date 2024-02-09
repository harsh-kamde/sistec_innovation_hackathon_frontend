import React, { useState } from "react";
import FAQ from "./FAQ";
import faqAPI from "../../APIs/faqAPI";
import { Accordion } from "react-bootstrap";

const FAQs = () => {
  const [faq] = useState(faqAPI);
  return (
    <>
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="row">
            <h1 className="faq-heading">FAQs</h1>
          </div>

          <Accordion className="mt-2">
            {faq.map((element) => {
              const { id, question, answer } = element;
              return <FAQ id={id} question={question} answer={answer} />;
            })}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default FAQs;
