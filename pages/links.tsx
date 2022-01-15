import { NextPage } from "next";

import { PageLinksHead, SemiCircle } from "components/PageLinks";

const PageLinks: NextPage = () => {
  return (
    <div>
      <PageLinksHead>
        <SemiCircle />

        <p>kimifaery</p>
        <h1>Links</h1>
      </PageLinksHead>
    </div>
  );
};

export default PageLinks;
