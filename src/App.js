import { Routes, Route } from 'react-router-dom';
import './App.css';
import ProductsContainer from './components/homePage/ProductsContainer';
import Navigation from './components/navigation/Navigation';
import ProductDetails from './components/homePage/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductsContainer />} />
        <Route path="/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
