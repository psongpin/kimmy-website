import type { NextPage } from "next";

import {
  Avatar,
  AvatarFrame,
  BottomContentFrame,
  CreatorInfo,
  GamingSetups,
  HomeFrame,
  Links,
  PromoCodes,
  SemiCircle,
  TopContentFrame,
} from "components/Home";
import Container from "components/common/Container";
import Footer from "components/Footer";

const Home: NextPage = () => {
  return (
    <HomeFrame>
      <TopContentFrame>
        <SemiCircle />
        <AvatarFrame>
          <Avatar />
        </AvatarFrame>

        <Container>
          <CreatorInfo>
            <h1>kimifaery</h1>
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
