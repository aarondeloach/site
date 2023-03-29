import React from 'react';



function HowItWorks() {

  function box(number, title, text) {
    return (
      <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
        <div className="flex justify-center items-center h-12 w-12 rounded-full  text-white font-bold mb-3">{number}</div>
        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{title}</h4>
        <p className="text-gray-600 text-center">{text}</p>
      </div>
    )
  }

  function content() {
    return (
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-16 border-b border-gray-200">

            <div className="relative max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">

              <div className="absolute top-1/2 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-300 hidden lg:block" aria-hidden="true"></div>

              {box(<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g opacity="0.15"> <path d="M12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3Z" fill="#001A72"></path> <path d="M18 10C19.1046 10 20 10.8954 20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10Z" fill="#001A72"></path> <path d="M6 17C7.10457 17 8 17.8954 8 19C8 20.1046 7.10457 21 6 21C4.89543 21 4 20.1046 4 19C4 17.8954 4.89543 17 6 17Z" fill="#001A72"></path> </g> <path d="M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5M14 5H20M10 5L4 5M16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12ZM16 12H4M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19ZM8 19H20" stroke="#001A72" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>,


                'Define', 'Use our online interface for defining your apps, versions, features & customer schemas.')}


              {box(<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g opacity="0.15"> <path d="M3 6C3 7.65685 4.34315 9 6 9H9V6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6Z" fill="#001A72"></path> <path d="M18 3C16.3431 3 15 4.34315 15 6V9H18C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3Z" fill="#001A72"></path> <path d="M21 18C21 16.3431 19.6569 15 18 15H15V18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18Z" fill="#001A72"></path> <path d="M6 21C7.65685 21 9 19.6569 9 18L9 15L6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z" fill="#001A72"></path> </g> <path d="M9 9H15M9 9V15M9 9V6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9H9ZM15 9V15M15 9H18C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6V9ZM15 15H9M15 15V18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15H15ZM9 15L6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21C7.65685 21 9 19.6569 9 18L9 15Z" stroke="#001A72" strokeWidth="1.5"></path> </g></svg>,


                'Implement', 'Sprinkle simplified, conditional access control logic throughout your codebase.')}

              {box(<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.15" d="M16 4H9L6 13H10L8 21L19 10H13.6L16 4Z" fill="#001A72"></path> <path d="M16 4H9L6 13H10L8 21L19 10H13.6L16 4Z" stroke="#001A72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>,


                'Initialize', 'Bootstrap the API to process against compiled version and access control data.')}

              {box(<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g opacity="0.15"> <path d="M3.5 13.5H10.5V20.5H3.5V13.5Z" fill="#001A72"></path> <path d="M13.5 3.5H20.5V10.5H13.5V3.5Z" fill="#001A72"></path> <path d="M13.5 13.5H20.5V20.5H13.5V13.5Z" fill="#001A72"></path> </g> <path d="M3.5 3.5H10.5V10.5H3.5V3.5Z" stroke="#001A72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M3.5 13.5H10.5V20.5H3.5V13.5Z" stroke="#001A72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M13.5 3.5H20.5V10.5H13.5V3.5Z" stroke="#001A72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M13.5 13.5H20.5V20.5H13.5V13.5Z" stroke="#001A72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>,


                'Respond', 'Your apps perform seamlessly according to the specifications you\'ve provided.')}

            </div>
          </div>
        </div>

      </section>
    )
  }

  return (
    <>
      <div className="max-w-3xl mx-auto text-center pb-2 md:pb-4">
        <h1 className="h2 mb-4">How it works</h1>
        <p className="text-xl text-gray-600">Process requests against an optimized API result set containing the app and account environments, current version features and RBAC values.</p>
      </div>

      <div className="pb-12 md:pb-16">
        {content()}
      </div>
    </>
  )
}

export default HowItWorks;
