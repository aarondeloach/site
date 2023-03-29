import React from 'react';



function PricingFeatures() {

  function check() {
    return (
      <svg className="w-3 h-3 fill-current text-green-500 inline-flex" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
      </svg>
    )
  }

  function x() {
    return (
      <svg className="w-3 h-3 fill-current text-gray-400 opacity-75 inline-flex" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.72 1.293a1 1 0 00-1.415 0L6.012 4.586 2.72 1.293a1 1 0 00-1.414 1.414L4.598 6 1.305 9.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L7.426 6l3.293-3.293a1 1 0 000-1.414z" />
      </svg>
    )
  }

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">


          <div className="pb-12">
            <h2 className="h2">Features</h2>
          </div>


          <div className="overflow-x-auto">
            <table className="table-auto w-full border-b border-gray-200">

              <thead>
                <tr className="text-base sm:text-lg border-t border-gray-200">
                  <th className="text-bold text-left pr-2 py-4 min-w-48">Breakdown of features</th>
                  <th className="text-bold text-center px-2 py-4">Free</th>
                  <th className="text-bold text-center px-2 py-4">Basic</th>
                  <th className="text-bold text-center px-2 py-4">Premium</th>
                  <th className="text-bold text-center pl-2 py-4">Enterprise</th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-t border-gray-200">
                  <td className="text-sm sm:text-base pr-2 py-4">
                    <div className="font-bold">Apps</div>
                    <div className="text-gray-600">Application schemas with core functionality</div>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">Unlimited</td>
                  <td className="text-sm px-2 py-4 text-center font-medium">Unlimited</td>
                  <td className="text-sm px-2 py-4 text-center font-medium">Unlimited</td>
                  <td className="text-sm pl-2 py-4 text-center font-medium">Unlimited</td>
                </tr>


                <tr className="border-t border-gray-200">
                  <td className="text-sm sm:text-base pr-2 py-4">
                    <div className="font-bold">Team members</div>
                    <div className="text-gray-600">Zepher dashboard users</div>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">3</td>
                  <td className="text-sm px-2 py-4 text-center font-medium">10</td>
                  <td className="text-sm px-2 py-4 text-center font-medium">20</td>
                  <td className="text-sm pl-2 py-4 text-center font-medium">Unlimited</td>
                </tr>



                <tr className="border-t border-gray-200">
                  <td className="text-sm sm:text-base pr-2 py-4">
                    <div className="font-bold">RBAC</div>
                    <div className="text-gray-600">Role Based Access Control</div>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    {check()}
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    {check()}
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    {check()}
                  </td>
                  <td className="text-sm pl-2 py-4 text-center font-medium">
                    {check()}
                  </td>
                </tr>


                <tr className="border-t border-gray-200">
                  <td className="text-sm sm:text-base pr-2 py-4">
                    <div className="font-bold">Feature schemas</div>
                    <div className="text-gray-600">Defined application features sets</div>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    {check()}
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    {check()}
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    {check()}
                  </td>
                  <td className="text-sm pl-2 py-4 text-center font-medium">
                    {check()}
                  </td>
                </tr>


                <tr className="border-t border-gray-200">
                  <td className="text-sm sm:text-base pr-2 py-4">
                    <div className="font-bold">Domain schemas</div>
                    <div className="text-gray-600">Categorized app entry points (e.g. Bank, School)</div>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    {check()}
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    {check()}
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    {check()}
                  </td>
                  <td className="text-sm pl-2 py-4 text-center font-medium">
                    {check()}
                  </td>
                </tr>


                <tr className="border-t border-gray-200">
                  <td className="text-sm sm:text-base pr-2 py-4">
                    <div className="font-bold">App versioning</div>
                    <div className="text-gray-600">Versioned feature sets (i.e. Basic, Advanced)</div>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    {check()}
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    {check()}
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    {check()}
                  </td>
                  <td className="text-sm pl-2 py-4 text-center font-medium">
                    {check()}
                  </td>
                </tr>


                <tr className="border-t border-gray-200">
                  <td className="text-sm sm:text-base pr-2 py-4">
                    <div className="font-bold">App version fees</div>
                    <div className="text-gray-600">Apply fees to app version schemas</div>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    {x()}
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    {check()}
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    {check()}
                  </td>
                  <td className="text-sm pl-2 py-4 text-center font-medium">
                    {check()}
                  </td>
                </tr>


                <tr className="border-t border-gray-200">
                  <td className="text-sm sm:text-base pr-2 py-4">
                    <div className="font-bold">App version modules</div>
                    <div className="text-gray-600">Add extended functionality via add-on modules</div>
                  </td>
                  <td className="text-sm px-2 py-4 text-center font-medium">
                    {x()}
                  </td>
                  <td colSpan={3} className="text-sm px-2 py-4 text-center font-medium">
                    $5 /app /month
                  </td>
              
                </tr>

                <tr className="border-t border-gray-200">
                  <td className="text-sm sm:text-base pr-2 py-4">
                    <div className="font-bold">Remote Login and Sign up</div>
                    <div className="text-gray-600">We'll handle this and forward the user to your site</div>
                  </td>
                  <td colSpan={4} className="text-sm px-2 py-4 text-center font-medium">
                    Future
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <td className="text-sm sm:text-base pr-2 py-4">
                    <div className="font-bold">App Invoicing</div>
                    <div className="text-gray-600">Charge internal accounts for app services</div>
                  </td>
                  <td colSpan={4} className="text-sm px-2 py-4 text-center font-medium">
                    Future
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <td className="text-sm sm:text-base pr-2 py-4">
                    <div className="font-bold">Taxonomies</div>
                    <div className="text-gray-600">Categorized data sets</div>
                  </td>
                  <td colSpan={4} className="text-sm px-2 py-4 text-center font-medium">
                    Future
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <td className="text-sm sm:text-base pr-2 py-4">
                    <div className="font-bold">Alerts</div>
                    <div className="text-gray-600">Account based user alert system</div>
                  </td>
                  <td colSpan={4} className="text-sm px-2 py-4 text-center font-medium">
                    Future
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <td className="text-sm sm:text-base pr-2 py-4">
                    <div className="font-bold">User Tips</div>
                    <div className="text-gray-600">Route and/or page based user tips</div>
                  </td>
                  <td colSpan={4} className="text-sm px-2 py-4 text-center font-medium">
                    Future
                  </td>
                </tr>


              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PricingFeatures;