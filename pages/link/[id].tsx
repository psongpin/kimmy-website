import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useQuery } from "@apollo/client";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

import { Container, Loader } from "components/common";
import Footer from "components/Footer";
import { LinkPostBanner, Navigation, SubLinks } from "components/PageLink";
import {
  LinkPostError,
  LinksLoader,
} from "components/PageLinks/LinkPosts/styles";
import { addApolloState, initializeApollo } from "lib/apolloClient";
import { GET_LINK_POST, GET_LINK_POST_IDS } from "lib/queries/posts";
import { Query, QueryLinkPostArgs, QueryLinkPostsArgs } from "lib/types/api";

type QueryData = {
  linkPost: Query["linkPost"];
  linkPostsConnection: Query["linkPostsConnection"];
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  try {
    const { data } = await apolloClient.query<QueryData, QueryLinkPostsArgs>({
      query: GET_LINK_POST_IDS,
      variables: {
        first: 5,
      },
    });

    const paths = data.linkPostsConnection.edges.map((linkPostEdge) => ({
      params: { id: linkPostEdge.node.id },
    }));

    return { paths, fallback: true };
  } catch (error) {
    return { paths: [], fallback: true };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as Params;
  const apolloClient = initializeApollo();

  await apolloClient.query<QueryData, QueryLinkPostArgs>({
    query: GET_LINK_POST,
    variables: { where: { id } },
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
};

const PageLink: NextPage = () => {
  const router = useRouter();
  const { id } = router.query as Params;

  const { data, loading, error } = useQuery<QueryData, QueryLinkPostArgs>(
    GET_LINK_POST,
    { variables: { where: { id } } }
  );

  return (
    <>
      <NextSeo
        title={`Kimifaery Website - ${data?.linkPost?.title || "Post"}`}
        description="Kimifaery's Personal Website"
        canonical={`https://kimifaery.com/link/${data?.linkPost?.id}`}
        openGraph={{
          url: `https://kimifaery.com/link/${data?.linkPost?.id}`,
          title: `Kimifaery Website - ${data?.linkPost?.title || "Post"}`,
          description: "Kimifaery's Personal Website",
          images: [
            {
              url:
                data?.linkPost?.thumbnail.url ||
                "https://kimifaery.com/images/kimifaery.png",
              width: 300,
              height: 300,
              alt: data?.linkPost?.title || "Kimifaery's Personal Website",
            },
          ],
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navigation
          backgroundColor={(data?.linkPost?.themeColor?.hex as string) || ""}
        />

        <Container>
          {loading && (
            <LinksLoader>
              <Loader />
            </LinksLoader>
          )}

          {error && (
            <LinkPostError>
              Something went wrong while fetching posts.
            </LinkPostError>
          )}

          {data?.linkPost && (
            <>
              <LinkPostBanner
                title={data.linkPost.title}
                thumbnailUrl={data.linkPost.thumbnail.url}
                numOfSubLinkPosts={data.linkPost.subLinkPosts.length}
                backgroundColor={
                  (data?.linkPost?.themeColor?.hex as string) || ""
                }
                viewUrl={data.linkPost.instagramLink || ""}
              />
              <SubLinks
                subLinkPosts={data.linkPost.subLinkPosts}
                themeColor={(data?.linkPost?.themeColor?.hex as string) || ""}
              />
            </>
          )}
        </Container>

        <Footer />
      </motion.div>
    </>
  );
};

export default PageLink;
