"use client";

import { useEffect } from "react";

export default function Home() {
  const redirectToAppStore = () => {
    const userAgent = navigator.userAgent;

    if (/android/i.test(userAgent)) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.mindshift.usell";
    } else if (/iPad|iPhone|iPod/i.test(userAgent)) {
      // Redirect to Apple App Store for iOS
      window.location.href =
        "https://apps.apple.com/id/app/mst-supply/id6447289799";
    } else {
      // Redirect to a generic landing page for other devices
      window.location.href = "https://agrosupplytrade.mn/";
    }
  };

  useEffect(() => {
    redirectToAppStore();
  }, []);

  return (
    <>
      <section className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center">Please Wait ...</h1>
      </section>
    </>
  )
}
