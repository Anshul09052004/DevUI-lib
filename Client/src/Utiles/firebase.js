
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "devui-4d3d6.firebaseapp.com",
    projectId: "devui-4d3d6",
    storageBucket: "devui-4d3d6.firebasestorage.app",
    messagingSenderId: "475193349625",
    appId: "1:475193349625:web:0554a4070f8da406b01928",
    measurementId: "G-SGE6DGF6YM"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
export { auth, provider }