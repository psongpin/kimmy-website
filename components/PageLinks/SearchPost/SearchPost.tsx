import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import qs from "query-string";

import { Button } from "components/common";
import { Search } from "components/common/Icon";
import { fadeDownVariants } from "lib/animations/variants";

import { SearchError, SearchPostFrame } from "./style";

type FormData = {
  search: string;
};

const SearchPost: React.FC = () => {
  const router = useRouter();
  const search = router.query.search || "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      search: search as string,
    },
  });

  const onSubmit = handleSubmit((data) => {
    const urlQuery = router.query;
    const updatedUrlQuery = { ...urlQuery, search: data.search };
    const stringifiedQuery = qs.stringify(updatedUrlQuery);
    router.push(`/links?${stringifiedQuery}`);
  });

  return (
    <SearchPostFrame
      variants={fadeDownVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="search"></label>
          <input
            type="text"
            placeholder="Search item here.."
            {...register("search", { required: true })}
          />
          {errors.search && <SearchError>This field is required</SearchError>}
        </div>

        <Button
          type="submit"
          css={{
            width: 32,
            paddingX: 0,
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",

            svg: {
              width: 16,
              height: 16,
            },

            "@md": {
              width: 56,
              svg: {
                width: 24,
                height: 24,
              },
            },
          }}
          size={{
            "@initial": "sm",
            "@md": "md",
          }}
        >
          <Search />
        </Button>
      </form>
    </SearchPostFrame>
  );
};

export default SearchPost;
