import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo/logo.png";
import { ChevronDown, Menu, X } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const occasionsLinks = [
    { name: "Valentine's Day", path: "/products" },
    { name: "Mother's Day", path: "/products" },
    { name: "Anniversary", path: "/products" },
    { name: "Birthday", path: "/products" },
    { name: "For Him", path: "/products" },
  ];

  const eventsLinks = [
    { name: "Wedding Decoration", path: "/products" },
    { name: "Birthday Decoration", path: "/products" },
    { name: "Car Decoration", path: "/products" },
  ];

  const linkClass = ({ isActive }) =>
    [
      "flex items-center gap-1 text-[14px] tracking-wide transition-all duration-200",
      isActive
        ? "text-[#893941] font-semibold"
        : "text-gray-700 hover:text-[#893941]",
    ].join(" ");

  const mobileLinkClass = ({ isActive }) =>
    [
      "block w-full rounded-lg px-3 py-3 text-sm transition-colors mb-[6px]",
      isActive
        ? "bg-[#D4D994]/40 text-[#893941] font-semibold"
        : "text-gray-800 hover:bg-[#D4D994]/30 hover:text-[#893941]",
    ].join(" ");

  // Close mobile menu on route change (when a link is clicked)
  const handleNav = (to) => {
    setOpen(false);
    navigate(to);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className="top-0 z-50 w-full">
      {/* Announcement Bar */}
      <div className="bg-[#893941] text-white text-center text-sm py-2 tracking-wide">
        Delivery charges vary based on location.
      </div>

      {/* Main Navbar */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center gap-3">
          {/* Logo */}
          <NavLink to="/" className="shrink-0" onClick={() => setOpen(false)}>
            <img
              src={logo}
              alt="Zain Flowers"
              className="h-15 md:h-15 w-auto object-contain"
            />
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-8">
              <li>
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
              </li>

              <li className="relative group">
                <NavLink to="/products" className={linkClass}>
                  Occasions <ChevronDown className="h-4 w-4 opacity-60 transition-transform group-hover:rotate-180" />
                </NavLink>
                {/* Dropdown Menu */}
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white border border-[#D4D994] rounded-lg shadow-xl py-2 min-w-[200px]">
                    {occasionsLinks.map((link) => (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#D4D994]/20 hover:text-[#893941] transition-colors"
                      >
                        {link.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </li>

              <li>
                <NavLink to="/products" className={linkClass}>
                  Flower Bouquets
                </NavLink>
              </li>

              <li>
                <NavLink to="/cakes" className={linkClass}>
                  Cakes
                </NavLink>
              </li>

              <li className="relative group">
                <NavLink to="/products" className={linkClass}>
                  Events <ChevronDown className="h-4 w-4 opacity-60 transition-transform group-hover:rotate-180" />
                </NavLink>
                {/* Dropdown Menu */}
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white border border-[#D4D994] rounded-lg shadow-xl py-2 min-w-[220px]">
                    {eventsLinks.map((link) => (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#D4D994]/20 hover:text-[#893941] transition-colors"
                      >
                        {link.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </li>

              


              <li>
                <NavLink to="/contact" className={linkClass}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={linkClass}>
                  About us
                </NavLink>
              </li>
              
            </ul>
          </nav>

          {/* Right side */}
          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={() => handleNav("/shop")}
              className="
                bg-[#893941]
                hover:bg-[#7b323a]
                text-white
                text-sm
                px-5 sm:px-6
                py-2
                rounded-[3px]
                transition-all
                duration-200
                shadow-md
                hover:shadow-lg
                active:scale-[0.98]
                cursor-pointer
              "
            >
              Shop Now
            </button>

            <button
              type="button"
              className="
                md:hidden
                inline-flex items-center justify-center
                w-10 h-10
                rounded-lg
                border border-[#D4D994]
                text-[#893941]
                hover:bg-[#D4D994]/25
                transition
              "
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {/* Icon animation (rotate + fade swap) */}
              <span className="relative block w-5 h-5">
                <Menu
                  className={`absolute inset-0 h-5 w-5 transition-all duration-200 ${
                    open ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  className={`absolute inset-0 h-5 w-5 transition-all duration-200 ${
                    open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Accent line */}
        <div className="h-[2px] bg-[#5E6623]" />
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <button
          className="absolute inset-0 bg-black/30"
          onClick={() => setOpen(false)}
          aria-label="Close menu backdrop"
          type="button"
        />

        {/* Slide-down panel */}
        <div
          className={`
            absolute left-0 right-0 top-[104px]
            bg-white
            border-t border-[#D4D994]
            shadow-xl
            origin-top
            transition-all duration-300 ease-out
            ${open ? "scale-y-100 opacity-100" : "scale-y-95 opacity-0"}
          `}
        >
          <div className="max-w-7xl mx-auto px-4 py-4 max-h-[75vh] overflow-y-auto">
            <div className="rounded-xl border border-[#D4D994] bg-[#D4D994]/15 p-2">
              <NavLink to="/" className={mobileLinkClass} onClick={() => setOpen(false)}>
                Home
              </NavLink>

              {/* Occasions Mobile */}
              <div>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "occasions" ? null : "occasions")}
                  className={`${mobileLinkClass({ isActive: false })} flex items-center justify-between w-full text-left`}
                >
                  Occasions <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === "occasions" ? "rotate-180" : ""}`} />
                </button>
                <div className={`${activeDropdown === "occasions" ? "block" : "hidden"} pl-4 bg-white/40 rounded-lg mb-1`}>
                  {occasionsLinks.map((link) => (
                    <NavLink key={link.path} to={link.path} className={mobileLinkClass} onClick={() => setOpen(false)}>
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              <NavLink
                to="/flower-bouquets"
                className={mobileLinkClass}
                onClick={() => setOpen(false)}
              >
                Flower Bouquets
              </NavLink>
              <NavLink
                to="/cakes"
                className={mobileLinkClass}
                onClick={() => setOpen(false)}
              >
                Cakes
              </NavLink>

              {/* Events Mobile */}
              <div>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "events" ? null : "events")}
                  className={`${mobileLinkClass({ isActive: false })} flex items-center justify-between w-full text-left`}
                >
                  Events <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === "events" ? "rotate-180" : ""}`} />
                </button>
                <div className={`${activeDropdown === "events" ? "block" : "hidden"} pl-4 bg-white/40 rounded-lg mb-1`}>
                  {eventsLinks.map((link) => (
                    <NavLink key={link.path} to={link.path} className={mobileLinkClass} onClick={() => setOpen(false)}>
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>
              <NavLink to="/shop" className={mobileLinkClass} onClick={() => setOpen(false)}>
                Shop
              </NavLink>
              <NavLink
                to="/contact"
                className={mobileLinkClass}
                onClick={() => setOpen(false)}
              >
                Contact
              </NavLink>
              <NavLink to="/blogs" className={mobileLinkClass} onClick={() => setOpen(false)}>
                Blogs
              </NavLink>
            </div>

            
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
