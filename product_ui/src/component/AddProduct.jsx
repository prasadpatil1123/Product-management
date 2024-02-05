import React, { useState } from "react";
import { createProduct } from "../service/productService";

const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    status: "",
  });

  const [msg, setMsg] = useState("");
  const [errors,setErrors]= useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const validateForm = ()=> {
    const errors = {};
    if(!product.productName.trim()){
      errors.productName="Product name is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const ProductRegsiter = (e) => {
    e.preventDefault();
    if(validateForm()){
      createProduct(product)
      .then((res) => {
        console.log("Product Added Sucessfully");
        setMsg("Product Added Sucessfully");
        setProduct({
          productName: "",
          description: "",
          price: "",
          status: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">Add Product</div>
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}

              <div className="card-body">
                <form onSubmit={(e) => ProductRegsiter(e)}>
                  <div className="mb-3">
                    <label>Enter Product Name</label>
                    <input
                      type="text"
                      name="productName"
                      className={`form-control ${errors.productName ? "is-invalid" : ""}`}
                      onChange={(e) => handleChange(e)}
                      value={product.productName}
                    />
                    {errors.productName &&(
                      <div className="invalid-feedback">{errors.productName}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label>Enter Description</label>
                    <input
                      type="text"
                      name="description"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.description}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Enter Price</label>
                    <input
                      type="text"
                      name="price"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.price}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Enter Status</label>
                    <input
                      type="text"
                      name="status"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.status}
                    />
                  </div>
                  <button className="btn btn-primary col-md-12">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
