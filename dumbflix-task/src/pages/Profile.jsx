import Navbar from "../components/pages/Navbar"

import ProfileImg from "../assets/icons/profile.png"
import EmailImg from "../assets/icons/email.png"
import ActiveImg from "../assets/icons/active.png"
import GenderImg from "../assets/icons/gender.png" 
import PhoneImg from "../assets/icons/phone.png" 
import LocationImg from "../assets/icons/location.png" 

const Profile = () => {
  return (
    <>
    <Navbar />
    <div className='flex place-content-center bg-red pt-24'>
    <div className='rounded bg-light-black shadow-xl w-1/2'>
        
        <div className='flex flex-row'>
            <div className='card-body h-96'>
                <h2 className='card-title'>Personal Info</h2>
                <div className='flex'>
                    <div className='mt-2'>
                        <img src={ProfileImg} className='w-7'></img>
                    </div>
                    <div className='flex flex-col ml-6'>
                        <p>Octa Ganteng</p>
                        <p>Full Name</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='mt-2'>
                        <img src={EmailImg} className='w-7'></img>
                    </div>
                    <div className='flex flex-col ml-6'>
                        <p>2@gmail.com</p>
                        <p>Email</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='mt-2'>
                        <img src={ActiveImg} className='w-7'></img>
                    </div>
                    <div className='flex flex-col ml-6'>
                        <p>Active</p>
                        <p>Status</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='mt-2'>
                        <img src={GenderImg} className='w-7'></img>
                    </div>
                    <div className='flex flex-col ml-6'>
                        <p>Male</p>
                        <p>Gender</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='mt-2'>
                        <img src={PhoneImg} className='w-7'></img>
                    </div>
                    <div className='flex flex-col ml-6'>
                        <p>088888</p>
                        <p>Mobile Phone</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='mt-2'>
                        <img src={LocationImg} className='w-7'></img>
                    </div>
                    <div className='flex flex-col ml-6'>
                        <p>Perumahan cagar alam</p>
                        <p>Address</p>
                    </div>
                </div>
            </div>

            <div>
                <div className=''>
                    <img className='w-[250px] h-80 px-5 pt-5 object-cover' src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"/>
                    <div className='px-5 pt-2'>
                    <a className='bg-black flex place-content-center py-3 mb-16 cursor-pointer rounded text-sm'>Change Photo Profile</a>    
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Profile;