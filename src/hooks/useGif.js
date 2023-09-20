import axios from "axios";
import  {useEffect,useState} from 'react';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const useGif = (tag) => {
    
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');
  
    
  async function fetchData(tag) {
    setLoading(true);
    const { data } = await axios.get(tag ? `${Url}&tag=${tag}` : Url);
    const imageSourse = data.data.images.downsized_large.url;
    setGif(imageSourse);
    setLoading(false);
  }

  useEffect(() => {
    fetchData('Car');
  }, []);

  return {loading,gif,fetchData};
};

export default useGif;
