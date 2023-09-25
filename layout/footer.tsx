import React from "react";
import { Container } from "../components";
import Image from "next/image";
import { FOOTER_ITEMS, FOOTER_ICONS } from "../constants/data";
const Footer = (): JSX.Element => {
  return (
    <Container>
      <div className="py-14">
        <div className="w-full lg:flex">
          <div className="lg:w-[20%] w-full lg:mb-0 mb-5">
            <Image
              src="./images/footer-logo.svg"
              width={160}
              height={1}
              alt=""
            />
          </div>
          <div className="lg:w-[80%] w-full flex items-center flex-wrap gap-6">
            {FOOTER_ITEMS?.map((item) => (
              <p className="text-[16px] font-normal text-[#000] leading-6 cursor-pointer border-b-2 border-[#00000050] hover:border-b-2 hover:border-[#000] ">
                {item?.label}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-6 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          <div>
            <p className="text-[#2E2E38AB] text-[14px] font-normal">
              WKS refers to the global network, and may refer to one or more of
              the member firms of Wang Khan Stern Corp, each a
              separate legal entity.
            </p>
          </div>
          <div className=" flex flex-wrap gap-4 lg:justify-end md:justify-end justify-start lg:mt-0 md:mt-0 mt-5">
            {FOOTER_ICONS.map((item) => (
              <div className=" border border-[#000] h-[50px] w-[50px] rounded-[50%] flex items-center justify-center cursor-pointer">
                <Image src={item?.icon} width={25} height={25} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
