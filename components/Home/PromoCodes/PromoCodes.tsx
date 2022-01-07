import "swiper/css";
import { A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@apollo/client";

import Container from "components/common/Container";
import { GET_COUPONS } from "lib/queries/promo";
import { Query, QueryCouponsConnectionArgs } from "lib/api";

import PromoCode from "./PromoCode";
import { PromoCodesHeading, PromoCodesSection } from "./styles";

interface QueryData {
  couponsConnection: Query["couponsConnection"];
}

const PromoCodes: React.FC = () => {
  const { data, loading, error, fetchMore } = useQuery<
    QueryData,
    QueryCouponsConnectionArgs
  >(GET_COUPONS, {
    variables: { first: 10 },
    notifyOnNetworkStatusChange: true,
  });

  console.log(data, loading, error, fetchMore);

  return (
    <PromoCodesSection>
      <Container>
        <PromoCodesHeading>Promo Codes</PromoCodesHeading>
      </Container>

      <div>
        {loading && (
          <Container>
            <p>loading...</p>
          </Container>
        )}

        {data && (
          <>
            {data.couponsConnection.edges.length ? (
              <Swiper
                modules={[A11y]}
                slidesPerView={1.4}
                slidesOffsetBefore={16}
                slidesOffsetAfter={16}
                spaceBetween={36}
              >
                {data.couponsConnection.edges.map((couponEdge) => (
                  <SwiperSlide key={couponEdge.node.id}>
                    <PromoCode
                      title={couponEdge.node.title}
                      discountText={couponEdge.node.discountText}
                      storeUrl={couponEdge.node.storeUrl}
                      code={couponEdge.node.code}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <Container>
                <p>No codes available.</p>
              </Container>
            )}
          </>
        )}
      </div>
    </PromoCodesSection>
  );
};

export default PromoCodes;
