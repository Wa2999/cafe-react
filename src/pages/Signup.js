import { useContext } from "react";
import CoffeeContext from "../utils/CoffeeContext";
import img from "../img/img3.webp";
import img2 from "../img/img2.webp";
import { Box, Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

function Signup() {
  const { signup } = useContext(CoffeeContext);
  return (
    <>
      <form onSubmit={signup} className="logindiv">
        <h1>SIGIN UP</h1>
        <Box pt={5} px={50}>
          <TextField
            required
            label="FIRST NAME"
            type="text"
            name="firstName"
            fullWidth
          />
        </Box>
        <Box pt={5} px={50}>
          <TextField
            required
            label="LAST NAME"
            type="text"
            name="lastName"
            fullWidth
          />
        </Box>
        <Box pt={5} px={50}>
          <TextField
            required
            label="EMAIL"
            type="text"
            name="email"
            fullWidth
          />
        </Box>
        <Box pt={5} px={50}>
          <TextField label="AVATAR" type="file" name="avatar" fullWidth />
        </Box>
        <Box pt={3} px={50}>
          <TextField
            required
            label="PASSWORD"
            type="password"
            name="password"
            fullWidth
          />
        </Box>
        <Box pt={3} px={70}>
          <button class="mdc-button" type="submit">
            SIGIN UP
          </button>
        </Box>
        <Box pt={2} px={68}>
          <p className="unLogin">
            Already have an account? <Link to="/login">SignIn</Link>
          </p>
        </Box>
      </form>
    </>
  );
}

export default Signup;
