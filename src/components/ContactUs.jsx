import { useEffect, useRef, useContext } from "react";
import { StatusContext } from "@/store/StatusContextProvider";
import { LoadingContext } from "@/store/LoadingContextProvider";
import { isEmailValid } from "@/utils/Validate";
import { contact_email } from "@/config/constants";
import Button from "@/components/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  newContactUsMessage,
  clearErrors,
} from "@/redux/actions/contactUsActions";
import ReCaptcha from "@/components/ui/ReCaptcha";
import { validateReCaptcha } from "@/components/ui/ReCaptcha";

export default function ContactUs() {
  const { setSuccess, setError } = useContext(StatusContext);
  const { setLoading } = useContext(LoadingContext);

  const nameRef = useRef("");
  const emailRef = useRef("");
  const subjectRef = useRef("");
  const messageRef = useRef("");

  const dispatch = useDispatch();

  const formSubmit = async () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const subject = subjectRef.current.value;
    const message = messageRef.current.value;

    // EMAIL CHECK
    if (email) {
      const emailCheck = await isEmailValid(email);
      if (emailCheck.status === false) {
        setError({
          title: emailCheck.title || "Invalid input!",
          message: emailCheck.message,
          showErrorBox: true,
        });
        emailRef.current.focus();
        return;
      }
    }

    // NAME CHECK
    if (name.length !== 0) {
      if (name.length < 2) {
        setError({
          title: "Invalid input!",
          message: "Please enter a valid name",
          showErrorBox: true,
        });
        nameRef.current.focus();
        return;
      }
    }

    // Subject Check
    if (subject.length < 5) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid subject with at least 5 characters",
        showErrorBox: true,
      });
      subjectRef.current.focus();
      return;
    }

    // Message Check
    if (message.length < 5) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid message with at least 5 characters",
        showErrorBox: true,
      });
      messageRef.current.focus();
      return;
    }

    const contactUsMessageInfo = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    // Add to db
    dispatch(newContactUsMessage(contactUsMessageInfo));
    return;
  };

  // ReCaptcha
  const recaptchaRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading({ status: true });

    try {
      await validateReCaptcha(recaptchaRef, formSubmit);
    } catch (err) {
      setError({
        title: "ReCAPTCHA failed",
        message: `Please click "I'm not a robot" before submitting the form`,
        showErrorBox: true,
      });
    }
    setLoading({ status: false });
    recaptchaRef.current.reset();
  };

  const { error, success } = useSelector((state) => state.newContactUsMessage);
  useEffect(() => {
    if (success) {
      // Execute any logic that should take place after the object is saved.
      nameRef.current.value = "";
      emailRef.current.value = "";
      subjectRef.current.value = "";
      messageRef.current.value = "";
      recaptchaRef.current.reset();
      setLoading({ status: false });
      setSuccess((prevState) => ({
        ...prevState,
        title: "Message sent",
        message: "Your message has been recorded successfully",
        showSuccessBox: true,
      }));
      return;
    }
    if (error) {
      setLoading({ status: false });
      setError({
        title: "Something went wrong",
        message: error,
        showErrorBox: true,
      });
      dispatch(clearErrors());
    }
  }, [dispatch, error, success]);

  return (
    <div className="w-full flex flex-col justify-center items-center mt-16">
      <div className="w-full">
        <div className="text-md text-dark-400">
          Want to integrate AI in your current marketing or tech stack for your
          organization? Let us help you reach a solution.
        </div>

        <div className="mt-10 text-dark-600">
          Email us at:
          <br />
          <a
            href={`mailto:` + contact_email}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gradient-primary-tr"
          >
            {contact_email}
          </a>
          <br />
          <br />
          Or submit your queries anonymously using the form below.
        </div>

        <div className="mt-16">
          <div className="backdrop-blur-2xl backdrop-brightness-200 max-h-max py-8 px-6 md:p-12 border-2 border-light-400 rounded-xl shadow">
            <form onSubmit={handleFormSubmit}>
              <div className="flex flex-col lg:flex-row lg:space-x-8 xl:space-x-14">
                <div className="w-full lg:w-1/3">
                  <div className="">
                    <label className="text-sm">Name&nbsp; (Optional)</label>
                    <input
                      className="bg-gray-100 mt-1 border-transparent w-full p-2 text-sm border-[2px] focus:border-primary-500 rounded-md outline-none text-left"
                      type="text"
                      ref={nameRef}
                      name="name"
                      autoComplete="off"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="text-sm">
                      Email Address&nbsp; (Optional)
                    </label>
                    <input
                      className="bg-gray-100 mt-1 border-transparent w-full p-2 text-sm border-[2px] focus:border-primary-500 rounded-md outline-none text-left"
                      type="email"
                      ref={emailRef}
                      name="email"
                      autoComplete="off"
                    />
                  </div>

                  <div className="mt-5">
                    <div className="font-primary text-dark-500 text-sm">
                      You can leave an anonymous note but if you do not provide
                      your email, we will not be able to connect with you and
                      respond to your query.
                    </div>
                  </div>

                  <div className="mt-8">
                    <ReCaptcha recaptchaRef={recaptchaRef} />
                  </div>
                </div>

                <div className="w-full mt-5 lg:w-2/3 lg:mt-0">
                  <div className="">
                    <label className="text-sm font-primary">Subject</label>
                    <input
                      className="bg-gray-100 mt-1 border-transparent w-full p-2 text-sm border-[2px] focus:border-primary-500 rounded-md outline-none text-left"
                      type="text"
                      ref={subjectRef}
                      name="subject"
                      autoComplete="off"
                      required
                    />
                  </div>

                  <div className="mt-4">
                    <label className="text-sm font-primary">Message</label>
                    <textarea
                      className="bg-gray-100 mt-1 border-transparent resize-none w-full p-2 border-[2px] focus:border-primary-500 rounded-lg focus:outline-none focus:shadow-none focus:text-gradient-primary-tr"
                      ref={messageRef}
                      name="message"
                      rows="6"
                      required
                    ></textarea>
                  </div>

                  <Button
                    variant={"primary"}
                    classes="text-md px-4 py-3 group mt-4"
                  >
                    <span className="transition-all duration-500 group-hover:pr-6">
                      Send Message
                      <i className="fas fa-angle-double-right absolute opacity-0 font-bold mt-1 pl-2 transition-all duration-500 group-hover:opacity-100"></i>
                    </span>
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
