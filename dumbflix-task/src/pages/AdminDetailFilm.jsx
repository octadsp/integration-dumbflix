import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const AdminDetailFilm = () => {
    const params = useParams();
    const [dataMovie, setDataMovie] = useState();

    console.log(params)

    useEffect(()=> {
        const fetchData = async ()=> {
            try {
                const response = await fetch(`https://api.npoint.io/4a8891249c5a1195708d/${params.id}`);
                const json = await response.json();
                setDataMovie(json)
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

        return ()=> {
            setDataMovie(null);
        };
    }, []);


    return (
        <>
        <Navbar />
        <div className="relative">
            <div className="mx-36 pt-12">
            <iframe className="w-full object-contain h-[500px]" src={dataMovie?.tumbnail} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>

            <div className="flex flex-column w-full">
                <div className="bg-black">

                    <div className="card card-side py-16 pl-16">
                        <div className="w-[250px]">
                        <img src={dataMovie?.moviecard} />
                        </div>
                        <div className='w-[500px] px-10'>
                        <h1 className='text-2xl text-white font-bold mb-2'>{dataMovie?.title}</h1>
                        <div className='flex gap-6'>
                            <p className='content-center pt-1'>{dataMovie?.years}</p>
                            <p className='content-center rounded border-2 border-white mb-7 px-1'>{dataMovie?.category}</p>
                        </div>
                        <p className='text-sm font-normal text-justify pr-10'>{dataMovie?.description}</p>
                    </div>
                    </div>
                </div>

                <div className="bg-black w-full">
                    <div className="carousel pl-10">
                        <div className="carousel-item card bg-black mt-[85px] pr-10">
                            <div className="w-[500px]">
                                <img src={dataMovie?.movieslider} className="w-[500px] px-5" alt="Tailwind CSS Carousel component" />
                            </div>
                            <div>
                                <p className="pt-1 pl-5">{dataMovie?.title} : Episode 1</p>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
        </>
    )
}

export default AdminDetailFilm;