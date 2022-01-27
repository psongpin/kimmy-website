import { useRouter } from "next/router";

import { Container, Flexbox } from "components/common";
import { ChevronLeft } from "components/common/Icon";

import { NavigationFrame, NavigationText } from "./styles";

type NavigationProps = {
  backgroundColor: string;
};

const Navigation: React.FC<NavigationProps> = ({ backgroundColor }) => {
  const router = useRouter();

  return (
    <NavigationFrame css={{ backgroundColor: backgroundColor || "$purple" }}>
      <Container
        css={{
          height: "100%",
        }}
      >
        <Flexbox
          css={{
            alignItems: "center",
            justifyContent: "flex-start",
            height: "100%",
          }}
        >
          <NavigationText onClick={() => router.back()}>
            <ChevronLeft width={24} height={24} style={{ marginRight: 12 }} />
            <span>Back</span>
          </NavigationText>
        </Flexbox>
      </Container>
    </NavigationFrame>
  );
};

export default Navigation;
