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
              All orders are processed within 1-2 business days (Monday through Friday, excluding holidays) after receiving your order 
              confirmation email. Orders placed after 12 PM (EST) may be processed the next business day.
            </p>
            <p>
              During high-volume periods (such as holidays or special promotions), processing times may be extended by an additional 
              1-2 business days. We will notify you if there are any unusual delays in processing your order.
            </p>
          </div>
          
          <div className="mb-5">
            <h2 className="fw-semibold mb-3">3. Shipping Methods and Timeframes</h2>
            <p>
              We offer the following shipping options:
            </p>
            <table className="table table-bordered mb-3">
              <thead className="table-light">
                <tr>
                  <th>Shipping Method</th>
                  <th>Estimated Delivery Time</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Standard Shipping</td>
                  <td>5-7 business days</td>
                  <td>$7.99 (Free on orders over $100)</td>
                </tr>
                <tr>
                  <td>Expedited Shipping</td>
                  <td>3-4 business days</td>
                  <td>$14.99</td>
                </tr>
                <tr>
                  <td>Express Shipping</td>
                  <td>1-2 business days</td>
                  <td>$24.99</td>
                </tr>
                <tr>
                  <td>International Shipping</td>
                  <td>7-14 business days</td>
                  <td>Varies by country (calculated at checkout)</td>
                </tr>
              </tbody>
            </table>
            <p>
              Please note that these timeframes are estimates and not guarantees. Delivery times may vary based on the shipping carrier, 
              your location, and other factors beyond our control.
            </p>
          </div>
          
          <div className="mb-5">
            <h2 className="fw-semibold mb-3">4. Shipping Destinations</h2>
            <p>
              We currently ship to the following regions:
            </p>
            <ul className="mb-3">
              <li>United States (all 50 states and territories)</li>
              <li>Canada</li>
              <li>European Union countries</li>
              <li>United Kingdom</li>
              <li>Australia</li>
              <li>New Zealand</li>
              <li>Select Asian countries (Japan, South Korea, Singapore)</li>
            </ul>
            <p>
              If your country is not listed above, please contact our customer service team to inquire about shipping options.
            </p>
          </div>
          
          <div className="mb-5">
            <h2 className="fw-semibold mb-3">5. Tracking Information</h2>
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
            <h2 className="fw-semibold mb-3">6. International Shipping</h2>
            <p>
              For international orders, please note the following:
            </p>
            <ul className="mb-3">
              <li>
                <strong>Customs and Import Duties:</strong> International orders may be subject to customs fees, import duties, taxes, 
                or other charges imposed by the destination country. These fees are the responsibility of the recipient and are not 
                included in our shipping charges.
              </li>
              <li>
                <strong>Delivery Timeframes:</strong> International deliveries may take longer than estimated due to customs processing 
                and other factors. Please allow additional time for international shipments.
              </li>
              <li>
                <strong>Address Accuracy:</strong> Please ensure your shipping address is complete and accurate, including any necessary 
                postal codes or apartment numbers. We are not responsible for delays or non-delivery due to incorrect address information.
              </li>
            </ul>
          </div>
          
          <div className="mb-5">
            <h2 className="fw-semibold mb-3">7. Shipping Restrictions</h2>
            <p>
              Certain products may have shipping restrictions due to size, weight, or regulatory requirements. We will notify you if any 
              items in your order cannot be shipped to your location.
            </p>
          </div>
          
          <div className="mb-5">
            <h2 className="fw-semibold mb-3">8. Order Issues</h2>
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
            <h2 className="fw-semibold mb-3">9. Address Changes</h2>
            <p>
              If you need to change your shipping address after placing an order, please contact our customer service team as soon as 
              possible. We can only accommodate address changes if the order has not yet been processed for shipping.
            </p>
          </div>
          
          <div className="mb-5">
            <h2 className="fw-semibold mb-3">10. Changes to Shipping Policy</h2>
            <p>
              We reserve the right to modify this Shipping Policy at any time. Changes will be effective immediately upon posting to our 
              website. Your continued use of our services following the posting of changes constitutes your acceptance of such changes.
            </p>
          </div>
          
          <div className="mb-5">
            <h2 className="fw-semibold mb-3">11. Contact Us</h2>
            <p>
              If you have any questions about our Shipping Policy, please contact us at:
            </p>
            <p>
              Email: shipping@kicksmania.com<br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
