import Navbar from "../components/pages/Navbar";

import ProfileImg from "../assets/icons/profile.png";
import EmailImg from "../assets/icons/email.png";
import ActiveImg from "../assets/icons/active.png";
import GenderImg from "../assets/icons/gender.png";
import PhoneImg from "../assets/icons/phone.png";
import LocationImg from "../assets/icons/location.png";

// Import UserContext
import { UserContext } from "../context/userContext";
import { useContext, useEffect, useState, useRef } from "react";

// Import API Config
import { API } from "../config/api";

// Import React-query
import { useMutation } from "react-query";

const Profile = () => {
  // State UserContext
  const [state] = useContext(UserContext);

  // useReff for file input
  const fileInputRef = useRef(null);

  // State Profile
  const [profile, setProfile] = useState({});

  // State Change Profile Picture
  const [preview, setPreview] = useState(null);
  const [formAvatar, setFormAvatar] = useState({
    thumbnail: "",
  });

  // Get Profile Picture Data
  async function getDataProfilePicture() {
    const responseProfile = await API.get(`/user/${state.user.id}`);

    setFormAvatar({
      thumbnail: responseProfile.data.data.avatarprofile,
    });
  }

  useEffect(() => {
    getDataProfilePicture();
  }, []);

  // Handle Change
  const handleChange = (e) => {
    setFormAvatar({
      ...formAvatar,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
  };

  // Create image url for preview
  if (e.target.type === "file") {
    let url = URL.createObjectURL(e.target.files[0]);
    setPreview(url);
  }

  // Fetching profile by id from state
  const getProfileData = async () => {
    try {
      const response = await API.get(`/user/${state.user.id}`);
      setProfile(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      // Store data with FormData as object
      const formData = new FormData();
      if (form.thumbnail) {
        formData.set("thumbnail", form?.thumbnail[0], form?.thumbnail[0].name);
      }

      // Update User Profile
      const response = await API.patch(
        `/user/${state.user.id}`,
        formData,
        config
      );
      console.log("update profile sukses : ", response);
      window.location.reload();
    } catch (err) {
      console.log("update profile failed : ", err);
    }
  });
  return (
    <>
      <Navbar />
      <div className="flex place-content-center bg-red pt-24">
        <div className="rounded bg-light-black shadow-xl w-1/2">
          <div className="flex flex-row">
            <div className="card-body h-96">
              <h2 className="card-title">Personal Info</h2>
              <div className="flex">
                <div className="mt-2">
                  <img src={ProfileImg} className="w-7"></img>
                </div>
                <div className="flex flex-col ml-6">
                  <p>{profile.fullname}</p>
                  <p>Full Name</p>
                </div>
              </div>
              <div className="flex">
                <div className="mt-2">
                  <img src={EmailImg} className="w-7"></img>
                </div>
                <div className="flex flex-col ml-6">
                  <p>{profile.email}</p>
                  <p>Email</p>
                </div>
              </div>
              <div className="flex">
                <div className="mt-2">
                  <img src={ActiveImg} className="w-7"></img>
                </div>
                <div className="flex flex-col ml-6">
                  <p>Active</p>
                  <p>Status</p>
                </div>
              </div>
              <div className="flex">
                <div className="mt-2">
                  <img src={GenderImg} className="w-7"></img>
                </div>
                <div className="flex flex-col ml-6">
                  <p>{profile.gender}</p>
                  <p>Gender</p>
                </div>
              </div>
              <div className="flex">
                <div className="mt-2">
                  <img src={PhoneImg} className="w-7"></img>
                </div>
                <div className="flex flex-col ml-6">
                  <p>{profile.phone}</p>
                  <p>Mobile Phone</p>
                </div>
              </div>
              <div className="flex">
                <div className="mt-2">
                  <img src={LocationImg} className="w-7"></img>
                </div>
                <div className="flex flex-col ml-6">
                  <p>{profile.address}</p>
                  <p>Address</p>
                </div>
              </div>
            </div>

            <div>
              <div className="">
                <form onSubmit={(e) => handleSubmit.mutate(e)}>
                  <input
                    onChange={handleChange}
                    type="file"
                    name="thumbnail"
                    form="thumbnail"
                    ref={fileInputRef}
                    hidden
                  />
                  <img
                    name="avatarprofile"
                    onChange={handleChange}
                    onClick={handleButtonClick}
                    className="w-[250px] h-80 px-5 pt-5 object-cover"
                    src={profile.avatarprofile}
                  />
                  <div className="flex justify-center pt-5">
                    <button
                      type="submit"
                      className="bg-red-600 text-white flex place-content-center py-3 mb-16 rounded text-sm w-3/4"
                    >
                      Change Photo Profile
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
