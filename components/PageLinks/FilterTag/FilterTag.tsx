import Link from "next/link";
import { useRouter } from "next/router";

import { Button } from "components/common";

import { TagsGrid } from "./styles";

const tags: {
  label: string;
  color: "blue" | "pink" | "green" | "yellow" | "purple";
}[] = [
  { label: "All", color: "pink" },
  { label: "Favorites", color: "green" },
  { label: "Gaming Setup", color: "blue" },
  { label: "Partnerships", color: "yellow" },
  { label: "Must Haves", color: "purple" },
];

const FilterTag: React.FC = () => {
  const router = useRouter();
  const tagFromUrl = router.query.tag;

  return (
    <TagsGrid>
      {tags.map((tag) => {
        return (
          <Link key={tag.label} href={`/links?tag=${tag.label}`}>
            <a>
              {tag.label !== "All" && (
                <Button
                  color={tag.color}
                  outlined={tag.label === (tagFromUrl as string)}
                  size={{
                    "@initial": "sm",
                    "@md": "md",
                  }}
                >
                  {tag.label}
                </Button>
              )}

              {tag.label === "All" && (
                <Button
                  color={tag.color}
                  outlined={!tagFromUrl || tagFromUrl === "All"}
                  size={{
                    "@initial": "sm",
                    "@md": "md",
                  }}
                >
                  {tag.label}
                </Button>
              )}
            </a>
          </Link>
        );
      })}
    </TagsGrid>
  );
};

export default FilterTag;
