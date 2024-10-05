import React from 'react';
import Header from '../../components/first';
import ImageGallery from '../../components/imggal';
import prom5 from '../../assets/prom5.jpeg';
import img1 from '../../assets/trop1.png';
import img2 from '../../assets/trop2.png';
import img3 from '../../assets/trop3.png';
import img4 from '../../assets/trop4.png';


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
        title="Trophy Designing"
        imageSrc={prom5}
        description="SC Graphics and Promotions offers premium trophy design services, crafting custom awards that celebrate achievements with style and elegance.
        Whether for corporate events, sports competitions, or special occasions, each trophy is meticulously designed to reflect the significance of the moment.
        From sleek modern designs to classic, timeless pieces, SC Graphics and Promotions ensures every trophy is a stunning representation of excellence and recognition.
        Let us help you honor success with a design that stands out and leaves a lasting impression"
      />
            <div className='pt-6 '>
        <h1 className='font-serif font-bold text-2xl pb-4'>Service Details</h1>
        <p className='font-sans font-medium leading-relaxed' >SC Graphics and Promotions specializes in designing customized trophies for all occasions,
            including corporate awards, sports achievements, and special events. Our trophies are crafted with precision, offering a range of materials
            and designs to suit your style and budget. Pricing is competitive and based on the complexity of the design, with detailed quotes provided upfront.
            Standard turnaround time is 7-10 business days, with expedited options available. We offer up to two rounds of revisions to ensure your satisfaction,
            with additional revisions available for a fee. A 50% deposit is required to begin, with the balance due upon completion before delivery.
            Secure payment options and strict confidentiality are guaranteed. For more details or to place an order, visit our website or contact us directly..</p>
      </div>
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
