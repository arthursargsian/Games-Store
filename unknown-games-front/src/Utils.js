class Utils {
    static getUser() {
        return JSON.parse(localStorage.getItem("user"));
    }

    static getAdmin() {
        return JSON.parse(localStorage.getItem("admin"));
    }

    static adminToken() {
        return localStorage.getItem("adminToken");
    }

    static userToken() {
        return localStorage.getItem("userToken");
    }
}

export default Utils;
