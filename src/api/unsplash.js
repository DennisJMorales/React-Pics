import axios from 'axios';

export default  axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 
        'Client-ID YzBTZltM12rUlKZXedqEiTlM3vFBMY5tUPdrdSscyDk '
      }
});