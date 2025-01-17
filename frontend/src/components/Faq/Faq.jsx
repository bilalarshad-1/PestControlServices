import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeFaq, setActiveFaq] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5012/api/faqs")
      .then((response) => response.json())
      .then((data) => setFaqs(data));
  }, []);

  
  const handleQuestionClick = (id) => {
    setActiveFaq((prev) => (prev === id ? null : id)); 
  };

  return (
    <>    <section
    className="relative bg-cover bg-center bg-no-repeat h-[60vh] flex items-center"
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2kD5LHQeDanpFvM4nmOJmrFEhIiqZtuH_xA&s')`
      }}
    >

      <div className="bg-green-800/70 w-full h-full absolute top-0 left-0"></div>

      <div className="relative z-10 max-w-xl pl-8 md:pl-16 lg:pl-20 text-white">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
          Good Night, <br /> Sleep Tight, <br />
          Leave the rest to Us.
        </h1>
        <p className="text-sm md:text-base font-light mb-6">
          Safe, affordable, award-winning Pest Control for your Home or Business
          in the Greater Toronto Area of Ontario.
        </p>
        <NavLink
        
        to="/"
        
        
      >
         <button className="px-6 py-3 bg-white text-green-800 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition-all">
          FAQ  → Home
        </button>
      </NavLink>
       
      </div>
      
    </section>  
    <div className="flex flex-col md:flex-row gap-8 p-8 bg-gray-50">
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h1>
        <ul className="space-y-4">
          {faqs.map((faq) => (
            <li
              key={faq._id}
              className="border border-gray-300 rounded-lg p-4 bg-white shadow"
            >
              <button
                onClick={() => handleQuestionClick(faq._id)}
                className="w-full text-left flex items-center justify-between focus:outline-none"
              >
                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                <span
                  className={`transform transition-transform ${
                    activeFaq === faq._id ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>
              {activeFaq === faq._id && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </div>

      
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="https://pestraid.strongholdthemes.com/demos/demo1/wp-content/uploads/2024/07/Depositphotos_305951718_ds-bgremoved2.png"
          alt="FAQ Illustration"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
    </>
  );
};

export default Faq;
