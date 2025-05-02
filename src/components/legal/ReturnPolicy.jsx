import React from 'react';

const ReturnPolicy = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1 className="fw-bold mb-4">Return & Refund Policy</h1>
            <p className="text-secondary mb-4">Last Updated: March 9, 2025</p>

            <div className="mb-5">
              <h2 className="fw-semibold mb-3">1. Return Policy Overview</h2>
              <p>
                At KicksMania, we want you to be completely satisfied with your purchase. If you're not entirely happy with your order,
                we're here to help. This Return Policy outlines our guidelines for returns.
              </p>
            </div>

            <div className="mb-5">
              <h2 className="fw-semibold mb-3">2. Return Process</h2>
              <p>To initiate a return, please follow these steps:</p>
              <ol className="mb-3">
                <li>
                  <strong>Contact Customer Service:</strong> Email us at <a href="mailto:kickzmania.in@gmail.com" style={{ textDecoration: "none", color: 'black' }}>kickzmania.in@gmail.com</a> or call on <a href="tel:+919723515869" style={{ textDecoration: "none", color: 'black' }}>+91 97235 15869</a> to request a return authorization.
                </li>
                <li>
                  <strong>Prepare Your Package:</strong> Place the item(s) in the original packaging, if possible. Include your order number and return authorization number.
                </li>
                <li>
                  <strong>Unboxing Video Required:</strong> An unboxing video is mandatory for all return requests to be eligible for exchange or replacement.
                </li>
                <li>
                  <strong>Ship Your Return:</strong> Send your package to the address provided by our customer service team. We recommend using a trackable shipping method.
                </li>
              </ol>
              <p>
                Once we receive your return and verify the item(s) and unboxing video, we will inspect and process your exchange within 24 hours.
              </p>
            </div>

            <div className="mb-5">
              <h2 className="fw-semibold mb-3">3. Damaged or Defective Items</h2>
              <p>
                If you receive a damaged or defective item, please contact our customer service team within 48 hours of delivery. We will provide
                instructions for returning the item and will cover the return shipping costs. Depending on availability, we will either send you a
                replacement or offer an exchange. <strong>Refunds are not provided under any circumstances.</strong>
              </p>
            </div>

            <div className="mb-5">
              <h2 className="fw-semibold mb-3">4. Sale Items</h2>
              <p>
                Items on sale can be returned according to our standard return policy unless otherwise noted as "Final Sale" or "Non-Returnable."
              </p>
            </div>

            <div className="mb-5">
              <h2 className="fw-semibold mb-3">5. No Refund Policy</h2>
              <p>
                Please note that <strong>only replacements or exchanges are allowed</strong>. KicksMania does <strong>not offer refunds</strong> under any condition.
              </p>
            </div>

            <div className="mb-5">
              <h2 className="fw-semibold mb-3">6. Changes to Return Policy</h2>
              <p>
                We reserve the right to modify this Return Policy at any time. Changes will be effective immediately upon posting to our website.
                Your continued use of our services following the posting of changes constitutes your acceptance of such changes.
              </p>
            </div>

            <div className="mb-5">
              <h2 className="fw-semibold mb-3">7. Contact Us</h2>
              <p>
                If you have any questions about our Return Policy, please contact us at:
              </p>
              <p>
                Email: <a href="mailto:kickzmania.in@gmail.com" style={{ textDecoration: "none", color: 'black' }}>kickzmania.in@gmail.com</a><br />
                Phone: <a href="tel:+919723515869" style={{ textDecoration: "none", color: 'black' }}>+91 97235 15869</a>
              </p>
            </div>
          </div>
        </div>
      </div>      
    </>
  );
};

export default ReturnPolicy;
