import { about, age, email, name, address } from "../../store/info";
import { education, work_about, work_details } from "../../store/myAbout";
import { aboutSection, aboutTitle, mainHeading, highlight, aboutEducationTitle, disabledInLg, preLine } from "./styles.module.css";

function About() {
    return (
        <section id={about.split("#")[1]} className={`container ${aboutSection}`}>
            <div className="text-center mb-3">
                <h2 className={`sections-title ${aboutTitle}`}>About Me</h2>
            </div>
            <div className="row">
                <div className="col-lg-8 col-sm-12">
                    <h3 className={mainHeading}>I'm <span className={highlight}>{name},</span> a {work_about}</h3>
                    <p className={preLine}>
                        {work_details}
                    </p>
                    <h4 className={aboutEducationTitle}>Education</h4>
                    <p>{education}</p>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <hr className={disabledInLg} />
                    <p><b>Age</b> : {age()}</p>
                    <hr />
                    <p><b>Email</b> : {email}</p>
                    <hr />
                    <p><b>Address</b> : {address}</p>
                    <hr />
                </div>
            </div>
        </section>
    )
}

export default About;