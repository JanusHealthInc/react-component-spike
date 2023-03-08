import "bootstrap/dist/css/bootstrap.min.css";
import { useMemo, useRef, useState } from "react";
import { Player, TypeaheadProps } from "../..";
import { SearchIcon, XIcon } from "@primer/octicons-react";

const Typeahead = ({
  options,
  isFetching,
  error,
  onSelect,
}: TypeaheadProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const typeaheadInput = useRef<HTMLInputElement>(null);

  const filteredOptions: Player[] = useMemo(() => {
    if (!options || searchText.length === 0) {
      return [];
    }

    return options
      .filter((option) =>
        option.name.toLowerCase().includes(searchText.toLowerCase())
      )
      .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
      .slice(0, 10);
  }, [searchText, options]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchText(event.target.value);
  };

  const handleSelectPlayer = (player: Player) => {
    setSearchText(player.name);
    onSelect(player);
    if (typeaheadInput.current) {
      typeaheadInput.current.value = player.name;
    }
  };

  const handleClearText = (): void => {
    setSearchText("");
    onSelect(null);
    if (typeaheadInput.current) {
      typeaheadInput.current.value = "";
    }
  };

  return (
    <div>
      <div>
        <div>Search</div>
        <input
          ref={typeaheadInput}
          type="text"
          onChange={handleOnChange}
          disabled={isFetching || error}
          placeholder={"Search for..."}
        />
        <div onClick={handleClearText}>Clear</div>
      </div>
      {searchText.length !== 0 &&
        !isFetching &&
        !error &&
        document.activeElement === typeaheadInput.current && (
          <>
            {filteredOptions.map((option: Player) => (
              <p
                onClick={() => {
                  handleSelectPlayer(option);
                }}
                key={option.id}
                className=""
              >
                {option.name}
              </p>
            ))}
          </>
        )}
    </div>
  );
};

export default Typeahead;
