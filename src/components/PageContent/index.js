import React from 'react';

function PageContent(props) {
    return (
        <div>
            <div className="pc-wrapper">
                {/* use props to render selected pages */}
                {props.children}
            </div>
        </div>
    );
}

export default PageContent;