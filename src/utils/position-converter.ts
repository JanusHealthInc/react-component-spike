export default function getPositionData(shorthand: string | undefined): string {
  switch (shorthand) {
    case "LD":
      return "Left Defenseman";
    case "RD":
      return "Right Defenseman";
    case "LW":
      return "Left Winger";
    case "C":
      return "Center";
    case "RW":
      return "Right Winger";
    default:
      return "";
  }
}
