import { Album } from "../models/album";
import { sortByTypes } from "../models/sortByTypes";

export const getComparatorFunction = (
  type: string,
  descending: boolean
): ((a: Album, b: Album) => number) => {
  switch (type) {
    case sortByTypes.ADDED:
      return (a: Album, b: Album): number =>
        descending
          ? new Date(b.added).getTime() - new Date(a.added).getTime()
          : new Date(a.added).getTime() - new Date(b.added).getTime();
    default:
      const prop =
        type === sortByTypes.ALBUM_NAME
          ? sortByTypes.ALBUM_NAME
          : sortByTypes.ID;
      return (a: Album, b: Album): number =>
        descending
          ? b[prop].localeCompare(a[prop], "en", { sensitivity: "base" })
          : a[prop].localeCompare(b[prop], "en", { sensitivity: "base" });
  }
};

export const ensureCorrectDateDisplay = (date: string | Date): string =>
  new Date(date).toLocaleString();
