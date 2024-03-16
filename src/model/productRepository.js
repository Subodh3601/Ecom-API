import { productModel } from "./productSchema.js";


//list all product
export const listProductsRepo = async () => {
    try {
        const products = await productModel.find();
        return { statusCode: 200, msg: products, success: true };
    } catch (error) {
        return { statusCode: 500, msg: error.message, success: false };
    }
}

//create new product repo
export const createNewProductRepo = async (data) => {
    try {
        const product = new productModel(data);
        await product.save()
        return { statusCode: 201, msg: product, success: true };
    } catch (error) {
        return { statusCode: 500, msg: error.message, success: false };
    }

}

//delete product
export const deleteProductRepo = async (data) => {
    try {
        
        await productModel.findByIdAndDelete(data.params.id);
        return { statusCode: 200, msg: `product deleted`, success: true };
    } catch (error) {
        return { statusCode: 500, msg: error.message, success: false };
    }
}

//update product 
export const updateProductRepo = async (id, quantity) => {
    try {
        const product = await productModel.findById(id);
        if (!product) {
            return { statusCode: 404, msg: "product not found" };
        }
        product.quantity += quantity;
        await product.save();
        return { statusCode: 200, msg: "product updated", product };
    } catch (error) {
        return { statusCode: 500, msg: error.message };
    }
}

