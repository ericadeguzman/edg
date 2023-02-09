
function HomePage() {
  return (
    <div
     className="homeContainer"
    >
      <div className="homeIntro">
        <h1>hey.</h1>
        <p>
          This is Erica, a web designer from southern California. I
          design, code, take photos, travel, and drink lots of coffee.{" "}
        </p>
        ---
        <p>Somethings I can do:</p>
        <ul className="horizontalList">
          <li>design</li>
          <li>html/css</li>
          <li>javascript</li>
          <li>react</li>
          <li>sass</li>
        </ul>
      </div>
      <form>
        <div
          className="messageBox"
        >
          <label htmlFor="message">message: </label>
          <textarea
            id="message"
            name="message"
            placeholder="Oops. This doesn't actually send messages yet. Email me at erricadg@gmail.com"
            style={{ height: "100px", margin: "10px 0px" }}
          ></textarea>
          <label htmlFor="fname">from: </label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your email.."
            style={{ marginTop: 10 }}
          />
          <button style={{
            marginTop: 5,}}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default HomePage;
