import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAg-1iDz85TDTlqFYyy94d8-kfvLG6M05E",
  authDomain: "redux-74e2e.firebaseapp.com",
  projectId: "redux-74e2e",
  storageBucket: "redux-74e2e.appspot.com",
  messagingSenderId: "66443508414",
  appId: "1:66443508414:web:ff07bf12dcd2cc31373cef",
  measurementId: "G-1P76NPFMQR"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);