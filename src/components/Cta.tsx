import { FaFacebookF } from "react-icons/fa";
import { Container } from "./Container";
import {
  FaInstagram,
  FaPinterest,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

// eslint-disable-next-line react/jsx-key
const dataSocial = [
  { icon: <FaFacebookF color="white" size={44} /> },
  { icon: <FaXTwitter color="white" size={44} /> },
  { icon: <FaInstagram color="white" size={44} /> },
  { icon: <FaPinterest color="white" size={44} /> },
  { icon: <FaYoutube color="white" size={44} /> },
  { icon: <FaTiktok color="white" size={44} /> },
];

export const Cta = () => {
  return (
    <div className="bg-black rounded-3xl my-8 py-6  mx-2 sm:mx-0 lg:mx-10 md:mx-5">
      <Container className="sm:p-2">
        <div className="flex flex-col lg:flex-row justify-between items-center ">
          <div className="p-4">
            <div>
              <h1 className="text-white font-bold text-3xl">
                Seu corpo, nossa inspiração! (:{" "}
              </h1>
              <h1 className="text-white font-light text-3xl">
                <strong className=" font-bold text-3xl">Inscreva-se</strong> e
                fique por dentro das novidades.
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 pt-6">
              <input
                className="bg-black border py-2 px-4 rounded-full text-white"
                type="text"
                placeholder="Seu Nome"
              />
              <input
                className="bg-black border py-2 px-4 rounded-full text-white"
                type="text"
                placeholder="Seu Email"
              />
              <button
                type="button"
                className="bg-white whitespace-nowrap text-black py-2 px-8 rounded-full hover:bg-sky-700"
              >
                fica por dentro de tudo
              </button>
            </div>
          </div>
          <div className="flex gap-1 md:mt-8 mt-8 lg:mt-0 flex-wrap ">
            {dataSocial.map((item, index) => (
              <button className="rounded-3xl p-3 hover:bg-sky-500" key={index}>
                {item.icon}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
