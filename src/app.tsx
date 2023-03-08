import "./app.css";
import { useState } from "react";
import { BootstrapCard, BootstrapTypeahead } from "./components/bootstrap/";
import { MUICard, MUITypeahead } from "./components/material-ui/";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TailwindCard, TailwindTypeahead } from "./components/tailwind/";
import useFetchPlayers from "./hooks/use-fetch-players";
import { Player } from ".";

export default function App() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const { players, isFetching, error } = useFetchPlayers();

  const handleSelect = (player: Player | null): void => {
    setSelectedPlayer(player ? { ...player } : player);
  };

  return (
    <>
      <div className="container">
        <div className="implementation-option" id="bootstrap">
          <p className="header">Bootstrap</p>
          <BootstrapTypeahead
            options={players}
            isFetching={isFetching}
            error={error}
            onSelect={handleSelect}
          />
          <BootstrapCard
            player={selectedPlayer}
            isFetching={isFetching}
            error={error}
          />
        </div>
        <div className="implementation-option" id="material-ui">
          <p className="header">Material UI</p>
          <ThemeProvider
            theme={createTheme({
              palette: {
                primary: {
                  main: "#556cd6",
                },
                secondary: {
                  main: "#19857b",
                },
                error: {
                  main: "#f87171",
                },
              },
            })}
          >
            <MUITypeahead
              options={players}
              isFetching={isFetching}
              error={error}
              onSelect={handleSelect}
            />
            <MUICard
              player={selectedPlayer}
              isFetching={isFetching}
              error={error}
            />
          </ThemeProvider>
        </div>
        <div className="implementation-option" id="tailwind">
          <p className="header">Tailwind</p>
          <TailwindTypeahead
            options={players}
            isFetching={isFetching}
            error={error}
            onSelect={handleSelect}
          />
          <TailwindCard
            player={selectedPlayer}
            isFetching={isFetching}
            error={error}
          />
        </div>
      </div>
    </>
  );
}
