import {FormEvent, FunctionComponent as FC, useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import { ArrowLeftIcon } from '@heroicons/react/solid'

const ForgetPassword:FC = ():JSX.Element=>{
    const history = useHistory()
    const [email, setEmail] = useState<string>(""),
    [message, setMessage] = useState<{status?: boolean, message?: string, display: boolean}>({display: false})

    const submitForm = (e: FormEvent)=>{
        e.preventDefault()
        firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    setMessage({status: true, message: "Email de reinitialisation envoyé", display: true})
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    setMessage({status: false, message: error.message, display: true})

    // ..
  });
    }

    return(
    <section className="h-screen flex flex-col justify-center items-center">
        <div className="max-w-3xl px-6 py-16 mx-auto text-center">
        <Link to="/login" className="text-left mb-5 flex items-center text-gray-400"><ArrowLeftIcon className="w-5 h-5 mr-1"/> Back to login</Link>
            {
                message.display ?
                (
                    message.status ?

                    <div className="w-full text-white bg-green-500 my-5">
        <div className="container flex items-center justify-between px-6 py-4 mx-auto">
            <div className="flex">
                <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"></path>
                </svg>

                <p className="mx-3">{message.message}</p>
            </div>

            <button onClick={()=> setMessage({display: false})} className="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
                    
                    : 
                    <div className="w-full text-white bg-red-500 my-5">
<div className="container flex items-center justify-between px-6 py-4 mx-auto">
    <div className="flex">
        <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
            <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path>
        </svg>

        <p className="mx-3">{message.message}</p>
    </div>

    <button onClick={()=> setMessage({display: false})} className="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
</div>
</div>
                )
                : ''
            }
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Vous avez oublié votre mot de passe?</h1>
            <p className="max-w-md mx-auto mt-5 text-gray-500 dark:text-gray-400">Pas de panique, un email de récupération vous sera envoyé une fois le formulaire rempli.</p>

            <form onSubmit={submitForm}>
            <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
                <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} />
                
                <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-700 rounded-md sm:mx-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                    Envoyer
                </button>
            </div>
            </form>
        </div>
    </section>
    )
}

export default ForgetPassword
