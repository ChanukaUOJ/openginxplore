const PersonQualifications = ({ education, professionalQualifications }) => {
    const qualifications = [
        { title: 'Education', value: education, fallback: 'No education qualifications provided', className: 'mb-8' },
        { title: 'Professional Qualifications', value: professionalQualifications, fallback: 'No professional qualifications provided', className: '' }
    ];

    return (
        <div>
            {qualifications.map(({ title, value, fallback, className }) => (
                <div className={className} key={title}>
                    <h3 className="text-lg font-medium text-black dark:text-white mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-accent rounded-full"></div>
                        {title}
                    </h3>
                    <div className="space-y-3 ml-4">
                        <div className="flex items-center gap-3 p-3 rounded-md">
                            <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
                            <p className="text-sm dark:text-white text-black">{value || fallback}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default PersonQualifications;
