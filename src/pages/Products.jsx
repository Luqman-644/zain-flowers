import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { Gift, Sparkles, Truck, MessageCircle } from "lucide-react";

import p1 from "../assets/products/p1.jpg";
import p2 from "../assets/products/p2.jpg";
import p3 from "../assets/products/p3.jpg";
import p4 from "../assets/products/p4.jpg";

// Put your WhatsApp number here (without +)
const WHATSAPP_NUMBER = "923107949463";

// Palette: #893941 #CB7885 #D4D994 #5E6623

function waLink(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function ProductCard({ p }) {
  const text = `Hi! I want to order:\n${p.name}\nCategory: ${p.category}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.35 }}
      className="
        group bg-white border border-black/5
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        hover:shadow-[0_14px_38px_rgba(0,0,0,0.12)]
        transition-all duration-300
        rounded-xl overflow-hidden
      "
    >
      {/* Image */}
      <div className="relative">
        <div className="aspect-[4/3] bg-gray-100">
          <img
            src={p.img}
            alt={p.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            loading="lazy"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent" />

        {/* 10% OFF badge */}
        <div className="absolute left-3 top-3 rounded-lg bg-[#893941] px-3 py-1 text-[11px] font-semibold text-white shadow">
          10% OFF
        </div>

        {/* Category chip */}
        <div className="absolute right-3 top-3 rounded-lg bg-white/90 px-3 py-1 text-[11px] font-medium text-[#893941] backdrop-blur">
          {p.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-[15px] sm:text-[16px] font-semibold text-gray-900">
          {p.name}
        </h3>

        <a
          href={waLink(text)}
          target="_blank"
          rel="noreferrer"
          className="
            mt-4 inline-flex w-full items-center justify-center
            rounded-lg bg-[#893941] hover:bg-[#7b323a]
            text-white px-4 py-3 text-sm font-semibold
            transition shadow-sm active:scale-[0.99]
          "
        >
          Order on WhatsApp
        </a>

        <div className="mt-4 h-[2px] w-12 bg-[#5E6623]/80" />
      </div>
    </motion.article>
  );
}

function CategoryPills({ categories, active, onChange }) {
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-2">
      {categories.map((c) => {
        const isActive = active === c.key;
        return (
          <button
            key={c.key}
            type="button"
            onClick={() => onChange(c.key)}
            className={`
              rounded-lg px-3 py-2 text-sm transition border
              ${
                isActive
                  ? "bg-[#893941] text-white border-[#893941]"
                  : "bg-white text-[#893941] border-[#893941]/20 hover:bg-[#D4D994]/25"
              }
            `}
          >
            {c.label}
          </button>
        );
      })}
    </div>
  );
}

function CustomOrderSection() {
  const customBouquetMsg =
    "Hi Zain Flowers! I want a CUSTOM bouquet. Please share options for colors, size and budget.";
  const giftsMsg =
    "Hi Zain Flowers! I want to add gifts (chocolates/teddy/balloons/cake) with flowers. Please share combos.";
  const deliveryMsg =
    "Hi Zain Flowers! Please confirm delivery charges and available delivery time for my location.";

  return (
    <section className="mt-12">
      <div
        className="
          rounded-2xl
          border border-[#893941]/10
          bg-gradient-to-br from-[#F7F6F2] via-white to-[#D4D994]/20
          p-6 md:p-8
          shadow-[0_12px_40px_rgba(0,0,0,0.06)]
        "
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Left text */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#893941] border border-[#893941]/15">
              <Sparkles size={14} /> Custom Orders & Gifts
            </div>

            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">
              Want something unique? We’ll design it for you.
            </h2>

            <p className="mt-3 text-gray-600 leading-relaxed">
              Choose your theme, colors, wrapping style and budget — we’ll craft a
              premium bouquet or gift combo that matches the moment. You can also
              add chocolates, teddy, balloons, cake and a custom note card.
            </p>

            {/* Info chips */}
            <div className="mt-5 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-gray-700 border border-black/5">
                <Truck size={16} className="text-[#5E6623]" />
                Same-day delivery (selected areas)
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-gray-700 border border-black/5">
                <Gift size={16} className="text-[#5E6623]" />
                Gifts & add-ons available
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-gray-700 border border-black/5">
                <MessageCircle size={16} className="text-[#5E6623]" />
                Quick ordering on WhatsApp
              </div>
            </div>
          </div>

          {/* Right actions */}
          <div className="w-full md:w-[360px] rounded-xl bg-white border border-black/5 p-5 shadow-sm">
            <div className="text-sm font-semibold text-gray-900">
              Quick Actions
            </div>
            <p className="mt-1 text-xs text-gray-600">
              Tap any button and send a ready message on WhatsApp.
            </p>

            <div className="mt-4 grid gap-3">
              <a
                href={waLink(customBouquetMsg)}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center justify-center
                  rounded-lg bg-[#893941] hover:bg-[#7b323a]
                  text-white px-4 py-3 text-sm font-semibold
                  transition shadow-sm
                "
              >
                Custom Bouquet Request
              </a>

              <a
                href={waLink(giftsMsg)}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center justify-center
                  rounded-lg bg-white
                  border border-[#893941]/25
                  text-[#893941] hover:bg-[#D4D994]/25
                  px-4 py-3 text-sm font-semibold
                  transition
                "
              >
                Add Gifts & Combos
              </a>

              <a
                href={waLink(deliveryMsg)}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center justify-center
                  rounded-lg bg-white
                  border border-[#893941]/25
                  text-[#893941] hover:bg-[#D4D994]/25
                  px-4 py-3 text-sm font-semibold
                  transition
                "
              >
                Check Delivery Charges
              </a>
            </div>

            <div className="mt-4 text-[11px] text-gray-500 leading-relaxed">
              Tip: Share your <span className="font-semibold">occasion</span>,{" "}
              <span className="font-semibold">budget</span> and{" "}
              <span className="font-semibold">delivery area</span> for a faster
              quote.
            </div>
          </div>
        </div>

        {/* bottom accent line */}
        <div className="mt-6 h-[2px] w-24 bg-[#5E6623]" />
      </div>
    </section>
  );
}

export default function Products() {
  const categories = useMemo(
    () => [
      { key: "all", label: "All" },
      { key: "anniversary", label: "Anniversary" },
      { key: "for-her", label: "For Her" },
      { key: "for-him", label: "For Him" },
      { key: "birthday", label: "Birthday" },
      { key: "valentine", label: "Valentine" },
      { key: "cakes", label: "Cakes & Choco" },
    ],
    []
  );

  const products = useMemo(
    () => [
      { id: 1, key: "anniversary", category: "Anniversary", name: "100 Rose Bouquet", img: p1 },
      { id: 2, key: "anniversary", category: "Anniversary", name: "100 Rose Special Bouquet", img: p2 },
      { id: 3, key: "for-her", category: "For Her", name: "Luxury Rose Wrap Bouquet", img: p3 },
      { id: 4, key: "for-him", category: "For Him", name: "Premium Red Roses Box", img: p4 },
    ],
    []
  );

  const [activeCat, setActiveCat] = useState("all");

  const filtered =
    activeCat === "all"
      ? products
      : products.filter((p) => p.key === activeCat);

  return (
    <main className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Finest
          </h1>
          <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
            Browse bouquets by category and order instantly on WhatsApp.
          </p>

          <div className="mt-5 mx-auto h-[2px] w-24 bg-[#5E6623]" />

          <CategoryPills
            categories={categories}
            active={activeCat}
            onChange={setActiveCat}
          />
        </motion.div>

        {/* Products (mobile vertical scroll) */}
        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>

        {/* ✅ Replaced old line with a premium section */}
        <CustomOrderSection />
      </div>
    </main>
  );
}
