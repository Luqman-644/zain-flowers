import { motion } from "motion/react";
import ImageSlider from "../Components/ImageSlider";
import CategoryGrid from "../Components/CategoryGrid";
import WhatsappButton from "../Components/WhatsappButton";

import h1 from "../assets/hero/h1.png";
import h2 from "../assets/hero/h2.png";
import h3 from "../assets/hero/h3.png";

export default function Home() {
  const slides = [h1, h2, h3];
  const PHONE = "923107949463";
  const message = "Assalam o Alaikum! I want to order flowers.";
  
  return (
    <main className="bg-white">

      {/* HERO BANNER */}
      <section className="relative w-full h-[520px]">
        <ImageSlider images={slides} hero />

        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Highly Rated,
              <span className="block mt-2">Best Quality Flowers</span>
            </h1>

            <p className="mt-5 text-sm md:text-base text-white/90">
              Same-Day Delivery in Islamabad, Rawalpindi, Gujar Khan, Attock
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a className="bg-[#893941] hover:bg-[#7b323a] text-white px-7 py-3 rounded-[5px] transition shadow-lg"
              href={`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`}
              target="_blank"
              >
                Order on Whatsapp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CategoryGrid />

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        {[
          { title: "Same-Day Delivery", text: "Islamabad, Rawalpindi, Gujar Khan, Attock" },
          { title: "Custom Bouquets", text: "Designed your way" },
          { title: "Easy Ordering", text: "Via WhatsApp" },
        ].map((item) => (
          <div
            key={item.title}
            className="
              rounded-2xl 
              border 
              border-[#D4D994]
              p-6 
              text-center
              hover:shadow-md
              transition
            "
          >
            <h3 className="font-semibold text-[#893941]">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {item.text}
            </p>
          </div>
        ))}
      </section>

      <section className="bg-[#f9f9f9] py-16 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-8 md:p-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Why Choose Zain Flowers?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-10 max-w-4xl mx-auto text-sm md:text-base">
            Zain Flowers delivers fresh, elegant floral arrangements with reliable same-day service. 
            Known as one of the best flower shops in Islamabad, we craft every bouquet with care and attention to detail. 
            Trust us to make your special moments truly memorable.
          </p>
          <a 
            href="/products" 
            className="inline-flex items-center gap-2 bg-[#893941] hover:bg-[#5f3136] text-white px-8 py-3 rounded-md font-bold transition-all shadow-md group"
          >
            SHOP NOW
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </section>

    </main>
  );
}
