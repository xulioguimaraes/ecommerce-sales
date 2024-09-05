import { Container } from "./Container";
const data = {
  title: "new blue",
};

export const CorouselAnimateHover = () => {
  return (
    <Container>
      <div className="flex items-center w-full justify-center">
        <h1 className="font-semibold text-3xl tracking-[0.5rem]">{data.title}</h1>
      </div>
    </Container>
  );
};
