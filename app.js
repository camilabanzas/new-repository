const nombre= 'humano';
alert(' hola  '+nombre+' bienvenid@ a la pagina de los simpsons')

//
const url= 

fetch(url)
.then(resp => resp.json())
.then(resp =>  pintarPersonajes(data.results))
.catch(err =>  console.log(err))

const pintarPersonajes = (arr) => {
   for(let i = 0; i <arr.length; i++){
    const nombre= arr[i].name;
    const gender= arr[i].gender;
    const image= arr[i].image;
    const status= arr[i].status;
    const species= arr[i].species;

    console.log(arr[i].image);

   }
}
//