import { Navbar,QuizCard} from "../../components/index";
import axios from "axios";
import { Fragment, useEffect,useState } from "react";
import "./home.css"

export const Home = () => {

const [categories, setCategories]=useState([]);

  useEffect(() => {
    (async () => {
      try {
        const {data:{data}} = await axios.get("https://quizon.onrender.com/categories");
       setCategories(data)
       console.log(data)
      } catch (err) {
        console.log(err);
      }
    })()
  }, []);




  return (
    <Fragment>
    <Navbar/>
   
    <main className="main-home d-flex gap-m align-center justify-center">
    { 
    categories.map(category => <QuizCard category={category} key={category.id}/>)
    }
    </main>
     
    </Fragment>
  
  );
};
