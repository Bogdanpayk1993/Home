import React, { Component } from 'react';
import PropTypes from 'prop-types'

const AddForm = ({onAddClick}) => {
    let _name, _day
    return(
        <form action="">
            <div>
                <label>
                    Ім'я чергового - 
                    <input type="text" ref={el=>_name=el}/>
                </label>
            </div>
            <div>
                <label>
                    День чергування - 
                    <input type="text" ref={el=>_day=el}/>
                </label>
            </div>
            <button onClick={(e)=>onAddClick(e,_name.value,_day.value)}> Додати </button>
        </form>
    )
}

AddForm.propTypes = {
    onAddClick: PropTypes.func.isRequired
} 

export default AddForm