import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo2.png";
import { Facebook, Instagram, Music2 } from "lucide-react";


function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#000000] text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Left: Logo + tagline */}
          <div className="flex flex-col md:items-start items-center ">
            <NavLink to="/" className="inline-flex items-center">
              <img
                src={logo}
                alt="Zain Flowers"
                className="h-18 w-auto object-contain opacity-90"
              />
            </NavLink>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/80 italic">
              Fresh flowers, beautiful bouquets, and fast delivery across
              Islamabad. Celebrate every moment with us — shop online or visit
              us today!
            </p>
          </div>

          {/* Middle: Contact info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold">Contact Info</h3>

            <div className="mt-6 space-y-2 text-sm text-white/80 leading-relaxed">
              <p>
                <span className="text-white font-medium">Email:</span>{" "}
                zainflowers@gmail.com
              </p>
              <p>
                <span className="text-white font-medium">Phone:</span>{" "}
                +923107949463
              </p>
              <p>
                <span className="text-white font-medium">Address:</span>{" "}
                Shop 11, F-6 Flowers Market, Islamabad
              </p>
              <p>
                <span className="text-white font-medium">Business Hours:</span>{" "}
                Open 24/7 | Monday – Sunday
              </p>
            </div>
          </div>

          {/* Right: Quick links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold">Quick Links</h3>

            <ul className="mt-6 space-y-2 text-sm text-white/80">
              {[
                { label: "Anniversary", to: "/category/anniversary" },
                { label: "Cakes", to: "/cakes" },
                { label: "Flower Bouquets", to: "/flower-bouquets" },
                { label: "Birthday", to: "/category/birthday" },
                { label: "Mother’s Day", to: "/category/mothers-day" },
                { label: "Valentine’s Day", to: "/category/valentines-day" },
              ].map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className="
                      inline-block
                      transition-colors
                      hover:text-[#CB7885]
                      hover:underline
                      underline-offset-4
                    "
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/70">
            Copyright © {year} | Zain Flowers
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-white/80 hover:text-[#D4D994] transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white/80 hover:text-[#D4D994] transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="text-white/80 hover:text-[#D4D994] transition-colors"
            >
              <Music2 size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
