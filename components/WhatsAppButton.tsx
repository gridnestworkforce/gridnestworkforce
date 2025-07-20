'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919980026516?text=Hi! I'm interested in GridNest Workforce services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}