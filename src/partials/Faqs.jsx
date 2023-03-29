import React from 'react';
import Accordion from '../utils/Accordion';

function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-20">
            <h2 className="h2">Questions & Answers</h2>
          </div>

          {/* Faqs */}
          <ul className="max-w-3xl mx-auto pl-12">

          <Accordion title="Whats included in the core functionality?">
             Everything necessary for multi-account, multi-user applications including full authentication and signup features.
            </Accordion>

            <Accordion title="How does the billing cycle work?">
              A monthly snapshot of feature usage is taken for each app. New apps are pro-rated into the cycle. Billing is detailed at the app level for developers to process for their clients.
            </Accordion>

            <Accordion title="Why are there so many pricing options?">
              Offering a value-based service for different agency sizes is the main aspect of any SaaS solution. Developers have clients requiring different levels of functionality. Decoupling application feature sets allows client invoices to reflect app-specific requirements.
            </Accordion>
            <span className="block border-t border-gray-200" aria-hidden="true"></span>
          </ul >

        </div >
      </div >
    </section >
  );
}

export default Faqs;
