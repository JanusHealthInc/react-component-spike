import "./app.css";
import { useState } from "react";
import { Card, Typeahead } from "./components";
import useFetchPlayers from "./hooks/use-fetch-players";
import { Player } from "./index.d";
import { CenteredDiv } from "./components/CenteredDiv";

export default function App() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const { players, isFetching, error } = useFetchPlayers();

  const handleSelect = (player: Player | null): void => {
    setSelectedPlayer(player);
  };

  return (
    <CenteredDiv column>
      <p>Material UI</p>
      <div>
        <Typeahead
          options={players}
          isFetching={isFetching}
          error={error}
          onSelect={handleSelect}
        />
        <Card player={selectedPlayer} isFetching={isFetching} error={error} />
      </div>
    </CenteredDiv>
  );
}
