"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div
      className={cn(
        "max-w-[780px]",
        isCenter && "mx-auto text-center",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "flex items-center gap-3",
          isCenter && "justify-center"
        )}
      >
        {index && <span className="index-tag">{index}</span>}
        {index && (
          <span className="h-px w-8 bg-gradient-to-r from-white/30 to-transparent" />
        )}
        <span className="eyebrow">{eyebrow}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className="mt-6 font-display text-display-md font-medium text-balance"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className={cn(
            "mt-7 max-w-[600px] text-pretty text-[16px] leading-[1.6] text-fog md:text-[17.5px]",
            isCenter && "mx-auto"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
