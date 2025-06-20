import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASEURL,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const database = getDatabase(app)
