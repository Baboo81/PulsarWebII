import style from './contact.module.css';
import NavBar from '../../components/NavBar/NavBar';
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import MainTitle from '../../components/MainTitle/MainTitle';
import Btn from '../../components/Btn/Btn';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEaqyL3TqeGFulw-JmgCZ0NDsymGGhNg8",
  authDomain: "infoliber-61893.firebaseapp.com",
  projectId: "infoliber-61893",
  storageBucket: "infoliber-61893.appspot.com",
  messagingSenderId: "1042674526616",
  appId: "1:1042674526616:web:56c24dcc7d2c52818163ed",
  measurementId: "G-QFLM0J8ZWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Contact = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <MainTitle title="Laissez un commentaire" /> 
                    <div className="col-md-12">
                        <div className="p-5">
                            <textarea name="" id="textarea" rows={10} cols={60}></textarea>
                        </div>
                        <div className="p-3">
                            <Btn title="Envoyer" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact