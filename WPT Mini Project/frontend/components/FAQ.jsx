import  { useState } from 'react';
import '../cssfiles/FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: 'What types of events do you plan?', answer: 'We plan all types of events including weddings, birthdays, corporate events, and private parties.' },
    { question: 'Do you offer customizable packages?', answer: 'Yes, we offer fully customizable packages to suit your specific needs and preferences.' },
    { question: 'How far in advance should I book your services?', answer: 'We recommend booking our services at least 3-6 months in advance to ensure availability and ample planning time.' },
    { question: 'Do you handle all the vendor coordination?', answer: 'Yes, we take care of all vendor coordination, from catering and decor to entertainment and photography.' },
    { question: 'What is your pricing structure?', answer: 'Our pricing structure varies depending on the type and scale of the event. Contact us for a detailed quote tailored to your event.' },
  ];

  return (
    <div className="faq">
      <h2 className="faq-title">FAQ</h2>
      <div className="subdiv">
        {faqs.map((faq, index) => (
          <div className="subque" key={index}>
            <div className="que">
              {faq.question}
              <button className="toggle-btn" onClick={() => handleToggle(index)}>
                {openIndex === index ? '-' : '+'}
              </button>
            </div>
            {openIndex === index && <div className="ans">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
