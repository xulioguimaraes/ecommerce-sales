import { SlDirections } from "react-icons/sl";
import { Container } from "./Container";
import { IoPricetagOutline } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";

const data = [
  {
    icon: <SlDirections color={"#ff27af"} size={40} />,
    title: "Frete Grátis para Sul e Sudeste",
    subtitle: "em compras acima de R$359",
  },
  {
    icon: <IoPricetagOutline color={"#ff27af"} size={40} />,
    title: "10% off em compras",
    subtitle: "usando o cupom aguete10",
  },
  {
    icon: <TfiReload color={"#ff27af"} size={40} />,
    title: "primeira troca grátis*",
    subtitle: "consulte regulamento",
  },
  {
    icon: <TfiReload color={"#ff27af"} size={40} />,
    title: "Parcele em até 6x sem juros",
    subtitle: "*avaliar parcela mínima",
  },
];

export const InfoSales = () => {
  return (
    <Container>
      <div className="flex sm:flex-col md:flex-row items-center justify-center lg:flex-row gap-4">
        {data.map((item) => (
          <div key={item.title} className="flex gap-4 lg:w-72 items-center">
            {item.icon}
            <div>
              <h6 className="font-bold text-lg leading-5">{item.title}</h6>
              <p className="text-gray-500">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
