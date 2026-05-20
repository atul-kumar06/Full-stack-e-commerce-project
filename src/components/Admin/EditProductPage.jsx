import React, { useState } from "react";

const EditProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [
      { url: "https://picsum.photos/150?random=1" },
      { url: "https://picsum.photos/150?random=2" },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Uploading file:", file.name);
      // Logic for actual file hosting setup goes here
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Product Data:", productData);
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white border border-gray-100 shadow-xl rounded-2xl transition-all duration-300 hover:shadow-2xl">
      <div className="mb-8 pb-4 border-b border-gray-100">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Edit Product
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Modify information, price variables, and media configurations details.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 rounded-xl p-3 transition-all outline-none text-gray-800 font-medium"
            placeholder="e.g. Classic Denim Jacket"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 rounded-xl p-3 transition-all outline-none text-gray-800"
            rows={4}
            placeholder="Describe the styling, fit, and build of the product..."
            required
          ></textarea>
        </div>

        {/* Grid Container for Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Price */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Price ($)
            </label>
            <input
              type="number"
              name="price"
              value={productData.price}
              onChange={handleChange}
              className="w-full border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 rounded-xl p-3 transition-all outline-none text-gray-800 font-medium"
              min="0"
            />
          </div>

          {/* Count in Stock */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Count in Stock
            </label>
            <input
              type="number"
              name="countInStock"
              value={productData.countInStock}
              onChange={handleChange}
              className="w-full border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 rounded-xl p-3 transition-all outline-none text-gray-800 font-medium"
              min="0"
            />
          </div>

          {/* Sku */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              SKU
            </label>
            <input
              type="text"
              name="sku"
              value={productData.sku}
              onChange={handleChange}
              className="w-full border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 rounded-xl p-3 transition-all outline-none text-gray-800 font-mono tracking-wider"
              placeholder="PROD-SKU-123"
            />
          </div>
        </div>

        {/* Grid Container for Attributes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sizes */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Sizes{" "}
              <span className="text-xs text-gray-400 font-normal">
                (Comma-separated)
              </span>
            </label>
            <input
              type="text"
              name="sizes"
              value={productData.sizes.join(", ")}
              onChange={(event) =>
                setProductData({
                  ...productData,
                  sizes: event.target.value.split(",").map((s) => s.trim()),
                })
              }
              className="w-full border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 rounded-xl p-3 transition-all outline-none text-gray-800 font-medium"
              placeholder="S, M, L, XL"
            />
          </div>

          {/* Colors */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Colors{" "}
              <span className="text-xs text-gray-400 font-normal">
                (Comma-separated)
              </span>
            </label>
            <input
              type="text"
              name="colors"
              value={productData.colors.join(", ")}
              onChange={(event) =>
                setProductData({
                  ...productData,
                  colors: event.target.value.split(",").map((c) => c.trim()),
                })
              }
              className="w-full border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 rounded-xl p-3 transition-all outline-none text-gray-800 font-medium"
              placeholder="Black, Blue, Crimson"
            />
          </div>
        </div>

        {/* Image Upload Block */}
        <div className="bg-gray-50/50 border border-dashed border-gray-200 rounded-2xl p-6 transition-all hover:bg-gray-50">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Product Gallery
          </label>

          <div className="flex items-center justify-center w-full mb-4">
            <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-gray-200 border-dashed rounded-xl cursor-pointer bg-white hover:bg-gray-50 hover:border-indigo-400 transition-all duration-200">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <span className="text-2xl mb-1">📷</span>
                <p className="text-xs font-semibold text-gray-500">
                  Click to upload imagery files
                </p>
                <p className="text-[10px] text-gray-400">
                  PNG, JPG or WEBP up to 5MB
                </p>
              </div>
              <input
                type="file"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>

          {/* Image Previews */}
          <div className="flex flex-wrap gap-4 mt-2">
            {productData.images.map((image, index) => (
              <div
                key={index}
                className="group relative w-20 h-20 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
              >
                <img
                  src={image.url}
                  alt={image.altText || "Product asset"}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200 cursor-pointer">
                  <span className="text-white text-xs font-bold">Delete</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
          <button
            type="button"
            className="px-5 py-3 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-100 transition-all duration-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Update Product Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProductPage;
