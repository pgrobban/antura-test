import Typography from "@mui/material/Typography";
import RandomUserCard from "../components/RandomUserCard";

export default function Home() {
  return (
    <main>
      <Typography variant="h1" style={{ fontSize: 24 }}>
        Random user generator
      </Typography>
      <RandomUserCard />
    </main>
  );
}
