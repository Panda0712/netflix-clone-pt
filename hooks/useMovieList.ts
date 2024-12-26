import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useMovieList = () => {
  const { data, isLoading, error, mutate } = useSWR("/api/movies", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    isLoading,
    error,
    mutate,
  };
};

export default useMovieList;
