
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://chat.whatsapp.com/DWX7MoGyZG7CxmKOnPcW59"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-75"></div>
        <button className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all flex items-center justify-center">
          <MessageCircle className="h-6 w-6" />
        </button>
        <div className="absolute bottom-16 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          <p className="text-sm font-semibold">Hey, come chat with us!</p>
        </div>
      </div>
    </a>
  );
}
