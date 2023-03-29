import React from 'react';

import PlanetImage from '../images/planet.png';
import PlanetAvatar01 from '../images/planet-avatar-01.png';
import PlanetAvatar02 from '../images/planet-avatar-02.png';

function DeleteCode() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Delete some code</h1>
            <p className="text-xl text-gray-600">Unfortunately, using Zepher will render much of your current codebase obsolete. You can hang onto it for a little while - if it makes you feel better. But sooner or later you'll have to face reality. We're sure it was some awesome code and we're here if you need us.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeleteCode;
