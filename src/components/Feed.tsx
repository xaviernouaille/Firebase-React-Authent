import {FunctionComponent as FC} from 'react'
import firebase from 'firebase';
import { useHistory } from 'react-router';

const Feed:FC = ():JSX.Element=>{
    const history = useHistory()

    console.log('feed')

    const logout = ()=>{
        firebase.auth().signOut().then(() => {
            history.push({
                pathname: "/login",
                state: "Deconnected",
            })
          }).catch((error) => {
            // An error happened.
          });
    }

    return(
        <section>
            <p>Feed</p>
            <button className="p-2 bg-red-700 text-white" onClick={logout}>
                Logout
            </button>
        </section>
    )
}

export default Feed