import {FC} from "react";
import {IMovie} from "../../interfaces/movie.interface";
import {useNavigate} from "react-router-dom";

interface IProps{
    movie: IMovie;

}

const Movie: FC<IProps> = ({movie}) => {
    const navigate = useNavigate();
    const {id, original_title} = movie;

    return (
        <div>
            <div>id: {id}</div>
            <div>original_title: {original_title}</div>
            <button onClick={()=> navigate(`${id}`, {state:{...movie}})}>More information</button>
        </div>
    );
};

export {Movie}