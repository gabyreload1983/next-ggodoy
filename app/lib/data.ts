import { heroImageUrl, projects, aboutGallery } from "./dataBase";

export const getHeroImageUrl = () => {
  return heroImageUrl;
};

export const getProjects = async () => {
  return projects;
};

export const getAboutGallery = async () => {
  return aboutGallery;
};
