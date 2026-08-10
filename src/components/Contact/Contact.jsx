import useContact from "../../hooks/useContact";
import { contact, submitKey } from "../../data/info";
import { freelancePlatforms } from "../../data/myFreelance";
import { contactSection, contactTitle, formWrapper, formLabel, inputField, submitBtn,
    statusMessage, statusSuccess, statusError, backdrop,
    freelanceWrapper, freelanceCard, platformTitle, platformDesc
} from "./styles.module.css";

function Contact() {
    const { contactAlert, handleSubmit, activePannel, setActivePannel } = useContact();

    return (
        <section id={contact.split("#")[1]} className={contactSection}>
            <div className="container">
                {/* Contact Title */}
                <div className="text-center mb-3">
                    <h2 className={`sections-title ${contactTitle}`}>
                        <i className="fa-solid fa-envelope-open-text me-2" />
                        Get In <span>Touch</span>
                    </h2>
                </div>

                {/* Pannel Switcher */}
                <div className="text-center mb-4">
                    <button
                        type="button"
                        className={`btn ${activePannel === "form" ? "btn-primary" : "btn-outline-primary"} me-2`}
                        onClick={() => setActivePannel("form")}
                    >
                        <i className="fa-solid fa-paper-plane me-2"></i>
                        Email Me Directly
                    </button>
                    <button
                        type="button"
                        className={`btn ${activePannel === "freelance" ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={() => setActivePannel("freelance")}
                    >
                        <i className="fa-solid fa-briefcase me-2"></i>
                        Hire on Freelance
                    </button>
                </div>

                {/* Contact Alert */}
                {contactAlert.text && (
                <>
                    <div className={backdrop}></div> {/* Focuses user on the alert */}
                    <div className={`${statusMessage} ${contactAlert.type === "success" ? statusSuccess : statusError}`}>
                        <i className={`fa-solid ${contactAlert.type === "success" ? "fa-circle-check" : "fa-circle-xmark"} mb-3 d-block`} style={{fontSize: '40px'}}></i>
                        {contactAlert.text}
                    </div>
                </>
                )}

                {/* Contact Form */}
                {activePannel === "form" && (
                    <div className={formWrapper}>
                        <form onSubmit={handleSubmit}>
                            <input type="hidden" name="access_key" defaultValue={submitKey} />

                            {/* Bot Protection */}
                            <input type="checkbox" name="botcheck" className="d-none" />

                            <div className="mb-4">
                                <label htmlFor="name" className={formLabel}>Full Name</label>
                                <input type="text" className={`form-control ${inputField}`} id="name" name="name" placeholder="Your name" required />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className={formLabel}>Email Address</label>
                                <input type="email" className={`form-control ${inputField}`} id="email" name="email" placeholder="name@example.com" required />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className={formLabel}>Your Message</label>
                                <textarea className={`form-control ${inputField}`} id="message" rows={4} name="message" placeholder="How can I help you?" required />
                            </div>

                            <div className="text-end">
                                <button type="submit" className={`btn btn-success ${submitBtn}`}>
                                    Send Message <i className="fa-solid fa-paper-plane ms-2"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Freelance Platforms */}
                {activePannel === "freelance" && (
                    <div className={freelanceWrapper}>
                        <div className="row g-3">
                            {freelancePlatforms?.map((platform, index) => (
                                <div key={index} className="col-12 col-md-6">
                                    <a 
                                        href={platform.link} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className={freelanceCard}
                                    >
                                        <div>
                                            <h5 className={platformTitle}>{platform.name}</h5>
                                            <p className={platformDesc}>{platform.description}</p>
                                        </div>
                                        <i className="fa-solid fa-arrow-up-right-from-square fs-5"></i>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Contact;