import FormInput from "../../ui/FormInput";
import Button from "../../ui/Button";
import { useState, useEffect } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Fetch users on component mount
  useEffect(() => {
    const q = query(collection(db, "user"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const userArray = [];
      querySnapshot.forEach((doc) => {
        userArray.push({ ...doc.data(), id: doc.id });
      });
      setUsers(userArray);
    });

    // Cleanup on unmount
    return () => unsubscribe();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    checkUserCredentials();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const checkUserCredentials = () => {
    const userFound = users.find(
      (user) => user.email === formData.email && user.password === formData.password
    );

    if (userFound) {
      toast.success("User logged in successfully", {
        position: "top-right",
        autoClose: 5000,
      });
      localStorage.setItem("user", JSON.stringify(userFound));
      navigate("/");
    } else {
      toast.error("Invalid Credentials", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="border rounded-md bg-white p-5 shadow-lg">
      <div>
        <p className="font-bold text-[20px]">Login</p>
      </div>
      <div className="my-5">
        <form onSubmit={handleSubmit}>
          <FormInput
            labelText={"Email ID / Username"}
            inputPlaceholder={"Enter Email ID / Username"}
            inputType={"text"}
            required={false}
            name="email"
            onChange={handleInputChange}
            value={formData.email}
          />
          <FormInput
            labelText={"Password"}
            inputPlaceholder={"Enter Password"}
            inputType={"password"}
            required={false}
            name="password"
            onChange={handleInputChange}
            value={formData.password}
          />
          <Button primaryColor={"white"} backgroundColor={"#285df5"}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
