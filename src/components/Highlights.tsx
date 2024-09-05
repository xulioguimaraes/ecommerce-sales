import { Container } from "./Container";
const data = {
  title: "Destaques",
  data: [
    {
      image:
        "https://cdn.dooca.store/149698/files/01-3-1.png?v=1724071593&webp=0",
    },
    {
      image:
        "https://cdn.dooca.store/149698/files/03-6.png?v=1721071486&webp=0",
    },
  ],
};

export const Highlights = () => {
  return (
    <Container>
      <div className="flex items-center w-full justify-center mb-8">
        <h1 className="font-semibold text-3xl tracking-[0.5rem]">
          {data.title}
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {data.data.map((item) => (
          <div
            className="cursor-pointer overflow-hidden rounded-3xl"
            key={item.image}
          >
            <img
              className="rounded-3xl transition-transform duration-300 ease-in-out transform hover:scale-105"
              src={item.image}
              alt={item.image}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};
