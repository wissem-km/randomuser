

const users_API = 'https://randomuser.me/api/';
const quoteAPI = 'https://api.quotable.io/quotes/random'

export async function getUsersList() {
    const response = await fetch(users_API +"?results=50",{ cache: 'no-cache' } );
    const data = await response.json();
    return data.results;
}


export async function getUser(name: string) {

    const response = await fetch(users_API + "?uuid=${params.id}",{ cache: 'no-cache' });
    const data = await response.json();
    return data;
}

export async function getQuote() {

    const response = await fetch(quoteAPI);
    const data = await response.json();
    return data;
}