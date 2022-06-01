import { initializeApp } from 'firebase/app';
import { browserSessionPersistence, getAuth, GoogleAuthProvider, setPersistence, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import config from '../../config/firebase';

export const app = initializeApp(config);
export const db = getFirestore(app);

export const loginWithSocialMedia = async (providerName) => {
  

  const auth = getAuth(app);
  await setPersistence(auth, browserSessionPersistence)
  
  const provider = {
    google: new GoogleAuthProvider(),
  }[providerName];

  if(!provider) {
    throw new Error(`Provider ${providerName} not found`);
  }
  const result = await signInWithPopup(auth, provider)

  return result;
}
