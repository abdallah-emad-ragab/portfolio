// Links
import { accounts, main, projects, name, imageProfile, work } from "../../store/info.js";
import { SocialLinks } from "../../utilities/Social-links.jsx";
import { bgMain, mainSection, mainTextWrapper, mainIntroSpan, mainTitle, mainSubtitle, 
    mainSocialLinks, mainAvatar, btnSuccess } from "./styles.module.css";

function Main() {
    return (
        <div className={bgMain}>
            <section id={main.split("#")[1]} className={`container ${mainSection}`}>
                <div className={mainTextWrapper}>
                    <p><span className={mainIntroSpan}>Hi there, I'm</span></p>
                    <h1 className={mainTitle}>{name}</h1>
                    <p className={mainSubtitle}>{work}</p>
                    <div className={mainSocialLinks}>
                        {SocialLinks(accounts)}
                    </div>
                    <a href={projects} className={`btn btn-success ${btnSuccess}`}>My Work <i className="fa-solid fa-circle-arrow-down" /></a>
                </div>
                <div id="main-img">
                    <img src={imageProfile} className={mainAvatar} alt="me" />
                </div>
            </section>
        </div>
    )
}

export default Main;