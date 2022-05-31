import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import config from '../../config/firebase';

export const app = initializeApp(config);
export const db = getFirestore(app);

export const loginWithSocialMedia = async (providerName) => {
  const provider = {
    google: new GoogleAuthProvider(),
  }[providerName];

  if(!provider) {
    throw new Error(`Provider ${providerName} not found`);
  }

  const auth = getAuth(app);
  const result = await signInWithPopup(auth, provider)

  return result;
}
