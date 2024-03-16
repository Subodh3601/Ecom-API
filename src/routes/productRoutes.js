
import express from "express";
import { createNewProduct, listProducts, deleteProduct, updateProduct } from "../controllers/productController.js"

const productRouter = express.Router();

//api to get all products
productRouter.route("/").get(listProducts);

//api to add a product
productRouter.route("/create").post(createNewProduct);

//api to delete a product
productRouter.route("/:id").delete(deleteProduct);

//api to update product
productRouter.route("/:id/update_quantity/").put(updateProduct);


export default productRouter;