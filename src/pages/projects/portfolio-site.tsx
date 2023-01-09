import { ProjectLayout } from '@layouts/ProjectLayout';
import React from 'react';
import { projectsData } from 'section-data';

const PortfolioSiteContainer = () => {
    const project = projectsData[2];
    return (
        <ProjectLayout project={project}>
            <section className="flex flex-col text-gray-300 text-lg tracking-wide leading-loose font-thin">
                <h3 className="font-thin text-primary mb-4">Background</h3>
                <p>
                    This portfolio site is still a work in progress. I would
                    love to switch convert the project data into markdown
                    templates as well as add a blog. For now, it&apos;s main
                    purpose is to display some of my recent projects and my work
                    experience.
                </p>

                <div className="mt-8">
                    <h3 className="font-thin text-primary mb-4">Tech Stack</h3>
                    <p>
                        For this applications I decided to use the following
                        tech stack:
                    </p>
                    <ul className=" list-disc max-w-lg mx-left ml-12 mt-4 medium">
                        <li>Typescript</li>
                        <li>NextJS</li>
                        <li>Tailwindcss</li>
                    </ul>
                    <p className="mt-4">
                        I further configured the project with my own personal
                        favorite packages including, Husky for commit hooks,
                        prettier/eslint, and react-icons.
                    </p>
                </div>
            </section>
        </ProjectLayout>
    );
};

export default PortfolioSiteContainer;
