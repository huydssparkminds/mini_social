import { TypePost } from "@/models/models";
import { useMemo, useState } from "react";

interface useFilterProps {
  posts: TypePost[] | null;
}

const useFilter = ({
  posts,
}: useFilterProps): [
  TypePost[],
  React.Dispatch<React.SetStateAction<string | null>>
] => {
  const [query, setQuery] = useState<string | null>(null);

  const filterData = useMemo(() => {
    if (!posts) return [];

    if (query === null) {
      return posts; 
    }
    const daysAgo = parseInt(query);
    const thresholdDate = new Date();
    thresholdDate.setDate(thresholdDate.getDate() - daysAgo);
    thresholdDate.setUTCHours(0, 0, 0, 0);
    
    return posts.filter((post) => {
      const postDate = new Date(post.timestamp);
      return postDate.getTime() >= thresholdDate.getTime();
    });
  }, [query, posts]);
  
  return [filterData, setQuery];
};

export default useFilter;
