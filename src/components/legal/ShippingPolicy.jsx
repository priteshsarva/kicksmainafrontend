import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h1 className="fw-bold mb-4">Shipping Policy</h1>
          <p className="text-secondary mb-4">Last Updated: March 9, 2025</p>

          <div className="mb-5">
            <h2 className="fw-semibold mb-3">1. Shipping Overview</h2>
            <p>
              At KicksMania, we strive to provide reliable, fast shipping for all orders. This Shipping Policy outlines our shipping
              methods, timeframes, costs, and other important information regarding the delivery of your orders.
            </p>
          </div>

          <div className="mb-5">
            <h2 className="fw-semibold mb-3">2. Processing Time</h2>
            <p>
              All orders are processed within 24 Hrs after receiving your order
              confirmation. Orders placed after 12 PM (EST) may be processed the next business day.
            </p>
            <p>
              During high-volume periods (such as holidays or special promotions), processing times may be extended by an additional
              1-2 business days. We will notify you if there are any unusual delays in processing your order.
            </p>
          </div>

          <div className="mb-5">
            <h2 className="fw-semibold mb-3">3. Tracking Information</h2>
            <p>
              Once your order ships, you will receive a shipping confirmation email with a tracking number. You can use this tracking
              number to monitor the status of your delivery through the carrier's website or our order tracking page.
            </p>
            <p>
              If you do not receive tracking information within 3 business days after your order confirmation, please contact our
              customer service team.
            </p>
          </div>



          <div className="mb-5">
            <h2 className="fw-semibold mb-3">4. Order Issues</h2>
            <p>
              If you encounter any of the following issues with your shipment, please contact our customer service team within 48 hours
              of delivery:
            </p>
            <ul className="mb-3">
              <li>Missing items</li>
              <li>Damaged items</li>
              <li>Incorrect items</li>
              <li>Package shows as delivered but was not received</li>
            </ul>
          </div>

          <div className="mb-5">
            <h2 className="fw-semibold mb-3">5. Address Changes</h2>
            <p>
              If you need to change your shipping address after placing an order, please contact our customer service team as soon as
              possible. We can only accommodate address changes if the order has not yet been processed for shipping.
            </p>
          </div>

          <div className="mb-5">
            <h2 className="fw-semibold mb-3">6. Changes to Shipping Policy</h2>
            <p>
              We reserve the right to modify this Shipping Policy at any time. Changes will be effective immediately upon posting to our
              website. Your continued use of our services following the posting of changes constitutes your acceptance of such changes.
            </p>
          </div>

          <div className="mb-5">
            <h2 className="fw-semibold mb-3">7. Contact Us</h2>
            <p>
              If you have any questions about our Shipping Policy, please contact us at:
            </p>
            <p>
              Email: <a href="mailto:kickzmania.in@gmail.com" style={{ textDecoration: "none", color: 'black' }}>kickzmania.in@gmail.com</a><br />
              Phone: <a href="tel:+919723515869" style={{ textDecoration: "none", color: 'black' }}>+91 97235 15869 </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
