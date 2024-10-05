import React from 'react';
import Header from '../../components/first';
import ImageGallery from '../../components/imggal';
import prom1 from '../../assets/prom1.jpeg';
import img1 from '../../assets/gra1.png';
import img2 from '../../assets/gra2.png';
import img3 from '../../assets/gra3.png';
import img4 from '../../assets/gra4.png';
// images array
const images = [
  img1,
  img2,
  img3,
  img4
];

function App() {
  return (
    <div className="px-4 md:px-12 lg:px-24 py-12 md:py-24">
      {/* Header Section */}
      <Header
        title="Graphic Designing"
        imageSrc={prom1}
        description="SC Graphics and Promotions specializes in high-quality graphic design services, including eye-catching post designs and unique logo creation. Whether you're looking to create a striking social media post, develop a memorable brand identity, or design promotional materials, SC Graphics and Promotions combines creativity with professionalism to bring your vision to life. The shop's website showcases a portfolio of diverse projects, demonstrating expertise in transforming ideas into visually compelling designs that capture the essence of your brand."
      />
      
      {/* Mobile Card Section */}
      <div className="pt-6">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-0 md:shadow-none md:bg-transparent">
          <h1 className="font-serif font-bold text-xl md:text-2xl pb-2 md:pb-4">Service Details</h1>
          <p className="font-sans font-medium leading-relaxed text-sm md:text-base">
              SC Graphics and Promotions provides high-quality graphic design services, including custom logos, social media posts, promotional materials, and more.
              Our pricing is competitive and tailored to the complexity of each project, with detailed quotes provided upfront. Most designs are completed within 7-10
              business days, with expedited options available. We offer up to two rounds of revisions to ensure the design meets your vision, with additional revisions
              available for a fee. A 50% deposit is required to begin the project, with the remaining balance due upon completion before delivery. We offer secure payment
              methods and guarantee strict confidentiality of all client information. For more details or to get started, visit our website or contact us directly.
          </p>
        </div>
      </div>
      
      {/* Image Gallery Section */}
      <div className="pt-6">
        <ImageGallery images={images} />
      </div>
    </div>
  );
}

export default App;
