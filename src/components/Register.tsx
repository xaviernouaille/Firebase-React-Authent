import {FormEvent, FunctionComponent as FC, useEffect, useState} from 'react'
import { useHistory, Link } from 'react-router-dom'
import firebase from '../firebase'

const Register:FC = ():JSX.Element=>{
    const [email, setEmail] = useState<string>(""),
    [password, setPassword] = useState<string>(""),
    [passwordConfirm, setPasswordConfirm] = useState<string>(""),
    [error, setError] = useState<{status: boolean, message: string}>(),
    history = useHistory()

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(user =>{
            if(user) history.push({pathname: "/feed"})
        })
    }, [])

    const submitForm = (e: FormEvent)=>{
        e.preventDefault()
        if(passwordConfirm != password){
            setError({status: true, message: "Password are different"})
        }else{
        firebase.auth().createUserWithEmailAndPassword(email, password)
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
    }

    return(
        <section className="h-screen flex justify-center items-center">
        <form className="md:w-1/3 w-full px-6 py-8 md:px-8" onSubmit={submitForm}>
            <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">Brand</h2>

            <p className="text-xl text-center text-gray-600 dark:text-gray-200">Welcome!</p>

            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">Register with an email</a>

                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>

            {
                error ? 
                <p className="my-5 text-red-500 text-center">{error.message}</p> : ""
            }

            <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Email Address</label>
                <input id="RegisterEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email" value={email} onChange={e=> setEmail(e.target.value)}/>
            </div>

            <div className="mt-4">
                <div className="flex justify-between">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Password</label>
                </div>

                <input id="RegisterPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="password" value={password} onChange={e=> setPassword(e.target.value)} />
            </div>

            <div className="mt-4">
                <div className="flex justify-between">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Confirm Password</label>
                </div>

                <input id="RegisterConfirmPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="password" value={passwordConfirm} onChange={e=> setPasswordConfirm(e.target.value)} />
            </div>

            <div className="mt-8">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                    Register
                </button>
            </div>
            
            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                <Link to="/login" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign in</Link>
                
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
        </form>
        </section>
    )
}

export default Register