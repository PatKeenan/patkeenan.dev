import { ProjectLayout } from '@layouts/ProjectLayout';
import React from 'react';
import { projectsData } from 'section-data';

const ReAppContainer = () => {
    const project = projectsData[0];
    return (
        <ProjectLayout project={project}>
            <section className="flex flex-col text-gray-300 text-lg tracking-wide leading-loose font-thin">
                <h3 className="font-thin text-primary mb-4">Background</h3>
                <p>
                    While working as a real estate agent, I noticed a serious
                    lack of products available for managing a business as an
                    independent contractor in the real estate industry. No tool
                    existed for the typical operations an agent goes through on
                    a daily basis. This includes:
                </p>
                <ul className="list-disc max-w-lg mx-left ml-12 mt-4">
                    <li className="list-item">
                        Creating and scheduling appointments.
                    </li>
                    <li className="list-item">
                        Arranging appointments based on the proximity to others.
                    </li>
                    <li className="list-item">
                        Associating client notes/feedback with the appointment
                        in pertains to.
                    </li>
                    <li className="list-item">
                        Tracking which vendors/agents have joined you on
                        appointments.
                    </li>
                    <li className="list-item">
                        Tracking the status of appointments across multiple
                        clients.
                    </li>
                </ul>
                <div className="mt-8">
                    <h3 className="font-thin text-primary mb-4">Tech Stack</h3>
                    <p>
                        The tech stack I chose for this application is known as
                        the T3 stack. The T3 stack is my go to choice for
                        creating full stack applications. T3 comes pre-loaded
                        with the following technologies:
                    </p>
                    <ul className=" list-disc max-w-lg mx-left ml-12 mt-4 medium">
                        <li>Typescript</li>
                        <li>NextJS</li>
                        <li>tRPC</li>
                        <li>Prisma</li>
                        <li>NextAuth</li>
                        <li>ReactQuery</li>
                        <li>Tailwindcss</li>
                    </ul>
                    <p className="mt-4">
                        I further configured the project with my own personal
                        favorite packages including, Husky for commit hooks,
                        prettier/eslint, hericons, and headlessui.
                    </p>
                </div>
            </section>
        </ProjectLayout>
    );
};

export default ReAppContainer;
