import img from "../img/img3.webp";
import img2 from "../img/img2.webp";

function PartTwo() {
  return (
    <>
      <div className="part2">
        <h1 id="head">How It Works</h1>
        <ul>
          <p>
            COFE is a Web site designed to allow the barista to access his
            workplace wherever it is.
          </p>
          <p>If You Want To Add Review Of Your Workplace:</p>
          <li>
            Frist You Must Login If You Don't Have An Account please Singin
          </li>
          <li>Secondly, Search For Your Workplace(Coffee Shop) or City</li>
          <li>Finlly!!! Now You Can Add Review And Show it in Your Profile</li>
        </ul>
        <img src={img2} id="img2" />
        <img src={img} id="img3" />
      </div>
    </>
  );
}

export default PartTwo;
