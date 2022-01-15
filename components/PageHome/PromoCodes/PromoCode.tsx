import { useState } from "react";

import { ExternalLink } from "components/common/Icon";

import {
  CopyButton,
  Discount,
  PromoCodeFrame,
  PromoCodeInfo,
  SponsorInfo,
} from "./styles";

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
    <CopyButton onClick={handleCopyClick}>
      {isCopied ? "Copied!" : "Copy"}
    </CopyButton>
  );
};

const PromoCode: React.FC<PromoCodeProps> = ({
  discountText,
  storeUrl,
  code,
  title,
}) => {
  return (
    <PromoCodeFrame>
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
