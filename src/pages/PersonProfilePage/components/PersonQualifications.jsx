const PersonQualifications = ({ education, professionalQualifications }) => {
    return (
        <div>
            {/* Education Section */}
            <div className="mb-8">
                <h3 className="text-lg font-medium text-black mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-accent rounded-full"></div>
                    Education
                </h3>
                <div className="space-y-3 ml-4">
                    <div className="flex items-center gap-3 p-3 rounded-md">
                        <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
                            <p className="text-sm text-black">{education}</p>
                    </div>
                </div>
            </div>

            {/* Certifications Section */}
            <div>
                <h3 className="text-lg font-medium text-black mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-accent rounded-full"></div>
                    Professional Qualifications
                </h3>
                <div className="space-y-3 ml-4">
                    <div className="flex items-center gap-3 p-3 rounded-md">
                        <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
                        <p className="text-sm text-black">{professionalQualifications}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonQualifications;
