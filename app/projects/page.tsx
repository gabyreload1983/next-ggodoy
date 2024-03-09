import { getProjects } from "../lib/data";
import Card from "../ui/projects/card";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <main className="p-10 md:max-w-screen-2xl md:mx-auto">
      <div className="border-b-2 border-primary pb-5 max-w-6xl mx-auto mb-10">
        <p className="text-2xl">This is what I do... and love</p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.id} project={p} />
        ))}
      </div>
    </main>
  );
}
