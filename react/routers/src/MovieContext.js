import React, {createContext, useState} from "react";
export const MovieContext = createContext();
export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name:"Avatar 2",
            price:"Rs.150",
            id: "001",
        },
        {
            name:"Dunkirk",
            price:"Rs.150",
            id: "002",
        },
        {
            name:"TOPGUN:Maverick",
            price:"Rs.150",
            id: "003",
        },
        {
            name:"Interstellar",
            price:"Rs.150",
            id: "004",
        }
    ]);
    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
};
export default MovieContext