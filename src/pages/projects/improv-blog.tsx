import { ProjectLayout } from '@layouts/ProjectLayout';
import React from 'react';
import { projectsData } from 'section-data';

const ImprovBlogContainer = () => {
    const project = projectsData[1];
    return (
        <ProjectLayout project={project}>
            <section className="flex flex-col text-gray-300 text-lg tracking-wide leading-loose font-thin">
                <h3 className="font-thin text-primary mb-4">Background</h3>
                <p>
                    I created this project after a conversation with a friend of
                    mine. We were talking about how community based applications
                    are so interesting and we wondered what would happen if you
                    let the community create a movie script. The idea later
                    became much broader instead of focusing on movie scripts
                    alone.
                </p>
                <p className="mt-4">
                    The concept of the app is based on community contributions.
                    A post creator can come up with a plot, title, and has the
                    ability to create new story blocks.
                </p>
                <p className="mt-4">
                    Blocks are the collections of contributions for a certain
                    part of the story. Clicking on a block will reveal all the
                    contributions that user thought would be a good fit for that
                    particular part of the story. The block with the most votes
                    will be the one displayed on the main view. Users can
                    continue voting and contributing to a block until the
                    moderator decides to lock it into the story.
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
                        <li>tRPC</li>
                        <li>Chakra UI</li>
                        <li>Prisma</li>
                        <li>NextAuth</li>
                        <li>ReactQuery</li>
                    </ul>
                    <p className="mt-4">
                        I further configured the project with my own personal
                        favorite packages including, Husky for commit hooks,
                        prettier/eslint, and react-icons.
                    </p>
                    <h4 className="font-thin text-gray-200 text-2xl mt-4">
                        Final Thoughts
                    </h4>
                    <p className="mt-4">
                        After starting this project with Chakra UI, I would
                        remove it and stick to tailwindcss if I could start
                        over. Chakra was ver helpful at first but ended up being
                        another tool to learn the quirks of. Using Chakras
                        compoenets out of the box was great. The problems for me
                        came when I wanted to do some customizations.
                    </p>
                </div>
            </section>
        </ProjectLayout>
    );
};

export default ImprovBlogContainer;
