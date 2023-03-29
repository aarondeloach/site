import React from 'react';

function FeaturesBlocks() {

  function box(svg, title, text) {
    return (
      <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
        {svg}
        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{title}</h4>
        <p className="text-gray-600 text-center">{text}</p>
      </div>
    )
  }


  return (
  
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Advanced features</h2>
            <p className="text-xl text-gray-600">Meticulously designed for your satisfaction by seasoned developers from both sides of the development stack.</p>
          </div>

          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {box(
              <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g opacity="0.15"> <path d="M12.0504 20.9999C12.0336 21 12.0168 21 12 21C11.9832 21 11.9664 21 11.9496 20.9999C11.9666 20.9832 11.9834 20.9664 12 20.9495C12.0166 20.9664 12.0334 20.9832 12.0504 20.9999Z" fill="#001A72"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9936 18.7141C17.9978 18.6433 18 18.5719 18 18.5C18 16.567 16.433 15 14.5 15H9.5C7.567 15 6 16.567 6 18.5C6 18.5719 6.00217 18.6433 6.00644 18.7141C4.16145 17.0659 3 14.6686 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 14.6686 19.8385 17.0659 17.9936 18.7141ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" fill="#001A72"></path> </g> <path d="M9.70227 15.75H14.2977V14.25H9.70227V15.75ZM14.2977 15.75C15.9282 15.75 17.25 17.0718 17.25 18.7023H18.75C18.75 16.2433 16.7567 14.25 14.2977 14.25V15.75ZM9.70227 14.25C7.24335 14.25 5.25 16.2433 5.25 18.7023H6.75C6.75 17.0718 8.07178 15.75 9.70227 15.75V14.25ZM14.25 9C14.25 10.2426 13.2426 11.25 12 11.25V12.75C14.0711 12.75 15.75 11.0711 15.75 9H14.25ZM12 11.25C10.7574 11.25 9.75 10.2426 9.75 9H8.25C8.25 11.0711 9.92893 12.75 12 12.75V11.25ZM9.75 9C9.75 7.75736 10.7574 6.75 12 6.75V5.25C9.92893 5.25 8.25 6.92893 8.25 9H9.75ZM12 6.75C13.2426 6.75 14.25 7.75736 14.25 9H15.75C15.75 6.92893 14.0711 5.25 12 5.25V6.75ZM20.25 12C20.25 16.5563 16.5563 20.25 12 20.25V21.75C17.3848 21.75 21.75 17.3848 21.75 12H20.25ZM12 20.25C7.44365 20.25 3.75 16.5563 3.75 12H2.25C2.25 17.3848 6.61522 21.75 12 21.75V20.25ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75V2.25C6.61522 2.25 2.25 6.61522 2.25 12H3.75ZM12 3.75C16.5563 3.75 20.25 7.44365 20.25 12H21.75C21.75 6.61522 17.3848 2.25 12 2.25V3.75Z" fill="#001A72"></path> </g></svg>,
             
             
             'Account Management', 'Simplified management of multi-account, multi-user application environments.')}


            {box(
              <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.15" d="M4 7L12 3L20 7C20 12.1932 17.2157 19.5098 12 21C6.78428 19.5098 4 12.1932 4 7Z" fill="#001A72"></path> <path d="M15.0001 10L11.0001 14L9 12M12 3L4 7C4 12.1932 6.78428 19.5098 12 21C17.2157 19.5098 20 12.1932 20 7L12 3Z" stroke="#001A72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>,
             
             
              'Authentication', 'Rock solid procedures for performing user authentication and secure session management.'
            )}


            {box(
              <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 11H19V21H5V11Z" stroke="#001A72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="0.15" d="M5 11H19V21H5V11Z" fill="#001A72"></path> </g></svg>,


              'Access Control', 'Extremely easy (almost invisable) implementation of access control within your existing codebase.'
            )}


            {box(
              <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M11 3C10.4477 3 10 3.44772 10 4V4.56876C10 4.99658 9.71288 5.36825 9.31776 5.53229C8.9225 5.6964 8.46228 5.63386 8.15966 5.33123L7.75734 4.92891C7.36681 4.53839 6.73365 4.53839 6.34312 4.92891L4.92891 6.34313C4.53838 6.73365 4.53838 7.36681 4.92891 7.75734L5.33123 8.15966C5.63386 8.46229 5.6964 8.9225 5.53229 9.31776C5.36825 9.71288 4.99658 10 4.56877 10L4 10C3.44772 10 3 10.4477 3 11V13C3 13.5523 3.44772 14 4 14H4.56879C4.99659 14 5.36825 14.2871 5.53228 14.6822C5.69638 15.0775 5.63384 15.5377 5.33123 15.8403L4.92889 16.2426C4.53837 16.6331 4.53837 17.2663 4.92889 17.6568L6.34311 19.071C6.73363 19.4616 7.36679 19.4616 7.75732 19.071L8.1596 18.6688C8.46223 18.3661 8.92247 18.3036 9.31774 18.4677C9.71287 18.6317 10 19.0034 10 19.4313V20C10 20.5523 10.4477 21 11 21H13C13.5523 21 14 20.5523 14 20V19.4312C14 19.0034 14.2871 18.6318 14.6822 18.4677C15.0775 18.3036 15.5377 18.3661 15.8403 18.6688L16.2426 19.071C16.6331 19.4616 17.2663 19.4616 17.6568 19.071L19.071 17.6568C19.4616 17.2663 19.4616 16.6331 19.071 16.2426L18.6688 15.8403C18.3661 15.5377 18.3036 15.0775 18.4677 14.6822C18.6318 14.2871 19.0034 14 19.4312 14H20C20.5523 14 21 13.5523 21 13V11C21 10.4477 20.5523 10 20 10L19.4313 10C19.0034 10 18.6317 9.71287 18.4677 9.31774C18.3036 8.92247 18.3661 8.46223 18.6688 8.1596L19.071 7.75734C19.4615 7.36681 19.4616 6.73365 19.071 6.34312L17.6568 4.92891C17.2663 4.53838 16.6331 4.53838 16.2426 4.92891L15.8403 5.33123C15.5377 5.63384 15.0775 5.69638 14.6822 5.53228C14.2871 5.36825 14 4.99659 14 4.56879V4C14 3.44772 13.5523 3 13 3H11ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#001A72"></path> <path d="M10 4C10 3.44772 10.4477 3 11 3H13C13.5523 3 14 3.44772 14 4V4.56879C14 4.99659 14.2871 5.36825 14.6822 5.53228C15.0775 5.69638 15.5377 5.63384 15.8403 5.33123L16.2426 4.92891C16.6331 4.53838 17.2663 4.53838 17.6568 4.92891L19.071 6.34312C19.4616 6.73365 19.4616 7.36681 19.071 7.75734L18.6688 8.1596C18.3661 8.46223 18.3036 8.92247 18.4677 9.31774C18.6317 9.71287 19.0034 10 19.4313 10L20 10C20.5523 10 21 10.4477 21 11V13C21 13.5523 20.5523 14 20 14H19.4312C19.0034 14 18.6318 14.2871 18.4677 14.6822C18.3036 15.0775 18.3661 15.5377 18.6688 15.8403L19.071 16.2426C19.4616 16.6331 19.4616 17.2663 19.071 17.6568L17.6568 19.071C17.2663 19.4616 16.6331 19.4616 16.2426 19.071L15.8403 18.6688C15.5377 18.3661 15.0775 18.3036 14.6822 18.4677C14.2871 18.6317 14 19.0034 14 19.4312V20C14 20.5523 13.5523 21 13 21H11C10.4477 21 10 20.5523 10 20V19.4313C10 19.0034 9.71287 18.6317 9.31774 18.4677C8.92247 18.3036 8.46223 18.3661 8.1596 18.6688L7.75732 19.071C7.36679 19.4616 6.73363 19.4616 6.34311 19.071L4.92889 17.6568C4.53837 17.2663 4.53837 16.6331 4.92889 16.2426L5.33123 15.8403C5.63384 15.5377 5.69638 15.0775 5.53228 14.6822C5.36825 14.2871 4.99659 14 4.56879 14H4C3.44772 14 3 13.5523 3 13V11C3 10.4477 3.44772 10 4 10L4.56877 10C4.99658 10 5.36825 9.71288 5.53229 9.31776C5.6964 8.9225 5.63386 8.46229 5.33123 8.15966L4.92891 7.75734C4.53838 7.36681 4.53838 6.73365 4.92891 6.34313L6.34312 4.92891C6.73365 4.53839 7.36681 4.53839 7.75734 4.92891L8.15966 5.33123C8.46228 5.63386 8.9225 5.6964 9.31776 5.53229C9.71288 5.36825 10 4.99658 10 4.56876V4Z" stroke="#001A72" strokeWidth="1.5"></path> <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="#001A72" strokeWidth="1.5"></path> </g></svg>,


              'SaaS', 'Multi-level integration of fee-based application versioning with extended add-on options.'
            )}


            {box(
              <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.15" d="M3 12C3 10.8954 3.89543 10 5 10H12C13.1046 10 14 10.8954 14 12V19C14 20.1046 13.1046 21 12 21H5C3.89543 21 3 20.1046 3 19V12Z" fill="#001A72"></path> <path d="M17.5 14H19C20.1046 14 21 13.1046 21 12V5C21 3.89543 20.1046 3 19 3H12C10.8954 3 10 3.89543 10 5V6.5M5 21H12C13.1046 21 14 20.1046 14 19V12C14 10.8954 13.1046 10 12 10H5C3.89543 10 3 10.8954 3 12V19C3 20.1046 3.89543 21 5 21Z" stroke="#001A72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>,


              'Multi-Tenant Apps', 'Seamless processing of unlimited domain-specific environments from a single codebase.'
            )}


            {box(
              <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g opacity="0.2"> <path d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z" fill="#001A72"></path> <path d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z" fill="#001A72"></path> <path d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z" fill="#001A72"></path> </g> <path d="M15.3156 16.6578L8.6938 13.3469M8.68439 10.6578L15.3125 7.34377M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18ZM21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6ZM9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z" stroke="#001A72" strokeWidth="1.5"></path> </g></svg>,


              'B2B Networks', 'Establish high-level contracts between internal accounts for affiliate and other network systems.'
            )}


          </div>

        </div>
      </div>

    </section>
  
  );
}

export default FeaturesBlocks;
