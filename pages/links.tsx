import { NextPage } from "next";

import { Links, PageLinksHead, SemiCircle } from "components/PageLinks";
import Footer from "components/Footer";

const PageLinks: NextPage = () => {
  return (
    <div>
      <PageLinksHead>
        <SemiCircle />

        <p>kimifaery</p>
        <h1>Links</h1>
      </PageLinksHead>

      <Links />

      <Footer />
    </div>
  );
};

export default PageLinks;
