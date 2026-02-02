import { motion } from "motion/react";
import WhatsappButton from "../Components/WhatsappButton";

function Delivery() {
  const areas = [
    { title: "Same-Day Delivery", list: ["Islamabad", "Rawalpindi"] },
    { title: "Extended Delivery", list: ["Gujar Khan", "Taxila", "Attock"] },
  ];

  return (
    <main className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold">Delivery</h1>
          <p className="mt-2 text-gray-600 max-w-2xl">
            Fast delivery with careful packaging to keep flowers fresh and beautiful.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {areas.map((a) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border p-6"
            >
              <h2 className="text-xl font-semibold">{a.title}</h2>
              <ul className="mt-4 space-y-2 text-gray-700">
                {a.list.map((x) => (
                  <li key={x}>• {x}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">How it works</h2>
          <ol className="mt-4 space-y-2 text-gray-700">
            <li>1) Choose product from Products / Gallery</li>
            <li>2) Send your order details on WhatsApp (name + message + delivery address)</li>
            <li>3) Confirm delivery time & payment method</li>
            <li>4) We deliver with premium packaging</li>
          </ol>

          <div className="mt-6">
            <WhatsappButton message="Hi! I want to confirm delivery options." />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Delivery;
