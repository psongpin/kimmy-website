import type { NextPage } from "next";

import Container from "../components/common/Container";
import { BottomContentFrame, HomeFrame, PromoCodes } from "components/Home";

const Home: NextPage = () => {
  return (
    <HomeFrame>
      <Container>
        <div>top content here</div>
      </Container>

      <BottomContentFrame>
        <PromoCodes />
      </BottomContentFrame>
    </HomeFrame>
  );
};

export default Home;
