import axios from "axios";

const getJobs = async () => {
    const url = `http://localhost:3000/jobs`;
    const response = await axios.get(url);
    return response.data; 
  
};


export default getJobs;