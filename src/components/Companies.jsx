import React from "react";

import AirBnbLogo from "../components/company-logo/Airbnb";
import GoogleLogo from "../components/company-logo/Google";
import MailChimpLogo from "../components/company-logo/Mailchimp";
import MashableLogo from "../components/company-logo/Mashable";
import MicrosoftLogo from "../components/company-logo/Microsoft";
import SpotifyLogo from "../components/company-logo/Spotify";

export default function Companies() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <a href="#" className="flex items-center lg:justify-center">
            <AirBnbLogo />
          </a>
          <a href="#" className="flex items-center lg:justify-center">
            <GoogleLogo />
          </a>
          <a href="#" className="flex items-center lg:justify-center">
            <MicrosoftLogo />
          </a>
          <a href="#" className="flex items-center lg:justify-center">
            <SpotifyLogo />
          </a>
          <a href="#" className="flex items-center lg:justify-center">
            <MailChimpLogo />
          </a>
          <a href="#" className="flex items-center lg:justify-center">
            <MashableLogo />
          </a>
        </div>
      </div>
    </section>
  );
}
