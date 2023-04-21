import Dev from '../../images/dev.png'
function Slide() {
    return (
        <div>
            <section className='flex justify-center items-center h-screen'>
                <div className="flex justify-center items-center flex-wrap mx-5">
                    <div className="flex-col justify-center item-center">
                        <div className="text-blue-500 text-xl">
                            <p>Hi, My name is</p>
                        </div>
                        <div className="lg:text-6xl text-5xl  font-bold">
                            <p>Montra Chaytaweep.</p>
                        </div>
                        <div className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            <p>Frontend dev</p>
                        </div>
                        <div className='max-w-sm my-3'>
                            {/* <p>I'm a junior front-end developer. I enjoy the time to create and develop user interface(UI).</p> */}
                            <p id='typing'>Wellcome to my websites</p>
                        </div>
                    </div>
                    <div>
                        <img src={Dev} alt="" className='h-56 md:mt-0 mt-10' />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Slide;
