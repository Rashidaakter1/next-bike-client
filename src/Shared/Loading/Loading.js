import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div>
            <div className="loading m-5 d-flex justify-content-center">
                <div className="spinner-border" role="status">
                   
                </div>
                <span >Loading...</span>
            </div>
        </div>
    );
};

export default Loading;