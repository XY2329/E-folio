import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
    return (
        <main className="grid md:grid-cols-2 mt-28 mb-10 gap-4 relative" id="contact">
            <div className="z-10">
                <h5 className="text-4xl font-bold my-2">Let's Connect</h5>
                <p className="mb-4 max-w-md mt-8 text-justify">
                    I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <h4 className="pb-3 mt-6">Let's get in touch!</h4>
                <div className="flex flex-row gap-4 mt-6">
                    <a href="https://www.linkedin.com/in/see-xiao-yin/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon className="text-gray-600 hover:text-blue-700" style={{ fontSize: 40 }} />
                    </a>
                    <a href="https://github.com/XY2329" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon className="text-gray-600 hover:text-blue-800" style={{ fontSize: 40 }} />
                    </a>
                    <a href="mailto:xiao_yin1127@hotmail.com" target="_blank" rel="noopener noreferrer">
                        <EmailIcon className="text-gray-600 hover:text-blue-500" style={{ fontSize: 40 }} />
                    </a>
                </div>
            </div>
        </main>
    );
};

export default Contact;
