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

// post method creating a product

export const createProduct = (req, res) => {
  const { name, price } = req.body;
  try {
    const newProduct = {
      id: products.length + 1,
      name: name,
      price: price,
    };
    products.push(newProduct);
    res
      .status(200)
      .json({ message: "Product created successfully", data: newProduct });
  } catch (error) {
    res
      .status(503)
      .json({ message: "Cannot create product Error in create product" });
  }
};

//put method or update product

export const updateProduct = (req, res) => {
  const productId = req.params.id;
  const { name, price } = req.body;
  try {
    const index = products.findIndex((ele) => ele.id == productId);
    if (index === -1) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    products[index].name = name;
    products[index].price = price;
    res
      .status(200)
      .json({ message: "Product Updated Successfully", data: products[index] });
  } catch (error) {
    res
      .status(503)
      .json({ message: "Cannot Update product Error in Update product" });
  }
};

// delete method

export const deleteProduct = (req, res) => {
  const productId = req.params.id;
  try {
    const index = products.findIndex((ele) => ele.id == productId);
    if (index === -1) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    products.splice(index, 1);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res
      .status(503)
      .json({ message: "Cannot Delete product Error in Delete product" });
  }
};
