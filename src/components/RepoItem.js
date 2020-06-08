import React from 'react';

const RepoItem = props => {

    return (
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
            {props.name}
        </div>
    );
}

export default RepoItem;