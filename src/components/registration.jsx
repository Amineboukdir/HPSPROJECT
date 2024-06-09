import React, { useState } from "react";
import axios from "axios"; // Import Axios library for making HTTP requests
import Image from "../assets/redhe.png";
import Logo from "../assets/pop.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import gol from "../assets/pppp.png";

const Registration = ({ onSignInClick }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyDepartment: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted'); // Add this line
    console.log(formData); // Debugging line

    try {
      // Check if passwords match
      if (formData.password !== formData.confirmPassword) {
        console.error("Passwords do not match");
        return;
      }

      // Construct the user object with the required fields
      const userData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        company_department: formData.companyDepartment,
        email: formData.email,
        password: formData.password
      };

      // Send registration data to the backend
      const response = await axios.post("http://localhost:3000/register", formData);
      console.log(response.data); // Handle successful registration
      // Optionally, you can redirect the user to the login page after successful registration
      onSignInClick(); // Call the parent function to switch to the login view
    } catch (error) {
      console.error("Error from backend:", error.response?.data || error.message); // Handle registration error
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-main">
      <img src={gol} alt="Logo" className="gol" />
      <div className="login-left">
        <div className="line"></div>
        <div className="text-container">
          <span className="feel-good-text">Feel good<br/>about<br/>Payments</span>
          <p className="additional-text"><strong>E-Pay:</strong> Global leaders in innovative payment solutions<br/>with PowerCARD, trusted worldwide.</p>
        </div>
        <img src={Image} alt="" />
        <a href="https://www.hps-worldwide.com/about-hps" target="_blank" rel="noopener noreferrer">
          <button className="more-about-button">More about E-Pay</button>
        </a>
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" className="w-32 h-auto" />
          </div>
          <div className="login-center1">
            <h2>HI, WELCOME WITH US!</h2>
            <p>Please enter your details</p>
            <form onSubmit={handleSubmit}>
            <div className="max-w-xl mx-auto">
            <div className="flex mb-6">
    <input type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} className="w-1/2 mr-3 px-4 py-3 border border-gray-300 rounded-md" />
    <input type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} className="w-1/2 ml-3 px-4 py-3 border border-gray-300 rounded-md" />
  </div>
  <input type="text" placeholder="Company/Department" name="companyDepartment" value={formData.companyDepartment} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md mb-4" />
  <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md mb-4" />
  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      placeholder="Password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-md mb-4"
    />
    {showPassword ? (
      <FaEyeSlash onClick={() => setShowPassword(!showPassword)} className="absolute top-0 right-0 m-3 cursor-pointer" />
    ) : (
      <FaEye onClick={() => setShowPassword(!showPassword)} className="absolute top-0 right-0 m-3 cursor-pointer" />
    )}
  </div>
  <input
    type="password"
    placeholder="Confirm Password"
    name="confirmPassword"
    value={formData.confirmPassword}
    onChange={handleChange}
    className="w-full px-4 py-3 border border-gray-300 rounded-md mb-4"
  />
  <div className="login-center-buttons mt-6 flex flex-col gap-4">
    <button type="submit" className="w-full bg-black text-white border-3 border-black rounded-full py-7 px-6 text-lg hover:bg-green-600 hover:text-black transition duration-300 ease-in-out">Log In</button>
    <button type="button" className="w-full bg-gray-200 flex items-center justify-center py-3 px-6 rounded-full border border-gray-400 hover:bg-gray-300 transition duration-300 ease-in-out">
      <img src={GoogleSvg} alt="" className="w-6 h-6 mr-2" />
      Log In with Google
    </button>
  </div>
</div>

              
            </form>
            <p className="login1-bottom-p">Already have an account? <a href="#" onClick={onSignInClick}>Sign In</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
