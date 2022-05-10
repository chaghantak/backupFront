import React from 'react';

function CreateTable({ name,onDataChange, onCreate }) {
    return (
        <div>
        <input
            type="text"
            name="name"
            placeholder="ttps"
            onChange={ onDataChange }
            value={ name }
        />
        &nbsp;&nbsp;
        
        <button onClick={ onCreate }>추가</button>
    </div>
    );
}

export default CreateTable;