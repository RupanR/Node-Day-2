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
