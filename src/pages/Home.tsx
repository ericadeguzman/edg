// import ContactForm from "../components/ContactForm";

function HomePage() {
  return (
    <div
     className="homeContainer"
    >
      <div className="homeIntro">
        <h1>hey.</h1>
        <p>
          This is Erica, a web designer from southern California. I started my journey as a graphic designer. 
          My art aesthetic is minmalistic, retro, brutalist (intentionally making things look like craigslist), and experimental. 
          So either really clean or really abstract? Anyway, I got into coding through my first job, <i>ten years ago!</i>, and the rest is history. I love coding as much as I love design. Don't make me pick!
        </p>
        ---
        <p>Some things I know:</p>
        <ul className="horizontalList">
          <li>design</li>
          <li>html</li>
          <li>css/sass</li>
          <li>javascript</li>
          <li>react</li>
        </ul>
      </div>
      {/* <ContactForm /> */}
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
