import { toast } from "react-toastify";

let usersData = JSON.parse(localStorage.getItem("users")) || [];

// Initialize the users data
function initUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// Insert the users data into the local storage
export const insertUsers = (user) => {
  // check if email exists in db or not
  let exactEmail = usersData.find((item) => item.email === user.email);

  // check if mobile exists in db or not
  let exactMobile = usersData.find((item) => item.mobile === user.mobile);

  // If no exact email or mobile found, insert the user data into the db
  if (exactEmail) {
    toast.warning("User Email already registered.");
  } else if (exactMobile) {
    toast.warning("User mobile number already registered.");
  } else {
    usersData.push(user);
    initUsers(usersData);
    toast.success("User register successful");
    setTimeout(() => {
      window.location.href = "/";
    }, 4000);
  }
};

// Read all users from the local storage
export const readAllUsers = () => {
  return usersData;
};

// Delete Single user
export const deleteUser = (userID) => {
  let exactID = usersData.find((user) => user.id === userID);
  usersData.splice(exactID, 1);
  initUsers(usersData);
  toast.success("Deleted successfully");
  setTimeout(() => {
    window.location.href = "/";
  }, 4000);
};

// Read Single User Data
export const readSingleUser = (userID) => {
  return usersData.find((user) => user.id === userID);
  
};

// Update Single User
export const updateSingleUser = (userID, data) => {
  let exactID = usersData.find((user) => user.id === userID);
  console.log(exactID);
  exactID.name = data.name;
  exactID.email = data.email;
  exactID.mobile = data.mobile;
  exactID.image = data.image;
  exactID.address = data.address;
  initUsers(usersData);
  toast.success("User updated successfully");
  setTimeout(() => {
    window.location.href = "/";
  }, 4000);
}