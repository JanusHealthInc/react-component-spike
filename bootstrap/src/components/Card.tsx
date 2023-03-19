import { toast } from "react-toastify";
import { Player } from "..";
import positionConverter from "../utils/position-converter";
import "./Card.css";

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
        return "text-danger";
      case "LW":
        return "text-primary";
      case "RW":
        return "text-warning";
      case "C":
        return "text-success";
      default:
        return "";
    }
  };

  return (
    <div className="w-100 mt-2 d-flex flex-column align-items-center justify-content-center border border-light bg-light rounded">
      <div className="mt-4 mb-2">
        {player && (
          <div
            className={`rounded border bg-white px-1 h-position fs-position mt-0 pt-0 ${getFontColor(
              player?.position
            )}`}
          >
            {positionConverter(player?.position).toUpperCase()}
          </div>
        )}
      </div>
      <div className="my-2">
        <span className="text-lg text-dark fs-text fw-text">
          {player?.name}
        </span>
      </div>
      <div className="mt-2 mb-4">
        <button
          className="btn py-2 px-3 border rounded bg-white border-muted hover:border-muted disabled:bg-light"
          onClick={() => {
            player?.id
              ? toast.success("Automated review successful!")
              : toast.error("No player selected");
          }}
          disabled={isFetching || error || !player}
        >
          <span className="text-dark fs-text fw-text">Review</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
