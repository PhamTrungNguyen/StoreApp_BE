const ProductRouter = require("express").Router();
const productController = require("../controllers/productController");
// const { authenToken } = require('../middlewares/token')

ProductRouter.post("/createProduct", productController.createProduct);
ProductRouter.get("/findAllProduct", productController.findAllProduct);
ProductRouter.get("/findProductById", productController.findProductById);
ProductRouter.put("/updateProductById", productController.updateProductById);

module.exports = ProductRouter;
