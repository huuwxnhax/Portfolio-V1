import { content } from '../Content';
const Hero = () => {
    const { hero } = content;
    const MenuIcon = hero.icon;
    return (
        <section id="home">
            <div className="wrapper min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
                <div
                    data-aos="slide-left"
                    data-aos-delay="1000"
                    className="absolute -z-10 h-full md:w-4/12 w-8/12 top-0 right-0 bottom-0 bg-primaryLinear"
                >
                    <h1 className="rotate-90 absolute top-[30%] right-[-25%] text-[#EAF2FA]">
                        {hero.firstName}
                        <span>{hero.lastName}</span>
                    </h1>
                </div>
                {/* <div className="fixed top-[5%] left-[2%] w-10 h-10 cursor-pointer">
                    <MenuIcon className="w-full h-full hover:opacity-70" />
                </div> */}
                <div className="pb-16 px-6" data-aos="fade down">
                    <h2 data-aos="fade-down">{hero.title}</h2> <br />
                    <div data-aos="fade-down" className="flex justify-end hover:opacity-70">
                        <button className="btn">{hero.btnText}</button>
                    </div>
                    <div className="flex flex-col gap-10 mt-10">
                        {hero.hero_content.map((content, i) => (
                            <div
                                data-aos="fade-down"
                                data-aos-delay={i * 300}
                                className={`flex items-center w-80 gap-5 ${i == 1 && 'flex-row-reverse text-right'}`}
                                key={i}
                            >
                                <h3>{content.count}</h3>
                                <p>{content.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="md:h-[37rem] h-96 ">
                    <img data-aos="slide-up" className="h-full object-cover" src={hero.image} alt="..." />
                </div>
            </div>
        </section>
    );
};

export default Hero;
