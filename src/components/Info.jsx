import React from 'react';

const Info = ({criclesData}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            {criclesData.map((i) => {
                const date = new Date(i)
                return <span key={`${Date.now()}${date.getMilliseconds()}`}>
                   H :  {date.getHours() - 3} M : {date.getMinutes()} S : {date.getSeconds()} MS : {date.getMilliseconds()}</span>})}
        </div>
    );
};

export default Info;