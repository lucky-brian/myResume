function Experience() {
    return (
        <section className="py-40 m-auto max-w-3xl mx-5 md:m-auto" id="experience">
            <div>
                <p className="text-3xl font-bold text-center"><span className="text-blue-500">E</span>xperience</p>
            </div>
            <div className="mt-10">
                <div>
                    <p className="text-xl">Graduation project</p>
                    <div className="flex mt-2">
                        <div className="w-px h-20 bg-white mx-5 ml-5"></div>
                        <div>
                            <p className="text-blue-500">Typing-tutorial Web. </p>
                            <p> - A website for testing your typing speed and typing practice.</p>
                            <p> - Developed using HTML, CSS, Javascript, Node js and SQL.</p>
                        </div>
                        
                    </div>
                </div>
                <div>
                    <div className="flex-col justify-between text-xl mt-10">
                        <p>Innovation for friend Company limited. </p>
                        <p className="text-lg">Dec 2022 - Mar 2023</p>
                    </div>
                    <div className="flex mt-2">
                        <div className="w-px h-20 bg-white mx-5 ml-5"></div>
                        <div>
                            <p className="text-blue-500">Front-end dev </p>
                            <p> - UX/UI design web and application.</p>
                            <p> - Frontend web application developed using vue js + vuetify js.</p>
                        </div>
                        
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Experience;