const products = [
  { id: 1, name: "Iphone", price: 50000 },
  { id: 2, name: "Headset", price: 500 },
  { id: 3, name: "laptop", price: 75000 },
  { id: 4, name: "printer", price: 5000 },
];

//get method

export const getProducts = (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "Products Retrieved Successfully", data: products });
  } catch (error) {
    res
      .status(503)
      .json({ message: "Cannot retrieve products Error in get products" });
  }
};

// get by id method or single product get method

export const getProductById = (req, res) => {
  const productId = req.params.id;
  //console.log("product Id", productId);
  try {
    const productDetail = products.find((ele) => ele.id == productId);
    if (!productDetail) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    return res
      .status(200)
      .json({ message: "product retrieved successfully", data: productDetail });
  } catch (error) {
    res
      .status(503)
      .json({ message: "Cannot retrieve product Error in get product by ID" });
  }
};
