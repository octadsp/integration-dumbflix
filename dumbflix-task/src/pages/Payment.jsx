import { useNavigate } from "react-router-dom";
import Navbar from "../components/pages/Navbar";
import { API } from "../config/api";
import { useMutation } from "react-query";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";

const Payment = () => {
  const [state, dispatch] = useContext(UserContext);
  const navigate = useNavigate();

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
      console.log("check user success : ", response);
      // Get user data
      let payload = response.data.data;
      // Get token from local storage
      payload.token = localStorage.token;
      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
      setIsLoading(false);
    } catch (error) {
      console.log("check user failed : ", error);
      dispatch({
        type: "AUTH_ERROR",
      });
      setIsLoading(false);
    }
  };

  console.log(state.user.subscribe);

  const handleBuy = useMutation(async (e) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const data = {
        userId: state.user.id,
        price: e.price,
      };

      const body = JSON.stringify(data);

      const response = await API.post("/transaction", body, config);
      console.log("transaction success :", response);

      const token = response.data.data.token;
      window.snap.pay(token, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          checkUser();
          console.log(result);
          navigate("/payment");
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          navigate("/payment");
        },
        onError: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          navigate("/payment");
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("you closed the popup without finishing the payment");
        },
      });
    } catch (error) {
      console.log("transaction failed : ", error);
    }
  });

  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = import.meta.env
      .VITE_REACT_APP_MIDTRANS_CLIENT_KEY;

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className=" bg-black h-[100vh]">
        <div className="grid place-content-center">
          {/* Title */}
          <div className="pt-28 grid place-content-center">
            <h1 className="text-4xl font-bold text-white">Premium</h1>
          </div>

          {/* Description */}

          <div className="flex flex-col items-center">
            <div className="mt-5">
              <p>
                Bayar sekarang dan nikmati streaming film-film yang kekinian
                dari&nbsp;
                <span className="text-red-600">DUMFLIX</span>
              </p>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl image-full mt-20">
              {state.user.subscribe == "Active" ? (
                <>
                  <figure>
                    <img src="https://straightfromamovie.com/wp-content/uploads/2019/10/joker-movie-wallpaper.jpg" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-white text-3xl font-bold justify-center">
                      Congratulation
                    </h2>
                    <p className="card-title text-base justify-center text-white">
                      1 Month
                      <span className="text-red-600 bg-black/50 rounded">
                        DUMFLIX
                      </span>
                      membership
                    </p>
                    <p className="bg-red-500/70 rounded-xl card-title text-2xl font-bold justify-center mx-auto text-white w-1/2">
                      {state.user.subscribe}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <figure>
                    <img src="https://www.hdwallpapers.in/download/money_heist_characters_hd_money_heist-2560x1440.jpg" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-white text-3xl font-bold justify-center">
                      Basic
                    </h2>
                    <p className="card-title text-base justify-center text-white">
                      1 Month
                      <span className="text-red-600 bg-black/50 rounded">
                        DUMFLIX
                      </span>
                      plans
                    </p>
                    <p className="card-title text-lg font-bold justify-center text-white">
                      Rp. 30.000,-
                    </p>
                    <div className="card-actions justify-center">
                      <button
                        onClick={() => handleBuy.mutate({ price: 30000 })}
                        type="submit"
                        className="btn bg-green-700 font-bold text-white/70 hover:bg-green-500 hover:text-white"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
