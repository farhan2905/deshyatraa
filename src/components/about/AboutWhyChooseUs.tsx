

const AboutWhyChooseUs = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <div className="max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-medium text-primary mb-6 tracking-tight">
                        Why choose us?
                    </h2>
                    <p className="text-gray-500 leading-relaxed text-sm">
                        Lorem ipsum dolor sit amet consectetur. Volutpat felis blandit eu vestibulum eget. Morbi eu quis ornare elit pellentesque lacus tellus quam. Sem diam sed lectus cursus porttitor volutpat nibh.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">

                    {/* Feature 1 */}
                    <div className="flex gap-6 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 shrink-0 rounded-full border border-gray-200 flex items-center justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/2950/2950660.png" alt="Travel Insurance" className="w-7 h-7 opacity-70" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-primary mb-3">Travel Insurance</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur. Massa ac at faucibus eget congue.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex gap-6 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 shrink-0 rounded-full border border-gray-200 flex items-center justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png" alt="Guided tours" className="w-7 h-7 opacity-70" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-primary mb-3">Guided tours</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur. Massa ac at faucibus eget congue.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex gap-6 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 shrink-0 rounded-full border border-gray-200 flex items-center justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/2838/2838558.png" alt="Special membership rate" className="w-7 h-7 opacity-70" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-primary mb-3">Special membership rate</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur. Massa ac at faucibus eget congue.
                            </p>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex gap-6 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 shrink-0 rounded-full border border-gray-200 flex items-center justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/7604/7604085.png" alt="Competitive pricing" className="w-7 h-7 opacity-70" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-primary mb-3">Competitive pricing</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur. Massa ac at faucibus eget congue.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutWhyChooseUs;
