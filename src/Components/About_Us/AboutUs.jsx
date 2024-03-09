import Styles from "/src/Components/About_Us/AboutUs.module.css";
import TeamImg from "/src/assets/Images/team.jpg";

const AboutUs = () => {
  return (
    <>
      <section id={Styles.about_us}>
        <div className={Styles.about_us_wripper}>
          <div className={Styles.about_us_content}>
            <h1 className={Styles.title}>For developers, by bevalopers.</h1>
            <p className={Styles.description}>
              We are a small, tight-knit team focussed on making Big Cartel
              empowering and easy touse. Some of us run our own Big cartel
              sites. Others are FrontEnd developers, BackEnd developers,
              FullStack developers and App developers. We have work hard to
              build a company while we do big things. We are here to help you do
              the same.
            </p>
          </div>
          <div className={`${Styles.about_us_content} ${Styles.content_two}`}>
            <img src={TeamImg} alt="teamwork image" className={Styles.img} />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
