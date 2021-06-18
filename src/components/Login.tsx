import {FormEvent, FunctionComponent as FC, useEffect, useState} from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import firebase from '../firebase'

const Login:FC = ():JSX.Element=>{
    const [email, setEmail] = useState<string>(""),
    [password, setPassword] = useState<string>(""),
    [error, setError] = useState<{status: boolean, message?: string}>({status: false}),
    history = useHistory(),
    location = useLocation();

        useEffect(()=>{
        firebase.auth().onAuthStateChanged(user =>{
            if(user) history.push({pathname: "/feed"})
        })
    }, [])

    useEffect(()=>{
        console.log(location.key)
        if(location.state){
            setError({status: true, message: String(location.state)})
            setTimeout(()=>{
                location.state = undefined
                setError({status: false})
            }, 3000)
        }
    }, [])

    const submitForm = (e: FormEvent)=>{
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          console.log('connected')
          console.log(userCredential)
          var user = userCredential.user;
          history.push('/feed')
          // ...
        })
        .catch((error) => {
            console.log(error)
            setError({status: true, message: error.message})
        });
    }

    return(
        <section className="h-screen flex justify-center items-center">
        <form className="md:w-1/3 w-full px-6 py-8 md:px-8" onSubmit={submitForm}>
            <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">Brand</h2>

            <p className="text-xl text-center text-gray-600 dark:text-gray-200">Welcome back!</p>

            {/* <a href="#" className="flex items-center justify-center mt-4 text-gray-600 rounded-lg shadow-md dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                <div className="px-4 py-3">
                    <svg className="w-6 h-6" viewBox="0 0 40 40">
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107"/>
                        <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00"/>
                        <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50"/>
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2"/>
                    </svg>
                </div>

                <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
            </a> */}

            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or login with email</a>

                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>

            {
                error.status ? 
                <div className="w-full text-white bg-red-500 my-5">
<div className="container flex items-center justify-between px-6 py-4 mx-auto">
    <div className="flex">
        <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
            <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path>
        </svg>

        <p className="mx-3">{error.message}</p>
    </div>

    <button onClick={()=> setError({status: false})} className="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
</div>
</div> : ""
            }

            <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Email Address</label>
                <input id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email" value={email} onChange={e=> setEmail(e.target.value)}/>
            </div>

            <div className="mt-4">
                <div className="flex justify-between">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Password</label>
                    <Link to="/forgetpassword" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</Link>
                </div>

                <input id="loggingPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="password" value={password} onChange={e=> setPassword(e.target.value)} />
            </div>

            <div className="mt-8">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                    Login
                </button>
            </div>
            
            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                <Link to="/register" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</Link>
                
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
        </form>
        </section>
    )
}

export default Login