import {
  TableRow,
  TableCell,
  IconButton,
  Box,
  Collapse,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Album } from "../models/album";
import { ensureCorrectDateDisplay } from "../utils/functions";
import AlbumFavoriteIcon from "./AlbumFavoriteIcon";
import AlbumRemoveIcon from "./AlbumRemoveIcon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

type AlbumListRowProps = {
  album: Album;
};

const AlbumListRow: React.FC<AlbumListRowProps> = ({ album }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{album.albumName}</TableCell>
        <TableCell>
          <AlbumFavoriteIcon album={album} />
        </TableCell>
        <TableCell>
          <AlbumRemoveIcon album={album} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography gutterBottom>
                Artist: {album.artistName}
              </Typography>
              <Typography gutterBottom>
                Added: {ensureCorrectDateDisplay(album.added)}
              </Typography>
              <Typography sx={{ mb: 1.5, fontSize: 10 }} color="text.secondary">
                Id: {album.id}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default AlbumListRow;
