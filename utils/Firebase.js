// firebaseClient.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY || "FAKE_API_KEY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN || "fake-auth-domain.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID || "fake-project-id",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET || "fake-storage-bucket.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID || "000000000000",
  appId: import.meta.env.VITE_FIREBASE_APPID || "1:000000000000:web:fakeappid"
};

// Only initialize if a real-looking apiKey exists (prevents runtime errors)
let app = null;
let auth = null;
let provider = null;

if (import.meta.env.VITE_FIREBASE_APIKEY) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  provider = new GoogleAuthProvider();
} else {
  // Development fallback: simple mock so your UI code doesn't crash
  console.warn("Firebase not configured — using mock auth for development.");

  auth = {
    // minimal mock example — adapt as needed
    currentUser: { uid: "dev-user", displayName: "Dev User", email: "dev@example.com" },
    signInWithPopup: async () => {
      return { user: auth.currentUser };
    },
    signOut: async () => {
      auth.currentUser = null;
      return;
    }
  };

  provider = { mock: true };
}

export { auth, provider, app };
