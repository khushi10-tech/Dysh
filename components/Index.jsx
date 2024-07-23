import React from 'react';

function Index() {
    const name = "John"
    const element = <h1>hello {name}!</h1>
    return (
        <div>
            {element}
        </div>
    );
}

export default Index;