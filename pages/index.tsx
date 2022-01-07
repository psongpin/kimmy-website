import type { NextPage } from "next";

import Container from "../components/common/Container";
import { BottomContentFrame, HomeFrame } from "components/Home";

const Home: NextPage = () => {
  return (
    <HomeFrame>
      <Container>
        <div>top content here</div>
      </Container>

      <BottomContentFrame>bottom here</BottomContentFrame>
    </HomeFrame>
  );
};

export default Home;
