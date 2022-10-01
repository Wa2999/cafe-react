// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { toast } from "react-toastify";

// function EmailVerified() {
//   const { token } = useParams();
//   const [error, setError] = useState(false);
//   const navigate = useNavigate();

//   const verifyEmailToken = async () => {
//     try {
//       await axios.get(
//         `https://cafe-api-299.herokuapp.com/api/auth/verify_email/${token}`
//       );
//       toast.success("email verfied");
//       navigate("/login");
//     } catch (error) {
//       if (error.response) toast.error(error.response.data);
//       else console.log(error);
//       setError(true);
//     }
//   };

//   useEffect(() => {
//     verifyEmailToken();
//   }, []);

//   return error ? (
//     <h1 className="vrification">Vrification failed</h1>
//   ) : (
//     <h1>Verifying...</h1>
//   );
// }

// export default EmailVerified;
