import React from 'react';
import './style.css';

function Project() {
    return (
        <div>
            <div className="team-projects">
                <h3>Team Projects</h3>
                <div className="tt-rulers">
                    <div>
                        <a 
                            href="https://cgsdesign.github.io/table-top-resource/index.html"
                            alt="Table Top Rulers link"
                            className="tt-rulers-link"
                        ></a>
                    </div>
                    <div>
                        <h4>Table Top Rulers</h4>
                    </div>
                </div>
                <div className="ht-help">
                    <div>
                        <a 
                            href="https://how-to-dot-help.herokuapp.com"
                            alt="How to Help link"
                            className="ht-help-link"
                        ></a>
                    </div>
                    <div>
                        <h4>How to Help</h4>
                    </div>
                </div>
            </div>
            <div className="solo-projects">
                <h3>Solo Projects</h3>
            </div>
        </div>
    );
}

export default Project;