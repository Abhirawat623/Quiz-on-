import {QuestionsAndOptions} from '../../components/questionsAndOpt/qna'
import { Fragment,useEffect,useState} from 'react'
import axios from 'axios'
import { Navbar } from '../../components'
import { useQuiz } from '../../context/index'
export const Quiz = ()=>{

const [quiz, setQuiz]= useState([]);
const{quizcategory}=useQuiz();
 useEffect(()=>{
(async()=>{
    try{
        const {data: {data}} = await axios.get("https://quizon.onrender.com/categories",{
        
        headers: {authorization:localStorage.getItem("token")}});
          console.log({data})
        const filterData= data.filter(({category})=>category===quizcategory);
   setQuiz(filterData)
   console.log(filterData)
    }
    catch(err){
        console.log(err)
    }
 })()
 },[quizcategory])
    return(
  <Fragment>
  <Navbar/>
  {
    quiz && quiz.length >0 &&
  
  <QuestionsAndOptions quizData={quiz}/>
}
  </Fragment>



    )
}