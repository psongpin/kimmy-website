import { useState } from "react";

import { ExternalLink } from "components/common/Icon";
import { Button } from "components/common";
import { fadeDownVariants } from "lib/animations/variants";

import { Discount, PromoCodeFrame, PromoCodeInfo, SponsorInfo } from "./styles";

type PromoCodeProps = {
  title: string;
  discountText: string;
  storeUrl: string;
  code: string;
};

type ClipboardCopyProps = {
  copyText: string;
};

const ClipboardCopy: React.FC<ClipboardCopyProps> = ({ copyText }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyTextToClipboard = async (text: string) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };

  const handleCopyClick = () => {
    copyTextToClipboard(copyText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Button size="sm" onClick={handleCopyClick} css={{ width: "100%" }}>
      {isCopied ? "Copied!" : "Copy"}
    </Button>
  );
};

const PromoCode: React.FC<PromoCodeProps> = ({
  discountText,
  storeUrl,
  code,
  title,
}) => {
  return (
    <PromoCodeFrame
      variants={fadeDownVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <PromoCodeInfo>
        <Discount>
          <p>{discountText}</p>
          <p>off</p>
        </Discount>

        <SponsorInfo>
          <p>
            <a href={storeUrl} target="_blank" rel="noreferrer">
              {title} <ExternalLink width={16} height={16} />
            </a>
          </p>
          <p>code: {code}</p>
        </SponsorInfo>
      </PromoCodeInfo>

      <ClipboardCopy copyText={code} />
    </PromoCodeFrame>
  );
};

export default PromoCode;
