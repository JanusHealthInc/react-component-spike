import { toast } from "react-toastify";
import { Player } from "..";
import positionConverter from "../utils/position-converter";

type CardProps = {
  player: Player | null;
  isFetching: boolean;
  error: any;
};

const Card = ({ player, isFetching, error }: CardProps) => {
  const getFontColor = (position: string | undefined): string => {
    switch (position) {
      case "LD":
      case "RD":
        return "text-red-400";
      case "LW":
        return "text-blue-600";
      case "RW":
        return "text-orange-500";
      case "C":
        return "text-green-600";
      default:
        return "";
    }
  };

  return (
    <div className="w-100 mt-2 flex flex-col items-center justify-center border border-neutral-100 bg-neutral-100 rounded">
      <div className="mt-4 mb-2">
        {player && (
          <div
            className={`rounded border bg-white px-1 text-xs ${getFontColor(
              player?.position
            )}`}
          >
            {positionConverter(player?.position).toUpperCase()}
          </div>
        )}
      </div>
      <div className="my-2">
        <span className="font-semibold text-lg text-gray-600">
          {player?.name}
        </span>
      </div>
      <div className="mt-2 mb-4">
        <button
          className="border rounded bg-white border-gray-200 hover:border-gray-300 py-2 px-3 disabled:bg-gray-200"
          onClick={() => {
            player?.id
              ? toast.success("Automated review successful!")
              : toast.error("No player selected");
          }}
          disabled={isFetching || error || !player}
        >
          <span className="font-semibold text-gray-600">Review</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
