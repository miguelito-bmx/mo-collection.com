
import { ShoppingBag, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingBag className="h-8 w-8 text-pink-400" />
              <span className="font-bold text-xl">MO Collections</span>
            </div>
            <p className="text-gray-300 mb-4">
              A space you can trust for quality household items, furniture, electronics, fashion, and more.
            </p>
            <p className="text-sm text-gray-400">
              Daily product updates | Flexible payment options
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-pink-400" />
                <span className="text-gray-300">0757614303</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-pink-400 mt-1" />
                <div className="text-gray-300">
                  <p>Dynamic Mall, 1st Floor ML54</p>
                  <p>Tom Mboya Street, Nairobi</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Products</li>
              <li>Payment Plans</li>
              <li>Chamas</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MO Collections. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
