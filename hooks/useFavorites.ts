import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useFavorites = () => {
  const { data, mutate, error, isLoading } = useSWR("/api/favorites", fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    mutate,
    error,
    isLoading,
  };
};

export default useFavorites;
