import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import AuthProvider from "./Context/AuthProvider";
import DashBoard from "./Pages/Dashboard/DashBoard/DashBoard";
import Paymethod from "./Pages/Dashboard/DashBoard/Paymethod/Paymethod";
import ReviewAdd from "./Pages/Dashboard/ReviewAdd/ReviewAdd";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import AllProducts from "./Pages/AllProduct/AllProducts";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageProducts from "./Pages/Dashboard/DashBoard/ManageProduct/ManageProducts";
import Shop from "./Pages/Shop/Shop";


function App() {
  return (
    <div>
     <AuthProvider>
     <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="/signup">
           <SignUp></SignUp>
         </Route>
         <Route path="/dashboard">
           <DashBoard></DashBoard>
         </Route>
         <Route path="/paymethod">
           <Paymethod></Paymethod>
         </Route>
         <Route path="/addReview">
           <ReviewAdd></ReviewAdd>
         </Route>
         <Route path="/allproducts">
           <AllProducts></AllProducts>
         </Route>
         <Route path="/addProduct"> 
           <AddProduct></AddProduct>
         </Route>
         <Route path="/makeAdmin">
           <MakeAdmin></MakeAdmin>
         </Route>
         <Route path="/manageProducts">
           <ManageProducts></ManageProducts>
         </Route>
      <Route path="/product/:id">
      <Shop></Shop>
      </Route>
        </Switch>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
