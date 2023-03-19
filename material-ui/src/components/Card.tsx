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

const CenteredCard = styled(Card)`
  display: flex;
  justify-content: center;
`;

const PositionText = styled(Typography)`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  border-width: 1px;
  border-color: black;
  border-radius: 0.25rem;
`;

const NameText = styled(Typography)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const CenteredCardContent = styled(CardContent)`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ReviewButton = styled(Button)`
  margin-top: 0.5rem;
  margin-bottom 1rem;
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
    <CenteredCard
      variant="outlined"
      sx={{ minWidth: 275, backgroundColor: "#F5F5F5" }}
    >
      <CenteredCardContent>
        <PositionText
          sx={{
            fontSize: "0.75rem",
            borderColor: "#e5e7eb",
            borderWidth: "1px",
            backgroundColor: "white",
            borderRadius: "rounded",
            padding: "1px",
          }}
          borderRadius="rounded"
          color={getFontColor(player?.position)}
        >
          {positionConverter(player?.position).toUpperCase()}
        </PositionText>
        <NameText
          sx={{
            fontWeight: 600,
            color: "#4B5563",
            fontSize: "1.125rem",
            lineHeight: "1.175rem",
          }}
        >
          {player?.name}
        </NameText>
        <ReviewButton
          variant="outlined"
          disabled={isFetching || error || !player}
          sx={{ borderColor: "lightgray", backgroundColor: "white" }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              color: "#4B5563",
              padding: "1px",
            }}
          >
            Review
          </Typography>
        </ReviewButton>
      </CenteredCardContent>
    </CenteredCard>
  );
};

export default _Card;
