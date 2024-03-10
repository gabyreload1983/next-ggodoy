import { projects, aboutGallery } from "./dataBase";

export const getProjects = async () => {
  return projects;
};

export const getAboutGallery = async () => {
  return aboutGallery;
};
