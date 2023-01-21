import React, { useEffect, useState } from "react";
import ProductsDetails from "./ProductsDetails";
import axios from "axios";
import Navbar from "./Navbar";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [displayProducts, setDisplayProducts] = useState([]);
    
  const [category, setCategory] = useState("");

  async function getProducts() {
    const result = await axios.get("https://fakestoreapi.com/products");
    setProducts(result.data);
    setDisplayProducts(result.data);
  }

  async function getCategory() {
    const result = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    setCategory(result.data);
  }

  useEffect(() => {
    getProducts();
    getCategory();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => {
      return product.category === selectedCategory;
    });
    setDisplayProducts(filtered);
  }, [selectedCategory]);

  return (
    <>
      <div className="row " key={selectedCategory.id}>
        <div className="col-md-3 fs-3" style={{ backgroundColor: "#A8C2D1" }}>
          {category.map &&
            category.map((selected) => {
              return (
                <ul class="list-group my-2">
                  <li class=" mx-2" style={{ backgroundColor: "#A8C2D1" }}>
                    <button
                      class="btn btn-primary"
                      style={{ width: "200px" }}
                      onClick={() => setSelectedCategory(selected)}
                    >
                      {selected}
                    </button>
                  </li>
                </ul>
              );
            })}
        </div>
        {displayProducts.map((product) => {
          return (
               <ProductsDetails key={"product" + product.id} product={product} />
          );
        })}
      </div>

      {/* {products && (
          <table>
          <thead>
            <tr>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                  <tr key={"product" + product.id}>
                  <td>{product.title}</td>
                     <ProductsDetails product={product} />
                  <td>{product.image}</td>
                  <td>{product.rating.rate +" "+ product.rating.count}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )} */}
    </>
  );
}
