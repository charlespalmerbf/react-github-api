# react-github-api

Welcome to my GitHub repository for React GitHub API! This is a web application built with React that uses the GitHub API to search for and display user profiles and repositories. Below you will find some information on how to use and navigate this repository.

Getting Started
---------------

To get started with this repository, simply clone it to your local machine using the following command:

bashCopy code

`git clone https://github.com/charlespalmerbf/react-github-api.git`

Then, navigate to the project directory and install the necessary dependencies:

bashCopy code

`cd react-github-api
npm install`

Finally, start the development server:

sqlCopy code

`npm start`

Features
--------

React GitHub API is designed to provide an easy way for users to search for and view GitHub user profiles and repositories. Some of the key features include:

-   Search for GitHub users by username
-   View user profiles, including bio, followers, and repositories
-   Search for repositories by keyword
-   View repository details, including contributors and issues

Technologies Used
-----------------

This web application was built using the following technologies:

-   React
-   Axios
-   GitHub API

File Structure
--------------

The repository is organized into the following directories:

-   `src/`: Contains the source code for the application, organized into subdirectories by feature.
-   `components/`: Contains reusable components used throughout the application.
-   `utils/`: Contains utility functions used throughout the application.

Contributing
------------

If you would like to contribute to this project, please feel free to submit a pull request.

## Conventional Commits

This project uses a specification called **Conventional Commits**, please **ensure** this specification is followed when commiting code to this project.

Guide: https://www.conventionalcommits.org/en/v1.0.0/

## Pull Requests, Approvals & Releases

###### Creating the develop release pull request

Pull Requests made to this project are required in order to merge to **develop** or **main**

When submitting a Pull Request, at least one approval is required before merging.

When constructing a release, ensure that a release branch is created based off of the contents of develop, the only changes contained within this branch should be the version numbers in **package.json** and android's **build.gradle**.

The Pull Request should be named as **[develop] release vX.Y.Z**

###### Creating the main release pull request

Once this Pull Request has been created, you will need to generate a new Pull Request based off **main** comparing the **develop** release branch you have just created, this should ensure that all changes that have been made to **develop** since the last release are contained within this update.
