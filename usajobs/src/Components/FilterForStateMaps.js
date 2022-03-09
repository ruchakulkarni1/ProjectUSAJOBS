/**
 * This function is defined to display state names in dropdown.
 * @param {*} props - for state names
 * @returns dropdown with state names
 */

function FilterForStateMaps(props) {
    const showStateNamesInDropDown = () => {
        if(props.statedata) {
            const stateDDRows = props.statedata.map((elem) => {
                return <option value = {elem}>{elem}</option>
            })
        return stateDDRows
    }
}
    return (
    <div class = "stateLabelPadding">
        <label for="dropdown" class = "stateLabelPadding">Select State :</label>
        <select id = "dropdown" onChange = {(e) => props.setFilterData(e.target.value)}>{showStateNamesInDropDown()}
        </select>
    </div>
    )
}
export default FilterForStateMaps