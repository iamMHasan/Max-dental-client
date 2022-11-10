import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation , useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthProvider';
import useTitle from '../hooks/useTitle';

const Login = () => {
    useTitle('login')
const [error, setError] =useState('')
    const googleProvider = new GoogleAuthProvider()
    const {googleSignIn,logInUser,loading} = useContext(AuthContext)
    

    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    // google login
    const handleGoogleLogin = () =>{
        googleSignIn(googleProvider)
        .then(result =>{
            const user = result.user
            console.log(user);
        })
        .catch(err => console.log(err))
    }
    if(loading){
        return <div className="w-16  flex h-16 items-center justify-center border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
    }
    // user login with eamil
    
    const handleFormSubmit = e =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value 
        const password = form.password.value 
        // console.log( email, password);
        logInUser(email, password)
        .then(result =>{
            const user = result.user 
            console.log(user);
            navigate(from, { replace: true });
            form.reset()
            toast.success('login successful')

            const currentUser = {
                email : user?.email
            }
            fetch('https://assignement-11-server.vercel.app/jwt',{
                method : 'POST',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(currentUser)
            })
            .then(res =>res.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('auth-token', data.token)
            })
            .catch(err => console.log(err))

        })
        .catch(err => {
            setError(err)
        })
    }
    return (
        <div className='flex justify-center h-[100vh]'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
                <h1 className="text-2xl font-bold text-center">Log In</h1>
                <form onSubmit={handleFormSubmit} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-400">email</label>
                        <input type="email" name="email" id="username" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />

                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Sign in</button>
                </form>
                <p className='text-red-900'>{error.message}</p>
                <p className="text-xs text-center sm:px-6 dark:text-gray-400">Dont Have an account?
                    <Link rel="noopener noreferrer" to='/register' className="underline dark:text-gray-100">Sign up</Link>
                </p>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={handleGoogleLogin}
                        aria-label="Log in with Google" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;