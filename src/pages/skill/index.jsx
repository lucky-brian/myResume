import React from "react";

function Skill() {
    const language = [
        { id: 1, title: 'HTML', path: '/images/HTML2.png' },
        { id: 2, title: 'CSS', path: '/images/CSS.png' },
        { id: 3, title: 'Java script', path: '/images/js.png' },
    ];

    const frameworks = [
        { id: 1, title: 'Vue', path: '/images/vue.png' },
        { id: 2, title: 'React', path: '/images/react.png' },
        { id: 3, title: 'Tailwindcss', path: '/images/tailwindcss.png' },
        { id: 4, title: 'Vuetify', path: '/images/vuetify.png' },
        { id: 5, title: 'Bootstrap', path: '/images/bootstrap.png' },
    ]; 

    const tools = [
        { id: 1, title: 'VS code', path: '/images/vscode.png' },
        { id: 2, title: 'Github', path: '/images/github.png' },
        { id: 3, title: 'Git', path: '/images/git.png' },
        { id: 4, title: 'Docker', path: '/images/docker.png' },
        { id: 5, title: 'Figma', path: '/images/figma.png' },
    ]; 

    return (
        <section className="m-auto max-w-3xl mx-5 md:m-auto py-40" id="skill">
            <div>
                <p className="text-3xl font-bold text-center"><span className="text-blue-500">S</span>kill</p>
            </div>
            <div>
                <div>
                    <p className="text-xl my-5 text-center">Programming language</p>
                </div>
                <div className="flex justify-center flex-wrap items-center mt-5">
                    {language.map((e) => (
                        <div key={e.id} className="text-center mx-5">
                            <img src={e.path} className="h-10 inline" alt="" />
                            <p className="mt-2 text-lg">{e.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-10">
                <div>
                    <p className="text-xl my-5 text-center">Libraries & Frameworks</p>
                </div>
                <div className="flex justify-center flex-wrap items-center mt-5">
                    {frameworks.map((e) => (
                        <div key={e.id} className="text-center mx-5">
                            <img src={e.path} className="h-10 inline" alt="" />
                            <p className="mt-2 text-lg">{e.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-10">
                <div>
                    <p className="text-xl my-5 text-center">Tools & Platforms</p>
                </div>
                <div className="flex justify-center flex-wrap items-center mt-5">
                    {tools.map((e) => (
                        <div key={e.id} className="text-center mx-5">
                            <img src={e.path} className="h-10 inline" alt="" />
                            <p className="mt-2 text-lg">{e.title}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default Skill;