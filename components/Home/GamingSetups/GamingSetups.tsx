import "swiper/css";
import { A11y, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@apollo/client";

import Container from "components/common/Container";
import { Query, QueryLinkPostsArgs } from "lib/api";
import { GET_GAMING_SETUPS } from "lib/queries/posts";

import GamingSetup from "./GamingSetup";
import { GamingSetupsHeading, GamingSetupsSection } from "./styles";

interface QueryData {
  linkPostsConnection: Query["linkPostsConnection"];
}

const GamingSetups: React.FC = () => {
  const { data, fetchMore } = useQuery<QueryData, QueryLinkPostsArgs>(
    GET_GAMING_SETUPS,
    {
      variables: { first: 10, where: { tags_contains_some: ["Gaming Setup"] } },
      notifyOnNetworkStatusChange: true,
    }
  );

  const onReachEnd = () => {
    if (data && data.linkPostsConnection.pageInfo.hasNextPage) {
      const lastCouponId = data.linkPostsConnection.pageInfo.endCursor;
      fetchMore({ variables: { first: 10, after: lastCouponId } });
    }
  };

  return (
    <GamingSetupsSection>
      <Container>
        <GamingSetupsHeading>Gaming Setups</GamingSetupsHeading>
      </Container>

      <div>
        {data && (
          <>
            {data.linkPostsConnection.edges.length ? (
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
                {data.linkPostsConnection.edges.map((linkPostEdge) => (
                  <SwiperSlide key={linkPostEdge.node.id}>
                    <GamingSetup
                      id={linkPostEdge.node.id}
                      title={linkPostEdge.node.title}
                      thumbnailUrl={linkPostEdge.node.thumbnail.url}
                      redirectLink={linkPostEdge.node.redirectLink}
                      numOfSubLinkPosts={linkPostEdge.node.subLinkPosts.length}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <Container>
                <p>No setup available.</p>
              </Container>
            )}
          </>
        )}
      </div>
    </GamingSetupsSection>
  );
};

export default GamingSetups;
