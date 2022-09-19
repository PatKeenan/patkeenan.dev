import { Article, Div } from '@components/common';
import Image from 'next/image';

export const ExperienceCard = () => {
    return (
        <Article
            variant="none"
            borderColor="primary"
            className="text-center w-[400px] md:w-[600px] h-[80%] rounded-md flex-shrink-0 snap-center p-10 border-4"
        >
            <div className="h-[100px] w-[100px] mx-auto relative justify-center ">
                <Image
                    priority
                    src="/patrick-keenan.jpeg"
                    alt="Patrick Keenan"
                    height={100}
                    width={100}
                    layout="responsive"
                    className="rounded-full object-cover"
                />
            </div>
            <Div className="v-stack justify-center space-y-4">
                <h4 className="text-3xl font-bold tracking-wide">Job Title</h4>
                <div>technology logos</div>

                <ul>
                    <li>Desription</li>
                    <li>Desription</li>
                    <li>Desription</li>
                    <li>Desription</li>
                </ul>
            </Div>
        </Article>
    );
};
