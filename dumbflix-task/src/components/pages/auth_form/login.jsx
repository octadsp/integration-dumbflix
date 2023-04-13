import { useState } from "react";

const Login =( ) => {
    const [getUser, setUser] = useState({
        email : "",
        password: ""
    });

    const handleOnChange = (e) => {
        setUser({
            ...getUser,
            [e.target.name]:e.target.value
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        // get data from localstorage
        // const userKey = localStorage.length;
        const getRegisterUser = JSON.parse(localStorage.getItem("registerUser"))

        const userOfRegisteredUser = getRegisterUser && getRegisterUser.map((each) => {
                return {email : each.email, password : each.password, roles: each.roles}
        })
        console.log (userOfRegisteredUser)

        const foundUser = userOfRegisteredUser.find((user) => {
            return user.email === getUser.email && user.password === getUser.password;
        })
        
        if (foundUser) {
            localStorage.setItem("userLoggedIn", JSON.stringify({
                email : getUser.email,
                password : getUser.password,
                isLoggin : true,
                roles : foundUser.roles
            }));
            window.location.reload()
        } else {
            alert("Login failed, user not found")
            return;
        }
    };
    
    const handleCloseLoginModal = () => {
        document.querySelector('#register').click()
    }
    

    return (
        <div>
            <input type="checkbox" id="my-modal-login" className="modal-toggle"/>
                <label htmlFor="my-modal-login" className="modal cursor-pointer" class:modal-open="false">
                <form className="modal-box bg-black/80 w-96" onSubmit={handleOnSubmit}>
                    <h3 className="text-3xl font-bold text-white mb-6 mt-3">Login</h3>
                    <input type="email" name="email" onChange={handleOnChange} value={getUser.email} placeholder="Email" className="input input-border ring-2 ring-white hover:ring-cyan-500 focus:ring-cyan-500 focus:placeholder-white bg-neutral-600 text-white w-full max-w-sm mb-6" />
                    <input type="password" name="password" onChange={handleOnChange} value={getUser.password} placeholder="Password" className="input input-border ring-2 ring-white hover:ring-cyan-500 focus:ring-cyan-500 focus:placeholder-white bg-neutral-600 text-white w-full max-w-sm" />
                    <button className="rounded bg-red-600 text-white mt-11 py-3 w-full font-bold">Login</button>
                    <p className="text-center  my-4 text-base">Dont't Have an account ? Click&nbsp; 
                        <span>
                            <label htmlFor="my-modal-login" onClick={handleCloseLoginModal} className="cursor-pointer font-bold">
                                Here
                            </label>
                        </span>
                    </p>
                </form>
            </label>
        </div>
    )
}

export default Login