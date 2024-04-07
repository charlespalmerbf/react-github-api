import React, { Fragment } from "react";

import PropTypes from "prop-types";

import { daysAgo } from "../../utilities";

const RepoItem = ({ repo }) => {
    return (
        <div className="card">
            <h3>
                <a href={repo.html_url} target="_blank">
                    {" "}
                    {repo.name}{" "}
                </a>
            </h3>
            <Fragment>
                {" "}
                <strong> ID: </strong> {repo.id}{" "}
            </Fragment>
            <Fragment>
                {" "}
                <strong> Created: </strong> {daysAgo(repo.created_at)}{" "}
            </Fragment>
            <Fragment>
                {" "}
                <strong> Updated: </strong> {daysAgo(repo.updated_at)}{" "}
            </Fragment>
        </div>
    );
};

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
};

export default RepoItem;
