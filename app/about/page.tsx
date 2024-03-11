import { getAboutGallery } from "../lib/data";
import ImageContainer from "../ui/about/ImageContainer";

export default async function About() {
  const abouts = await getAboutGallery();

  return (
    <main className="p-10 md:max-w-screen-2xl md:mx-auto">
      <div className="border-b-2 border-primary pb-5 max-w-6xl mx-auto mb-10">
        <p className="text-2xl text-center lg:text-start">
          Besides programming... I like to travel, swim, play guitar and share
          life with those I love.
        </p>
      </div>
      <div className="px-1 my-3 grid grid-cols-gallery auto-rows-[20px]">
        {abouts.map((image) => (
          <ImageContainer key={image.id} image={image} />
        ))}
      </div>
    </main>
  );
}
