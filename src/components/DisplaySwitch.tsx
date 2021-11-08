import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

type DisplaySwitchProps = {
  isGrid: boolean;
  onChange: () => void;
};

const DisplaySwitch: React.FC<DisplaySwitchProps> = ({ isGrid, onChange }) => {
  return (
    <Box mb={2}>
      <Button variant="outlined" onClick={onChange} fullWidth>
        Switch display to {isGrid ? "table" : "grid"}
      </Button>
    </Box>
  );
};

export default DisplaySwitch;
