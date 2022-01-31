import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

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
import { fadeDownVariants } from "lib/animations/variants";

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

          <AvatarFrame
            variants={fadeDownVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
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
              <motion.h1
                variants={fadeDownVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
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
              </motion.h1>

              <motion.p
                variants={fadeDownVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Content Creator
              </motion.p>
            </CreatorInfo>

            <motion.div
              variants={fadeDownVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Links />
            </motion.div>
          </Container>
        </TopContentFrame>

        <BottomContentFrame>
          <GamingSetups />
          <PromoCodes />
        </BottomContentFrame>

        <motion.div
          variants={fadeDownVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Footer />
        </motion.div>
      </HomeFrame>
    </>
  );
};

export default Home;
