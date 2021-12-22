import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from 'axios';
import "./card.css";
import {Link} from "react-router-dom";

const Card = () => {
  const { id } = useParams();
  const [film, setFilm] = useState({});

  const getFilm = async () => {
    await axios.get(`/movie/findUnique/${id}`)
      .then(function (response){
        setFilm(response.data);
    });
  };
  useEffect(() => {
    getFilm();
  }, []);

  return (
      <div className="card" key={film.id}>
        <Link to="/">
            <p className="p1">Página Inicial</p>
        </Link>
        <img src={film.cover} alt="cover"></img>
        <div>
          <h1>{film.title}</h1>
          <h1>{film.year}</h1><br></br>
        <h3>Resumo: </h3><h2>{film.resume}</h2><br></br>
        <h3>Elenco: </h3><h2>{film.cast}</h2><br></br>
        <h3>Gênero: </h3><h2>{film.genres}</h2><br></br>
        </div>
      </div>
  );
};
export default Card;
