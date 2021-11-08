import React from "react";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { Album } from "../models/album";
import AlbumFavoriteIcon from "./AlbumFavoriteIcon";
import AlbumRemoveIcon from "./AlbumRemoveIcon";
import { ensureCorrectDateDisplay } from "../utils/functions";

type AlbumCardProps = {
  album: Album;
};

const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
          id: {album.id}
        </Typography>
        <Typography variant="h5" component="div">
          {album.albumName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {album.artistName}
        </Typography>
        <Typography variant="body2">
          Added: {ensureCorrectDateDisplay(album.added)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <AlbumFavoriteIcon album={album} />
        <AlbumRemoveIcon album={album} />
      </CardActions>
    </Card>
  );
};

export default AlbumCard;
