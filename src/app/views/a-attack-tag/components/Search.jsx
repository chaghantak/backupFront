import React from 'react';

function Search({onChange,keyword}) {
    return (
        <div>
          <input placeholder="검색" 
          onChange={onChange}
          value={keyword}
          />
            <button>조회</button>  
        </div>
    );
}

export default React.memo(Search);