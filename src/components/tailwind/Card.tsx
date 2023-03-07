import { CardProps } from "../..";
import "../../../styles/tailwind.css";
import positionConverter from "../../utils/position-converter";

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

  if (isFetching || error) return null;

  return (
    <div className="mt-2 w-full flex flex-col items-center justify-center border border-r-black bg-neutral-100 rounded">
      <div className="mt-4 mb-2">
        <div
          className={`rounded border border-gray-500 bg-white px-1 text-xs ${getFontColor(
            player?.position
          )}`}
        >
          {positionConverter(player?.position).toUpperCase()}
        </div>
      </div>
      <div className="my-2">
        <span className="font-semibold text-lg text-gray-700">
          {player?.name}
        </span>
      </div>
      <div className="mt-2 mb-4">
        <button className="border rounded bg-white border-gray-500 hover:border-black py-2 px-3">
          <span>Review</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
