import Head from 'next/head';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { projectsData } from 'section-data';
import { IconLink } from '@components/common';

export const ProjectLayout = ({
    project,
    children,
}: {
    project: typeof projectsData[number];
    children: React.ReactNode;
}) => {
    return (
        <>
            <Head>
                <title>{project.title}</title>
                <meta
                    name="description"
                    content={project.shortDescription}
                />
            </Head>
            <div className="max-w-4xl mx-auto my-4 px-3 pb-8">
                <div className="max-w-[56rem] w-auto h-[400px]  md:h-[60vh] mx-auto flex justify-center relative">
                    <Image
                        src={project.photo}
                        alt="project-photo"
                        layout="fill"
                        objectFit="scale-down"
                        height={500}
                        width={500}
                    />
                </div>
                <div className="block mt-4">
                    <h2 className="text-4xl text-white">{project.title}</h2>
                    <p className="text-sm text-gray-400 tracking-wide mt-2">
                        {project.shortDescription}
                    </p>
                    <div className="flex space-x-4 mt-4">
                        {project.projectUrl ? (
                            <IconLink href={project?.projectUrl}>
                                <FaGlobe className="h-5 w-5 my-auto mr-2" />
                                <span>Visit Site</span>
                            </IconLink>
                        ) : null}
                        {project.githubUrl ? (
                            <IconLink href={project?.githubUrl}>
                                <FaGithub className="h-5 w-5 my-auto mr-2" />
                                <span>View Code</span>
                            </IconLink>
                        ) : (
                            <div className="flex">
                                <div className="inline-flex rounded-md  bg-dark-accent/40 px-3 py-2 text-dark-accent/40 cursor-not-allowed">
                                    <FaGithub className="h-5 w-5 my-auto mr-2" />
                                    <span>View Code</span>
                                </div>
                                <div className="flex flex-col ml-1">
                                    <span className="text-xs  text-green-400 rounded-full py-1 ">
                                        - Private Repo
                                    </span>
                                    <Link
                                        href={'/#contact'}
                                        passHref
                                    >
                                        <a className="ml-2 text-xs text-gray-400 hover:underline hover:text-gray-200">
                                            Contact to view code
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                    <main className="border-t border-t-dark-accent mt-6 pt-6">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
};
