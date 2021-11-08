import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  TableRow,
  TableBody,
} from "@mui/material";
import React from "react";
import { Album } from "../models/album";
import AlbumListRow from "./AlbumListRow";

type AlbumListProps = {
  albums: Album[];
};

const AlbumList: React.FC<AlbumListProps> = ({ albums }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Album Name</TableCell>
            <TableCell>Best of the best</TableCell>
            <TableCell>Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {albums.map((album: Album) => (
            <AlbumListRow key={album.id} album={album} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AlbumList;
