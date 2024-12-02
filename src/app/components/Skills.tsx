export default function Skills() {
    const skills = [
        { name: 'JS', color: 'from-yellow-400 to-orange-500' },
        { name: 'TS', color: 'from-blue-400 to-blue-600' },
        { name: 'React', color: 'from-cyan-400 to-blue-500' },
        { name: 'Tailwindcss', color: 'from-teal-400 to-cyan-500' },
        { name: 'Premierepro', color: 'from-purple-400 to-pink-500' }
    ];

    return (
        <section className="py-8 bg-transparent">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Tech Skill
                </h2>
                <div className="flex flex-wrap gap-4">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className={`skill-badge ${skill.color}`}
                        >
                            {skill.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
