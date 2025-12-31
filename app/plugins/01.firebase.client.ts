import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig();

    const firebaseConfig = {
        apiKey: "AIzaSyDUP2bGzhd96QU-XLWualiA0Sv9tL_hxMg",
        authDomain: "digilinx-cfbf3.firebaseapp.com",
        projectId: "digilinx-cfbf3",
        storageBucket: "digilinx-cfbf3.firebasestorage.app",
        messagingSenderId: "394514714594",
        appId: "1:394514714594:web:ea7ec8a9a0eccd1385b3bb"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    return {
        provide: { firebaseAuth: auth },
    };
});
