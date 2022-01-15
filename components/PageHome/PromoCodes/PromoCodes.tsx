import "swiper/css";
import { A11y, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@apollo/client";

import Container from "components/common/Container";
import { CarouselLoaderOverlay, Loader } from "components/common/Loader";
import { GET_COUPONS } from "lib/queries/promo";
import { Query, QueryCouponsConnectionArgs } from "lib/api";

import PromoCode from "./PromoCode";
import {
  PromoCodesCarouselFrame,
  PromoCodesHeading,
  PromoCodesNoData,
  PromoCodesSection,
} from "./styles";

type QueryData = {
  couponsConnection: Query["couponsConnection"];
};

const PromoCodes: React.FC = () => {
  const { data, loading, error, fetchMore } = useQuery<
    QueryData,
    QueryCouponsConnectionArgs
  >(GET_COUPONS, {
    variables: { first: 10 },
    notifyOnNetworkStatusChange: true,
  });

  const onReachEnd = () => {
    if (data && data.couponsConnection.pageInfo.hasNextPage) {
      const lastCouponId = data.couponsConnection.pageInfo.endCursor;
      fetchMore({ variables: { first: 10, after: lastCouponId } });
    }
  };

  return (
    <PromoCodesSection>
      <Container>
        <PromoCodesHeading>Promo Codes</PromoCodesHeading>
      </Container>

      <PromoCodesCarouselFrame>
        {loading && (
          <CarouselLoaderOverlay>
            <Loader />
          </CarouselLoaderOverlay>
        )}

        {error && (
          <PromoCodesNoData>
            Something went wrong while getting data.
          </PromoCodesNoData>
        )}

        {data && (
          <>
            {data.couponsConnection.edges.length ? (
              <Swiper
                modules={[A11y, FreeMode]}
                freeMode
                slidesOffsetBefore={16}
                slidesOffsetAfter={16}
                onReachEnd={onReachEnd}
                breakpoints={{
                  320: {
                    slidesPerView: 1.25,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 1.35,
                    spaceBetween: 24,
                  },
                  768: {
                    slidesPerView: 1.6,
                    spaceBetween: 36,
                  },
                }}
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
                <PromoCodesNoData>No codes available.</PromoCodesNoData>
              </Container>
            )}
          </>
        )}
      </PromoCodesCarouselFrame>
    </PromoCodesSection>
  );
};

export default PromoCodes;
