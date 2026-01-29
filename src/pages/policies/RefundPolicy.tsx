import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 lg:px-8 py-16">
        <article className="max-w-4xl mx-auto prose prose-invert prose-headings:text-foreground prose-p:text-foreground/80 prose-li:text-foreground/80 prose-strong:text-foreground prose-a:text-accent hover:prose-a:text-accent/80">
          <h1 className="text-4xl font-heading font-bold mb-8">Refund Policy</h1>
          
          <p>
            Due to the nature of digital products, <strong>all sales are final</strong> and we do not offer refunds once the product is delivered or accessed. Please review all product descriptions before making a purchase.
          </p>
          
          <p><strong>We Do Not Provide Returns Also</strong></p>
          
          <p>If you encounter any issues while accessing your digital product, please contact us at:</p>
          
          <p>📧 Email: <strong>support@blinkway.org</strong></p>
          <p>📞 Phone: <strong>+91 9259802634</strong></p>
          
          <p>We will ensure your access is restored promptly.</p>
          
          <hr className="border-border my-8" />
          
          <h2>Our Store Information</h2>
          <p>GSTIN: 05EUKPK2994D1ZF</p>
          <p>Address: 103-Chowmandi, Roorkee, 247667</p>
          <p>Email: <a href="mailto:support@blinkway.org">support@blinkway.org</a></p>
          
          <p>© BLINKWAY</p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
