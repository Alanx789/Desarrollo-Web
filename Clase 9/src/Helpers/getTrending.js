import config from "../Config/config";

//'async' es una palabra reservada para hacer que una función sea asincrona
export const getTrending = async (
    media_type = 'all',
    time_window = 'day') => {

        const {ApiKey, Endpoint} = config;

        /* De donde vamos a traer los datos (URL) */
        const url = `${Endpoint}/trending/${media_type}/${time_window}?api_key=${ApiKey}`;

        //Promesa: 
        const resp = await fetch( url );  //Get URL

        //Espera a que se resuelva el json de 'resp'
        const{ results } = await resp.json();

        return results;
        
}