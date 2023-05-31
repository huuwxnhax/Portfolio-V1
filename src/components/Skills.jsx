import { Fragment } from 'react';
import { content } from '../Content';

const Skills = () => {
    const { skills } = content;

    return (
        <section id="skills">
            <div className="min-h-min bg-bg_light_primary pb-6">
                <div className="md:container p-4 flex flex-col w-full gap-10">
                    <div className="flex flex-col pt-8">
                        <h2 data-aos="fade-down" className="md:text-3xl text-2xl">
                            {skills.title}
                        </h2>
                        <h4 data-aos="fade-down" className="text-gray">
                            {skills.subtitle}
                        </h4>
                    </div>
                    <div className="md:w-[90%] w-[98%] flex flex-row flex-wrap items-center justify-center gap-4 m-auto">
                        {skills.skills_content.map((content, i) => (
                            <div
                                key={i}
                                data-aos="fade-up"
                                data-aos-delay={i * 300}
                                className="md:w-[380px] w-[420px] h-[95px] flex items-center px-4 gap-4 bg-white rounded-lg 
                              border-solid border-2 border-slate-200 shadow-slate-200 cursor-pointer group"
                            >
                                <div className="w-[40px] h-[40px]">
                                    <img
                                        className="w-full h-full object-fit group-hover:scale-125 duration-200"
                                        src={content.logo}
                                        alt="..."
                                    />
                                </div>
                                <div>
                                    <h6>{content.name}</h6>
                                    <p>{content.para}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
