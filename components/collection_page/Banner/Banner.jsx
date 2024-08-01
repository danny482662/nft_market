import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Banner.module.css";

const Banner = ({ bannerImage }) => {
  return (
    <div className={Style.banner}>
      <div className={Style.banner_img}>
        <Image
          src={bannerImage}
          alt="background"
          style={{ objectFit: "cover", height: "300px", width: "100%" }}
        />
      </div>

      <div className={Style.banner_img_mobile}>
        <Image
          src={bannerImage}
          alt="background"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default Banner;
