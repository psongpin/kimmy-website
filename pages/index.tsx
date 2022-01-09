import type { NextPage } from "next";

import {
  Avatar,
  AvatarFrame,
  BottomContentFrame,
  CreatorInfo,
  HomeFrame,
  PromoCodes,
  SemiCircle,
  TopContentFrame,
} from "components/Home";
import GamingSetups from "components/Home/GamingSetups";
import Footer from "components/Footer";

const Home: NextPage = () => {
  return (
    <HomeFrame>
      <TopContentFrame>
        <SemiCircle />
        <AvatarFrame>
          <Avatar />
        </AvatarFrame>

        <CreatorInfo>
          <h1>kimifaery</h1>
          <p>Content Creator</p>
        </CreatorInfo>
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
