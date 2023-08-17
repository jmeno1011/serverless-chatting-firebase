// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FI_API_KEY,
  authDomain: process.env.REACT_APP_FI_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FI_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FI_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FI_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FI_APP_ID,
  measurementId: process.env.REACT_APP_FI_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// TODO: evnet-log system 구축해보기 아래 주소에서 확인 및 검색해서 구성
// https://firebase.google.com/docs/analytics/get-started?platform=web&hl=ko
// const analytics = getAnalytics(app);