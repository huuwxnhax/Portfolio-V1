import { createElement } from 'react';
import { content } from '../Content';
import { HiMenuAlt2 } from 'react-icons/hi';
import { useState } from 'react';

const Navbar = () => {
    const { nav } = content;
    const [active, setActive] = useState(0);
    const [show, setShow] = useState(false);

    return (
        <div className="w-full flex justify-center">
            <div
                onClick={() => setShow(!show)}
                className="cursor-pointer fixed top-10 left-10 z-40 rounded-lg bg-white/40 p-2"
            >
                <HiMenuAlt2 size={34} />
            </div>
            <nav
                className={`fixed z-40 flex items-center gap-5 bg-slate-200/60
                px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-500
                ${show ? 'bottom-10' : 'bottom-[-100%]'}`}
            >
                {nav.map((item, i) => (
                    <a
                        key={i}
                        href={item.link}
                        onClick={() => setActive(i)}
                        className={`text-xl p-2.5 rounded-full sm:cursor-pointer ${
                            i === active && 'bg-dark_primary text-white'
                        }`}
                    >
                        {createElement(item.icon)}
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default Navbar;
