import axios from 'axios'

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "0a09f0f92c2d48419ace10316f3ebe92"; 
const redirectUri = "http://localhost:3000"; 
const scope = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope.join(
  "%20"
)}&response_type=token&show_dialog=true`;


const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",

});

export const setClientToken = (token) =>{
    apiClient.interceptors.request.use(async function(config){
        config.headers.Authorization = "Bearer " + token;
        return config;
    });
};

export default apiClient;
