import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:jatinkumar160902@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:jatinkumar160902@gmail.com">jatinkumar160902@gmail.com</a>
        </div>
        <div>
        <a href="tel:+917988270331"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+917988270331">(+91) 7988270331</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}