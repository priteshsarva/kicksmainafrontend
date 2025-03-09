import React from 'react';

const Faq = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Frequently Asked Questions</h1>
      
      <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#question1">
              What payment methods do you accept?
            </button>
          </h2>
          <div id="question1" className="accordion-collapse collapse show">
            <div className="accordion-body">
              We accept all major credit cards including Visa, Mastercard, and American Express, as well as PayPal.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question2">
              How long does shipping take?
            </button>
          </h2>
          <div id="question2" className="accordion-collapse collapse">
            <div className="accordion-body">
              Standard shipping typically takes 3-5 business days. Express options are available at checkout.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question3">
              Can I return or exchange products?
            </button>
          </h2>
          <div id="question3" className="accordion-collapse collapse">
            <div className="accordion-body">
              Yes, we offer a 30-day return policy. Please see our Returns Policy for details.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
