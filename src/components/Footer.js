import { AiOutlineTwitter } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";

function Footer() {
  return (
    <>
      <div class="footerdiv">
        <p>Follow us</p>

        <a
          href="https://twitter.com/jooda1997/status/1327419630042968069?s=21"
          target="_blank"
        >
          <AiOutlineTwitter />
        </a>

        <a
          href="https://www.instagram.com/p/BnECfO7H4Gg/?utm_medium=copy_link"
          target="_blank"
        >
          <RiInstagramLine />
        </a>
        <h6>CAFE wep app 2022 All rights reserved</h6>
        <h5>
          ____________________________________________________________________
        </h5>
      </div>
    </>
  );
}

export default Footer;
