import { A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Container from "components/common/Container";

import {
  CopyButton,
  Discount,
  PromoCodeFrame,
  PromoCodeInfo,
  PromoCodesHeading,
  PromoCodesSection,
  SponsorInfo,
} from "./styles";

const PromoCodes: React.FC = () => {
  return (
    <PromoCodesSection>
      <Container>
        <PromoCodesHeading>Promo Codes</PromoCodesHeading>
      </Container>

      <div>
        <Swiper
          modules={[A11y]}
          slidesPerView={1.4}
          slidesOffsetBefore={16}
          spaceBetween={36}
        >
          <SwiperSlide>
            <PromoCodeFrame>
              <PromoCodeInfo>
                <Discount>
                  <p>10%</p>
                  <p>off</p>
                </Discount>

                <SponsorInfo>
                  <p>Stogatech</p>
                  <p>code: STOGATECH</p>
                </SponsorInfo>
              </PromoCodeInfo>

              <CopyButton>Copy</CopyButton>
            </PromoCodeFrame>
          </SwiperSlide>
        </Swiper>
      </div>
    </PromoCodesSection>
  );
};

export default PromoCodes;
