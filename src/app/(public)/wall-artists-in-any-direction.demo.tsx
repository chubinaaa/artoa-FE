import { WallArtistCard } from "@/components/artists/wall-artists-card";

const data = [
  {
    id: 1,
    name: "Name Surname",
    imageUrl: "/wall-artists/1.png",
    handle: "@handle",
    artStyles: ["3D Art", "Illustration", "Mural"],
    description:
      "Get started with our Warehouse Management Suite (WMS) for free on your first device.",
    href: "",
    rating: 4.5,
  },
  {
    id: 1,
    name: "Name Surname",
    imageUrl: "/wall-artists/2.png",
    handle: "@handle",
    artStyles: ["Graffiti", "Stencil", "Mural"],
    description:
      "Get started with our Warehouse Management Suite (WMS) for free on your first device.",
    href: "",
    rating: 4.5,
  },
  {
    id: 1,
    name: "Name Surname",
    imageUrl: "/wall-artists/3.png",
    handle: "@handle",
    artStyles: ["3D Art", "Illustration"],
    description:
      "Get started with our Warehouse Management Suite (WMS) for free on your first device.",
    href: "",
    rating: 4.5,
  },
];

export function WallArtistInAnyDirectionDemo() {
  return (
    <div className="flex items-center justify-center gap-4">
      {data.map((d) => (
        <WallArtistCard key={d.id} {...d} />
      ))}
    </div>
  );
}
