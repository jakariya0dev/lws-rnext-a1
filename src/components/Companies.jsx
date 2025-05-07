import React from "react";

import AirBnbLogo from "../assets/logo/airbnb.svg";
import GoogleLogo from "../assets/logo/google.svg";
import MailChimpLogo from "../assets/logo/mailchimp.svg";
import MashableLogo from "../assets/logo/mashable.svg";
import MicrosoftLogo from "../assets/logo/microsoft.svg";
import SpotifyLogo from "../assets/logo/spotify.svg";

export default function Companies() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <a href="#" class="flex items-center lg:justify-center">
            <img src={AirBnbLogo} alt="AirBnb" />
          </a>
          <a href="#" class="flex items-center lg:justify-center">
            <img src={GoogleLogo} alt="AirBnb" />
          </a>
          <a href="#" class="flex items-center lg:justify-center">
            <img src={MicrosoftLogo} alt="MicrosoftLogo" />
          </a>
          <a href="#" class="flex items-center lg:justify-center">
            <img src={SpotifyLogo} alt="SpotifyLogo" />
          </a>
          <a href="#" class="flex items-center lg:justify-center">
            <img src={MailChimpLogo} alt="AirBnb" />
          </a>
          <a href="#" class="flex items-center lg:justify-center">
            <img src={MashableLogo} alt="AirBnb" />
          </a>
        </div>
      </div>
    </section>
  );
}
