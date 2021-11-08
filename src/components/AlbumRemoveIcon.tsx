import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Tooltip, IconButton } from "@mui/material";
import { Album } from "../models/album";
import { useAlbums } from "../context/albumsContext";
import { ActionTypes } from "../models/actionTypes";

type AlbumRemoveIconProps = {
  album: Album;
};

const AlbumRemoveIcon: React.FC<AlbumRemoveIconProps> = ({ album }) => {
  const albumsContext = useAlbums();

  const onDeleteClick = () => {
    albumsContext.dispatch({
      type: ActionTypes.DELETE,
      payload: album,
    });
  };

  return (
    <Tooltip title="Delete">
      <IconButton onClick={onDeleteClick}>
        <DeleteForeverIcon />
      </IconButton>
    </Tooltip>
  );
};

export default AlbumRemoveIcon;
