import { motion } from "motion/react";
import { CakeSlice, Gift, Heart, PartyPopper, Truck, MapPin, Sparkles } from "lucide-react";


export default function Cakes() {
    const locations = ["Islamabad", "Rawalpindi", "Gujar Khan", "Attock"];

    const occasions = [
        { title: "Anniversaries", icon: Heart, desc: "Elegant cakes with floral-style packing, ribbons & a custom note card." },
        { title: "Birthdays", icon: PartyPopper, desc: "Birthday cakes with candles, topper options & themed wrapping." },
        { title: "Valentine’s Day", icon: Gift, desc: "Romantic cake packaging with premium decoration and add-ons on request." },
        { title: "Mother’s Day", icon: Sparkles, desc: "Soft, classy presentation with optional bouquet/gift pairing." },
        { title: "Congratulations", icon: Sparkles, desc: "Celebration-ready packaging for graduations, promotions & milestones." },
        { title: "New Baby / Baby Shower", icon: Sparkles, desc: "Gentle themed packing with a neat, gift-ready finish." },
    ];

    return (
        <main className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#893941] border border-[#893941]/15">
                        <CakeSlice size={14} /> Cakes Delivery
                    </div>

                    <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
                        Cakes for Every Occasion & Delivered with Premium Packing
                    </h1>

                    <p className="mt-3 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Whether it’s an anniversary, birthday, Valentine’s Day, Mother’s Day,
                        or any special event — Zain Flowers can arrange cake delivery with
                        neat packing and beautiful decoration. We deliver across selected areas
                        with care and on-time service.
                    </p>

                    <div className="mt-5 mx-auto h-[2px] w-24 bg-[#5E6623]" />
                </motion.div>

                {/* Locations */}
                <section className="mt-10">
                    <div className="rounded-2xl border border-[#893941]/10 bg-gradient-to-br from-[#F7F6F2] via-white to-[#D4D994]/20 p-6 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                            <div className="max-w-2xl">
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                                    Delivery Locations
                                </h2>
                                <p className="mt-2 text-gray-600">
                                    We deliver cakes with secure packing and decoration in:
                                </p>

                                <div className="mt-4 flex flex-wrap gap-3">
                                    {locations.map((loc) => (
                                        <span
                                            key={loc}
                                            className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-gray-800 border border-black/5"
                                        >
                                            <MapPin size={16} className="text-[#5E6623]" />
                                            {loc}
                                        </span>
                                    ))}
                                </div>

                                <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                                    Note: Delivery charges may vary by location and order size.
                                    Share your area and preferred delivery time for confirmation.
                                </p>
                            </div>

                            {/* CTA box */}
                            <div className="w-full md:w-[360px] rounded-xl bg-white border border-black/5 p-5 shadow-sm">
                                <h3 className="text-sm font-semibold text-gray-900">
                                    Quick Order on WhatsApp
                                </h3>
                                <p className="mt-1 text-xs text-gray-600">
                                    Tap below and send us your cake requirements.
                                </p>

                                <a
                                    href={`https://wa.me/923107949463?text=${encodeURIComponent(
                                        "Hi Zain Flowers! I want to order a cake. Please share available flavors, sizes, price and delivery options for my location."
                                    )}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                    mt-4 inline-flex w-full items-center justify-center
                    rounded-lg bg-[#893941] hover:bg-[#7b323a]
                    text-white px-4 py-3 text-sm font-semibold
                    transition shadow-sm active:scale-[0.99]
                  "
                                >
                                    Order Cake on WhatsApp
                                </a>

                                <div className="mt-4 flex items-start gap-2 text-[11px] text-gray-500 leading-relaxed">
                                    <Truck size={14} className="mt-[2px] text-[#5E6623]" />
                                    Share: occasion, cake size, flavor, message on cake, delivery area & time.
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 h-[2px] w-24 bg-[#5E6623]" />
                    </div>
                </section>

                {/* Occasions */}
                <section className="mt-12">
                    <div className="text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Occasions We Deliver For
                        </h2>
                        <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
                            Choose any occasion — we’ll prepare delivery-ready packing and decoration
                            to match your event theme.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {occasions.map((o) => {
                            const Icon = o.icon;
                            return (
                                <div
                                    key={o.title}
                                    className="
                    rounded-xl bg-white border border-black/5
                    shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                    p-5
                    hover:shadow-[0_14px_38px_rgba(0,0,0,0.10)]
                    transition
                  "
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-[#D4D994]/25 flex items-center justify-center">
                                            <Icon size={18} className="text-[#893941]" />
                                        </div>
                                        <h3 className="font-semibold text-gray-900">{o.title}</h3>
                                    </div>
                                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                        {o.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Packing & Decoration */}
                <section className="mt-12">
                    <div className="rounded-2xl border border-[#893941]/10 bg-[#F7F6F2] p-6 md:p-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center">
                            Packing & Decoration Options
                        </h2>

                        <div className="mt-6 grid gap-5 md:grid-cols-3">
                            {[
                                {
                                    title: "Secure Packing",
                                    text: "Sturdy packaging to protect the cake during delivery.",
                                },
                                {
                                    title: "Theme Decoration",
                                    text: "Ribbons, topper options and custom note card (on request).",
                                },
                                {
                                    title: "Add-ons Available",
                                    text: "Pair with flowers, chocolates, teddy, balloons, or a gift box.",
                                },
                            ].map((x) => (
                                <div
                                    key={x.title}
                                    className="rounded-xl bg-white border border-black/5 p-5 shadow-sm"
                                >
                                    <div className="font-semibold text-[#893941]">{x.title}</div>
                                    <div className="mt-2 text-sm text-gray-600">{x.text}</div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <a
                                href={`https://wa.me/923107949463?text=${encodeURIComponent(
                                    "Hi Zain Flowers! I want a cake with packing & decoration. Please share options (flavor/size/theme) and delivery charges for Islamabad/Rawalpindi/Gujar Khan/Attock."
                                )}`}
                                target="_blank"
                                rel="noreferrer"
                                className="
                  inline-flex items-center justify-center
                  rounded-lg bg-white border border-[#893941]/25
                  text-[#893941] hover:bg-[#D4D994]/25
                  px-5 py-3 text-sm font-semibold transition
                "
                            >
                                Request Decoration Options
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
