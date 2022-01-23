import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import qs from "query-string";

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
    <SearchPostFrame>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search item here.."
          {...register("search", { required: true })}
        />
        {errors.search && <SearchError>This field is required</SearchError>}
      </form>
    </SearchPostFrame>
  );
};

export default SearchPost;
