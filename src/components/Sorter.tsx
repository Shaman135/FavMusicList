import {
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  SelectChangeEvent,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { sortByTypes } from "../models/sortByTypes";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

type SorterProps = {
  sortBy: sortByTypes;
  descending: boolean;
  onSortByChange: (e: SelectChangeEvent) => void;
  onDescendingChange: () => void;
};

const Sorter: React.FC<SorterProps> = ({
  sortBy,
  descending,
  onSortByChange,
  onDescendingChange,
}) => {
  return (
    <Box mb={2}>
      <Stack spacing={1} direction="row">
        <FormControl fullWidth size="small">
          <InputLabel id="sort-label">Sort by</InputLabel>
          <Select
            labelId="sort-label"
            id="sort-select"
            value={sortBy}
            label="Sort by"
            onChange={onSortByChange}
          >
            <MenuItem value={sortByTypes.ID}>Id</MenuItem>
            <MenuItem value={sortByTypes.ALBUM_NAME}>Album name</MenuItem>
            <MenuItem value={sortByTypes.ADDED}>Added</MenuItem>
          </Select>
        </FormControl>
        <IconButton size="large" onClick={onDescendingChange}>
          {descending ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Sorter;
