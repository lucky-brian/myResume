function Contact() {
    return (
        <section className="m-auto max-w-3xl mx-5 md:m-auto py-40" id="contact">
            <div>
                <p className="text-3xl font-bold text-center"><span className="text-blue-500">C</span>ontact</p>
            </div>
            <div className="flex justify-center flex-wrap items-center mt-10">
                <div className="text-center mx-5">
                    <img src="/images/phone.png" className="h-10 inline" alt="" />
                    <p className="mt-5">0951406634</p>
                </div>
                <div className="text-center mx-5">
                    <a href="https://www.facebook.com/profile.php?id=100012682572273" target="_blank" >
                        <img src="/images/Facebook.png" className="h-10 inline" alt="" />
                    </a>
                    <p className="mt-5">facebook</p>
                </div>
                <div className="text-center mx-5">
                    <a href="https://www.facebook.com/profile.php?id=100012682572273" target="_blank" >
                        <img src="/images/github.png" className="h-10 inline" alt="" />
                    </a>
                    <p className="mt-5">Github</p>
                </div>
                <div className="text-center mx-5">
                    <img src="/images/gmail.png" className="h-10 inline" alt="" />
                    <p className="mt-5">gaylove12960@gmail.com</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;