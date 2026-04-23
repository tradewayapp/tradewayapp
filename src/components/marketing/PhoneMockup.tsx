import { motion } from "framer-motion";
import dashboardImg from "@/assets/screen-dashboard.png";
import walletImg from "@/assets/screen-wallet.png";
import referImg from "@/assets/screen-refer.png";

const screens = [
  { src: dashboardImg, alt: "TradeWay dashboard with XAU/USD signals" },
  { src: walletImg, alt: "TradeWay wallet with capital and profit" },
  { src: referImg, alt: "TradeWay referral and earnings" },
];

// Duplicate for seamless loop
const loop = [...screens, ...screens];

export default function PhoneMockup() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute -inset-10 bg-primary/20 blur-3xl rounded-full pointer-events-none" />

      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((s, i) => (
          <div
            key={i}
            className="relative w-[260px] h-[520px] rounded-[2.2rem] panel-strong p-2 shadow-2xl shrink-0"
          >
            <img
              src={s.src}
              alt={s.alt}
              loading="lazy"
              className="w-full h-full object-cover rounded-[1.8rem]"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
