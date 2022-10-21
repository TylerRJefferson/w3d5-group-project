import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import creds from "../creds.js"

export default function dbConnect() {
  if(!getApps().length) {
    initializeApp({
      credential: cert(creds)
    })
  }
  return getFirestore()
}