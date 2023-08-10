import {QuestionsAndOptions} from '../../components/questionsAndOpt/qna'
import { Fragment,useEffect,useState} from 'react'
import { Navbar } from '../../components'
export const Quiz = ()=>{

const [quiz, setQuiz]= useState([]);
 useEffect(()=>{
(async()=>{
    try{
        const {data: {data}} = await axios.get("https://quizon.onrender.com/categories")
   setQuiz(data)
    }
    catch(err){
        console.log(err)
    }
 })()




 },[])






    return(
        
      
        
  <Fragment>
  <Navbar/>
  <QuestionsAndOptions/>
  </Fragment>



    )
}