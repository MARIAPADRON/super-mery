import ProductsList from './components/ProductsList'
import axios from 'axios'
import './App.css'
import { useState, useEffect } from 'react'
import ProductsForm from './components/ProductsForm'


function App() {
  const [products, setProducts] = useState([]);

  const [productDataUpdate, setProductDataUpdate] = useState (null);
  
  useEffect (() => {
    getApiData()
  }, [])
  console.log(productDataUpdate);
  console.log(products)

  const getApiData = () => {
    axios
    .get("https://products-crud.academlo.tech/products/")
    .then ((resp) => setProducts(resp.data)) 
    .catch((error) => console.error(error)) 
  };

  const addProduct = (data)=> {
    axios
    .post("https://products-crud.academlo.tech/products/", data)
    .then (()=>getApiData())
    .catch((error) => console.error (error))
  };

  const deleteProduct = (productId) => {
    axios
    .delete(`https://products-crud.academlo.tech/products/${productId}/`)
    .then(()=>getApiData())
    .catch((error)=>console.error(error))
  };

  const selectProduct = (productsData)=>{
    setProductDataUpdate(productsData)
  };

  const updateProduct = (editeProduct) =>{
    axios
    .put(`https://products-crud.academlo.tech/products/${editeProduct.id}/`, editeProduct )
    .then(()=>getApiData())
    .catch((error)=>console.error(error))
    
    setProductDataUpdate(null)
  };

  return (
    <div className="App">
      <ProductsForm
      createProductData={(data)=>addProduct(data)}
      productSelectedData={productDataUpdate}
      updateProduct={updateProduct}
      />

      <ProductsList
      products ={products}
      deleteProduct ={deleteProduct}
      selectProduct ={selectProduct}
      />
      
    </div>
  )
}
export default App
