"use client"
import SubBanner from "@/components/ui/SubBanner";
import {faqData} from "@/data/faq";
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { useState } from "react";

export default function Page() {
   const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className='pb-80 mb-80'>
      <SubBanner title='Frequently Asked Questions' subtitle='' />
      <section>
          <div className="space-y-4 max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-4 py-12">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <IoChevronUp className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                ) : (
                  <IoChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {faq.answer}
                  </p>
                  {faq.image && (
                    <img
                      src={faq.image}
                      alt={faq.question}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
