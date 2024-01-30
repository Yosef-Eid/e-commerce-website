
import Image from "next/image";
import Navbar from "./components/Navbar";
import Product from "./myproducts/product.js";

export default async function Home() {

  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full">
          <h3>My Product</h3>
          <div>
            <Product />
        

          </div>
      </div>
    </div>

  );
}
