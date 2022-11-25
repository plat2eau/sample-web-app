import * as React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

import cssExports from "./Layout.module.scss";

interface LayoutProps {
    children?: React.ReactNode
}

const Layout = ({ children, ...props }: LayoutProps) => {
    return (
        <Container>
            <Link to="/">
                <Header as="h1" className={cssExports.h1}>
                    A Sample Web App
                </Header>
            </Link>
            {children}
            <Divider />
        </Container>
    );
};

export default Layout;