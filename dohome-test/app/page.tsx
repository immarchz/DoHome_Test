import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto px-4 py-16 flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-gray-100 rounded-lg shadow-md px-8 py-12 text-center">
            <h3 className="text-xl font-bold mb-4">Basic License</h3>
            <p className="text-gray-700 text-lg">$39/month</p>
            <ul className="list-unstyled mt-8">
              <li className="text-gray-700 mb-4">Secure your customer usage</li>
              <li className="text-gray-700 mb-4">View basic analytics</li>
              <li className="text-gray-700 mb-4">
                Up to 350 customer profiles
              </li>
              <li className="text-gray-700 mb-4">Custom network name</li>
            </ul>
            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-500 ease-in-out transform hover:-translate-y-1">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4">
        <div className="bg-indigo-500 rounded-lg shadow-md px-8 py-12 text-center text-white">
          <h3 className="text-xl font-bold mb-4">Social License</h3>
          <p className="text-3xl font-bold mb-4">$60/month</p>
          <ul className="list-unstyled mt-8">
            <li className="text-white mb-4">Unlimited analytics, plans,</li>
            <li className="text-white mb-4">
              demographic insights. All you need to grow-up your business
            </li>
          </ul>
          <button className="btn bg-white hover:bg-gray-100 text-indigo-500 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-500 ease-in-out transform hover:-translate-y-1">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
}
