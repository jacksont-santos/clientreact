import React, { useState } from "react";
import { useParams } from "react-router";
import axios from 'axios';

const Card = () => {
  const { id } = useParams();
  const [film, setFilm] = useState({});

  const getFilm = async () => {
    await axios.get(`/movie/findUnique/${id}`)
      .then(function (response){
        setFilm(response.data)
    });
  };
  getFilm();
  console.log(film);

  return (
      <div className="card" key={film.id}>
        <img src={film.cover} alt="cover"></img>
        <p className="p1">Filme:</p> <p className="p2">{film.title}</p>
        <p>Ano: {film.year}</p>
        <p>Resumo: {film.resume}</p>
        <p>Elenco: {film.cast}</p>
        <p>Gênero: {film.genres}</p>
      </div>
  );
};
export default Card;
