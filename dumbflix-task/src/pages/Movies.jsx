import Navbar from "../components/pages/Navbar";
import Body from "../components/pages/dashboard/Body"
import ListMovie from "../components/pages/movies/ListMovie"

import MoviesImage from "../assets/image_movies/jokerbanner.png"

const Movies = () => {
    return (
        <>
        <Navbar />
        <Body image={MoviesImage} title={'Joker'} description={'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.'} years={'2019'} category={'Movies'}/>
        <ListMovie />
        </>
    )
}

export default Movies;