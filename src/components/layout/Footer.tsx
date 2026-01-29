import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
const footerLinks = {
  products: [{
    name: "All Products",
    href: "/products"
  }, {
    name: "AI Templates",
    href: "/categories"
  }, {
    name: "SaaS Tools",
    href: "/categories"
  }, {
    name: "Business PDFs",
    href: "/categories"
  }],
  company: [{
    name: "About",
    href: "/about"
  }, {
    name: "Testimonials",
    href: "/testimonials"
  }, {
    name: "Resources",
    href: "/resources"
  }],
  legal: [{
    name: "Privacy Policy",
    href: "/privacy"
  }, {
    name: "Terms & Conditions",
    href: "/terms"
  }, {
    name: "Refund Policy",
    href: "/refunds"
  }]
};
export function Footer() {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 text-center">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center">
              <img src={logoWhite} alt="Blinkway Logo" className="w-12 h-12 object-contain" />
            </div>
              <span className="font-heading text-xl font-thin">BLINKWAY</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Premium digital products including PDFs, SaaS tools, AI templates, 
              and automation resources—built for speed, clarity, and growth.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <Mail className="w-4 h-4" />
              <a href="mailto:hello@blinkway.com" className="hover:text-accent transition-colors">
                hello@blinkway.com
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} Blinkway. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow"></span>
                Secure Payments
              </span>
              <span className="text-sm text-primary-foreground/70">
                Lifetime Access
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}