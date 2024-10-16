import React from 'react';

const Feedback = () => {
  return (
    <section id="feedback" className="bg-white p-10 text-center">
      <h2 className="text-4xl font-bold mb-8">Our Customer Feedback</h2>
      <div className="flex justify-around">
        <div className="p-4 shadow-lg">
          <p>Everything worked well. We appreciated the auction service!</p>
          <h3 className="font-bold mt-2">Ólatith Parastu</h3>
        </div>
        <div className="p-4 shadow-lg">
          <p>The listing was hot! We appreciated everything, and nothing was needed on top.</p>
          <h3 className="font-bold mt-2">Melina Nesterenko</h3>
        </div>
        <div className="p-4 shadow-lg">
          <p>Great experience! We didn't need anything extra on top.</p>
          <h3 className="font-bold mt-2">Eve Arlie</h3>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
