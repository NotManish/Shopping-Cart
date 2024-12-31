import { v4 as uuidv4 } from 'uuid';


const khaltiConfig = {
    publicKey: "777475f3dff54b3b91964ca29008f6ac",  
    productIdentity: uuidv4(), 
    productName: "Shopping Cart Item",
    productUrl: "http://localhost:3000",
    eventHandler: {
        onSuccess(payload) {
            console.log("Payment successful with payload:", payload);
        },
        onError(error) {
            console.log("Payment failed:", error);
        },
        onClose() {
            console.log("Payment widget closed");
        },
    },

    paymentPreference: [
        "KHALTI", 
        "EBANKING", 
        "MOBILE_BANKING", 
        "CONNECT_IPS", 
        "SCT", 
    ],
};

export default khaltiConfig;
