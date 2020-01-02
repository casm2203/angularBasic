type CallBackError = Error | null;
type CallBack = (renponse: Object, error: CallBackError) => void;
type SendRequest = (callback: CallBack) => void;


const sendRequest: SendRequest = (callback: CallBack) => {
    if(callback) {
        callback({randomNumber: Math.random()}, null);
    }
};


sendRequest(
    (response, error) => {
        console.log(response);
    }
);