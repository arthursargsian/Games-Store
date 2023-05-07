import axios from "axios";
import Utils from "../Utils";

const api = axios.create({
    baseURL: "http://localhost:5000/",
});

let token;
if (Utils.getAdmin()?.role === "admin") {
    token = Utils.adminToken();
}
if (Utils.getUser()?.role === "user") {
    token = Utils.userToken();
}
api.interceptors.request.use((config) => {
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
}, (error) => Promise.reject(error));

class Api {
    static register(payload) {
        return api.post("/auth/register", payload);
    }

    static gamesProducts(page, currentPage) {
        return api.get("/products/discover", {params: {page, limit: 20, currentPage,}});
    }

    static singlePage(id) {
        return api.get(`/products/discover/${id}`);
    }

    static search(name) {
        return api.post("/products/discover/", {
            name: name,
        });
    }

    static logiInUserRoot(payload) {
        return api.post("/auth/login", payload);
    }

    static logiInAdminRoot(payload) {
        return api.post("/auth/login", payload);
    }

    static createAdmin(payload) {
        return api.post("/auth/createAdmin", payload);
    }

    static productsDelete(id) {
        return api.delete(`/products/delete-product/${id}`);
    }

    static getAllUsers() {
        return api.get("/users/get-users");
    }

    static sendComment(id, comment) {
        return api.post(`/products/commentaries/${id}`, {comment_body: comment});
    }

    static forgetPassword(email) {
        return api.post("/users/forget-password", {email});
    }

    static getComments(id) {
        return api.get(`/products/commentaries/${id}`);
    }

    static getCategories() {
        return api.get("products/categories?page=1&limit=100");
    }

    static getCategoriesList(category) {
        return api.get(`products/categories/${category}`);
    }

    static addCategories(name) {
        return api.post("products/add-categories", {name,});
    }

    static sendStars(rating, id) {
        return api.post(`products/${id}/ratings`, {rating,});
    }

    static getWishList(page) {
        return api.get("products/wishlist", {params: {page, limit: 20}});
    }

    static deleteWishListItem(id) {
        return api.delete(`/products/wishlist/${id}`);
    }

    static addWishListItem(id) {
        return api.post(`/products/wishlist/${id}`);
    }

    static uploadCover(file, name) {
        return api.post(`/products/upload`, {big_img: file, name,}, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }

    static uploadTorrent(torrent, name) {
        return api.post(`/products/uploadfile`, {torrent, name,}, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }

    static uploadImages(images, name) {
        return api.post(`/products/uploadFew`, {small_img: [...images], name,}, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }

    static createProduct(producData, genre) {
        console.log(producData, genre)
        return api.post("/products/add-product", {
            name: producData.name,
            desc: producData.desc,
            price: producData.price,
            disc_price: producData.disc_price,
            year: producData.year,
            company: producData.company,
            genre_name: genre,
            videocard: producData.videocard,
            processor: producData.processor,
            ram: producData.ram,
            op_system: producData.op_system,
            disk_space: producData.disk_space,
        });
    }

    static resetPassword(confPassword, password, token) {
        return api.post(`/users/reset-password/${token}`, {confPassword, password,});
    }

    static deleteComments(id) {
        return api.delete(`/products/commentaries/${id}`);
    }

    static updateProduct(producData, genre, id) {
        return api.patch(`products/update-product/${id}`, {
            name: producData.name,
            desc: producData.desc,
            price: producData.price,
            disc_price: producData.disc_price,
            year: producData.year,
            company: producData.company,
            genre_name: genre,
            videocard: producData.videocard,
            processor: producData.processor,
            ram: producData.ram,
            op_system: producData.op_system,
            disk_space: producData.disk_space,
        });
    }

    static getClientSecret(id) {
        return api.get(`/payment/client-secret/${id}`);
    }

    static paymentConfirm(paymentIntent) {
        return api.post("/payment/confirm/", {paymentIntent,})
    }

    static addItemBasket(id) {
        return api.post(`/products/basket/${id}`);
    }

    static deleteItemBasket(id) {
        return api.delete(`/products/basket/${id}`);
    }

    static listItemBasket(page) {
        return api.get("/products/basket", {params: {page, limit: 20}});
    }

    static getBasketSecret() {
        return api.get("payment/basket-secret");
    }

    static paymentConfirmBasket(paymentIntent) {
        return api.post("payment/confirm-basket", {paymentIntent,});
    }

    static carousel() {
        return api.get("/products/discover/carousel");
    }

    static deleteCategory(name) {
        return api.post("/products/delete-categories", {name: name});
    }

    static addFavoriteGame(id) {
        return api.post(`/products/favorite/${id}`);
    }

    static getAllItemFavorite(page) {
        return api.get("/products/favorite", {params: {page, limit: 20,}});
    }

    static deleteItemFavorite(id) {
        return api.delete(`/products/favorite/${id}`);
    }

    static lastfavorite() {
        return api.get("/products/favorite-last");
    }

    static deleteUser(id) {
        return api.delete(`/users/delete-user/${id}`);
    }
}

export default Api;
