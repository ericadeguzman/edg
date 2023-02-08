import React from "react";
import MyNav from "../Nav";


function HomePage() {
  return (
    <div
     className="homeContainer"
    >
      <div className="homeIntro">
        <h1>hey.</h1>
        <p>
          My name is Erica. I'm a web designer from southern California. I
          design, code, photograph and drink lots of coffee.{" "}
        </p>
      </div>
      <form>
        <div
          className="messageBox"
        >
          <label htmlFor="message">message: </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write something.."
            style={{ height: "100px", margin: "10px 0px" }}
          ></textarea>
          <label htmlFor="fname">from: </label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
            style={{ marginTop: "10px" }}
          />
        </div>
      </form>
    </div>
  );
}

export default HomePage;
