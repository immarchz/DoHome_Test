import Image from "next/image";
import { Rating } from "@material-tailwind/react";
export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-wrap justify-center items-center">
      <div className="w-1/4 md:w1/4  ">
        <div className="bg-white border border-r-0 rounded-lg rounded-tr-none rounded-br-none  px-8 py-12 ">
          <div className="mb-10">
            <p className="text-gray-700 ">
              <span className="text-3xl font-bold">$39</span>
              <span className="text-sm text-center">/month</span>
            </p>
          </div>
          
          <h3 className="text-xl font-bold mb-4 text-red-500">Basic License</h3>

          <p className="text-[12px]">
            Our gourvernent backed plan designed to keep your business legaly
            and secure
          </p>
          <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
          <ul className="list-unstyled mt-8">
            <li className="text-gray-700 mb-4 text-[12px] flex items-center">
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
            <li className="text-gray-700 mb-4 text-[12px] flex items-center">
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
            <li className="text-gray-700 mb-4 text-[12px] flex items-center">
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
            <li className="text-gray-700 mb-4 text-[12px] flex items-center">
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
          <div className="flex justify-center items-center pt-8">
            <button className="btn bg-red-500 hover:bg-red-600 text-white text-[11px] font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 transition duration-500 ease-in-out transform hover:-translate-y-1">
              YOUR CURRENT PLAN
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/4 ">
        <div className="bg-white border border-orange-500 rounded-lg  px-8 py-12 h-[640px]">
          <div className="mb-10">
            <p className="text-gray-700 ">
              <span className="text-3xl font-bold">$60</span>
              <span className="text-sm text-center">/month</span>
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4 text-purple-500">
            Social License
          </h3>

          <p className="text-[12px]">
            Unlimited analytics, plans, demographic insights.All you need to
            grow-up your business
          </p>
          <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
          <ul className="list-unstyled mt-8">
            <li className="text-gray-700 mb-4 text-[12px] flex items-center">
              <svg
                className="h-5 w-5 mr-1 text-purple-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Add your own branding
            </li>
            <li className="text-gray-700 mb-4 text-[12px] flex items-center">
              <svg
                className="h-5 w-5 mr-1 text-purple-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              View popularity analytics
            </li>
            <li className="text-gray-700 mb-4 text-[12px] flex items-center">
              <svg
                className="h-5 w-5 mr-1 text-purple-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Up to 1500 customer profiles
            </li>
            <li className="text-gray-700 mb-4 text-[12px] flex items-center">
              <svg
                className="h-5 w-5 mr-1 text-purple-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              View Demographic insights
            </li>
          </ul>
          <div className="flex justify-center items-center mt-[95px]">
            <button className="btn bg-orange-500 hover:bg-orange-600 text-white text-[11px]  font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700 transition duration-500 ease-in-out transform hover:-translate-y-1">
              UPGRADE TO SOCIAL
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/4 md:w-1/4 ">
        <div className="bg-white border border-l-0 rounded-lg rounded-tl-none rounded-bl-none px-8 py-12 ">
          <div className="mb-10">
            <p className="text-gray-700 ">
              <span className="text-3xl font-bold">$125</span>
              <span className="text-sm text-center">/month</span>
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4 text-green-500">
            Marketing License
          </h3>

          <p className="text-[12px]">
            Unlock powerful time-saving tools for creating email delivery and
            collecting marketing data
          </p>
          <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
          <ul className="list-unstyled mt-8">
            <li className="text-gray-700 mb-4 text-[12px] flex items-center">
              <svg
                className="h-5 w-5 mr-1 text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Collect marketing data
            </li>
            <li className="text-gray-700 mb-4 text-[12px] flex items-center">
              <svg
                className="h-5 w-5 mr-1 text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Design your emails
            </li>
            <li className="text-gray-700 mb-4 text-[12px] flex items-center">
              <svg
                className="h-5 w-5 mr-1 text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Email campaigns & interactions
            </li>
            <li className="text-gray-700 mb-4 text-[12px] flex items-center">
              <svg
                className="h-5 w-5 mr-1 text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              View your customer's profiles
            </li>
          </ul>
          <div className="flex justify-center items-center pt-5">
            <button className="btn bg-green-500 hover:bg-green-600 text-white text-[11px] font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 transition duration-500 ease-in-out transform hover:-translate-y-1">
              UPGRADE TO MARKETING
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
