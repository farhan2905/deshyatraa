

const AboutStatsSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto divide-x-0 md:divide-x divide-gray-200">

                    <div className="w-1/2 md:w-1/4 text-center py-6">
                        <h3 className="text-4xl lg:text-5xl font-medium text-accent mb-2">15+</h3>
                        <p className="text-gray-500 uppercase tracking-wider text-sm font-medium">Countries</p>
                    </div>

                    <div className="w-1/2 md:w-1/4 text-center py-6">
                        <h3 className="text-4xl lg:text-5xl font-medium text-accent mb-2">70k+</h3>
                        <p className="text-gray-500 uppercase tracking-wider text-sm font-medium">Travelers</p>
                    </div>

                    <div className="w-1/2 md:w-1/4 text-center py-6">
                        <h3 className="text-4xl lg:text-5xl font-medium text-accent mb-2">50+</h3>
                        <p className="text-gray-500 uppercase tracking-wider text-sm font-medium">Tour Guides</p>
                    </div>

                    <div className="w-1/2 md:w-1/4 text-center py-6">
                        <h3 className="text-4xl lg:text-5xl font-medium text-accent mb-2">120+</h3>
                        <p className="text-gray-500 uppercase tracking-wider text-sm font-medium">Tour Packages</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutStatsSection;
