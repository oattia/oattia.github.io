import React from 'react';

export default () => {
    return (
        <div className="header">
            <div className="container">
                <div className="media text-white">
                    <img className="avatar rounded-circle mr-3" src={require('../images/8bit-avatar.jpg')}/>
                    <div className="media-body">
                        <h3>Chufeng Hu</h3>
                        <p>I'm a graduate student in computer science, I love math and coding</p>
                    </div>
                </div>
            </div>
        </div>
    );
};