import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import FeaturesBg01 from '../images/features-home-bg-01.png';

import FeaturesFunction1 from '../images/features-home-function-access01.png';
import FeaturesFunction2 from '../images/features-home-function-access02.png';
import FeaturesFunction3 from '../images/features-home-function-access03.png';
import FeaturesFunction4 from '../images/features-home-function-access04.png';
import FeaturesFunction5 from '../images/features-home-function-access05.png';

import FeaturesElement01 from '../images/features-home-element-01.png';
import FeaturesElement02 from '../images/features-home-element-02.png';
import FeaturesElement03 from '../images/features-home-element-03.png';

import FeaturesSignal1 from '../images/features-home-signaling01.png';
import FeaturesSignal2 from '../images/features-home-signaling02.png';


import HowItWorks from '../partials/HowItWorks';

function FeaturesHome() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab - 1]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">


          <HowItWorks />


      
          <div className="md:grid md:grid-cols-12 md:gap-6">


            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Simplified solutions</h3>
                <p className="text-xl text-gray-600">Multi-layered access control is super complex. Management should be super easy.</p>
              </div>


              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">


                <button
                  className={`text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Enforce everything simultaneously</div>
                    <div className="text-gray-600">A single method call enforces domain, version and RBAC against any portion of your codebase.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </button>



                <button
                  className={`text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Intelligent API signaling</div>
                    <div className="text-gray-600">When necessary, the API will provide a signal in the response for you to react upon (i.e. login).</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow shrink-0 ml-3">
                    
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                    </svg>

                  </div>
                </button>
                <button
                  className={`text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Online modeling with instant updates</div>
                    <div className="text-gray-600">Changes made online are instantaneously delivered to all affected applications.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow shrink-0 ml-3">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right md:pt-10">
                
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">

                    <img className="md:max-w-none mx-auto rounded" src={FeaturesBg01} width="500" height="375" alt="Features bg" />
                   
                    <img className="md:max-w-none absolute w-full left-0 bottom-0 transform  animate-float animation-delay-500" src={FeaturesFunction1} width="500" height="88" alt="Element 03" style={{ top: '15%' }} />

                    <img className="md:max-w-none absolute w-full left-5 transform animate-float animation-delay-1000" src={FeaturesFunction2} width="500" height="45" alt="Element 02" style={{ top: '45%' }} />

                    <img className="md:max-w-none absolute w-full left-1 transform animate-float" src={FeaturesFunction3} width="500" height="45" alt="Element 02" style={{ top: '60%' }} />

                    <img className="md:max-w-none absolute w-full left-1/4 transform animate-float animation-delay-500" src={FeaturesFunction4} width="500" height="45" alt="Element 02" style={{ top: '78%' }} />

                    <img className="md:max-w-none absolute w-full left-2 transform animate-float animation-delay-1000" src={FeaturesFunction5} width="500" height="45" alt="Element 02" style={{ top: '94%' }} />
                    
                  </div>
                </Transition>


                
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={FeaturesBg01} width="500" height="375" alt="Features bg" />
                  
                    <img className="md:max-w-none absolute w-full left-0 bottom-0 transform  animate-float animation-delay-1000" src={FeaturesSignal1} width="400" height="200" alt="Element 03" style={{ top: '8%' }} />

                    <img className="md:max-w-none absolute w-full left-0 bottom-0 transform  animate-float animation-delay-500" src={FeaturesSignal2} width="200" height="100" alt="Element 03" style={{ top: '52%' }} />
                    
                  </div>
                </Transition>



                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={FeaturesBg01} width="500" height="375" alt="Features bg" />
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement01} width="500" height="147" alt="Element 01" style={{ top: '22%' }} />
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float animation-delay-500" src={FeaturesElement02} width="500" height="158" alt="Element 02" style={{ top: '39%' }} />
                    <img className="md:max-w-none absolute w-full left-0 bottom-0 transform animate-float animation-delay-1000" src={FeaturesElement03} width="500" height="167" alt="Element 03" style={{ top: '77%' }} />
                  </div>
                </Transition>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesHome;
