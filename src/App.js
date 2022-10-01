import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CoffeeContext from "./utils/CoffeeContext";
import { toast, ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import OneCity from "./pages/OneCity";
import OneCoffeeShop from "./pages/OneCoffeeshop";
import firebase from "./utils/firebase";
import AddReview from "./pages/AddReview";
import Follows from "./pages/Follows";
import EmailVerified from "./components/EmailValidate";
import OneProfile from "./pages/OneProfile";

function App() {
  const [cities, setCity] = useState([]);
  const [cafes, setCafe] = useState([]);
  const [profile, setProfile] = useState(null);

  const navigate = useNavigate();

  const getCities = async () => {
    try {
      const response = await axios.get(
        "https://cafe-api-299.herokuapp.com/api/cities"
      );
      setCity(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error?.response?.data);
    }
  };

  const getCafe = async () => {
    try {
      const response = await axios.get(
        "https://cafe-api-299.herokuapp.com/api/coffeeShop"
      );
      setCafe(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error?.response?.data);
    }
  };

  useEffect(() => {
    getCities();
    getCafe();
    getProfile();
  }, []);

  const followcafe = async (coffeeShopId) => {
    try {
      const response = await axios.get(
        `https://cafe-api-299.herokuapp.com/api/coffeeShop/${coffeeShopId}/follows`,
        {
          headers: {
            Authorization: localStorage.tokenCoffee,
          },
        }
      );
      getCafe();
      getCities();
      getProfile();
      toast.success(response.data);
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };
  const addReview = async (
    e,
    cafeId,
    current,
    ratingwork,
    ratingValues,
    ratingDiversity,
    ratingBenefits,
    recommend,
    business
  ) => {
    e.preventDefault();
    try {
      const form = e.target;
      console.log(cafeId);

      const reviewBody = {
        currentemployee: current,
        reviewheadline: form.elements.reviewheadline.value,
        lastYearatEmployer: form.elements.lastYearatEmployer?.value,
        location: form.elements.location.value,
        ratingWorkLife: ratingwork / 20,
        ratingValues: ratingValues / 20,
        ratingDiversity: ratingDiversity / 20,
        ratingBenefits: ratingBenefits / 20,
        employmentStatus: form.elements.employmentStatus?.value,
        pros: form.elements.pros.value,
        cons: form.elements.cons.value,
        advice: form.elements.advice.value,
        recommend: recommend,
        businessOutlook: business,
        lengthofEmployment: form.elements.lengthofEmployment.value,
      };
      await axios.post(
        `https://cafe-api-299.herokuapp.com/api/review/${cafeId}/review`,
        reviewBody,
        {
          headers: {
            Authorization: localStorage.tokenCoffee,
          },
        }
      );

      getCities();
      getProfile();
      navigate("/profile");

      toast.success("add reviwe success");
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };

  const deleteReview = async (reviewId) => {
    try {
      await axios.delete(
        `https://cafe-api-299.herokuapp.com/api/review/${reviewId}`,
        {
          headers: {
            Authorization: localStorage.tokenCoffee,
          },
        }
      );
      toast.success("reviwe deleted");
      getProfile();
      getCafe();
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };
  const signup = async (e) => {
    e.preventDefault();
    try {
      const form = e.target;
      const image = form.elements.avatar.files[0];
      let imageUrl;
      if (image) {
        const imageRef = firebase
          .storage()
          .ref("images")
          .child(`${image.lastModified}-${image.name}`);
        await imageRef.put(image);
        imageUrl = await imageRef.getDownloadURL();
      }

      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: imageUrl || undefined,
      };
      await axios.post(
        "https://cafe-api-299.herokuapp.com/api/auth/signup",
        userBody
      );
      toast.success("signup success");

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  const login = async (e) => {
    e.preventDefault();
    try {
      const form = e.target;
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      };
      const response = await axios.post(
        "https://cafe-api-299.herokuapp.com/api/auth/login",
        userBody
      );
      const tokenCoffee = response.data;
      localStorage.tokenCoffee = tokenCoffee;
      getProfile();
      toast.success("login success");

      navigate("/");
    } catch (error) {
      toast.error(error.response.data);
      console.log(error.response.data);
    }
  };
  const logout = () => {
    localStorage.removeItem("tokenCoffee");
    setProfile(null);
    toast.success("success logout");
  };

  const getProfile = async () => {
    const response = await axios.get(
      "https://cafe-api-299.herokuapp.com/api/auth/profile",
      {
        headers: {
          Authorization: localStorage.tokenCoffee,
        },
      }
    );
    setProfile(response.data);
  };

  const editProfile = async (e) => {
    e.preventDefault();
    try {
      const form = e.target;
      // const image = form.elements.avatar.files[0];
      // let imageUrl;
      // if (image) {
      //   const imageRef = firebase
      //     .storage()
      //     .ref("images")
      //     .child(`${image.lastModified}-${image.name}`);
      //   await imageRef.put(image);
      //   imageUrl = await imageRef.getDownloadURL();
      // }

      const profileBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        password: form.elements.password.value,
        // avatar: imageUrl,
      };

      await axios.put(
        `https://cafe-api-299.herokuapp.com/api/auth/profile`,
        profileBody,
        {
          headers: {
            Authorization: localStorage.tokenCoffee,
          },
        }
      );
      getProfile();
      toast.success("edit ur profile success");
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };
  const store = {
    cities,
    login,
    signup,
    profile,
    logout,
    editProfile,
    followcafe,
    cafes,
    deleteReview,
    addReview,
  };
  return (
    <>
      <CoffeeContext.Provider value={store}>
        <ToastContainer />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/city/:cityId" element={<OneCity />} />
          <Route
            path="/coffeeShope/:coffeeShopId"
            element={<OneCoffeeShop />}
          />
          <Route path="/review/:cafeid" element={<AddReview />} />
          <Route path="/follows" element={<Follows />} />
          <Route path="/email_verified/:token" element={<EmailVerified />} />
          <Route path="/profile/:profileId" element={<OneProfile />} />
        </Routes>
      </CoffeeContext.Provider>
    </>
  );
}

export default App;
