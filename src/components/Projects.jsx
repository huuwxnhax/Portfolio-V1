import { Fragment } from 'react';
import { content } from '../Content';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

const Projects = () => {
    const { projects } = content;
    return (
        <Fragment>
            <div id="projects" className="min-h-min bg-sky-100">
                <div className=" md:container p-4 flex flex-col gap-10">
                    <div className="flex flex-col pt-8">
                        <h2 data-aos="fade-down" className="md:text-3xl text-2xl">
                            {projects.title}
                        </h2>
                        <h4 data-aos="fade-down" className="text-gray">
                            {projects.subtitle}
                        </h4>
                    </div>
                    <div>
                        <Swiper
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            data-aos="fade-up"
                            className="mySwiper md:w-[60%] w-[80%] m-auto pb-12"
                        >
                            {projects.project_content.map((project, i) => (
                                <SwiperSlide
                                    key={i}
                                    className="w-[20%] md:h-[600px] h-[400px] relative flex flex-col items-center justify-center md:gap-10 gap-5 drop-shadow-normal rounded-[20px]  group"
                                >
                                    <div className="w-full h-[60%]">
                                        <img
                                            className="w-full h-full object-fit overflow-hidden rounded-[20px]"
                                            src={project.image}
                                        />
                                    </div>
                                    <h6 className="">{project.title}</h6>
                                    <div className="pb-4 flex md:flex-row flex-col justify-center items-center gap-5">
                                        <div className="btn hover:bg-primaryLinear hover:opacity-70">
                                            <a className="" href={project.github} target="_blank">
                                                View on Github
                                            </a>
                                        </div>
                                        <div className="btn hover:bg-primaryLinear hover:opacity-70">
                                            <a className="" href={project.github} target="_blank">
                                                View Demo
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Projects;
