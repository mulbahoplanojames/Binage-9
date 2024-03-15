import { BrowserRouter, Routes, Route } from "react-router-dom";

// LayOuts
import Navbar from "./Layouts/Navbar/Navbar";
import Footer from "./Layouts/Footer/Footer.jsx";

// Pages
import Home from "./Pages/Home";
import Price from "./Pages/Price.jsx";
import Product from "./Pages/Product.jsx";
import About from "./Pages/About.jsx";
import Carrer from "./Pages/Carrer.jsx";
import Community from "./Pages/Community.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";

// Components
import AccountOption from "./Components/CreateAccount_Opt/AccountOption.jsx";
import Signup from "./Components/SignUp_form/Signup.jsx";
import Login from "./Components/LogIn_Form/Login.jsx";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/pricing' element={<Price />} />
					<Route path='/product' element={<Product />} />
					<Route path='/about' element={<About />} />
					<Route path='/carrer' element={<Carrer />} />
					<Route path='/community' element={<Community />} />
					<Route path='*' element={<PageNotFound />} />
					<Route path='/accountoption' element={<AccountOption />} />
					<Route path='/signUp' element={<Signup />} />
					<Route path='/logIn' element={<Login />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App;
