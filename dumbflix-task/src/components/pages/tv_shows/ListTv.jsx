import { useEffect, useState } from "react";

export default function ListMovie () {
    const [dataTv, setDataTv] = useState();

    useEffect(() => {
        fetch(`https://api.npoint.io/4a8891249c5a1195708d`)
        .then((response) => response.json())
        .then((json)=> {
            setDataTv(json);
        });

        return ()=> {
            setDataTv(null);
        };
    }, []);

    return (
        <div className="bg-black px-5">
            <h1 className='font-bold text-white text-lg'>Movies</h1>

            <div className="grid grid-cols-6">
                {dataTv && dataTv.map ((index) => (
                    <div className="card-body px-5">
                        <div className='w-[200px] h-[300px]' >
                            <img className='h-full' src={index.moviecard} alt="Burger" />
                        </div>
                        <div>
                            <h1 className='mb-3'>{index.title}</h1>
                            <p>{index.years}</p>
                        </div>
                    </div> 
                ))}
            </div>
        </div>
    )
}