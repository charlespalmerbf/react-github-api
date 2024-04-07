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
            <br />
            <strong> ID: </strong> {repo.id} <br />
            <strong> Created: </strong> {daysAgo(repo.created_at)} <br />
            <strong> Updated: </strong> {daysAgo(repo.updated_at)} <br />
            <br />
            <div className="card text-center">
                <div className="badge badge-primary">
                    {" "}
                    Watchers: {repo.watchers}{" "}
                </div>
                <div className="badge badge-success">
                    {" "}
                    Stars: {repo.stargazers_count}{" "}
                </div>
                <div className="badge badge-light">
                    {" "}
                    Forks: {repo.forks}{" "}
                </div>
            </div>
        </div>
    );
};

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
};

export default RepoItem;
