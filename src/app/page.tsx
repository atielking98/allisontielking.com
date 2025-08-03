export default function Home() {
    return (
        <div className="min-h-screen px-20 py-10 flex flex-col justify-between">
            <div>
                <h1>Allison Tielking</h1>
                <h3>software engineer & city planner in training</h3>
            </div>
            <div className="flex items-center justify-center gap-2">
                <div>
                    <a href="mailto:hi@allisontielking.com">email</a>
                </div>
                <div>{"\u00B7"}</div>
                <div>
                    <a href="https://www.linkedin.com/in/allison-tielking/">
                        linkedin
                    </a>
                </div>
                <div>{"\u00B7"}</div>
                <div>
                    <a href="https://github.com/atielking98">github</a>
                </div>
            </div>
        </div>
    );
}
