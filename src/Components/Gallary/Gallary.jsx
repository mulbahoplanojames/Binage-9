import React from "react";
import Styles from "/src/Components/Gallary/Gallary.module.css";
import Img1 from "/src/assets/Images/img1.jpg";
import Img2 from "/src/assets/Images/img2.jpg";
import Img3 from "/src/assets/Images/Img3.jpg";
import Img4 from "/src/assets/Images/Img4.jpg";
import Img5 from "/src/assets/Images/Img5.jpg";
import Img6 from "/src/assets/Images/Img6.jpg";
import Img7 from "/src/assets/Images/Img7.jpg";

const Gallary = () => {
  return (
    <>
      <div id={Styles.gallary}>
        <div className={Styles.gallary_wripper}>
          <div className={Styles.gallary_main_content}>
            <div className={Styles.content}>
              <div className={Styles.image_content}>
                <img src={Img4} alt="illustration" className={Styles.img} />
              </div>
              <div
                className={`${Styles.image_content} ${Styles.image_content2}`}
              >
                <img src={Img6} alt="illustration" className={Styles.img} />
              </div>
            </div>

            <div className={`${Styles.content} ${Styles.content2}`}>
              <div className={Styles.img_content}>
                <img src={Img3} alt="illustration" className={Styles.img} />
              </div>
              <div className={Styles.img_content}>
                <img src={Img7} alt="illustration" className={Styles.img} />
              </div>
              <div className={Styles.img_content}>
                <img src={Img5} alt="illustration" className={Styles.img} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallary;
