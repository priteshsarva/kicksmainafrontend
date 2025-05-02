import React from 'react';

const Faq = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Frequently Asked Questions</h1>
      
      <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#question1">
            What are the shipping options available for customers? 

            </button>
          </h2>
          <div id="question1" className="accordion-collapse collapse show">
            <div className="accordion-body">
            We provide shipping services throughout India. For international orders, customers can contact us through WhatsApp for further information.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question2">
            How long does it take for orders to be delivered? 

            </button>
          </h2>
          <div id="question2" className="accordion-collapse collapse">
            <div className="accordion-body">
            Our delivery time varies depending on the customer's location. In state capitals and metro cities, orders are usually delivered within 2 to 5 working days. For other localities, delivery may take up to 3 to 7 working days.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question3">
            What payment methods do you accept? 
            </button>
          </h2>
          <div id="question3" className="accordion-collapse collapse">
            <div className="accordion-body">
            We accept multiple payment methods, including debit cards, credit cards, net 
            banking, UPI payments, and Cash on Delivery (COD)
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question4">
            What is the eligibility criteria for replacement?

            </button>
          </h2>
          <div id="question4" className="accordion-collapse collapse">
            <div className="accordion-body">
            To be eligible for a  replacement, the item must be unused and in the same condition as received, and in the original packaging.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question5">
            Is an unboxing video necessary to raise a return/replacement query? 

            </button>
          </h2>
          <div id="question5" className="accordion-collapse collapse">
            <div className="accordion-body">
            Yes, an unboxing video of the product is necessary to raise a return/replacement query to ensure that the product was received in the condition as we shipped.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
