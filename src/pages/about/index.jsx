import profile from '../../images/profile.png'
function About() {
    return (
        <div id="aboutMe">
            <section className="m-auto max-w-3xl py-20">
                <div className="text-3xl font-bold flex justify-start items-center mb-8">
                    <div className='flex justify-center m-auto'>
                        <p>About</p><p className='text-blue-500 ml-2'>Me</p>
                    </div>
                </div>
                <div className="flex justify-around items-start flex-wrap m-auto">
                    <div>
                        <img src={profile} alt="" className='h-72 rounded-xl' />
                    </div>
                    <div className="max-w-xl md:w-1/2 mx-6 mt-5">
                        <p className='mb-3'>
                            Hello!, My name is Montra Chaytaweep, nickname Guy, I'm a <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Frontend developer. </span>
                            and I enjoy the time to create and develop user interface
                        </p>
                        <p>
                            i'm passionate about beautiful interfaces and intuitively implemented ux
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;