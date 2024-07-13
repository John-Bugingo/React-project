import React, { useState } from "react";

const ContactCom = () => {
  const [state, setState] = useState("send");
  return (
    <div className="contact0">
      <div className="contact1">
        <div className="socialmedia">
          <div className="github x"><h1>Github</h1></div>
          <div className="Linkdn x"><h1>Linkdn</h1></div>
          <div className="twiter x"><h1>Twiter</h1></div>
          <div className="youtube x"><h1>Youtube</h1></div>
        </div>
        <div className="contact2">
          <div className="contactheader">
            <h1>{state}</h1>
          </div>
          <div className="contactfoam">
            <div className="contactInput">
              <input type="text" placeholder="Your name" />
            </div>
            <div className="contactInput">
              <input type="email" placeholder="Email" />
            </div>
            <div className="contactInput">
              <input type="number" placeholder="Phone no" />
            </div>
            <div className="contactInput">
              <textarea placeholder="How can we help you" ></textarea>
            </div>
          </div>
          {/* {state === "send"?"gr":"send"} */}
          <div className="gr" onClick={()=>setState("GET IN TOUCH")}>Return to send page</div>
          <div className="send" onClick={()=>setState("Thanks, Well submited")}>Send</div>
        </div>
      </div>
    </div>
  );
};
export default ContactCom;
