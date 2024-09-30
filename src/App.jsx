import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Shop from './pages/shop';
import Shoping from './pages/shoppin';
import About from './pages/aboutus';
import Services from './pages/services';
import Contact from './pages/contact';
import SingleItem from './pages/SingleItem';
import Grapic from './pages/service/grapic';
import Lacer from './pages/service/lacer';
import Key from './pages/service/key';
import Cust from './pages/service/custmise';
import Tropy from './pages/service/tropy';
import SearchResults from './components/serchresult';
import Admin from './pages/admin';
import Footer from './components/footer1';
import Signup from './pages/signup';
import Adminadd from './pages/adminadd';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout'; // Import the new Layout component

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout> {/* Use Layout to wrap your routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shoping />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/grapic" element={<Grapic />} />
          <Route path="/lacer" element={<Lacer />} />
          <Route path="/keytags" element={<Key />} />
          <Route path="/tropy" element={<Tropy />} />
          <Route path="/custmise" element={<Cust />} />
          <Route path="/product/:productId" element={<SingleItem />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/login" element={<Signup />} />
          <Route path="/adminadd" element={<Adminadd />} />
        </Routes>
      </Layout>
      <Footer />
    </Router>
  );
};

export default App;
