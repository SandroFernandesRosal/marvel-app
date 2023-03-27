import axios from "axios"; 
import md5 from 'md5';


const publicKey = '0f417681c173719b562bb24b67a49642';
const privateKey = '82c5601f3a018aacd2711b9c34a32e10d8976590';
const ts = Number (new Date());

const hash = md5(ts + privateKey + publicKey );

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts,
        apikey: publicKey,
        hash,
    }
})


export default api;