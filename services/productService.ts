const Product = require("../models/product");

type bodyTypeProduct = {
  brand: string;
  image1: string;
  image2: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  _id: string;
};
const createProductService = async (body: bodyTypeProduct) => {
  const info = {
    brand: body.brand,
    image1: body.image1,
    image2: body.image2,
    name: body.name,
    price: body.price,
    quantity: body.quantity,
    size: body.size,
  };
  const result = await Product.create(info);
  console.log(
    "🚀 ~ file: productService.ts:24 ~ createProductService ~ result:",
    result
  );
  return { result, message: "success" };
};
const findAllProductService = async (body: bodyTypeProduct) => {
  const result = await Product.find();
  return { result, message: "success" };
};
const findProductByIdService = async (query: any) => {
  const { id } = query;

  const result = await Product.findOne({ _id: id });
  return { result, message: "success" };
};
const updateProductByIdService = async (body: bodyTypeProduct, query: any) => {
  const { id } = query;
  const result = await Product.update(
    { _id: id },
    {
      brand: body.brand,
      image1: body.image1,
      image2: body.image2,
      name: body.name,
      price: body.price,
      quantity: body.quantity,
      size: body.size,
    }
  );
  return { result, message: "success" };
};
module.exports = {
  createProductService,
  findAllProductService,
  updateProductByIdService,
  findProductByIdService,
};
