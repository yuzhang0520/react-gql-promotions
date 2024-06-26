import './App.css';
import InfluencerList from './pages/InfluencerList';
import PromotionList from './pages/PromotionList';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import ProductList from './pages/ProductList';
import Promotion from './pages/Promotion';
import Product from './pages/Product';
import Influencer from './pages/Influencer';
import NewPromotionPopup from './components/NewPromotionPopup';
import AddProductToPromotionPopup from './components/AddProductToPromotionPopup';

function App() {
  
  const location = useLocation(); // Get the current location

  const isPopup = location.pathname.startsWith('/NewPromotionPopup') || 
                  location.pathname.startsWith('/AddProductToPromotion');
  
  const renderHeader = !isPopup;

  return (
    <div className="App">
      {renderHeader && <Header />}
      <Routes>
        <Route strict exact path="/" element={<Homepage/>} />
        <Route path="/promotions" element={<PromotionList/>} />
        <Route path="/influencers" element={<InfluencerList/>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/promotions/:id" element={<Promotion/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/influencers/:id" element={<Influencer/>} />
        <Route path="/NewPromotionPopup" element={<NewPromotionPopup/>} />
        <Route path="/AddProductToPromotion" element={<AddProductToPromotionPopup/>} />
      </Routes>
    </div>
  );
}

export default App;
