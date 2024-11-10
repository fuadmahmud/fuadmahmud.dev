import { useQueryClient } from "react-query";

export const useGlobalQueryState = () => {
  const queryClient = useQueryClient();

  const setData = (key: string, data: any) =>
    queryClient.setQueryData(key, data);

  const getData = <T,>(key: string) => queryClient.getQueryData<T>(key);

  return { setData, getData };
};
