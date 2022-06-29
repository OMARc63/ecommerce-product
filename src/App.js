import './App.css';
import { ProductProvider } from './Components/ProductContext';
import Product from './Pages/Product';

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <Product />
      </div>
    </ProductProvider>
  );
}

export default App;
