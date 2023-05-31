// import images
import Hero_person from './assets/images/Hero/person.png';

import htmlcss from './assets/images/Skills/htmlcss.png';
import redux from './assets/images/Skills/redux.png';
import reactjs from './assets/images/Skills/react.png';
import nodejs from './assets/images/Skills/node.png';
import tailwind from './assets/images/Skills/tailwind.png';
import javascript from './assets/images/Skills/javascript.png';

import project1 from './assets/images/projects/musicplayer.png';
import project2 from './assets/images/projects/restcountries.png';
import project3 from './assets/images/projects/youtube.png';
import project4 from './assets/images/projects/coffeeStyle.png';
import person_project from './assets/images/projects/person.png';

import avatar1 from './assets/images/Testimonials/avatar1.png';
import avatar2 from './assets/images/Testimonials/avatar2.png';
import avatar3 from './assets/images/Testimonials/avatar3.png';
import avatar4 from './assets/images/Testimonials/avatar4.png';

import Hireme_person from './assets/images/Hireme/person.png';
// import Hireme_person2 from './assets/images/Hireme/person2.png';

// import icons from react-icons
import { GrMail } from 'react-icons/gr';
import { MdArrowForward, MdCall } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';
import { TbSmartHome } from 'react-icons/tb';
import { BiUser } from 'react-icons/bi';
import { RiServiceLine, RiProjectorLine } from 'react-icons/ri';
import { MdOutlinePermContactCalendar } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';
export const content = {
    nav: [
        {
            link: '#home',
            icon: TbSmartHome,
        },
        {
            link: '#skills',
            icon: BiUser,
        },
        {
            link: '#projects',
            icon: RiProjectorLine,
        },
        {
            link: '#contact',
            icon: MdOutlinePermContactCalendar,
        },
    ],
    hero: {
        icon: AiOutlineMenu,
        title: 'Web Developer',
        firstName: 'TRAN HUU',
        lastName: 'NHA',
        btnText: 'Hire Me',
        image: Hero_person,
        hero_content: [
            {
                count: 'Student',
                text: 'of Insdustrial University of Ho Chi Minh City',
            },
            {
                count: '5+',
                text: 'Projects Worked in my career',
            },
        ],
    },
    skills: {
        title: 'Skills',
        subtitle: 'MY TOP SKILLS',
        skills_content: [
            {
                name: 'HTML5 & CSS3',
                para: 'Lorem ipsum text  dummy',
                logo: htmlcss,
            },
            {
                name: 'JavaScript',
                para: 'Lorem ipsum text  dummy',
                logo: javascript,
            },
            {
                name: 'React js',
                para: 'Lorem ipsum text  dummy',
                logo: reactjs,
            },
            {
                name: 'Node js',
                para: 'Lorem ipsum text  dummy',
                logo: nodejs,
            },
            {
                name: 'Redux',
                para: 'Lorem ipsum text  dummy',
                logo: redux,
            },
            {
                name: 'Tailwind css',
                para: 'Lorem ipsum text  dummy',
                logo: tailwind,
            },
        ],
        icon: MdArrowForward,
    },
    // services: {
    //     title: 'Services',
    //     subtitle: 'WHAT I OFFER',
    //     service_content: [
    //         {
    //             title: 'Web Development',
    //             para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean',
    //             logo: services_logo1,
    //         },
    //         {
    //             title: 'ui / ux DESIGNING',
    //             para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean',
    //             logo: services_logo2,
    //         },
    //         {
    //             title: 'PhotoShop Editing',
    //             para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean',
    //             logo: services_logo3,
    //         },
    //     ],
    // },
    projects: {
        title: 'Projects',
        subtitle: 'MY CREATION',
        image: person_project,
        project_content: [
            {
                title: 'Music Website',
                image: project1,
                github: 'https://github.com/huuwxnhax/Music-Website-by-huuwxnhaxdev',
            },
            {
                title: 'Rest countries API',
                image: project2,
                github: 'https://github.com/huuwxnhax/rest-countries',
            },
            {
                title: 'Youtube UI',
                image: project3,
                github: 'https://github.com/huuwxnhax/youtube-iu',
            },
            {
                title: 'CoffeeStyle with Tailwind',
                image: project4,
                github: 'https://github.com/huuwxnhax/CoffeeStyle-tailwind-css',
            },
        ],
    },
    Testimonials: {
        title: 'Testimonials',
        subtitle: 'MY CLIENT REVIEWS',
        testimonials_content: [
            {
                review: '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
                img: avatar1,
                name: 'JOHN DOE',
            },
            {
                review: '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
                img: avatar2,
                name: 'Tom Alex',
            },
            {
                review: '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
                img: avatar3,
                name: 'Johnny',
            },
            {
                review: '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
                img: avatar4,
                name: 'ROBBIN',
            },
        ],
    },
    Hireme: {
        title: 'Hire Me',
        subtitle: 'FOR YOUR PROJECTS',
        image1: Hireme_person,
        image2: Hireme_person,
        para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean',
        btnText: 'Hire Me',
    },
    contact: {
        title: 'Contect Me',
        subtitle: 'GET IN TOUCH',
        social_media: [
            {
                text: 'huunha21032k2@gmail.com',
                icon: GrMail,
                link: 'mailto:huunha21032k2@gmail.com',
            },
            {
                text: '0936343821',
                icon: MdCall,
                link: 'https://wa.me/0936343821',
            },
            {
                text: 'huuwxnhax',
                icon: BsInstagram,
                link: '',
            },
        ],
    },
    Footer: {
        text: 'All © Copy Right Reserved 2022',
    },
};
