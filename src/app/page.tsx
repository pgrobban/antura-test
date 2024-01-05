"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "../app/globals.css";
import RandomUserGenerator from "../components/RandomUserGenerator";

const menuCutoffPixels = 900; // show menu on medium or smaller screen

export default function Home() {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
  const [showDrawerInGrid, setShowDrawerInGrid] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // We want to show the drawer button based on window width but because of SSR we don't have access to window on first render
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setShowDrawerInGrid(width >= menuCutoffPixels);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showMenuButton =
    typeof windowWidth === "number" && windowWidth < menuCutoffPixels;

  const toggleDrawerOpen = (forceOpenOrClose?: boolean) =>
    setDrawerOpen(
      typeof forceOpenOrClose === "boolean" ? forceOpenOrClose : !drawerOpen
    );

  return (
    <main>
      <AppBar position="static">
        <Toolbar>
          {showMenuButton && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => toggleDrawerOpen()}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Random user generator
          </Typography>
        </Toolbar>
      </AppBar>
      <RandomUserGenerator
        showDrawerInGrid={showDrawerInGrid}
        drawerOpen={drawerOpen}
        toggleDrawerOpen={toggleDrawerOpen}
      />
    </main>
  );
}
