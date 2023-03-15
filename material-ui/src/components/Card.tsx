import { CardProps } from "..";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, Typography } from "@mui/material";
import positionConverter from "../utils/position-converter";
import { styled } from "@mui/material/styles";

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
        <Typography
          sx={{ fontSize: 14 }}
          color={"red"}
          // color={getFontColor(player?.position)}
        >
          {positionConverter(player?.position).toUpperCase()}
        </Typography>
        <Typography>{player?.name}</Typography>
        <ReviewButton variant="outlined" disabled={isFetching}>
          <Typography>Review</Typography>
        </ReviewButton>
      </CardContent>
    </Card>
  );
};

export default _Card;
