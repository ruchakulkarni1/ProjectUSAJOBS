import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/js/src/collapse.js";
import "./StateData.css"

/**
 * This function displays the state data table when a user clicks on State wide data tab.
 * This table has a data of state name along with the count of jobs in each state.
 * When a row of the table is clicked then jobs in that particular clicked city of state is displayed.
 * Here the job title and application close date of the job are displayed.
 * The statewide data is got grouped by states from App.js and the data here is used for displaying.
 * @param {*} props 
 * @returns 
 */
function StateData(props) {
    const displayStateData = () => {
            const renderStateData = () => {
                if(props.citiesData) {
                    const results = () => {
                    let state = []
                    let index = 0
                    for(const [key,value] of Object.entries(props.citiesData)) {
                        let stateDataDiv = []
                        index++ 
                        let rowClassName = ".multi-collapse"+index
                        let divClassName = "collapse multi-collapse"+index
                        let controls = ".multiCollapseExample"+index
                        value.forEach((elem) => {
                            const title = elem['positionTitle']
                            const date = elem['CloseDate']
                            stateDataDiv.push(
                                <tr className="cityRows"><td className="cityCol">{title}</td><td className="cityCol">{date}</td></tr>)
                        })    
                          state.push(<tr
                            data-toggle="collapse"
                            data-target={rowClassName}
                            aria-controls={controls}>
                            <td>{key} </td>
                            <td>{value.length}</td>
                            </tr>
                            )
                    state.push(<div class= {divClassName} id={controls}><table class = "styles">
                        <thead>
                            <tr>
                            <th>Title</th>
                            <th>Application Close Date</th>
                            </tr>
                        </thead>
                        <tbody>{stateDataDiv}</tbody>
                    </table></div>)
                }   
                    return state;
                    }
                    let arr = [<thead><tr id = 't01'>
                    <th>Name Of The City</th>
                    <th>Number Of Jobs </th>
                </tr></thead>]
                arr.push(<tbody>{results()}</tbody>)
                    return arr
                         
                }               
        }
            return(
            renderStateData()
        )
    }
    return (
            <table class = "styles ">
                {displayStateData()}
            </table>
    )
}
    
export default StateData;