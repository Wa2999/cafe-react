import { useContext } from "react";
import CoffeeContext from "../utils/CoffeeContext";
import { Box, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

function Login() {
  const { login } = useContext(CoffeeContext);
  return (
    // <>
    //   <form onSubmit={login} className="logindiv">
    //     <h1>LOGIN</h1>
    //     <Box pt={5} px={50}>
    //       <TextField
    //         required
    //         label="EMAIL"
    //         type="text"
    //         name="email"
    //         fullWidth
    //       />
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
    //         LOGIN
    //       </button>
    //     </Box>
    //     <Box pt={2} px={68} >
    //   <p className="unLogin">
    //     Don't have an account? <Link to="/signup">CreateOne</Link>
    //   </p>
    //   </Box>
    //   </form>
    // </>
    <>
    <form onSubmit={login} className="logindiv">
      <h1>LOG IN</h1>
      
      <input type="email" name="email" placeholder="EMAIL*" required></input><br/>
      <input type="password" name="password" placeholder="PASSWORD*" required></input><br/>
 
      
        <button class="button2" type="submit">
          LOG IN
        </button><br/>
        <p className="unLogin">
         Don't have an account? <Link to="/signup">CreateOne</Link>
      </p>
      
    </form>
  </>
  );
}

export default Login;
