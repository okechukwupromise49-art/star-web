            import { useState } from "react";

            export function Apply() {
            const [active, setActive] = useState("signin");
            const [toggle, setToggle] = useState("false");

            return (
                <div className="flex flex-col justify-center items-center min-h-screen mt-10 bg-gray-100">
                
                {/* Button Group */}
                <div className="bg-gray-200 p-3 rounded-xl flex gap-4">
                    <button
                    className="transition-colors"
                    style={active === 'signin' ? styles.activeBtn : styles.inactiveBtn}
                    onClick={() => setActive('signin')}
                    >
                    SIGNIN
                    </button>

                    <button
                    className="transition-colors"
                    style={active === 'signout' ? styles.activeBtn : styles.inactiveBtn}
                    onClick={() => setActive('signout')}
                    >
                    SIGNOUT
                    </button>

                    <button
                    className="transition-colors"
                    style={active === 'recover' ? styles.activeBtn : styles.inactiveBtn}
                    onClick={() => setActive('recover')}
                    >
                    RECOVER
                    </button>
                </div>

                {/* Content Area */}
                <div className="mt-6 p-6 w-96 bg-white rounded-xl shadow">
                    {active === "signin" && 
                        <div>
                            <h2 className="text-3xl mb-3 text-blue-400 font-semibold">Welcome back</h2>
                            <p>Sign-in to continue to your</p>

                            <div className="my-3 border border-gray-300 rounded-lg p-1 
                            focus-within:ring-2 focus-within:ring-blue-500 
                            focus-within:shadow-lg transition-all">

                                <i className="fas fa-envelope text-gray-400 mx-3"></i>
                                <input 
                            type="text"
                            class="   focus:outline-none  p-2 " 
                            placeholder="Email address ...." />
                            </div>
                            
                            <div className="my-3 border border-gray-300 rounded-lg p-1 
                            focus-within:ring-2 focus-within:ring-blue-500 
                            focus-within:shadow-lg transition-all">

                                <i className="fa-solid fa-lock text-gray-400 mx-3"></i>
                                <input
                                className="  focus:outline-none  p-2 rounded" 
                                type={toggle ? "text" : "password"}
                                placeholder="password...."
                                
                                /> 
                                <i 
                                    onClick={()=> {setToggle(prev => !prev); console.log(toggle);
                                    
                                    }}
                                    className= {toggle ? "fa-regular fa-eye ml-5" : "fa-regular fa-eye-slash ml-4"}
                                ></i>


                                <br />
                            </div>
                            
                            <button 
                                className="bg-blue-600 ml-28 mt-5 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"

                                >
                                    Signin
                            </button>
                            <p></p>
                        </div>}
                    {active === "signout" && <div>
            <h2 className="text-3xl mb-3 text-blue-400 font-semibold">Create Account</h2>
            <p>Register to get started</p>

            {/* FIRST NAME */}
            <div className="my-3 border border-gray-300 rounded-lg p-1 
                focus-within:ring-2 focus-within:ring-blue-500 
                focus-within:shadow-lg transition-all">
                <i className="fa-regular fa-user text-gray-400 mx-3"></i>
                <input 
                type="text"
                className="focus:outline-none p-2"
                placeholder="First name..."
                />
            </div>

            {/* LAST NAME */}
            <div className="my-3 border border-gray-300 rounded-lg p-1 
                focus-within:ring-2 focus-within:ring-blue-500 
                focus-within:shadow-lg transition-all">
                <i className="fa-regular fa-user text-gray-400 mx-3"></i>
                <input 
                type="text"
                className="focus:outline-none p-2"
                placeholder="Last name..."
                />
            </div>

            {/* EMAIL */}
            <div className="my-3 border border-gray-300 rounded-lg p-1 
                focus-within:ring-2 focus-within:ring-blue-500 
                focus-within:shadow-lg transition-all">
                <i className="fas fa-envelope text-gray-400 mx-3"></i>
                <input 
                type="email"
                className="focus:outline-none p-2"
                placeholder="Email address..."
                />
            </div>

            {/* PASSWORD */}
            <div className="my-3 border border-gray-300 rounded-lg p-1 
                focus-within:ring-2 focus-within:ring-blue-500 
                focus-within:shadow-lg transition-all flex items-center">
                
                <i className="fa-solid fa-lock text-gray-400 mx-3"></i>

                <input
                className="focus:outline-none p-2 flex-1"
                type={toggle ? "text" : "password"}
                placeholder="Password..."
                />

                <i 
                onClick={() => setToggle(prev => !prev)}
                className={toggle ? "fa-regular fa-eye ml-3 cursor-pointer" : "fa-regular fa-eye-slash ml-3 cursor-pointer"}
                ></i>
                
            </div>
                            <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-4 hover:bg-blue-600 transition-all">
            Register
        </button>
            </div>
            }
                    {active === "recover" && <div>
        <h2 className="text-3xl mb-3 text-blue-400 font-semibold">Recover Password</h2>
        <p className="text-gray-600">Enter your email to reset your password</p>
        

        {/* EMAIL */}
        <div
            className="my-3 border border-gray-300 rounded-lg p-1 
            focus-within:ring-2 focus-within:ring-blue-500 
            focus-within:shadow-lg transition-all flex items-center"
        >
            <i className="fas fa-envelope text-gray-400 mx-3"></i>

            <input
            type="email"
            className="focus:outline-none p-2 flex-1"
            placeholder="Email address..."
            />
        </div>

        {/* SUBMIT BUTTON */}
        <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-4 hover:bg-blue-600 transition-all">
            Send Recovery Link
        </button>
        </div>
        }
                </div>
                </div>
            );
            }

            const styles = {
            activeBtn: {
                background: "#2563eb",
                color: "white",
                padding: "10px 20px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer"
            },
            inactiveBtn: {
                background: "#e5e7eb", // gray-200
                color: "#111827",       // gray-900
                padding: "10px 20px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer"
            }
            };
