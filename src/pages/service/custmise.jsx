import React from 'react';
import Header from '../../components/first';
import ImageGallery from '../../components/imggal';
import img1 from '../../assets/Cust1.jpeg';
import img2 from '../../assets/Cust2.jpeg';
import img3 from '../../assets/Cust3.jpeg';
import img4 from '../../assets/Cust4.jpeg';
import prom4 from '../../assets/prom4.jpeg';

// images array
const images = [
  img1,
  img2,
  img3,
  img4,
];

function App() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-24">
      <Header
        title="Customized Items"
        imageSrc={prom4}
        description="SC Graphics and Promotions specializes in creating high-quality customized items, including unique gifts, elegant wedding cards, personalized name boards,
         custom mugs, and stylish photo frames. Whether you’re looking to commemorate a special occasion, enhance your brand visibility, or give a thoughtful gift, SC Graphics
         and Promotions combines creativity and craftsmanship to bring your ideas to life. Our website showcases a diverse portfolio of customized projects, reflecting our
         dedication to transforming your visions into tangible products that resonate with meaning and style. Let us help you create something special that captures the essence
         of your brand or celebration."
      />
      <div className='pt-6'>
        <h1 className='font-serif font-bold text-xl md:text-2xl pb-4'>Service Details</h1>
        <p className='font-sans font-medium leading-relaxed text-sm md:text-base'>
          SC Graphics and Promotions offers customized items like unique gifts, elegant wedding cards, personalized name boards, custom mugs, and stylish photo 
          frames. Our pricing is competitive and based on item complexity, with detailed quotes provided upfront. Most items are completed and shipped within 7-10 
          business days, with expedited options available. We provide up to two rounds of revisions, with additional revisions available for a fee. A 50% deposit is 
          required to start, with the balance due upon completion before delivery. We accept various secure payment methods and ensure strict confidentiality of 
          client information. For more details or to place an order, visit our website or contact us directly.
        </p>
      </div>
      <div className="pt-8">
        <ImageGallery images={images} />
      </div>
    </div>
  );
}

export default App;
