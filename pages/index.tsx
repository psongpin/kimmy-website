import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";

import {
  AvatarFrame,
  BottomContentFrame,
  CreatorInfo,
  GamingSetups,
  HomeFrame,
  Links,
  PromoCodes,
  SemiCircle,
  Sparkle,
  SparkleContainer,
  TopContentFrame,
} from "components/Home";
import Container from "components/common/Container";
import Footer from "components/Footer";
import { addApolloState, initializeApollo } from "lib/apolloClient";
import { Query, QueryCouponsConnectionArgs, QueryLinkPostsArgs } from "lib/api";
import { GET_GAMING_SETUPS } from "lib/queries/posts";
import { GET_COUPONS } from "lib/queries/promo";

type QueryData = {
  linkPostsConnection: Query["linkPostsConnection"];
  couponsConnection: Query["couponsConnection"];
};

const sparkles: {
  color: "yellow" | "blue" | "green" | "red";
  width: number;
  height: number;
  path: string;
}[] = [
  {
    color: "yellow",
    width: 18,
    height: 18,
    path: "/images/sparkleYellow.svg",
  },
  {
    color: "blue",
    width: 18,
    height: 18,
    path: "/images/sparkleBlue.svg",
  },
  {
    color: "green",
    width: 10,
    height: 10,
    path: "/images/sparkleGreen.svg",
  },
  {
    color: "red",
    width: 10,
    height: 10,
    path: "/images/sparkleRed.svg",
  },
];

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query<
    QueryData["linkPostsConnection"],
    QueryLinkPostsArgs
  >({
    query: GET_GAMING_SETUPS,
    variables: { first: 10, where: { tags_contains_some: ["Gaming Setup"] } },
  });

  await apolloClient.query<
    QueryData["couponsConnection"],
    QueryCouponsConnectionArgs
  >({
    query: GET_COUPONS,
    variables: { first: 10 },
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
};

const Home: NextPage = () => {
  return (
    <HomeFrame>
      <TopContentFrame>
        <SemiCircle />
        <AvatarFrame>
          <Image
            src="/images/avatar.png"
            alt="kimifaery"
            layout="fixed"
            width={147}
            height={128}
            quality={100}
          />
        </AvatarFrame>

        <Container>
          <CreatorInfo>
            <SparkleContainer>
              <h1>kimifaery</h1>

              {sparkles.map((sparkle) => (
                <Sparkle key={sparkle.path} color={sparkle.color}>
                  <Image
                    src={sparkle.path}
                    alt="kimifaery"
                    layout="fixed"
                    width={sparkle.width}
                    height={sparkle.height}
                    quality={100}
                  />
                </Sparkle>
              ))}
            </SparkleContainer>
            <p>Content Creator</p>
          </CreatorInfo>

          <Links />
        </Container>
      </TopContentFrame>

      <BottomContentFrame>
        <GamingSetups />
        <PromoCodes />
      </BottomContentFrame>

      <Footer />
    </HomeFrame>
  );
};

export default Home;
