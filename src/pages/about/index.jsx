import profile from '../../images/profile.png'
function About() {
    return (
        <div id="aboutMe" className="m-auto">
            <div className="text-3xl font-bold flex justify-center items-center mb-8">
                <div className='flex'>
                    <p>About</p><p className='text-blue-500 ml-2'>Me</p>
                </div>
                {/* <div className='ml-3 bg-gray-400 w-0 md:w-80 h-px'></div> */}
            </div>
            <div className="flex justify-center items-start flex-wrap max-w-5xl m-auto">
                <div>
                    <img src={profile} alt="" className='h-72 rounded-xl'/>
                </div>
                <div className="max-w-xl md:w-1/2 mx-10">
                    <p className='mb-3'>
                        Hello!, My name is Montra Chaytaweep, nickname Guy, I'm a <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Frontend developer. </span>
                        and I enjoy the time to create and develop user interface
                    </p>
                    <p>
                        i'm passionate about beautiful interfaces and intuitively implemented ux
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;