export default function Home() {
    return (
        <div className="min-h-screen px-20 py-10 flex flex-col justify-between">
            <div>
                <h1>Allison Tielking</h1>
                <h3>software engineer & city planner in training</h3>
            </div>
            <div className="flex items-center justify-center gap-2">
                <div>
                    <a
                        href="mailto:hi@allisontielking.com"
                        className="relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-current after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                        email
                    </a>
                </div>
                <div>{"\u00B7"}</div>
                <div>
                    <a
                        href="https://www.linkedin.com/in/allison-tielking/"
                        className="relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-current after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                        linkedin
                    </a>
                </div>
                <div>{"\u00B7"}</div>
                <div>
                    <a
                        href="https://github.com/atielking98"
                        className="relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-current after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                        github
                    </a>
                </div>
            </div>
        </div>
    );
}
