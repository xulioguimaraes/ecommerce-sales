import Link from "next/link";
import React from "react";
import { Container } from "@/components/Container";
const data = [
  {
    title: "Atendimento",
    order: 1,
    links: [
      "027 99253-6012",
      "027 99253-6012",
      "sac@useaguaazul.com.br",
      "Segunda à Sexta de 8:00 às 17:00",
    ],
  },

  {
    title: "Institucional",
    order: 2,
    links: [
      "institucional",
      "Quem somos",
      "Privacidade",
      "Contato",
      "Termos & condições",
    ],
  },
  {
    title: "Ajuda",
    order: 3,
    links: [
      "Privacidade",
      "Tabela de medidas",
      "Quem somos",
      "Termos & condições",
      "FAQ",
      "Contato",
      "Como lavar sua peça?",
      "Regras de uso do GiftBack",
      "Politica de Troca e Devolução",
      "Quero solicitar a Troca / Estorno",
    ],
  },
  {
    title: "Minha conta",
    order: 4,
    links: ["Minha conta", "Meu carrinho", "Meus pedidos"],
  },
];

export function Footer() {
  return (
    <Container>
      <div className="grid  grid-cols-1 gap-10 pt-10 mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-4">
        {data.map((item) => (
          <div key={item.title} className="flex flex-col gap-2">
            <h6 className="text-base font-bold text-[#50424b]">{item.title}</h6>
            {item.links.map((link) => (
              <Link key={link} href={link} className="text-[#6d6d6d]">
                {link}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
        Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
        <a href="https://web3templates.com/" target="_blank" rel="noopener">
          Web3Templates.
        </a>{" "}
        Illustrations from{" "}
        <a href="https://www.glazestock.com/" target="_blank" rel="noopener ">
          Glazestock
        </a>
      </div>
    </Container>
  );
}
