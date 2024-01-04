import Typography from "@mui/material/Typography";
import RandomUserGenerator from "../components/RandomUserGenerator";
import "../app/globals.css";

export default function Home() {
  return (
    <main>
      <Typography variant="h1">Random user generator</Typography>
      <RandomUserGenerator />
    </main>
  );
}
