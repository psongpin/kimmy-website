import type { NextPage } from "next";

import Container from "../components/common/Container";
import { BottomContentFrame, HomeFrame, PromoCodes } from "components/Home";
import GamingSetups from "components/Home/GamingSetups";

const Home: NextPage = () => {
  return (
    <HomeFrame>
      <Container>
        <div>top content here</div>
      </Container>

      <BottomContentFrame>
        <GamingSetups />
        <PromoCodes />
      </BottomContentFrame>
    </HomeFrame>
  );
};

export default Home;
