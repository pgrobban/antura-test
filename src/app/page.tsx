import Typography from "@mui/material/Typography";
import RandomUserGenerator from "../components/RandomUserGenerator";

export default function Home() {
  return (
    <main>
      <Typography variant="h1" style={{ fontSize: 24 }}>
        Random user generator
      </Typography>
      <RandomUserGenerator />
    </main>
  );
}
