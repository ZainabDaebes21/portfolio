import "./intro.scss";

export default function Intro() {

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/ProfilePicture.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Zainab Daebes</h1>
          <h3>
            JAVA Fullstack utvecklare
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
