const PersonQualifications = () => {
    return (
        <div>
            {/* Education Section */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-accent rounded-full"></div>
                    Education
                </h3>
                <div className="space-y-4 ml-4">
                    <div className="border-l-2 border-gray-200 pl-4 py-2">
                        <p className="font-semibold text-black">Master of Laws (LL.M)</p>
                        <p className="text-sm text-gray-600">University of Colombo</p>
                        <p className="text-xs text-gray-500 mt-1">1988 - 1990</p>
                    </div>
                    <div className="border-l-2 border-gray-200 pl-4 py-2">
                        <p className="font-semibold text-black">Bachelor of Laws (LL.B)</p>
                        <p className="text-sm text-gray-600">University of Peradeniya</p>
                        <p className="text-xs text-gray-500 mt-1">1983 - 1987</p>
                    </div>
                    <div className="border-l-2 border-gray-200 pl-4 py-2">
                        <p className="font-semibold text-black">Advanced Level - Physical Science</p>
                        <p className="text-sm text-gray-600">Royal College, Colombo</p>
                        <p className="text-xs text-gray-500 mt-1">1980 - 1982</p>
                    </div>
                </div>
            </div>

            {/* Certifications Section */}
            <div>
                <h3 className="text-lg font-semibold text-black mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-accent rounded-full"></div>
                    Certifications & Training
                </h3>
                <div className="space-y-3 ml-4">
                    <div className="flex items-start gap-3 p-3 rounded-md bg-gray-50">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        <div>
                            <p className="font-medium text-black">Certified Public Administrator</p>
                            <p className="text-xs text-gray-600 mt-1">Sri Lanka Institute of Public Administration - 1995</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-md bg-gray-50">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        <div>
                            <p className="font-medium text-black">Leadership in Governance</p>
                            <p className="text-xs text-gray-600 mt-1">Harvard Kennedy School - 2000</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-md bg-gray-50">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        <div>
                            <p className="font-medium text-black">International Relations & Diplomacy</p>
                            <p className="text-xs text-gray-600 mt-1">Oxford University - 2005</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonQualifications;
