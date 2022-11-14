import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
  background-image: url("/images/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-position-y: center;
  background-position-x: -52rem;

  span {
    text-shadow: 0px -1px 12px rgb(0 0 0);
    color: #fff;
    margin: 0 auto;
    font-size: 2rem;
    font-family: "Montserrat", sans-serif;
  }

  svg {
    color: #fff;
    position: absolute;
    left: 50%;
    top: 72%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    box-shadow: 0px -1px 12px rgb(0 0 0 / 54%);
  }

  @media screen and (min-width: 450px) {
    background-position-x: center;
  }
`;

export const Title = styled.h1`
  margin: 5rem auto;
  color: #fff;
  font-family: "playfair display";
  text-shadow: 0px -1px 12px rgb(0 0 0);
  font-size: 3.2rem;
  font-weight: 100;
  letter-spacing: 0.4rem;
`;

export const Pokedex = styled.section`
  min-height: 100vh;
  ol {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0;
    padding: 0;
    list-style: none;

    .normal {
      background-color: #a6a877;
    }

    .grass {
      background-color: #77c850;
    }

    .fire {
      background-color: #ee7f30;
    }

    .water {
      background-color: #678fee;
    }

    .electric {
      background-color: #f7cf2e;
    }

    .ice {
      background-color: #98d5d7;
    }

    .ground {
      background-color: #dfbf69;
    }

    .flying {
      background-color: #a98ff0;
    }

    .poison {
      background-color: #a040a0;
    }

    .fighting {
      background-color: #bf3029;
    }

    .psychic {
      background-color: #f65687;
    }

    .dark {
      background-color: #725847;
    }

    .rock {
      background-color: #b8a137;
    }

    .bug {
      background-color: #a8b720;
    }

    .ghost {
      background-color: #6e5896;
    }

    .steel {
      background-color: #b9b7cf;
    }

    .dragon {
      background-color: #6f38f6;
    }

    .fairy {
      background-color: #f9aec7;
    }

    li {
      display: flex;
      flex-direction: column;
      margin: 0.5rem;
      padding: 1rem;
      border-radius: 1rem;
      .number {
        color: #000;
        opacity: 0.3;
        text-align: right;
        font-size: 1.5rem;
      }

      .name {
        color: #fff;
        margin-bottom: 0.25rem;
        text-transform: capitalize;
        font-family: "Playfair Display";
        font-size: 1.8rem;
      }
    }

    @media screen and (min-width: 380px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 576px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;

export const PokemonDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    flex-direction: column;
    display: flex;

    li {
      color: #fff;
      padding: 0.5rem 0.8rem;
      margin: 0.25rem 0;
      font-size: 1.5rem;
      border-radius: 1rem;
      -webkit-filter: brightness(1.1);
      text-align: center;
      background: rgb(0 0 0 / 5%);
    }
  }
`;

export const PokemonPerfil = styled(Image).attrs({
  width: 200,
  height: 200,
  alt: "lala",
})`
  max-width: 100%;
  height: 70px;
`;
