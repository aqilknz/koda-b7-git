const url = "https://jsonplaceholder.typicode.com/users"

// lowecase manual
 function lowerManual(str) {
    let manual= "";
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            manual += String.fromCharCode(code + 32);
        } else {
            manual += str[i];
        }
    }
    return manual;
 }

//  fetch then-catch dan Ascii manual
function thenManualAscii () {
    fetch(url)
        .then(response => {
            if(!response.ok) throw response.status;
            return response.json();
        })
        .then(result => {
            const emailArray = result.map(user => lowerManual(user.email));
            console.log(emailArray); 

        })
        .catch(err => {
            console.log("Error: ", err);
        })
}

// fetch async-await dan toLowerCast()
async function awaittoLowerCase (){
    try {
        const response = await fetch(url);
        if (!response.ok) throw response.status;

        const result = await response.json()
        const emailArray = result.map(user => user.email.toLowerCase());
        console.log(emailArray)
    } catch (err) {
        console.log("error: ", err)
    }
}

thenManualAscii()
awaittoLowerCase()
