import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-wrap justify-center items-center">
      <div className="w-full md:w-1/3 ">
        <div className="bg-white border rounded-lg shadow-md px-8 py-12 ">
          <h3 className="text-xl font-bold mb-4">Basic License</h3>
          <p className="text-gray-700 text-lg">$39/month</p>
          <ul className="list-unstyled mt-8">
            <li className="text-gray-700 mb-4">Secure your customer usage</li>
            <li className="text-gray-700 mb-4">View basic analytics</li>
            <li className="text-gray-700 mb-4">Up to 350 customer profiles</li>
            <li className="text-gray-700 mb-4">Custom network name</li>
          </ul>
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-500 ease-in-out transform hover:-translate-y-1">
            Choose Plan
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/3 ">
        <div className="bg-white border rounded-lg shadow-md px-8 py-12 h-[560px] text-center">
          <h3 className="text-xl font-bold mb-4">Basic License</h3>
          <p className="text-gray-700 text-lg">$39/month</p>
          <ul className="list-unstyled mt-8">
            <li className="text-gray-700 mb-4">Secure your customer usage</li>
            <li className="text-gray-700 mb-4">View basic analytics</li>
            <li className="text-gray-700 mb-4">Up to 350 customer profiles</li>
            <li className="text-gray-700 mb-4">Custom network name</li>
          </ul>
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-500 ease-in-out transform hover:-translate-y-1">
            Choose Plan
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/3 ">
        <div className="bg-white border rounded-lg shadow-md px-8 py-12 text-center">
          <h3 className="text-xl font-bold mb-4">Basic License</h3>
          <p className="text-gray-700 text-lg">$39/month</p>
          <ul className="list-unstyled mt-8">
            <li className="text-gray-700 mb-4">Secure your customer usage</li>
            <li className="text-gray-700 mb-4">View basic analytics</li>
            <li className="text-gray-700 mb-4">Up to 350 customer profiles</li>
            <li className="text-gray-700 mb-4">Custom network name</li>
          </ul>
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-500 ease-in-out transform hover:-translate-y-1">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
}
