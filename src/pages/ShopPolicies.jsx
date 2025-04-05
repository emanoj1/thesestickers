import React from 'react';
import './Page.css';

function ShopPolicies() {
  return (
    <div className="page shop-policies-page">
      <div className="policies-content">
        <h2>Shop Policies</h2>
        <h3>Terms & Conditions</h3>

        <p>By making a purchase on our website, you agree to the following terms and conditions:</p>

        <ol>
          <li>
            <strong>Orders:</strong> All orders are subject to availability and confirmation.
          </li>
          <li>
            <strong>Prices:</strong> Product prices are listed in Australian dollars and are subject to change without notice.
          </li>
          <li>
            <strong>Payment:</strong> Full payment is required at the time of ordering. Payment processing is conducted by Stripe, and they accept all major credit cards.
          </li>
          <li>
            <strong>Shipping:</strong> Delivery times are estimates and may vary depending on the destination. Shipping fees may apply. I process and package orders within 4 business days. Once your order is prepared and on its way to the post office, you'll receive an email notification to keep you updated.
          </li>
          <li>
            <strong>Returns and Refunds:</strong> All sales are final. No returns, refunds or exchanges.
            <br />
            Each item is carefully inspected for quality, though slight variations may occur. I strive to showcase my products accurately in photos but keep in mind that colors can appear differently across screens. If you have any questions or concerns about your order, feel free to reach out—I'm committed to ensuring you're happy with your purchase!
            <br />
            Once a shipping label is created and the package is in transit, no changes can be made. If your order is returned due to an incorrect address, you'll need to cover the shipping cost for re-delivery to a new address. Please make sure your shipping and contact information is correct before completing checkout.
            <br />
            The courier company delivering the item should be contacted directly about any package that arrive damaged.
          </li>
          <li>
            <strong>Intellectual Property:</strong> All intellectual property rights related to the products remain the property of Manoj Kumar of These Stickers.
          </li>
          <li>
            <strong>Limitation of Liability:</strong> We shall not be held liable for any direct, indirect, special, or consequential damages arising from the use of our products.
          </li>
          <li>
            <strong>Privacy:</strong> Your privacy is important to me. Your information is only used to ship your order or contact you if there’s an issue. This shop uses SSL encryption for added security when entering your details at checkout.
          </li>
        </ol>

        <p>
          By placing an order, you agree to comply with these terms and conditions of sale.
        </p>

        <p>
          For any questions or concerns, please get in touch with us using the <a href="/contact">Contact</a> page.
        </p>

        <p>
          <strong>Wholesale orders:</strong> If you'd like to stock my products in your specialty retail shop, I'd love to connect! Reach out to request my wholesale catalogue.
        </p>

        <p>Thank you for visiting and hope you buy some stickers from me!</p>
      </div>
    </div>
  );
}

export default ShopPolicies;

