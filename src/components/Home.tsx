import * as React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Home = () => {
    return (
        <Layout>
            <p>Hello World!</p>
            <p>Tech Stack Used: React, Webpack, Typescript, SASS, Tailwind, Babel</p>
            <p>
                <Link to="/dynamic">Click to see React Dynamic Page Render</Link>
            </p>
        </Layout>
    );
};

export default Home;