import { useState, useMemo, useRef } from "react";
import { Player, TypeaheadProps } from "..";

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
      <div className="cursor-pointer flex flex-row justify-between items-center rounded border border-black">
        <div className="flex flex-row justify-start items-center">
          {searchText.length === 0 && <MagnifyingGlassIcon />}
          <input
            className="cursor-pointer border-transparent pl-1 outline-none"
            ref={typeaheadInput}
            type="text"
            onChange={handleOnChange}
            disabled={isFetching || error}
            placeholder={"Search for..."}
          />
        </div>
        {searchText.length !== 0 && (
          <div
            className="flex justify-center items-center border-l mr-1"
            onClick={handleClearText}
          >
            {/* Had to use an nbsp to make the end adornment height work */}
            {"\u00A0"}
            <XMarkIcon />
          </div>
        )}
      </div>
      {searchText.length !== 0 &&
        !isFetching &&
        !error &&
        document.activeElement === typeaheadInput.current && (
          <div className="absolute rounded overflow-y-auto border border-black bg-white">
            {filteredOptions.map((option: Player) => (
              <p
                onClick={() => {
                  handleSelectPlayer(option);
                }}
                key={option.id}
                className="hover:bg-gray-100"
              >
                {option.name}
              </p>
            ))}
          </div>
        )}
    </div>
  );
};

const MagnifyingGlassIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="3"
    stroke="currentColor"
    className="cursor-pointer w-4 h-4 text-gray-500 ml-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
);

const XMarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="3"
    stroke="currentColor"
    className="cursor-pointer w-4 h-4 text-gray-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default Typeahead;
