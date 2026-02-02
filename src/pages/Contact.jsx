import { motion } from "motion/react";
import WhatsappButton from "../Components/WhatsappButton";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  ExternalLink,
} from "lucide-react";

const BRAND = {
  // ✅ Update these (important)
  phoneDisplay: "+923107949463",
  phoneWa: "923107949463", // without +
  email: "zainflowers.pk@gmail.com", // change if different
  addressLine1: "Shop No 11, Super Market F-6/2",
  addressLine2: "School Road, Islamabad, Pakistan",
  hours: "Open 24/7 | Monday – Sunday",

  instagramUrl: "https://www.instagram.com/zainflower.pk?igsh=bnh5d21pb3Mxa2Ju",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1384.7692490446075!2d73.07245788282378!3d33.72805575513409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf8dc0192c53%3A0x6a372ea76b8b2e56!2sZain%20Flowers!5e1!3m2!1sen!2s!4v1769154603052!5m2!1sen!2s",
};

export default function Contact() {
  const waDefaultMsg =
    "Hi Zain Flowers! I want to place an order. Please share options and confirm delivery charges for my location.";

  return (
    <main className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Contact Zain Flowers
          </h1>
          <p className="mt-3 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fastest way to order is WhatsApp. For visits, directions and details,
            use the map below.
          </p>
          <div className="mt-6 mx-auto h-[2px] w-24 bg-[#5E6623]" />
        </motion.div>

        {/* Content */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2 items-start">
          {/* LEFT: Contact + Actions */}
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35 }}
            className="
              rounded-2xl
              border border-[#893941]/10
              bg-gradient-to-br from-[#F7F6F2] via-white to-[#D4D994]/15
              shadow-[0_12px_40px_rgba(0,0,0,0.06)]
              p-7 md:p-8
            "
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Quick Order
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Message us and we’ll confirm availability, delivery & timing.
                </p>
              </div>

              {/* small brand chip */}
              <div className="hidden sm:inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#893941] border border-[#893941]/15">
                Support • Fast Reply
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-6">
              <WhatsappButton message={waDefaultMsg} />
            </div>

            {/* Details */}
            <div className="mt-8 grid gap-3">
              <div className="rounded-xl bg-white border border-black/5 p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-9 w-9 rounded-lg bg-[#D4D994]/25 flex items-center justify-center">
                    <Phone size={18} className="text-[#893941]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Phone / WhatsApp
                    </div>
                    <a
                      href={`https://wa.me/${BRAND.phoneWa}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-gray-700 hover:text-[#893941] transition underline-offset-4 hover:underline"
                    >
                      {BRAND.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white border border-black/5 p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-9 w-9 rounded-lg bg-[#D4D994]/25 flex items-center justify-center">
                    <Mail size={18} className="text-[#893941]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Email
                    </div>
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="text-sm text-gray-700 hover:text-[#893941] transition underline-offset-4 hover:underline"
                    >
                      {BRAND.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white border border-black/5 p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-9 w-9 rounded-lg bg-[#D4D994]/25 flex items-center justify-center">
                    <MapPin size={18} className="text-[#893941]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Address
                    </div>
                    <div className="text-sm text-gray-700">
                      {BRAND.addressLine1}
                      <br />
                      {BRAND.addressLine2}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white border border-black/5 p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-9 w-9 rounded-lg bg-[#D4D994]/25 flex items-center justify-center">
                    <Clock size={18} className="text-[#893941]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Business Hours
                    </div>
                    <div className="text-sm text-gray-700">{BRAND.hours}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center gap-2
                  rounded-lg border border-[#893941]/20 bg-white
                  px-4 py-2 text-sm font-semibold text-[#893941]
                  hover:bg-[#D4D994]/20 transition
                "
              >
                <Instagram size={18} />
                Instagram
                <ExternalLink size={16} className="opacity-70" />
              </a>
            </div>
          </motion.section>

          {/* RIGHT: Map */}
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35 }}
            className="
              rounded-2xl
              border border-[#893941]/10
              bg-white
              shadow-[0_12px_40px_rgba(0,0,0,0.06)]
              p-6 md:p-7
            "
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Find Us
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Tap the map for directions.
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Zain%20Flowers%20Islamabad"
                target="_blank"
                rel="noreferrer"
                className="
                  hidden sm:inline-flex items-center gap-2
                  rounded-lg bg-[#893941] hover:bg-[#7b323a]
                  text-white px-4 py-2 text-sm font-semibold transition
                "
              >
                Open Maps <ExternalLink size={16} />
              </a>
            </div>

            <div className="mt-5 overflow-hidden rounded-xl bg-gray-100 border border-black/5">
              <div className="aspect-[16/11]">
                <iframe
                  title="Zain Flowers Location"
                  src={BRAND.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Zain%20Flowers%20Islamabad"
              target="_blank"
              rel="noreferrer"
              className="
                sm:hidden mt-4 inline-flex w-full items-center justify-center gap-2
                rounded-lg bg-[#893941] hover:bg-[#7b323a]
                text-white px-4 py-3 text-sm font-semibold transition
              "
            >
              Open in Google Maps <ExternalLink size={16} />
            </a>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
