

const AboutBenefits = () => {
    return (
        <section className="bg-background-grey py-24">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-primary leading-tight tracking-tight">
                        Benefit from personalized service that guarantees an exceptional and unforgettable time
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                    {/* Benefit Card 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm flex gap-6 items-start hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 shrink-0 border rounded-full flex items-center justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/2950/2950663.png" alt="Icon 1" className="w-6 h-6 opacity-70" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-primary mb-3">Our value</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur. Sagittis imperdiet lacus lacus sed mauris dolor parturient tristique dapibus ut odio.
                            </p>
                        </div>
                    </div>

                    {/* Benefit Card 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm flex gap-6 items-start hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 shrink-0 border rounded-full flex items-center justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/2065/2065224.png" alt="Icon 2" className="w-6 h-6 opacity-70" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-primary mb-3">Our value</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur. Sagittis imperdiet lacus lacus sed mauris dolor parturient tristique dapibus ut odio.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-gray-500 leading-relaxed text-sm">
                        Lorem ipsum dolor sit amet consectetur. Dictumst arcu adipiscing cursus in sollicitudin. A non pharetra quis faucibus lacus. Ullamcorper dictum magna sem faucibus.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutBenefits;
