import React from "react";

import clsx from "clsx";

export default function Label({ value }: { value: number }) {
  return (
    <div
      className={clsx(
        "inline-flex items-center py-1 px-2.5 sm:px-3.5 rounded-3xl  text-xs font-medium",
        value > 0
          ? "bg-[#2D6A4F] text-[#D8F3DC]"
          : "bg-[#A4161A] text-[#FFD6D9]"
      )}>
      {`${value.toFixed(2)}%`}
    </div>
  );
}
