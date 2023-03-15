import axios from "axios";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { Player } from "..";

export type UseFetchPlayers = {
  players: Player[];
  isFetching: boolean;
  error: any;
};

export const useFetchPlayersKey = "use-fetch-players";
export default function (): UseFetchPlayers {
  const { data, isFetching, error } = useQuery(
    useFetchPlayersKey,
    async () => {
      return await axios({
        method: "GET",
        url: "https://index.simulationhockey.com/api/v1/players",
      });
    },
    {
      onSuccess: () => toast.success("Successfully fetch players"),
      onError: () => toast.error("Error fetching players"),
    }
  );

  return {
    players: data?.data || [],
    isFetching,
    error,
  };
}
