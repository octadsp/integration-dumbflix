import Navbar from "../components/pages/Navbar";
import Body from "../components/pages/dashboard/Body"
import ListTv from "../components/pages/tv_shows/ListTv"

import ImageShows from "../assets/tv_series/moneyBanner.png"

const TvSeries = () => {
    return (
        <>
        <Navbar />
        <Body image={ImageShows} title={'La Casa De Papel'} description={'Money Heist is a crime drama on Netflix - originally called La Casa de Papel. Money Heist season 3 has just been released by the streaming service. The plot reads: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.'} years={'2019'} category={'TV Series'}/>
        <ListTv />
        </>
    )
}

export default TvSeries;
