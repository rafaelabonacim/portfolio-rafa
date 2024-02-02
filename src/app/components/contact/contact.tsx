import { EmailIcon } from "../icons/email-icon";
import { SocialBtns } from "../social-btns/social-btns";
import "./contact.scss";

export function Contact() {
  return (
    <div className="contact">

      <div className="buttons">
        <SocialBtns />
        <a className="btn-primary" href="mailto:rafaelabonacim@gmail.com">
          contact me
          <EmailIcon />
        </a>
      </div>
    </div>
  );
}
