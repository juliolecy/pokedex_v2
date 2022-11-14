import * as k from "../styles/home";
import { useEffect, useRef } from "react";
import useAOS from "../effects/useAos";
import { BsChevronDoubleDown } from "react-icons/bs";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { fetchPokemonList } from "../services/fetchPokemon";
import { Pokemon } from "../types/PokemonTypes";

interface HomeProps {
  data: Pokemon[];
}

export default function Home({ data }: HomeProps) {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useAOS({ duration: 2000 });
  }, []);

  const pokedex = useRef(null);
  const handleScroll = () => {
    pokedex.current.scrollIntoView();
  };

  const formatId = (id: number) => {
    if (id < 10) return `#00${id}`;
    else if (id <= 10 && id < 99) return `#0${id}`;
    else return `#${id}`;
  };

  return (
    <>
      <k.Container>
        <k.Title data-aos="zoom-in-up">Pokedex</k.Title>
        <span>discover a new world</span>
        <BsChevronDoubleDown
          onClick={handleScroll}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          data-aos-delay="3000"
        />
      </k.Container>
      <k.Pokedex ref={pokedex}>
        <ol>
          {data.map((pokemon) => (
            <li key={pokemon.id} className={pokemon.types[0].type.name}>
              <span className="number">{formatId(pokemon.id)}</span>
              <span className="name">{pokemon.name}</span>

              <k.PokemonDetail>
                <ol>
                  {pokemon.types.map((type) => (
                    <li key={type.type.name}>{type.type.name}</li>
                  ))}
                </ol>
                <k.PokemonPerfil src={pokemon.sprites.front_default} />
              </k.PokemonDetail>
            </li>
          ))}
        </ol>
      </k.Pokedex>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const offset = 0;
  const baseUrl = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`;

  const data = await fetchPokemonList(0).then((data) => data);

  // .then((response) => response.json())
  // .then((allpokemons) => {
  //   allpokemons.results.forEach((pokemon: Result) => {
  //     fetch(pokemon.url)
  //       .then((res) => res.json())
  //       .then((pokeData) => pokeData);
  //   });
  // });

  return {
    props: { data },
  };
};
