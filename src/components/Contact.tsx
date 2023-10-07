import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"; // Import Yup
import "./Contact.scss";
import { useSectionInView } from "../lib/useElementInViewport";

const yupSchema = yup.object().shape({
  from_firstName: yup.string().required("First name is required"),
  from_lastName: yup.string().required("Last name is required"),
  user_email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

function Contact() {
  const { ref } = useSectionInView("Contact");

  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const form = useForm<yup.InferType<typeof yupSchema>>({
    resolver: yupResolver(yupSchema),
    defaultValues: {
      from_firstName: "",
      from_lastName: "",
      user_email: "",
      message: "",
    },
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = async () => {
    setIsSending(true);

    await emailjs
      .sendForm(
        "service_2ax3hxo",
        "template_8ritoet",
        formRef.current as HTMLFormElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result);
          form.reset();
          setIsSending(false);
          setIsSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const onSubmit = async (data: yup.InferType<typeof yupSchema>) => {
    console.log(data);
    sendEmail();
    form.reset();
  };

  return (
    <section className="contact-ctn" id="contact" ref={ref}>
      <h1>Contact me</h1>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(onSubmit)}
        className="form-container"
      >
        <input
          type="text"
          id="from_firstName"
          className="contact-input"
          disabled={isSending}
          placeholder="First name"
          required
          {...form.register("from_firstName")}
        />
        {form.formState.errors.from_firstName && (
          <span className="error-message">
            {form.formState.errors.from_firstName.message}
          </span>
        )}
        <input
          type="text"
          id="from_lastName"
          className="contact-input"
          disabled={isSending}
          placeholder="Last name"
          required
          {...form.register("from_lastName")}
        />
        {form.formState.errors.from_lastName && (
          <span className="error-message">
            {form.formState.errors.from_lastName.message}
          </span>
        )}
        <input
          type="email"
          id="user_email"
          // name="user_email"
          className="contact-input"
          disabled={isSending}
          placeholder="Your e-mail address"
          required
          {...form.register("user_email")}
        />
        {form.formState.errors.user_email && (
          <span className="error-message">
            {form.formState.errors.user_email.message}
          </span>
        )}
        <textarea
          id="message"
          // name="message"
          className="contact-textarea"
          disabled={isSending}
          placeholder="Your message."
          required
          rows={5}
          {...form.register("message")}
        ></textarea>
        {form.formState.errors.message && (
          <span className="error-message">
            {form.formState.errors.message.message}
          </span>
        )}
        <button
          className={"submit-btn"}
          disabled={isSending}
          id="send-btn"
          type="submit"
        >
          {isSending ? "Sending..." : isSent ? "Sent!" : "Send!"}
        </button>
      </form>
    </section>
  );
}

export default Contact;
