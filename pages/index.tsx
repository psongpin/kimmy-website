import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { NextSeo } from "next-seo";

import {
  AvatarFrame,
  BottomContentFrame,
  CreatorInfo,
  GamingSetups,
  HomeFrame,
  Links,
  PromoCodes,
  SemiCircle,
  TopContentFrame,
} from "components/PageHome";
import { Container } from "components/common";
import Footer from "components/Footer";
import { SparkleLeft, SparkleRight } from "components/common/Icon";
import { addApolloState, initializeApollo } from "lib/apolloClient";
import {
  Query,
  QueryCouponsConnectionArgs,
  QueryLinkPostsArgs,
} from "lib/types/api";
import { GET_GAMING_SETUPS } from "lib/queries/posts";
import { GET_COUPONS } from "lib/queries/promo";

type QueryData = {
  linkPostsConnection: Query["linkPostsConnection"];
  couponsConnection: Query["couponsConnection"];
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query<QueryData, QueryLinkPostsArgs>({
    query: GET_GAMING_SETUPS,
    variables: { first: 10, where: { tags_contains_some: ["Gaming Setup"] } },
  });

  await apolloClient.query<QueryData, QueryCouponsConnectionArgs>({
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
    <>
      <NextSeo
        title="Kimifaery Website - Home"
        description="Kimifaery's Personal Website"
        canonical="https://kimifaery.com/"
        openGraph={{
          url: "https://kimifaery.com/",
          title: "Kimifaery Website - Home",
          description: "Kimifaery's Personal Website",
          images: [
            {
              url: "https://kimifaery.com/images/kimifaery.png",
              width: 1200,
              height: 630,
              alt: "Kimifaery's Personal Website",
            },
          ],
        }}
      />

      <HomeFrame>
        <TopContentFrame>
          <SemiCircle />
          <AvatarFrame>
            <Image
              src="/images/avatar.png"
              alt="kimifaery"
              layout="fixed"
              width={124}
              height={108}
              quality={100}
            />
          </AvatarFrame>

          <Container>
            <CreatorInfo>
              <h1>
                <SparkleLeft
                  width={26}
                  height={26}
                  style={{ marginRight: 10 }}
                />
                kimifaery
                <SparkleRight
                  width={26}
                  height={26}
                  style={{ marginLeft: 10 }}
                />
              </h1>

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
    </>
  );
};

export default Home;
