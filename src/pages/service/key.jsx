import React from 'react';
import Header from '../../components/first';
import ImageGallery from '../../components/imggal';
import prom2 from '../../assets/prom2.jpeg';
import img1 from '../../assets/key1.png';
import img2 from '../../assets/key2.png';
import img3 from '../../assets/key3.png';
import img4 from '../../assets/key4.png';


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
        title="Key Tags / Magnet Tags"
        imageSrc={prom2}
        description="
SC Graphics and Promotions specializes in creating custom key tags and magnetic tags, designed to be both functional and visually appealing. Whether you need branded key tags for
 your business, personalized tags for special events, or durable magnetic tags for easy identification, we offer a variety of materials and styles to suit your needs.
 Our portfolio highlights a diverse range of designs, showcasing our ability to transform your ideas into high-quality, custom tags. With a focus on precision and creativity,
 SC Graphics and Promotions delivers products that make a lasting impression. Let us help you create custom key and magnetic tags that stand out!"
      />
            <div className='pt-6 '>
        <h1 className='font-serif font-bold text-2xl pb-4'>Service Details</h1>
        <p className='font-sans font-medium leading-relaxed' >SC Graphics and Promotions offers high-quality custom key tags and magnetic tags, perfect for branding, special
            events, or personalized gifts. Our pricing is competitive and based on design complexity, with detailed quotes provided upfront. Most tags are crafted and shipped
            within 7-10 business days, with expedited options available. We offer up to two rounds of revisions to ensure your design is perfect, with additional revisions
            available for a fee. A 50% deposit is required to begin, with the balance due upon completion before delivery. We accept secure payment methods and ensure strict
            confidentiality of client information. For more details or to place an order, visit our website or contact us directly..</p>

      </div>
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
