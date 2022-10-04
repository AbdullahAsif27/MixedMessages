const mixedMessage = () => {
    //generates an insprational message
    let phrase = "";

    let introduction = ['Be', 'I am', 'You are', 'We are','I can become', 'I will be'];
    let adjective = ['strong', 'happy', 'motivated', 'hardworking', 'ecstatic', 'grateful', 'brave', 'fearless', 'ambitious'];

    let first = Math.floor(Math.random() * introduction.length);
    let second = Math.floor(Math.random() * adjective.length);


    phrase = introduction[first] + " " + adjective[second] +".";

    return phrase;
};

console.log(mixedMessage());