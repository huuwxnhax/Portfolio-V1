import { Fragment, createElement, useRef } from 'react';
import { content } from '../Content';
import { Toaster, toast } from 'react-hot-toast';

const Contact = () => {
    const { contact } = content;
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY').then(
            (result) => {
                console.log(result.text);
                form.current.reset();
                toast.success("Email sent successfully! I'll get back to you soon (-_-`)");
            },
            (error) => {
                console.log(error.text);
                toast.error('Something went wrong! Please try again later (*_*)');
            },
        );
    };

    return (
        <Fragment>
            <section id="contact" className="min-h-min bg-dark_primary">
                <Toaster />
                <div className="md:container flex flex-col gap-10 py-14 px-5">
                    <div className="flex flex-col">
                        <h2 data-aos="fade-down" className="md:text-3xl text-2xl text-white">
                            {contact.title}
                        </h2>
                        <h4 data-aos="fade-down" className="text-gray">
                            {contact.subtitle}
                        </h4>
                    </div>
                    <div className="flex sm:flex-row flex-col sm:justify-start gap-10">
                        <form
                            data-aos="fade-right"
                            ref={form}
                            onSubmit={sendEmail}
                            className="flex-1 flex flex-col gap-5"
                        >
                            <input
                                type="text"
                                name="from_name"
                                placeholder="Name"
                                required
                                className="border border-slate-600 p-3 rounded"
                            />
                            <input
                                type="email"
                                name="user_email"
                                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                                placeholder="Email"
                                required
                                className="border border-slate-600 p-3 rounded"
                            />
                            <textarea
                                type="text"
                                name="from_name"
                                placeholder="Name"
                                required
                                className="border border-slate-600 p-3 rounded h-44"
                            ></textarea>
                            <button className="btn self-start bg-white text-dark_primary hover:bg-primaryLinear hover:opacity-70">
                                Submit
                            </button>
                        </form>
                        <div className="flex-1 flex flex-col gap-5">
                            {contact.social_media.map((con, i) => (
                                <div
                                    key={i}
                                    data-aos="fade-down"
                                    data-aos-delay={i * 300}
                                    className="flex flex-row justify-start items-center gap-4"
                                >
                                    <h4 className="text-white">{createElement(con.icon)}</h4>
                                    <a href={con.link} className="font-Poppins text-white" target="_blank">
                                        {con.text}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Contact;
