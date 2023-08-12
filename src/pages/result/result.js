import './result.css'
import { Navbar } from '../../components'
import { Fragment } from 'react'

export const Result =()=>{

    return(
    <Fragment>
        <Navbar/>
        <div className="result-bar my-text d-flex justify-center align-center direction-col">
            <div className="result-head"> Score</div>
            <h5 className="result-score">0</h5>

        </div>
        </Fragment>)
}