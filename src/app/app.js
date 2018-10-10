import React from 'react';

import Header from '../header/navbar';
import GuessSection from '../guess/guess-section';
import StatusSection from '../status/status-section';
import InfoSection from '../info/info-section';

function App(props) {
    return (
        <div>
            <Header />
            <main role="main">
                <GuessSection />
                <StatusSection />
                <InfoSection />
            </main>
        </div>
    );
}

export { App };