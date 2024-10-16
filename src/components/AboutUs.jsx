import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="text-center p-10 bg-gris">
      <h2 className="text-4xl font-bold mb-4">Sobre Nosotros</h2>
      <p>We provide many of the best services for you, and you will get the best benefits here.</p>
      <div className="flex justify-around mt-10">
        <div className="p-4">
          <h3 className="font-bold text-xl">Top Buy & Sell Car</h3>
          <p>We provide the best car buying and selling services.</p>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-xl">Easy Payment</h3>
          <p>Payment processes are easy and reliable.</p>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-xl">Easy To Use</h3>
          <p>Our services are user-friendly and efficient.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
