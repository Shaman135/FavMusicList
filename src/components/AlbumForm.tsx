import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useAlbums } from "../context/albumsContext";
import { Album } from "../models/album";
import { ulid } from "ulid";
import { ActionTypes } from "../models/actionTypes";

const AlbumForm: React.FC = () => {
  const defaultFormValues: Album = {
    id: "-1",
    added: new Date(),
    albumName: "",
    artistName: "",
    isFavorite: false,
  };
  const [formValues, setFormValues] = useState<Album>(defaultFormValues);
  const albumsContext = useAlbums();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    albumsContext.dispatch({
      type: ActionTypes.ADD,
      payload: { ...formValues, id: ulid(), added: new Date() },
    });
    setFormValues(defaultFormValues);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const isBtnDisabled = () =>
    formValues.albumName === "" || formValues.artistName === "";

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Artist Name"
            size="small"
            required
            fullWidth
            name="artistName"
            value={formValues.artistName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Album Name"
            size="small"
            required
            fullWidth
            name="albumName"
            value={formValues.albumName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            disabled={isBtnDisabled()}
          >
            Add to List
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AlbumForm;
