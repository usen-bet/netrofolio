import "./Styles/Contact.scss"
import { Pop } from "../components/Animation/Pop"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef} from 'react';
import emailjs from '@emailjs/browser';
import scroll from "../assets/Desktop/scroll.png"

function Contact() {

const notify = () => toast("Email sent");
const form = useRef();

const onSubmit = () => {
  notify()
}

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_iwjpeuq', 'template_pqj7kfq', form.current, {
      publicKey: 'DaWi93EtV2vy-8WLW',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
};

  return (
    <div className="Contact-page">
       <div className="form-box">
        <h1 className="conn"><Pop>Let's Connect</Pop></h1>
         <form action="" ref={form} className="form" onSubmit={sendEmail}>
         <p> Fill out the form below and I’ll reach out personally. <br /> Can’t wait to hear from you. </p>
         <input type="text" name="to_name" placeholder="Name" />
         <input type="text" name="from_name" placeholder="Email"/> 
         <textarea cols="30" rows="10" className="message" name="message" placeholder="Message"></textarea>
         <button type="submit" value="Send" onClick={onSubmit} className="btn-form">Send Message</button>
         <ToastContainer
          theme="dark"
          position="top-center"
         />
         </form>
       </div>
       <img src={scroll} alt="scroll" className="scroll"/>
    </div>
  )
}

export default Contact