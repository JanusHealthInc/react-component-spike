import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { SearchIcon } from "@primer/octicons-react";
import { useMemo, useState } from "react";
import { Player } from "..";

export type TypeaheadProps = {
  options: Player[];
  isFetching: boolean;
  error: any;
  onSelect: (player: Player | null) => void;
};

const Typeahead = ({
  options,
  isFetching,
  error,
  onSelect,
}: TypeaheadProps) => {
  const [searchText, setSearchText] = useState<string>("");

  const filteredOptions = useMemo(() => {
    if (!options || searchText?.length === 0) {
      return [];
    }

    return options
      .filter((option) =>
        option.name.toLowerCase().includes(searchText.toLowerCase())
      )
      .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
      .slice(0, 10)
      .map((option: Player) => ({ ...option, label: option.name }));
  }, [searchText, options]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSelectPlayer = (player: Player) => {
    setSearchText(player?.name || "");
    onSelect(player);
  };

  return (
    <div className="flex justify-between items-center">
      <Autocomplete
        disabled={isFetching || error}
        onChange={(event, newValue) => {
          const player: Player = newValue as Player;
          handleSelectPlayer(player);
        }}
        disablePortal
        options={filteredOptions}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField
            onChange={(event) => {
              handleOnChange(event as React.ChangeEvent<HTMLInputElement>);
            }}
            {...params}
            InputProps={{
              ...params.InputProps,
              startAdornment: !searchText && (
                <InputAdornment position="start">
                  <SearchIcon size="small" />
                </InputAdornment>
              ),
            }}
            placeholder={"Search for..."}
          />
        )}
      />
    </div>
  );
};

export default Typeahead;
