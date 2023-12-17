import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { setAuth } from '../store/slices/userSlice';
import { store } from '../store/store';

const isDevelopment = import.meta.env.MODE === 'development';

let firebaseConfig;

if (isDevelopment) {
  firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
  };
} else {
  firebaseConfig = {
    apiKey: process.env.VITE_FIREBASE_API_KEY,
    authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VITE_FIREBASE_SENDER_ID,
    appId: process.env.VITE_FIREBASE_APP_ID,
  };
}

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(setAuth(true));
  }
  if (!user) {
    store.dispatch(setAuth(false));
  }
});
