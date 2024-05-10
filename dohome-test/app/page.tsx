import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-wrap justify-center items-center">
      <div className="w-1/5 md:w1/5  ">
        <div className="bg-white border border-r-0 rounded-lg rounded-tr-none rounded-br-none  px-8 py-12 ">
          <div className="mb-10">
            <p className="text-gray-700 ">
              <span className="text-3xl font-bold">$39</span>
              <span className="text-sm text-center">/month</span>
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4 text-red-500">Basic License</h3>

          <p className="text-sm">
            Our gourvernent backed plan designed to keep your business legaly
            and secure
          </p>
          <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
          <ul className="list-unstyled mt-8">
            <li className="text-gray-700 mb-4 text-sm flex items-center">
              <svg
                className="h-5 w-5 mr-1 text-red-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Secure your customer usage
            </li>
            <li className="text-gray-700 mb-4 text-sm flex items-center">
              <svg
                className="h-5 w-5 mr-1 text-red-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              View basic analytics
            </li>
            <li className="text-gray-700 mb-4 text-sm flex items-center">
              <svg
                className="h-5 w-5 mr-1 text-red-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Up to 350 customer profiles
            </li>
            <li className="text-gray-700 mb-4 text-sm flex items-center">
              <svg
                className="h-5 w-5 mr-1 text-red-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Custom network name
            </li>
          </ul>
          <div className="flex justify-center items-center h-full">
            <button className="btn bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 transition duration-500 ease-in-out transform hover:-translate-y-1">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 ">
        <div className="bg-white border rounded-lg shadow-md px-8 py-12 h-[600px] text-center">
          <h3 className="text-xl font-bold mb-4">Basic License</h3>
          <div className="text-gray-700 text-lg">$39/month</div>
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
      <div className=" md:w-1/3 ">
        <div className="bg-white border border-l-0 rounded-lg rounded-tl-none rounded-bl-none  px-8 py-12 text-center">
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
