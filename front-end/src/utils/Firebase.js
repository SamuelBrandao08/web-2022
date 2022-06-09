import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

import firebase_key from '../keys/firebase_key'

export default class Firebase{
    constructor(){
        this.app = initializeApp(firebase_key)
    }

    getFirestoreDb(){
        return getFirestore(this.app)
    }
    
}