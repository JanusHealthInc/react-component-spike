import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, Typography } from "@mui/material";
import positionConverter from "../utils/position-converter";
import { styled } from "@mui/material/styles";
import { Player } from "..";

export type CardProps = {
  player: Player | null;
  isFetching: boolean;
  error: any;
};

const PositionText = styled(Typography)`
  border-width: 1px;
  border-color: black;
`;

const ReviewButton = styled(Button)`
  color: black;
`;

const _Card = ({ player, isFetching, error }: CardProps) => {
  const getFontColor = (position: string | undefined): string => {
    switch (position) {
      case "LD":
      case "RD":
        return "red";
      case "LW":
        return "blue";
      case "RW":
        return "orange";
      case "C":
        return "green";
      default:
        return "";
    }
  };

  if (isFetching || error) return null;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <PositionText
          sx={{ fontSize: 14 }}
          color={getFontColor(player?.position)}
        >
          {positionConverter(player?.position).toUpperCase()}
        </PositionText>
        <Typography
          sx={{
            fontWeight: 600,
            color: "darkslategrey",
            fontSize: "1.125rem",
            lineHeight: "1.175rem",
          }}
        >
          {player?.name}
        </Typography>
        <ReviewButton
          variant="outlined"
          disabled={isFetching || error || !player}
        >
          <Typography
            sx={{ fontWeight: 600, color: "darkslategrey", padding: "" }}
          >
            Review
          </Typography>
        </ReviewButton>
      </CardContent>
    </Card>
  );
};

export default _Card;
