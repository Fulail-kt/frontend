import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey:process.env.NEXT_API_KEY,
    authDomain:process.env.NEXT_DOMAIN,
    projectId:process.env.NEXT_PROJECT_ID,
    storageBucket:process.env.NEXT_STORAGE_BUCKET,
    messagingSenderId:process.env.NEXT_MESSAGING_SENDER_ID,
    appId:process.env.NEXT_APP_ID,
    measurementId:process.env.NEXT_MEASUREMENT_ID
  };

  console.log(
    process.env.NEXT_API_KEY,
    process.env.NEXT_DOMAIN,
    process.env.NEXT_PROJECT_ID,
    process.env.NEXT_STORAGE_BUCKET,
    process.env.NEXT_MESSAGING_SENDER_ID,
    process.env.NEXT_APP_ID,
    process.env.NEXT_MEASUREMENT_ID)
  
  



 
  
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);