import React from 'react'
import Button from "../../CommonComponent/Button/Button"
import Sofa from "../../assets/HomeImage/BannerSofa.png"
import Flex from "../../CommonComponent/Flex/Flex"
import Lamp from "../../assets/HomeImage/Lamp.png"
import Dot from "../../assets/HomeImage/Dot.png"

const Banner = () => {
  return (
    <>
      <div className="bg-BannerColor py-44 relative">
        <div className="container">
          <div className="absolute -left-48 top-0">
            <div>
              <picture>
                <img src={Lamp} alt={Lamp} />
              </picture>
            </div>
            <div className="mt-32">
              <picture>
                <img src={Dot} alt={Dot} />
              </picture>
            </div>
          </div>
          <Flex className={"items-center justify-between"}>
            <div className="w-1/2">
              <div>
                <h3 className="font-Lato font-bold text-base text-BtnColor leading-7">
                  Best Furniture For Your Castle....
                </h3>
                <h2 className=" font-Lato font-semibold text-5xl leading-normal tracking-wide mt-2">
                  New Furniture Collection Trends in 2020
                </h2>
                <p className="font-Lato font-bold text-base text-[#8A8FB9] mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
              </div>
              <div className="mt-10">
                <Button
                  className={
                    "bg-BtnColor py-2 px-8 font-JosefinFont text-base font-semibold text-CommonColor"
                  }
                  title={"Shop Now"}
                />
              </div>
            </div>
            <div>
              <div className="w-[500px]">
                <picture>
                  <img src={Sofa} alt={Sofa} />
                </picture>
              </div>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Banner
