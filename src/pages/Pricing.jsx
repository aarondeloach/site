import React from 'react';

import Header from '../partials/Header';
import PricingPlans from '../partials/PricingPlans';
import PricingFeatures from '../partials/PricingFeatures';
import TestimonialsCarousel from '../partials/TestimonialsCarousel';
import Faqs from '../partials/Faqs';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';

function Pricing() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <PricingPlans />
        <PricingFeatures />
        {/* <TestimonialsCarousel /> */}
        <Faqs />
        <Cta />   

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Pricing;