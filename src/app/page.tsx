/* eslint-disable react/no-unescaped-entities */
export default function Home() {
    return (
        <div className="min-h-screen px-20 py-10 flex flex-col gap-12 justify-between">
            <div className="relative">
                <div className="absolute inset-0 bg-[url('/city-plan.png')] bg-right bg-no-repeat opacity-30 pointer-events-none"></div>
                <div className="relative z-10">
                    <h1>Allison Tielking</h1>
                    <h3>software engineer & city planner in training</h3>
                    {/* ...rest of your content... */}
                </div>
            </div>
            <div className="flex flex-grow border border-gray-200 rounded-md p-10 text-xl">
                <div>
                    Hi, I'm Alli! I'm currently studying for a Master in City
                    Planning at{" "}
                    <a
                        href="https://dusp.mit.edu/masters"
                        target="_blank"
                        className="font-semibold relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-current after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                        MIT DUSP
                    </a>
                    .
                </div>
            </div>
            <div className="flex items-center justify-center gap-2">
                <div>
                    <a
                        href="mailto:hi@allisontielking.com"
                        target="_blank"
                        className="relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-current after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                        email
                    </a>
                </div>
                ·
                <div>
                    <a
                        href="https://tielqueen.substack.com"
                        target="_blank"
                        className="relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-current after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                        substack
                    </a>
                </div>
                ·
                <div>
                    <a
                        href="https://www.linkedin.com/in/allison-tielking/"
                        target="_blank"
                        className="relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-current after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                        linkedin
                    </a>
                </div>
                ·
                <div>
                    <a
                        href="https://github.com/atielking98"
                        target="_blank"
                        className="relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-current after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                        github
                    </a>
                </div>
            </div>
        </div>
    );
}
