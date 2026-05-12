import React, { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "This is a stylish Jacket perfect for any occasion",
  brand: "FashionBrand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Stylish Jacket",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Stylish Jacket",
    },
    {
      url: "https://picsum.photos/500/500?random=3",
      altText: "Stylish Jacket",
    },
  ],
};

const similarProducts = [
  {
    _id: "5",
    price: 120,
    name: "Product-1",
    images: [
      {
        url: "https://picsum.photos/500/500?random=3",
        altText: "Stylish Jacket",
      },
    ],
  },
  {
    _id: "6",
    price: 120,
    name: "Product-2",
    images: [
      {
        url: "https://picsum.photos/500/500?random=4",
        altText: "Stylish Jacket",
      },
    ],
  },
  {
    _id: "7",
    name: "Product-3",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=5",
        altText: "Stylish Jacket",
      },
    ],
  },
  {
    _id: "8",
    name: "Product-4",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=6",
        altText: "Stylish Jacket",
      },
    ],
  },
];

const ProductDetail = () => {
  const [mainImage, setmainImage] = useState("");
  const [selectedSize, setselectedSize] = useState("");
  const [selectedColor, setselectedColor] = useState("");
  const [quantity, setquantity] = useState(1);
  const [isbuttondisabled, setisbuttondisabled] = useState(false);

  useEffect(() => {
    if (selectProduct?.images?.length > 0) {
      setmainImage(selectProduct.images[0].url);
    }
  }, [selectProduct]);

  const handlequnatitychange = (type) => {
    if (type === "Plus") {
      setquantity((prev) => prev + 1);
    } else {
      setquantity((prev) => (prev > 1 ? prev - 1 : prev));
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select size and color before adding to cart.", {
        duration: 1000,
      });
      return;
    }
    setisbuttondisabled(true);

    setTimeout(() => {
      toast.success("Product added to cart successfully!", { duration: 1000 });
      setisbuttondisabled(false);
    }, 500);
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left thumbnail */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded cursor-pointer border smooth-click-animation ${mainImage === image.url ? "border-black" : "border-gray-300"}  `}
                onClick={() => setmainImage(image.url)}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage || null}
                alt={selectProduct.images[0]?.altText || "Main Image"}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Mobile Thumbnail */}
          <div className="md:hidden flex space-x-4 mt-4 ">
            {selectProduct.images.map((image, index) => (
              <img
                key={index + 1}
                src={image.url}
                alt={image.altText || `thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded cursor-pointer border smooth-click-animation ${mainImage === image.url ? "border-black" : "border-gray-300"}  `}
                onClick={() => setmainImage(image.url)}
              />
            ))}
          </div>
          {/* Right info */}

          <div className="md:w-1/2  md:ml-10 mt-3.5 ">
            <h1 className="text-2xl md:text-3xl font-bold ">
              {selectProduct.name}
            </h1>
            <p className="text-xl font-semibold text-gray-600 ">
              ${selectProduct.price.toFixed(2)}
            </p>
            {selectProduct.originalPrice && (
              <p className="text-lg text-gray-500 line-through">
                ${selectProduct.originalPrice.toFixed(2)}
              </p>
            )}
            <p className="text-gray-700 mt-4">{selectProduct.description}</p>
            <div className="mt-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectProduct.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setselectedColor(color)}
                    className={`w-8 h-8 rounded-full border cursor-pointer ${selectedColor === color ? "border-black" : "border-gray-300"}`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.8)",
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="mt-4">
              <p>Size</p>
              <div className="flex gap-2 mt-2">
                {selectProduct.sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setselectedSize(size)}
                    className={`w-10 h-10 rounded border cursor-pointer ${selectedSize === size ? "bg-black text-white" : "border-gray-300"}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">Quantity</h3>
              <div className="flex items-center mt-2 space-x-4">
                <button
                  className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 smooth-click-animation"
                  onClick={() => handlequnatitychange("Minus")}
                >
                  -
                </button>
                <span className="text-lg font-bold">{quantity}</span>
                <button
                  className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 smooth-click-animation"
                  onClick={() => handlequnatitychange("Plus")}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              disabled={isbuttondisabled}
              onClick={handleAddToCart}
              className={`mt-6 w-full py-3 rounded bg-black text-white font-semibold hover:bg-gray-800 transition-colors duration-200 smooth-click-animation ${isbuttondisabled ? "cursor-not-allowed opacity-50" : ""} `}
            >
              {isbuttondisabled ? "Adding..." : "Add to Cart"}
            </button>

            {/* Characterstic */}

            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4 ">Characteristics</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-2 px-4 ">Material:</td>
                    <td className="py-2 px-4">100% Cotton</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Fit:</td>
                    <td className="py-2 px-4">Regular</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Style:</td>
                    <td className="py-2 px-4">Casual</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* {You may also like section can be added here} */}
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">
            You may also like
          </h2>
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
