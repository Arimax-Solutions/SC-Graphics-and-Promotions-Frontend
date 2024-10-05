import React from 'react';
import Header from '../../components/first';
import ImageGallery from '../../components/imggal';
import prom3 from '../../assets/prom3.jpeg';
import img1 from '../../assets/lac1.png';
import img2 from '../../assets/lac2.png';
import img3 from '../../assets/lac3.png';
import img4 from '../../assets/lac4.png';

const images = [
  img1,
  img2,
  img3,
  img4,

];

function App() {
  return (
    <div className="px-4 md:px-24 py-24 ">
      <Header
        title="Laser Works"
        imageSrc={prom3}
        description="SC Graphics and Promotions specializes in precision laser engraving services, offering custom designs on a variety of materials including wood, metal,
        glass, and acrylic. Whether you need personalized gifts, engraved corporate awards, custom signage, or decorative pieces, SC Graphics and Promotions combines
        accuracy and artistry to deliver exceptional results. Our portfolio showcases a wide range of projects, reflecting our expertise in transforming ideas
        into beautifully crafted, laser-engraved works that make a lasting impression. Let us help you create something unique and meaningful with our professional laser
        engraving services."
      />
            <div className='pt-6 '>
        <h1 className='font-serif font-bold text-2xl pb-4'>Service Details</h1>
        <p className='font-sans font-medium leading-relaxed' >
            SC Graphics and Promotions offers precision laser engraving services for a wide range of items, including personalized gifts, custom nameplates, corporate awards,
            and more. Our pricing is competitive and based on the intricacy of the design, with detailed quotes provided upfront. Most laser-engraved items are completed within
            7-10 business days, with expedited options available. We provide up to two rounds of revisions to ensure your satisfaction, with additional revisions available for a
            fee. A 50% deposit is required to start, with the balance due upon completion before delivery. We accept secure payment methods and ensure strict confidentiality
            of client information. For more details or to place an order, visit our website or contact us directly.</p>

      </div>
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
