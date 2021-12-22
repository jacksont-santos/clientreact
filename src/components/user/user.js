import axios from "axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "./user.css";

const User = () => {
    const { token } = useParams();

    const [list, setList] = useState([]);

    const getList = async ()=>{
        await axios.get('/movie/findMany')
        .then(function (response){
            console.log(response);
             setList(response.data);
    });
};

    const getProfile = async () => {
        var perfil = await axios.get('/auth/profile', token)
        .then(function (response) {
          console.log(response);
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
      };
    useEffect(() => {
        getList();
        getProfile();
      }, []);

      const prof = {
          nome: 'Jackson Tavares',
          email: 'jack0702@hotmail.com.br',
          assistidos: ['Addams Family Reunion', "Antz", "Armageddon", "The Lion King II: Simba's Pride", "A Bug's Life", "City of Angels",]
      };
        var lista = [];
    return (
        <div>
            <h1>{prof.nome}</h1>
            <h3>{prof.email}</h3>
            {list.map((film) => (
                <div  className="item"key={film.id}>
                    <Link to={`/film/${film.id}`}>
                        <img src={film.cover} alt="cover"></img>
                    </Link>
                </div>
            ))}
        </div>
    )
};
export default User;