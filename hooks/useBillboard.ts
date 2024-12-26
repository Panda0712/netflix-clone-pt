import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useBillboard = () => {
  const { data, isLoading, error, mutate } = useSWR("/api/random", fetcher, {
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

export default useBillboard;
