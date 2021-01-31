import React from 'react';

function PageContent(props) {
    return (
        <div>
            {/* use props to render selected pages */}
            {props.children}
        </div>
    );
}

export default PageContent;