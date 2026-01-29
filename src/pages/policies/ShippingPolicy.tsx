import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 lg:px-8 py-16">
        <article className="max-w-4xl mx-auto prose prose-invert prose-headings:text-foreground prose-p:text-foreground/80 prose-li:text-foreground/80 prose-strong:text-foreground prose-a:text-accent hover:prose-a:text-accent/80">
          <h1 className="text-4xl font-heading font-bold mb-8">Shipping Policy</h1>
          
          <h2>Shipping Policy – BLINKWAY</h2>
          
          <p><strong>Effective Date:</strong> 10-08-2025</p>
          
          <p>
            At <strong>BLINKWAY</strong>, we specialize in providing <strong>digital products and solutions</strong>. As such, <strong>we do not ship any physical products</strong>.
          </p>
          
          <hr className="border-border my-8" />
          
          <h3>1. Delivery Method</h3>
          <ul>
            <li>All our products are delivered <strong>digitally</strong> via email or direct download through our website after successful payment.</li>
            <li>You will receive immediate access to your purchased product(s) upon order confirmation.</li>
          </ul>
          
          <hr className="border-border my-8" />
          
          <h3>2. Delivery Time</h3>
          <ul>
            <li><strong>Instant Access:</strong> In most cases, download links or access instructions are available immediately after payment is processed.</li>
            <li>If you do not receive your product within a few minutes, please check your spam/junk folder or contact our support team.</li>
          </ul>
          
          <hr className="border-border my-8" />
          
          <h3>3. No Physical Shipping</h3>
          <p>
            Since our products are <strong>digital in nature</strong>, there is <strong>no physical shipping</strong> and no shipping charges.
          </p>
          
          <hr className="border-border my-8" />
          
          <h3>4. Issues with Download or Access</h3>
          <p>If you encounter any issues while accessing your digital product, please contact us at:</p>
          <p>📧 Email: <strong>support@blinkway.org</strong></p>
          <p>📞 Phone: <strong>+91 9259802634</strong></p>
          <p>We will ensure your access is restored promptly.</p>
          
          <hr className="border-border my-8" />
          
          <h3>5. Refund Policy</h3>
          <p>
            Due to the nature of digital products, <strong>all sales are final</strong> and we do not offer refunds once the product is delivered or accessed. Please review all product descriptions before making a purchase.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
