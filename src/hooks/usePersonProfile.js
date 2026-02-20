import { useQuery } from "@tanstack/react-query";
import { getPersonProfile } from "../services/services";
import { STALE_TIME, GC_TIME } from "../constants/constants";

export const usePersonProfile = (personId) => {
  return useQuery({
    queryKey: ["personId", personId],
    queryFn: () => getPersonProfile(personId),
    enabled: !!personId,
    staleTime: STALE_TIME,
    gcTime: GC_TIME,
  });
};