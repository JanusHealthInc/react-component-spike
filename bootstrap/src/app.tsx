import "./app.css";
import { useState } from "react";
import { Card, Typeahead } from "./components";
import useFetchPlayers from "./hooks/use-fetch-players";
import { Player } from ".";

export default function App() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const { players, isFetching, error } = useFetchPlayers();

  const handleSelect = (player: Player | null): void => {
    setSelectedPlayer(player ? { ...player } : player);
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <p>Bootstrap</p>
      <div>
        <Typeahead
          options={players}
          isFetching={isFetching}
          error={error}
          onSelect={handleSelect}
        />
        <Card player={selectedPlayer} isFetching={isFetching} error={error} />
      </div>
    </div>
  );
}
