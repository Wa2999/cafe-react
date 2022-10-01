import { useContext } from "react";
import CoffeeContext from "../utils/CoffeeContext";
import { Box, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

function Signup() {
  const { signup } = useContext(CoffeeContext);
  return (
    // <>
    //   <form onSubmit={signup} className="logindiv">
    //     <h1>SIGIN UP</h1>
    //     <Box pt={5} px={50}>
    //       <TextField
    //         required
    //         label="FIRST NAME"
    //         type="text"
    //         name="firstName"
    //         fullWidth
    //       />
    //     </Box>
    //     <Box pt={5} px={50}>
    //       <TextField
    //         required
    //         label="LAST NAME"
    //         type="text"
    //         name="lastName"
    //         fullWidth
    //       />
    //     </Box>
    //     <Box pt={5} px={50}>
    //       <TextField
    //         required
    //         label="EMAIL"
    //         type="text"
    //         name="email"
    //         fullWidth
    //       />
    //     </Box>
    //     <Box pt={5} px={50}>
    //       <TextField label="AVATAR" type="file" name="avatar" fullWidth />
    //     </Box>
    //     <Box pt={3} px={50}>
    //       <TextField
    //         required
    //         label="PASSWORD"
    //         type="password"
    //         name="password"
    //         fullWidth
    //       />
    //     </Box>
    //     <Box pt={3} px={70}>
    //       <button class="mdc-button" type="submit">
    //         SIGIN UP
    //       </button>
    //     </Box>
    //     <Box pt={2} px={68}>
    //       <p className="unLogin">
    //         Already have an account? <Link to="/login">SignIn</Link>
    //       </p>
    //     </Box>
    //   </form>
    // </>

    <>
      <form onSubmit={signup} className="logindiv">
        <h1>SIGIN UP</h1>
        <input
          type="text"
          name="firstName"
          placeholder="First Name*"
          required
        ></input>
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="LAST Name*"
          required
        ></input>
        <br />
        <input type="email" name="email" placeholder="EMAIL*" required></input>
        <br />
        <input
          type="password"
          name="password"
          placeholder="PASSWORD*"
          required
        ></input>
        <br />
        <input type="file" name="avatar" placeholder="AVATAR"></input>
        <br />

        <button class="button2" type="submit">
          SIGIN UP
        </button>
        <br />
        <p className="unLogin">
          Already have an account? <Link to="/login">SignIn</Link>
        </p>
      </form>
    </>
  );
}

export default Signup;
