import axios from "axios";
import { toast } from "react-toastify";

const users = [];
//console.log(users.length);

(async () => {
  await axios
  .get("/register")
  .then((res) => {
    //console.log(res.data);
    users.push(...res.data);
    console.log(users);
  })
  .catch((error) => toast.error(error.message));
})();

// Register Handler
const registerUser = async (user) => {
  const extEmail = users.find((item) => item.email === user.email);
  const extMobile = users.find((item) => item.mobile === user.mobile);

  if (extEmail) {
    toast.error("Email already exists");
    return;
  } else if (extMobile) {
    toast.error("Mobile number already exists");
    return;
  } else {
    await axios
      .post("/register", user)
      .then((res) => {
        toast.success(`Hi ${user.name} you have registered successfully`);
        setTimeout(() => {
          window.location.href = "/login";
        }, 4000);
      })
      .catch((error) => toast.error(error.message));
  }
};

// Login Handler
const loginHandler = async (user) => {
  //console.log("Login", user);

  const userFound = users.find((item) => item.email === user.email);

  if (!userFound) {
    toast.error(`${user.email} does not exists.`);
    return;
  } else {
    if (userFound.password === user.password) {
      localStorage.setItem("loginStatus", true);
      toast.success(`Welcome ${userFound.name}!`);
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 4000);
    } else {
      toast.error("Invalid password.");
    }
  }
};

// Logout Handler
const logoutHandler = async () => {
  localStorage.removeItem("loginStatus");
  toast.success("Successfully logout");
  setTimeout(() => {
    window.location.href = "/login";
  }, 4000);
};

export { registerUser, loginHandler, logoutHandler };
