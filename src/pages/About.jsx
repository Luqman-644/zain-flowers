import { motion } from "motion/react";
import WhatsappButton from "../Components/WhatsappButton";

export default function About() {
  return (
    <main className="bg-white">
      <div className="max-w-5xl mx-auto px-6 py-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Zain Flowers
          </h1>

          <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Zain Flowers is a modern gifting brand built around elegance,
            simplicity, and reliability. We focus on delivering a premium
            experience — from thoughtful presentation to smooth ordering and
            dependable delivery.
          </p>

          <div className="mt-6 mx-auto h-[2px] w-24 bg-[#5E6623]" />
        </motion.div>

        {/* Brand Description */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="
            mt-12
            rounded-2xl
            border border-black/5
            bg-[#F7F6F2]
            p-8
            shadow-[0_12px_40px_rgba(0,0,0,0.06)]
            text-center
          "
        >
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Our brand is designed for people who value taste, attention to detail,
            and convenience. Whether it’s a celebration, a surprise, or a thoughtful
            gesture, Zain Flowers offers a refined and hassle-free way to send
            something meaningful.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We work with a simple philosophy: clear communication, consistent
            quality, and respect for our customers’ trust.
          </p>

          {/* Single WhatsApp CTA */}
          <div className="mt-8 flex justify-center">
            <WhatsappButton message="Hi Zain Flowers! I’d like to know more about your services." />
          </div>
        </motion.div>

        {/* Footer Accent */}
        <div className="mt-14 mx-auto h-[2px] w-20 bg-[#5E6623]" />
      </div>
    </main>
  );
}
