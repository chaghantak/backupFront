import React from 'react';

function Search({onChange,keyword}) {
    return (
        <div>
          <input placeholder="๊ฒ์" 
          onChange={onChange}
          value={keyword}
          />
            <button>์กฐํ</button>  
        </div>
    );
}

export default React.memo(Search);