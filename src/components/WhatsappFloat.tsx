"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsappUrl, whatsappBaseMessage } from "@/content/site";
import { track } from "@/lib/analytics";

export function WhatsappFloat() {
  return (
    <a
      href={buildWhatsappUrl(whatsappBaseMessage)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_clicked", { source: "floating_button" })}
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lifted transition-transform hover:scale-105 md:bottom-6"
    >
      <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
    </a>
  );
}
