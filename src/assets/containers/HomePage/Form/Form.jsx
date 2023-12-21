import { useRef, useState } from "react";
import "./form.scss";
import emailjs from "@emailjs/browser";
import ToastMessage from "../../../components/ToastMessage/ToastMessage";
import User from "../../../images/user.png";
import Phone from "../../../images/phone.png";
import Email from "../../../images/email.png";
import { useTranslation } from "react-i18next";

const emailjsService = import.meta.env.VITE_EMAILJS_SERVICE;
const emailjsTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE;
const emailjsKey = import.meta.env.VITE_EMAILJS_KEY;

function Form() {
  const { t } = useTranslation();
  const [toast, setToast] = useState({ message: "", type: "" });

  const form = useRef(null);
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        emailjsService,
        emailjsTemplate,
        form.current,
        emailjsKey
      );
      setToast({ message: t("Toast.Succes"), type: "success" });
      setTimeout(() => {
        setToast({ message: "", type: "" });
      }, 3000);
      form.current.reset();
    } catch (error) {
      setToast({ message: t("Toast.Erreur"), type: "error" });
      setTimeout(() => {
        setToast({ message: "", type: "" });
      }, 3000);
    }
  };

  return (
    <div className="form" id="contact">
      <h2>Contact</h2>
      <div className="form__content">
        <form
          className="form__content__container"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="form__content__container__input">
            <label htmlFor="name"></label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder={t("Form.Nom")}
              required
            />
          </div>
          <div className="form__content__container__input">
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder={t("Form.Email")}
              required
            />
          </div>
          <div className="form__content__container__input">
            <label htmlFor="message"></label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder={t("Form.Message")}
              required
            ></textarea>
          </div>
          <input
            className="form__content__container__button"
            value={t("Form.Envoyer")}
            type="submit"
          />
        </form>
        <div className="form__content__information">
          <div>
            <img src={User} alt="icon user person" />
            <p>Benmehal Joris</p>
          </div>
          <div>
            <img src={Phone} alt="icon phone" />
            <a href="">+33 7 67 82 71 51</a>
          </div>
          <div>
            <img src={Email} alt="icon mail" />
            <a href="">benmehal.joris@gmail.com</a>
          </div>
        </div>
      </div>
      {toast.message && (
        <ToastMessage message={toast.message} type={toast.type} />
      )}
    </div>
  );
}

export default Form;
