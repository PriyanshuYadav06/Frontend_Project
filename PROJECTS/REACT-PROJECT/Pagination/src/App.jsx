import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ProductCard from "./Components/ProductCard";
import Pagination from "./Components/Pagination";
function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState();
  const [currPage, setCurrPage] = useState(1);
  // chnage this variables only rest of this auto adjust
  const PRODUCT = 5;
  const [startIdx, setStartIdx] = useState(0);
  const [endIdx, setEndIdx] = useState(5);
  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="Main">
      <h1 className="title">PAGINATION</h1>
      <div className="Container">
        {loading ? (
          <span>No Product Found</span>
        ) : (
          products.slice(startIdx, endIdx).map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
        )}
      </div>
      {!loading && (
        <Pagination
          setStartIdx={setStartIdx}
          setEndIdx={setEndIdx}
          PRODUCT={PRODUCT}
          NO_OF_PAGE={Math.ceil(products.length / PRODUCT)}
          currPage={currPage}
          setCurrPage={setCurrPage}
        />
      )}
    </div>
  );
}
export default App;
