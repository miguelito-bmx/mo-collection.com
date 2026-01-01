import { MapPin, Clock, Shield, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About MO Collections</h1>
          <p className="text-xl text-orange-600 font-semibold">A space you can trust</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to MO Collections, your trusted partner for quality household items, furniture,
                electronics, fashion, and more. Located in the heart of Nairobi at Dynamic Mall, we've
                built our reputation on trust, reliability, and exceptional customer service.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We understand that quality products should be accessible to everyone, which is why we
                offer flexible payment options including chamas and installment plans. Our commitment
                is to make shopping affordable without compromising on quality.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With daily product updates and a wide selection across multiple categories, we ensure
                you always have access to the latest and best products for your home and lifestyle.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-6 rounded-xl">
                <MapPin className="h-8 w-8 text-orange-600 mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">Our Location</h3>
                <p className="text-gray-700">Dynamic Mall, 1st Floor ML54</p>
                <p className="text-gray-700">Tom Mboya Street, Nairobi</p>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-6 rounded-xl">
                <Clock className="h-8 w-8 text-pink-600 mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">Always Here for You</h3>
                <p className="text-gray-700">Daily product updates</p>
                <p className="text-gray-700">Responsive customer service</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Trusted Quality</h3>
            <p className="text-gray-600">
              We carefully select every product to ensure you receive only the best quality items
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Daily Updates</h3>
            <p className="text-gray-600">
              New products arrive every day, giving you fresh options and the latest trends
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Convenient Location</h3>
            <p className="text-gray-600">
              Easily accessible at Dynamic Mall on Tom Mboya Street, in the heart of the city
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Us Today!</h2>
          <p className="text-lg mb-2">Experience the MO Collections difference in person</p>
          <p className="text-xl font-semibold mt-4">Dynamic Mall, 1st Floor ML54, Tom Mboya Street</p>
        </div>
      </div>
    </div>
  );
}
