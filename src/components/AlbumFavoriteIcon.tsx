import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton, Tooltip } from "@mui/material";
import { Album } from "../models/album";
import { useAlbums } from "../context/albumsContext";
import { ActionTypes } from "../models/actionTypes";

type AlbumFavoriteIconProps = {
  album: Album;
};

const AlbumFavoriteIcon: React.FC<AlbumFavoriteIconProps> = ({ album }) => {
  const albumsContext = useAlbums();

  const onFavoriteClick = () => {
    albumsContext.dispatch({
      type: ActionTypes.UPDATE,
      payload: { ...album, isFavorite: !album.isFavorite },
    });
  };

  return (
    <>
      {album.isFavorite ? (
        <Tooltip title="Remove from favorites">
          <IconButton onClick={onFavoriteClick}>
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Add as favorite">
          <IconButton onClick={onFavoriteClick}>
            <FavoriteBorderIcon />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};

export default AlbumFavoriteIcon;
