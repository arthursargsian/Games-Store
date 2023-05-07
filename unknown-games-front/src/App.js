import React, {Suspense, lazy} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Discover from "./pages/Discover";
import NotFound from "./pages/NotFound";
import Browse from "./pages/Browse";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import AdminSignIn from "./pages/AdminSignIn";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./private/PrivateRoute"
import PrivateRouteOut from "./private/PrivateRouteOut"
import Single from "./pages/Single";
import DashboardAdmins from "./pages/DashboardAdmins";
import DashboardUsers from "./pages/DashboardUsers";
import DataTables from "./pages/DataTables";
import AdminProfile from "./pages/AdminProfile";
import UserProfilePage from "./components/user/UserProfilePage";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import ProductsGeneratorPage from "./pages/ProductsGeneratorPage";
import CardConfirm from "./pages/CardConfirm";
import WishListPage from "./pages/WishListPage";
import WishListPageAdmin from "./pages/WishListPageAdmin";
import BasketPage from "./pages/BasketPage";
import CardConfirmBasket from "./pages/CardConfirmBasket";
import BasketPageAdmin from "./pages/basketPageAdmin";
import FavoriteAdmin from "./pages/FavoriteAdmin";
import FavoriteUser from "./pages/FavoriteUser";

const Card = lazy(()=> import("./pages/Card"));
const CardBasket = lazy(()=> import("./pages/CardBasket"));



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Discover/>}/>
                <Route path="/browse" element={<Browse/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="forget-password" element={<ForgetPassword/>}/>
                <Route path="/single/:id" element={<Single/>}/>
                <Route path="/users/reset-password/:token" element={<ResetPassword/>}/>

                <Route path="/user/profile" element={<UserProfilePage/>}/>
                <Route path="/card/:id" element={<Suspense fallback={<div/>}><Card/></Suspense>}/>
                <Route path="/complete" element={<CardConfirm/>}/>
                <Route path="/wishlist" element={<WishListPage/>}/>
                <Route path="/basket" element={<BasketPage/>}/>
                <Route path="/card-basket" element={<Suspense fallback={<div/>}><CardBasket/></Suspense>}/>
                <Route path="/complete-basket" element={<CardConfirmBasket/>}/>
                <Route path="/favorite" element={<FavoriteUser/>}/>


                <Route path="/admin/wishlist" element={<><WishListPageAdmin/></>}/>
                <Route path="/admin/basket" element={<><BasketPageAdmin/></>}/>
                <Route path="/admin/sign-in" element={<PrivateRouteOut><AdminSignIn/></PrivateRouteOut>}/>
                <Route path="/admin/dashboard-panel" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
                <Route path="/admin/dashboard-table" element={<PrivateRoute><DataTables/></PrivateRoute>}/>
                <Route path="/admin/dashboard-table/products-generator/:state"
                       element={<PrivateRoute><ProductsGeneratorPage/></PrivateRoute>}/>
                <Route path="/admin/dashboard-admin" element={<PrivateRoute><DashboardAdmins/></PrivateRoute>}/>
                <Route path="/admin/dashboard-users" element={<PrivateRoute><DashboardUsers/></PrivateRoute>}/>
                <Route path="/admin/dashboard-profile" element={<PrivateRoute><AdminProfile/></PrivateRoute>}/>
                <Route path="/admin/favorite" element={<PrivateRoute><FavoriteAdmin/></PrivateRoute>}/>

                <Route path="not-found" element={<NotFound/>}/>
                <Route path="*" element={<Navigate to="not-found"/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
