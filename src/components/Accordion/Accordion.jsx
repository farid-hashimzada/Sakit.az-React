import React, { useState } from "react";
import Plus from "../../img/+.svg";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
const Accordion = () => {
  const [panelId, setPanelId] = useState(0);

  const questions = [
    {
      id: 1,
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <>
      <div className="accordion-box">
        <div className="container">
          <h2>Tez-tez verilən suallar</h2>
          <div className="accordion">
            {questions.map((question) => {
              return (
                <div className="accordionItem">
                  <div className="question">
                    <p>{question.question}</p>
                    <span onClick={() => setPanelId(question.id)}>
                      {panelId === question.id ? (
                        <AiOutlineMinus />
                      ) : (
                        <AiOutlinePlus />
                      )}
                    </span>
                  </div>
                  {panelId === question.id && (
                    <div className="answer">{question.answer}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
