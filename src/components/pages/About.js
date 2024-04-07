import React, { Fragment } from "react";
import packageJson from "../../../package.json";

const About = () => {
    const version = packageJson.version;

    return (
        <Fragment>
            <h1>About This App</h1>
            <p>App to search Github Users.</p>
            <p>Version: {version}</p>
        </Fragment>
    );
};

export default About;
