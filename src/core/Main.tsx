import { Box, Button, Typography } from "@mui/material";

function Main() {
  return (
    <Box>
      <Typography>Main</Typography>
      <Box>
        <Typography>Choose timer</Typography>
      </Box>
      <Box
        sx={{
          //   backgroundColor: "cyan",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Button sx={{ backgroundColor: "white", color: "black", p: 5 }}>
          25 / 5
        </Button>
        <Button sx={{ backgroundColor: "white", color: "black", p: 5 }}>
          40 / 10
        </Button>
        <Button sx={{ backgroundColor: "white", color: "black", p: 5 }}>
          progressive
        </Button>
      </Box>
    </Box>
  );
}

export default Main;
