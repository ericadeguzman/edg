import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Result = () => {
  return <p>Your message has been sent. talk to you soon!</p>;
};

function contactForm() {
  const form = useRef();
  const [result, showResult] = useState(false);
  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.currentTarget;

    emailjs
      .sendForm(
        "service_yqmd7nv",
        "template_7bee1g8",
        event.target,
        "user_dSKPK8gx0rnh8sppymvI5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
    showResult(true);
  };
  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className="messageBox">
          <label htmlFor="message">Message: </label>
          <textarea
            id="message"
            name="message"
            placeholder="Send me a nice message!"
            style={{ height: "100px", margin: "10px 0px" }}
          ></textarea>
          <label htmlFor="fname">Your name: </label>
          <input
            type="text"
            id="fname"
            name="user_name"
            placeholder="Your name.."
            style={{ marginTop: 10, marginBottom: 10 }}
          />
          <label htmlFor="femail">Your email: </label>
          <input
            type="text"
            id="femail"
            name="user_email"
            placeholder="Your email.."
            style={{ marginTop: 10, marginBottom: 10 }}
          />
          <button
            style={{
              marginTop: 5,
            }}
          >
            Submit
          </button>
        </div>
      </form>

      {result ? <Result /> : null}
    </>
  );
}

export default contactForm;
