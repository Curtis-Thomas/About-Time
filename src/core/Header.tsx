import { Box, Typography } from "@mui/material";
import Timer from "../components/Timer";

function Header() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      {" "}
      <Typography>Header</Typography>
      <Timer />
    </Box>
  );
}

export default Header;
