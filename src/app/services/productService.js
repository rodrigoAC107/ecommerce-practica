import api from "../clients/api";
import routes from "../routes/fakeStoreRoutes";

export const getAllProducts = async () => {
    return api.get(routes.getAllProducts())
}

export const getProductById = async (idProduct) => {
    return api.get(routes.getProductById(idProduct));
}

export const addNewPorduct = async (product) => {
    return api.post(routes.addNewPorduct(), product);
}

export const getAllCategories = async () => {
    return api.get(routes.getAllCategories());
}

export const getProductByCategory = async (category) => {
    return api.get(routes.getProductByCategories(category));
}