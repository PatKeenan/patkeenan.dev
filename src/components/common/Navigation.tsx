import { Div, Li, Nav, Ul } from '@components/common';
import { RiMenu5Fill } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';
import { siteWidth } from '@utils/theme';
import { useClickAway } from '@hooks';
import { useStore } from '@store';
import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';

const navItems = [
    { title: 'Experience', href: '#experience' },
    { title: 'Projects', href: '#projects' },
    { title: 'Skills', href: '#skills' },
    { title: 'Contact', href: '#contact' },
] as const;

const navItemKeys = navItems.flatMap((i) => i.title);
export type NavigationKeys = typeof navItemKeys[number];

export const Navigation = () => {
    const { ref: NavContainerRef, handleToggle, active } = useClickAway();
    const { activeSection } = useStore();

    return (
        <Nav
            className={clsx(
                siteWidth,
                'h-stack w-full justify-between text-sm lg:text-base'
            )}
        >
            <Link href="/">
                <a className={clsx(activeSection == 'Home' && 'text-primary')}>
                    Pat Keenan
                </a>
            </Link>
            <Ul className="h-stack space-x-4 items-center hidden lg:flex ">
                {navItems.map((item, index) => (
                    <Li
                        key={index}
                        onClick={() => handleToggle()}
                        onMouseDown={() => handleToggle}
                    >
                        <Link href={`/${item.href}`}>
                            <a
                                className={clsx(
                                    activeSection == item.title &&
                                        'text-primary'
                                )}
                            >
                                {item.title}
                            </a>
                        </Link>
                    </Li>
                ))}
            </Ul>
            <Div className="relative flex lg:hidden">
                <div ref={NavContainerRef}>
                    {active && (
                        <Ul
                            className="v-stack lg:h-stack text-lg space-x-4 items-center absolute right-1 lg:relative space-y-8 p-8 rounded-lg top-1 shadow lg:hidden"
                            variant="light"
                            style={{ originY: 0, originX: '100%' }}
                            initial={{
                                opacity: 0,
                                scaleY: 0,
                                scaleX: 0,
                            }}
                            animate={{ opacity: 1, scaleY: 1, scaleX: 1 }}
                            transition={{ duration: 0.23 }}
                        >
                            {navItems.map((item, index) => (
                                <Li
                                    key={index}
                                    onClick={() => handleToggle()}
                                    onMouseDown={() => handleToggle}
                                >
                                    <Link href={`/${item.href}`}>
                                        <a>{item.title}</a>
                                    </Link>
                                </Li>
                            ))}
                        </Ul>
                    )}
                    <button
                        onClick={() => handleToggle()}
                        className=" rounded-bl-lg justify-center h-8 w-8 appearance-none text-light absolute -top-1 right-0 bg-dark p-1"
                    >
                        {active ? (
                            <IoMdClose
                                className={
                                    'h-[100%] w-[100%] transform transition-transform duration-150 ease active:rotate-45'
                                }
                            />
                        ) : (
                            <RiMenu5Fill className="h-[100%] w-[100%] transform transition-transform duration-150 ease active:-rotate-45" />
                        )}
                    </button>
                </div>
            </Div>
        </Nav>
    );
};
