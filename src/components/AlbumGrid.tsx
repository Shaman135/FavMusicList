import { Grid } from "@mui/material";
import React from "react";
import { Album } from "../models/album";
import AlbumCard from "./AlbumCard";

type AlbumGridProps = {
  albums: Album[];
};

const AlbumGrid: React.FC<AlbumGridProps> = ({ albums }) => {
  return (
    <Grid container spacing={2}>
      {albums.map((album) => (
        <Grid key={album.id} item xs={12} md={6}>
          <AlbumCard album={album} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AlbumGrid;
