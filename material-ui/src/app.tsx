import "./app.css";
import { useState } from "react";
import { Card, Typeahead } from "./components";
import useFetchPlayers from "./hooks/use-fetch-players";
import { Player } from "./index.d";

export default function App() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const { players, isFetching, error } = useFetchPlayers();

  const handleSelect = (player: Player | null): void => {
    setSelectedPlayer(player ? { ...player } : player);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <p>Material UI</p>
      <Typeahead
        options={players}
        isFetching={isFetching}
        error={error}
        onSelect={handleSelect}
      />
      <Card player={selectedPlayer} isFetching={isFetching} error={error} />
    </div>
  );
}
