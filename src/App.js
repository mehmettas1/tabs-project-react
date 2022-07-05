
import { useState,useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";



const API_URL = "https://course-api.com/react-tabs-project";

const App = () => {

const [apidata, setApiData] = useState([]);
const [isLoading, setİsLoading] = useState(true)
const fetchData = async() => {
  try {
    const response = fetch(API_URL);
    const data = (await response).json();

    setApiData(data);
  } catch (error) {
    console.log(error);
  }
}

useEffect(() => {
  fetchData();  
}, [third])

console.log(apiData);
  return <div>App</div>;
};

export default App;
