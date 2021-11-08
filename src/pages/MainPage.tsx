import { Grid, SelectChangeEvent } from "@mui/material";
import React, { useEffect, useState } from "react";
import AlbumForm from "../components/AlbumForm";
import AlbumGrid from "../components/AlbumGrid";
import AlbumList from "../components/AlbumList";
import { useAlbums } from "../context/albumsContext";
import { Album } from "../models/album";
import Sorter from "../components/Sorter";
import { getComparatorFunction } from "../utils/functions";
import { sortByTypes } from "../models/sortByTypes";
import DisplaySwitch from "../components/DisplaySwitch";
import { ActionTypes } from "../models/actionTypes";

const MainPage: React.FC = () => {
  const albumsContext = useAlbums();
  const [isGrid, setIsGrid] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<sortByTypes>(sortByTypes.ID);
  const [descending, setDescending] = useState<boolean>(false);
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    albumsContext.dispatch({ type: ActionTypes.INIT });
    setAlbums([...albumsContext.state]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setAlbums(
      [...albumsContext.state].sort(getComparatorFunction(sortBy, descending))
    );
  }, [albumsContext.state, sortBy, descending]);

  const onSortByChange = (e: SelectChangeEvent) =>
    setSortBy(e.target.value as sortByTypes);

  const onDescendingChange = () => setDescending(!descending);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <AlbumForm />
      </Grid>
      <Grid item xs={12} md={6}>
        <DisplaySwitch isGrid={isGrid} onChange={() => setIsGrid(!isGrid)} />
        <Sorter
          sortBy={sortBy}
          descending={descending}
          onSortByChange={onSortByChange}
          onDescendingChange={onDescendingChange}
        />
        {isGrid ? <AlbumGrid albums={albums} /> : <AlbumList albums={albums} />}
      </Grid>
    </Grid>
  );
};

export default MainPage;
