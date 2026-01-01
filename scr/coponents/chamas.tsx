
import { Banknote, Calendar, Users, CreditCard } from 'lucide-react';

export default function Chamas() {
  const paymentMethods = [
    {
      title: 'CASH Payment',
      icon: Banknote,
      description: 'Pay in full and take your items home immediately',
      color: 'from-pink-400 to-pink-600'
    },
    {
      title: 'Daily Challenge',
      icon: Calendar,
      description: 'Small daily contributions to reach your goal',
      color: 'from-pink-300 to-pink-500'
    },
    {
      title: 'Chamas',
      icon: Users,
      description: 'Group purchases with friends or family',
      color: 'from-pink-500 to-pink-700'
    },
    {
      title: 'Lipa Mdogo Mdogo',
      icon: CreditCard,
      description: 'Flexible installment plans that fit your budget',
      color: 'from-pink-400 to-rose-600'
    }
  ];

  const chamaPlans = [
    {
      product: 'Mattresses',
      amount: '100',
      frequency: 'Daily',
      details: 'Daily challenge'
    },
    {
      product: 'Blenders',
      amount: '50',
      frequency: 'Daily (Mon-Fri)',
      details: 'Save daily and get your blender'
    },
    {
      product: 'Non-stick Pots',
      amount: '600',
      frequency: 'Weekly',
      details: 'Weekly chama'
    },
    {
      product: 'Non-stick Pots (5 people)',
      amount: '700',
      frequency: 'Weekly',
      details: 'Group chama for 5 members'
    },
    {
      product: 'Curtains/Carpets/Bedsheets & Duvets',
      amount: '300',
      frequency: 'Weekly',
      details: 'Weekly chama'
    },
    {
      product: 'Hot Pots',
      amount: '550',
      frequency: 'Weekly',
      details: 'Weekly chama'
    },
    {
      product: 'Dinner Sets',
      amount: '650',
      frequency: 'Weekly',
      details: 'Weekly chama'
    },
    {
      product: 'Airfryer (10 people)',
      amount: '500',
      frequency: 'Weekly',
      details: 'Group chama for 10 members'
    },
    {
      product: 'Chester Beds',
      amount: '1,000',
      frequency: 'Weekly',
      details: 'Weekly chama'
    },
    {
      product: 'Washing Machines',
      amount: '1,000',
      frequency: 'Weekly',
      details: 'Weekly chama'
    },
    {
      product: 'TVs',
      amount: '2,000',
      frequency: 'Twice a month',
      details: 'Bi-monthly chama'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Payment Plans & Chamas</h1>
          <p className="text-xl text-gray-600">
            Flexible payment options designed to make shopping affordable for everyone
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {paymentMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-pink-100"
              >
                <div className={`bg-gradient-to-r ${method.color} p-6 text-white text-center`}>
                  <Icon className="h-12 w-12 mx-auto mb-3" />
                  <h3 className="text-xl font-bold">{method.title}</h3>
                </div>
                <div className="p-4 text-center">
                  <p className="text-gray-600">{method.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-pink-100">
          <div className="bg-gradient-to-r from-pink-600 to-pink-500 text-white py-6 px-6">
            <h2 className="text-3xl font-bold text-center">Available Chama Plans</h2>
            <p className="text-center mt-2">Join a chama and own your desired products!</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-pink-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Product</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Amount (KSH)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Frequency</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {chamaPlans.map((plan, index) => (
                  <tr key={index} className="hover:bg-pink-50 transition-colors">
                    <td className="px-6 py-4 text-gray-800 font-medium">{plan.product}</td>
                    <td className="px-6 py-4 text-pink-600 font-bold">{plan.amount}</td>
                    <td className="px-6 py-4 text-gray-700">{plan.frequency}</td>
                    <td className="px-6 py-4 text-gray-600">{plan.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-xl p-8 border border-pink-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">How Chamas Work</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="bg-pink-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                <span>Choose a chama plan that fits your budget</span>
              </li>
              <li className="flex items-start">
                <span className="bg-pink-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                <span>Make regular contributions (daily, weekly, or bi-monthly)</span>
              </li>
              <li className="flex items-start">
                <span className="bg-pink-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                <span>Once your target is reached, receive your product!</span>
              </li>
              <li className="flex items-start">
                <span className="bg-pink-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</span>
                <span>Join group chamas with friends for even better deals</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-pink-100 to-white rounded-xl p-8 border border-pink-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Payment Plans?</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-pink-600 mr-3 text-xl font-bold">✓</span>
                <span>No hidden charges or extra fees</span>
              </li>
              <li className="flex items-center">
                <span className="text-pink-600 mr-3 text-xl font-bold">✓</span>
                <span>Flexible payment schedules</span>
              </li>
              <li className="flex items-center">
                <span className="text-pink-600 mr-3 text-xl font-bold">✓</span>
                <span>Group options for bigger savings</span>
              </li>
              <li className="flex items-center">
                <span className="text-pink-600 mr-3 text-xl font-bold">✓</span>
                <span>Trusted and reliable service</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to Start Your Chama?</h3>
          <p className="text-lg mb-4">Contact us today to join a chama or create a custom payment plan!</p>
          <p className="text-2xl font-bold">Call: 0757614303</p>
        </div>
      </div>
    </div>
  );
}
