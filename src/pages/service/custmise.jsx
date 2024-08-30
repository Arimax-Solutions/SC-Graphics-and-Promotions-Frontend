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
    <div className="px-4 md:px-24 py-24 ">
      <Header
        title="Customized Items"
        imageSrc={prom4}
        description="SC Graphics and Promotions specializes in high-quality graphic design services,
         including eye-catching post designs and unique logo creation. Whether you're looking to create
          a striking social media post, develop a memorable brand identity, or design promotional materials,
           SC Graphics and Promotions combines creativity with professionalism to bring your vision to life.
            The shop's website showcases a portfolio of diverse projects, demonstrating expertise in transforming
             ideas into visually compelling designs that capture the essence of your brand."
      />
      <div className='pt-6 '>
        <h1 className='font-serif font-bold text-2xl pb-4'>Service Details</h1>
        <p className='font-sans font-medium leading-relaxed' >SC Graphics and Promotions offers customized items like unique gifts, elegant wedding cards, personalized name boards, custom mugs, and stylish photo 
frames. Our pricing is competitive and based on item complexity, with detailed quotes provided upfront. Most items are completed and shipped within 7-10 
business days, with expedited options available. We provide up to two rounds of revisions, with additional revisions available for a fee. A 50% deposit is 
required to start, with the balance due upon completion before delivery. We accept various secure payment methods and ensure strict confidentiality of 
client information. For more details or to place an order, visit our website or contact us directly.</p>

      </div>

  
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
