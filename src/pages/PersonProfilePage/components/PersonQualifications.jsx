const PersonQualifications = ({ education, professionalQualifications }) => {
    return (
        <div>
            {/* Education Section */}
            <div className="mb-8">
                <h3 className="text-lg font-medium text-black dark:text-white mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-accent rounded-full"></div>
                    Education
                </h3>
                <div className="space-y-3 ml-4">
                    <div className="flex items-center gap-3 p-3 rounded-md">
                        <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
                        {education ? (
                            <p className="text-sm dark:text-white text-black">{education}</p>
                        ) : (
                            <p className="text-sm dark:text-white text-black">No education qualifications provided</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Certifications Section */}
            <div>
                <h3 className="text-lg font-medium dark:text-white text-black mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-accent rounded-full"></div>
                    Professional Qualifications
                </h3>
                <div className="space-y-3 ml-4">
                    <div className="flex items-center gap-3 p-3 rounded-md">
                        <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
                        {professionalQualifications ? (
                            <p className="text-sm dark:text-white text-black">{professionalQualifications}</p>
                        ) : (
                            <p className="text-sm dark:text-white text-black">No professional qualifications provided</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonQualifications;
