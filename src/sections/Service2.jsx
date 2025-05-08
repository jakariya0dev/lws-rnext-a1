import React from "react";
import Cart from "../components/icons/Cart";
import Globe from "../components/icons/Globe";
import People from "../components/icons/People";
import Stack from "../components/icons/Stack";
import Service2Card from "../components/Service2Card";
import ArrowRight from "../components/icons/ArrowRight";

export default function Service2() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        <div className="col-span-2 mb-8">
          <p className="text-lg font-medium text-purple-600 dark:text-purple-500">
            Trusted Worldwide
          </p>
          <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
            Trusted by over 600 million users and 10,000 teams
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Our rigorous security and compliance standards are at the heart of
            all we do. We work tirelessly to protect you and your customers.
          </p>
          <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
            <div>
              <a
                href="#"
                className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
              >
                Explore Legality Guide
                <ArrowRight />
              </a>
            </div>
            <div>
              <a
                href="#"
                className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
              >
                Visit the Trust Center
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          <Service2Card
            icon={<Stack />}
            title="99.99% uptime"
            description="For Landwind, with zero maintenance downtime"
          />

          <Service2Card
            icon={<People />}
            title="600M+ Users"
            description="Trusted by over 600 milion users around the world"
          />

          <Service2Card
            icon={<Globe />}
            title="100+ countries"
            description="Have used Landwind to create functional websites"
          />

          <Service2Card
            icon={<Cart />}
            title="5+ Million"
            description="Transactions per day"
          />
        </div>
      </div>
    </section>
  );
}
