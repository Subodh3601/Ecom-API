import { createNewProductRepo, listProductsRepo, deleteProductRepo, updateProductRepo } from "../model/productRepository.js"


//list all product
export const listProducts = async (req, res, next) => {
    const products = await listProductsRepo();
    if (!products) {
        return res.status(400).json({ sucess: false, msg: "products not found" });
    } else {
        return res.status(products.statusCode).json({ success: products.success, msg: products.msg })
    }
}



//create new product
export const createNewProduct = async (req, res, next) => {
    const product = await createNewProductRepo(req.body);
    if (!product) {
        return res.status(400).json({ sucess: false, msg: "product not created" });
    } else {
        return res.status(product.statusCode).json({ success: product.success, msg: product.msg })
    }
}



//delete product
export const deleteProduct = async (req, res, next) => {
    const product = await deleteProductRepo(req);
    if (!product) {
        return res.status(400).json({ sucess: false, msg: "product not deleted" });
    } else {
        return res.status(product.statusCode).json({ success: product.success, msg: product.msg })
    }
}

//update product 
export const updateProduct = async (req, res, next) => {
    const id = req.params.id;
    const { quantity } = req.query;
    if (!quantity) {
        return res.status(400).json({ message: 'Quantity must be provided' });
    }
    const number = parseInt(quantity);
    // Check if number is a valid number
    if (isNaN(number)) {
        return res.status(400).json({ message: 'Invalid quantity' });
    }
    const product = await updateProductRepo(id, number);
    if (!product) {
        return res.status(400).json({ sucess: false, msg: "product not found" });
    } else {
        return res.status(200).json({ sucess: true, msg: product.msg })
    }
}

