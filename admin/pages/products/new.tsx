import Layout from "@/components/Layout";
import axios from "axios";
import React, { useState } from "react";
import { EventHandler } from "react";

// define an interface for the product data
interface Product {
  title: string;
  description: string;
  price: number;
}

const NewProducts = () => {
  // use generic useState hooks to specify the type of state
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  async function creatProduct() {
    // create a product object with the state values
    const product: Product = { title, description, price };
    try {
      // await the response from the server
      const response = await axios.post("/api/products", product);
      // do something with the response, such as displaying a success message
      console.log(response.data);
    } catch (error) {
      // handle the error, such as displaying an error message
      console.error(error);
    }
  }

  return (
    <Layout>
      <form onSubmit={() => creatProduct()}>
        <h1>New Product</h1>
        <label>Product name</label>
        <input
          type="text"
          placeholder="Product name"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Description</label>
        <textarea
          placeholder="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <label>
          Price (<b>BDT</b>)
        </label>
        <input
          type="number"
          placeholder="৳"
          value={price}
          onChange={(event) => setPrice(event.target.valueAsNumber)}
        />
        <button type="submit" className="btn-primary">
          Save
        </button>
      </form>
    </Layout>
  );
};

export default NewProducts;
