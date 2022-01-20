import vid from "../img/vid.mp4";

function Video() {
  return (
    <>
      <div>
        <video class="video" src={vid} autoPlay muted loop />
      </div>
    </>
  );
}

export default Video;
