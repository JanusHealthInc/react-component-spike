export type Player = {
  id: number;
  league: number;
  season: number;
  name: string;
  team: string;
  position: string;
  height: number;
  weight: number;
};

export type CardProps = {
  player: Player | null;
  isFetching: boolean;
  error: any;
};

export type TypeaheadProps = {
  options: Player[];
  isFetching: boolean;
  error: any;
  onSelect: (player: Player | null) => void;
};
