import { Hero, Div, Button, SocialIcons } from '@components/common';
import { ToastContainer, toast } from 'react-toastify';
import { HiOutlineClipboard } from 'react-icons/hi';
import { HomePageHeroSectionsType } from './shared.types';
import * as React from 'react';
import { useIsInViewport } from '@hooks';
import { useStore } from '@store';
import Image from 'next/image';
import clsx from 'clsx';

export const Contact = (props: HomePageHeroSectionsType) => {
    const { id } = props;
    const [email, setEmail] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const sectionRef = React.useRef<HTMLDivElement | null>(null);
    const isInViewport = useIsInViewport(sectionRef);
    const { setActiveSection } = useStore();

    const notify = () => {
        toast('Copied to Clipboard', {
            type: 'success',
            position: 'bottom-right',
            pauseOnHover: false,
            autoClose: 2500,
        });
    };

    React.useEffect(() => {
        if (isInViewport) {
            setActiveSection('Contact');
        }
    }, [isInViewport, setActiveSection]);

    const handleRevealEmail = async () => {
        setLoading(true);
        const data = await fetch('/api/email')
            .then((res) => res.json())
            .catch((error) => console.log(error));
        if (data && data.email) {
            setEmail(data.email);
        }
        setLoading(false);
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        notify();
    };

    return (
        <Hero
            id={id}
            variant="dark"
            sectionTitle="Contact"
            maxWidth
        >
            <div ref={sectionRef}>
                <ToastContainer />
                <Div className="v-stack lg:h-stack justify-center gap-4 grid place-items-center">
                    <Div className="text-center lg:text-left w-full lg:w-2/3 flex-shrink-0 space-y-2 justify-center v-stack order-2">
                        <div>
                            <h4 className="font-bold text-2xl tracking-widest whitespace-nowrap">
                                Patrick Keenan
                            </h4>
                        </div>

                        <p className="max-w-prose mx-auto lg:mx-0">
                            Full stack web developer specializing in building
                            single and multi page applications using React,
                            NextJS, Tailwind, tRPC, and Prisma. Feel free to
                            send me an email if you would like to connect!
                        </p>
                        <SocialIcons />
                        <div>
                            {!email && (
                                <Button
                                    onClick={() => handleRevealEmail()}
                                    className={clsx(
                                        loading && 'animate-pulse',
                                        'mx-auto md:mr-auto mt-1'
                                    )}
                                >
                                    {loading ? 'loading...' : 'Reveal Email'}
                                </Button>
                            )}
                            {email && (
                                <Button
                                    onClick={() => handleCopyEmail()}
                                    className={clsx(
                                        loading && 'animate-pulse',
                                        'flex align-middle mx-auto lg:mx-0 mt-1'
                                    )}
                                >
                                    {email}
                                    <HiOutlineClipboard className="my-auto ml-2" />
                                </Button>
                            )}
                        </div>
                    </Div>
                    <Div className="text-center lg:text-left w-full lg:w-1/3 h-full order-1 lg:order-2">
                        <div className="h-[150px] w-[150px] md:h-[250px] md:w-[250px] mx-auto relative justify-center ">
                            <Image
                                priority
                                src="/pk.png"
                                alt="Patrick Keenan"
                                height={250}
                                width={250}
                                layout="responsive"
                                className="rounded-full lg:rounded-lg object-cover z-0"
                            />
                        </div>
                    </Div>
                </Div>
            </div>
        </Hero>
    );
};
