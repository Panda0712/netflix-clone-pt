import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useMovie = (id?: string) => {
  const { data, isLoading, mutate, error } = useSWR(
    id ? `/api/movies/${id}` : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return { data, isLoading, mutate, error };
};

export default useMovie;
