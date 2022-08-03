import { useState } from "react";
import "./newProduct.css";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);

  //handle inputs
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.prevetDefault();
    //upload file
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Create a new Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            name="title" //info: name must be exact as in DB
            placeholder="Apple Airpods"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            name="desc"
            placeholder="Description..."
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder="100 DT"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Category</label>
          <input type="text" placeholder="jeans, skirts" onChange={handleCat} />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="addProductButtonContainer">
          <button onClick={handleClick} className="addProductButton">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
