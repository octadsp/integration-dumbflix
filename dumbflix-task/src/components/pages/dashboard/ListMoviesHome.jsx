
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const ListMoviesHome = () => {
    const navigate = useNavigate();
    const [dataMovie, setDataMovie] = useState([]);
    
    useEffect(() => {
        fetch(`https://api.npoint.io/4a8891249c5a1195708d`)
        .then((response) => response.json())
        .then((json)=> {
            setDataMovie(json);
        });

        return ()=> {
            setDataMovie(null);
        };
    }, []);

    const isUserLoggin = JSON.parse(localStorage.getItem("userLoggedIn"))?.isLoggin

    const isLoggin = (each) => {
        console.log(isUserLoggin);
        if (isUserLoggin) {
             navigate (`detail/${each.id}`)
        } else {
            return document.querySelector('#login').click()
        }
    }
    

    
    return (
        <div className="bg-black px-5">
            <h1 className='font-bold text-white text-lg'>Movies</h1>

            <div className="carousel">
                {Array.isArray(dataMovie) && dataMovie.map ((each) => (
                    <a key={each.id} onClick={()=> isLoggin(each)} className="carousel-item card-body px-5 cursor-pointer">
                        <div className='w-[200px] h-[300px]' >
                            <img className='h-full' src={each.moviecard} alt="Burger" />
                        </div>
                        <div>
                            <h1 className='mb-3'>{each.title}</h1>
                            <p>{each.years}</p>
                        </div>
                    </a> 
                ))}
            </div>
        </div>
    )
}

export default ListMoviesHome;