import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./list.css";

const List =  () => {

    const [list, setList] = useState([]);

    const getList = async ()=>{
        await axios.get('/movie/findMany')
        .then(function (response){
            console.log(response);
             setList(response.data);
    });
};
    useEffect(() => {
    getList();
  }, []);

    return (
        <div className="lista">
            <Link to="/">
            <div className="pi">Página Inicial</div>
            </Link>
            {list.map((film) => (
                <div  className="item"key={film.id}>
                    <Link to={`/film/${film.id}`}>
                        <img src={film.cover} alt="cover"></img>
                    </Link>
                </div>
            ))}
        </div>
    );
};
export default List;