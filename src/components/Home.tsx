
import { ShoppingCart, Heart, TrendingUp, Shield } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-pink-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            HEY LOVES! Welcome to MO Collection!
          </h1>
          <p className="text-2xl md:text-3xl text-pink-600 font-semibold mb-4">
            A space you can trust
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Your one-stop shop for quality household items, electronics, furniture, fashion, and more.
            We update our products daily and offer flexible payment options to suit your needs!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('products')}
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Shop Now
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-pink-600 hover:bg-pink-50 transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Shop With Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-pink-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center border border-pink-100">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Trusted Brand</h3>
            <p className="text-gray-600">A space you can trust for quality products</p>
          </div>

          <div className="bg-pink-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center border border-pink-100">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Daily Updates</h3>
            <p className="text-gray-600">New products added every single day</p>
          </div>

          <div className="bg-pink-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center border border-pink-100">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Flexible Payment</h3>
            <p className="text-gray-600">Cash, chamas, and installment options</p>
          </div>

          <div className="bg-pink-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center border border-pink-100">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Wide Selection</h3>
            <p className="text-gray-600">From households to fashion and electronics</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-pink-600 to-pink-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Our Store Today!</h2>
          <p className="text-lg mb-2">Dynamic Mall, 1st Floor ML54</p>
          <p className="text-lg">Tom Mboya Street</p>
        </div>
      </div>
    </div>
  );
}
