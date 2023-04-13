import { useRef } from "react"
import Navbar from "../components/pages/Navbar"

const Payment = () => {

  const fileInputRef = useRef(null)

  const handleButtonClick = () => {
    fileInputRef.current.click();
  }


  return (
    <div className=" bg-black h-[100vh]">
        <div className="grid place-content-center">
        {/* Title */}
        <div className="pt-28 grid place-content-center">
          <h1 className="text-4xl font-bold text-white">
            Premium
          </h1>
        </div>

        {/* Description */}
        <div>
          <div className="mt-5">
          <p>Bayar sekarang dan nikmati streaming film-film yang kekinian dari&nbsp;
            <span className="text-red-600">
              DUMFLIX
            </span>
          </p>
          </div>
          <div>
          <p className="flex justify-center">
            <span className="text-red-600">
              DUMBFLIX
            </span>
            &nbsp;: 0981312323
          </p>
          </div>
        </div>

        {/* Input Form */}
        <div className="flex mt-7">
          <div className="flex flex-col w-full items-center">
          <input type="number" name="fullname" placeholder="Input your account number" className="input input-border ring-1 ring-white hover:ring-cyan-500 focus:ring-cyan-500 focus:placeholder-white bg-neutral-600 text-white w-full max-w-sm" />
          <a className="w-full max-w-sm">
            <input ref={fileInputRef} type="file" hidden className="file-input file-input-bordered w-full max-w-xs bg-white file:-order-none" />
            <button onClick={handleButtonClick} className="flex bg-white text-red-600 font-bold w-full max-w-sm py-3 pl-3 rounded mt-3">Attache proof of transfer</button>
          </a>
          </div>
        </div>

        {/* Button Send */}
        <div className="flex justify-center mt-10">
                <a className="bg-red-700 text-white text-center py-2 rounded cursor-pointer w-full max-w-sm">Kirim</a>
            </div>
        </div>
    </div>
  )
}

export default Payment