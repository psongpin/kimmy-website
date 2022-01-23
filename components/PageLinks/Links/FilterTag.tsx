import Link from "next/link";

import { Button } from "components/common";
import { TagsGrid } from "./styles";

const tags = [
  { label: "All" },
  { label: "Partnerships" },
  { label: "Favorites" },
  { label: "Must Haves" },
  { label: "Gaming Setup" },
];

const FilterTag: React.FC = () => {
  return (
    <TagsGrid>
      {tags.map((tag) => (
        <Link key={tag.label} href={`/links?tag=${tag.label}`}>
          <a>
            <Button>{tag.label}</Button>
          </a>
        </Link>
      ))}
    </TagsGrid>
  );
};

export default FilterTag;
