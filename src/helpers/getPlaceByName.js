import GridPlaces from "../destiny/pages/components/GridPlaces";

export const getPlaceByName = (name = "") => {
  name = name.toLocaleLowerCase().trim;

  if (name.length === 0) return [];

  return GridPlaces.filter(
    place => place.name.toLocaleLowerCase().includes(name)
  )
};
