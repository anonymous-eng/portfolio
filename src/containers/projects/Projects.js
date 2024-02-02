import React, {useContext} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";

export default function Projects() {
  const {isDark} = useContext(StyleContext);

    return (
      <>
        <div className="main" id="opensource">
          <h1 className="project-title">Projects</h1>
          <div className="repo-cards-div-main">
            {openSource.repo.map((v) => {
              return (
                <GithubRepoCard repo={v}  isDark={isDark} />
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </>
    );
}
