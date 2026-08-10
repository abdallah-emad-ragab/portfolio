// Imports
import { accounts, main, projects, name, imageProfile, work, contact, cv } from "../../data/info.js";
import { SocialLinks } from "../../utilities/Social-links.jsx";
import {
    bgMain, mainSection, mainTextWrapper, mainIntroSpan, mainTitle, mainSubtitle,
    mainSocialLinks, mainAvatar, ctaContainer, buttonsGroup, btnSuccess, btnOutlineSuccess, cvBtn
} from "./styles.module.css";

function Main() {
    return (
        <div className={bgMain}>
            <section id={main.split("#")[1]} className={`container ${mainSection}`}>
                
                {/* Text and Call to Action Area */}
                <div className={mainTextWrapper}>
                    <p>
                        <span className={mainIntroSpan}>Hi there, I'm</span>
                    </p>
                    <h1 className={mainTitle}>{name}</h1>
                    <p className={mainSubtitle}>{work}</p>

                    {/* Social Media Links */}
                    <div className={mainSocialLinks}>
                        {SocialLinks(accounts)}
                    </div>

                    {/* Call to Action Buttons Block */}
                    <div className={ctaContainer}>
                        {/* Primary & Secondary Action Buttons */}
                        <div className={`d-flex align-items-center gap-2 ${buttonsGroup}`}>
                            <a href={projects} className={`btn ${btnSuccess}`}>
                                My Work <i className="fa-solid fa-circle-arrow-down ms-2" />
                            </a>
                            <a href={contact} className={`btn ${btnOutlineSuccess}`}>
                                Hire Me <i className="fa-solid fa-briefcase ms-2" />
                            </a>
                        </div>

                        {/* Resume / CV Download Link */}
                        <a href={cv} download className={`btn ${cvBtn}`}>
                            Download CV <i className="fa-solid fa-download ms-2" />
                        </a>
                    </div>
                </div>

                {/* Profile Image Area */}
                <div id="main-img">
                    <img src={imageProfile} className={mainAvatar} alt="Profile" />
                </div>

            </section>
        </div>
    );
}

export default Main;