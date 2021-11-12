import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddService from './Pages/AddService/AddService';
import ContactUs from './Pages/Contactus/ContactUs';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageAllServices from './Pages/ManageAllServices/ManageAllServices';
import MyOrders from './Pages/MyOrders/MyOrders';
import NotFound from './Pages/NotFound/NotFound';
import PhotoGallery from './Pages/PhotoGallery/PhotoGallery';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder/PlaceOrder';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
            <Switch>
              <Route exact path = "/">
                <Home></Home>
              </Route>
              <Route path = "/home">
                <Home></Home>
              </Route>
              <Route path = "/login">
                <Login></Login>
              </Route>
              <PrivateRoute path = "/placeOrder/:serviceId">
                <PlaceOrder></PlaceOrder>
              </PrivateRoute>
              <Route path = "/addService">
                <AddService></AddService>
              </Route>
              <Route path = "/manageAllServices">
                <ManageAllServices></ManageAllServices>
              </Route>
              <Route path = "/myOrders">
                <MyOrders></MyOrders>
              </Route>
              <PrivateRoute path = "/contactUs">
                <ContactUs></ContactUs>
              </PrivateRoute>
              <Route path = "*">
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
