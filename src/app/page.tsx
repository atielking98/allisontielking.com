/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";

export default function Home() {
    const [active, setActive] = useState<string | null>(null);

    const info: Record<string, React.ReactNode> = {
        reading: (
            <div>
                Reading:
                <ul className="list-disc pl-6">
                    <li>
                        <a
                            href="https://www.goodreads.com/book/show/20893524-the-poetics-of-space"
                            target="_blank"
                            className="italic">
                            The Poetics of Space
                        </a>{" "}
                        by Gaston Bachelard
                    </li>
                    <li>
                        <a
                            href="https://www.goodreads.com/book/show/20186.Seeing_Like_a_State"
                            target="_blank"
                            className="italic">
                            Seeing Like a State: How Certain Schemes to Improve
                            the Human Condition Have Failed
                        </a>
                        by James C. Scott
                    </li>
                    <li>
                        <a
                            href="https://www.goodreads.com/book/show/60811826-i-who-have-never-known-men"
                            target="_blank"
                            className="italic">
                            I Who Have Never Known Men
                        </a>{" "}
                        by Jacqueline Harpman
                    </li>
                </ul>
            </div>
        ),
        writing: (
            <div>
                Writing I'm proud of:
                <ul className="list-disc pl-6">
                    <li>
                        <a
                            className="underline"
                            target="_blank"
                            href="https://joinreboot.org/p/common-grounding">
                            Common Grounding
                        </a>
                        , for Reboot
                    </li>
                    <li>
                        <a
                            className="underline"
                            target="_blank"
                            href="https://joinreboot.org/p/how-to-build-a-mayan-keyboard">
                            How to Build a Mayan Keyboard
                        </a>
                        , for Kernel Magazine
                    </li>
                    <li>
                        <a
                            className="underline"
                            target="_blank"
                            href="https://stanforddaily.com/2019/01/25/why-a-15-lyft-coupon-wont-fix-sexual-harassment/">
                            Why a $15 Lyft coupon won't fix sexual harassment
                        </a>
                        , for The Stanford Daily
                    </li>
                </ul>
            </div>
        ),
        languages: (
            <div>
                Goals:
                <ul className="list-disc pl-6">
                    <li>
                        Chinese: daily self-study (working on HSK 5), biweekly
                        1:1 lessons
                    </li>
                    <li>French: conversational practice, reading literature</li>
                    <li>Korean: basic vocabulary and grammar</li>
                    <li>Spanish: reading literature, maintenance</li>
                </ul>
            </div>
        ),
    };

    return (
        <div className="min-h-screen px-8 sm:px-20 py-8 flex flex-col gap-8 justify-between">
            <div className="relative">
                <div className="absolute inset-0 bg-[url('/city-plan.png')] bg-right bg-no-repeat opacity-30 pointer-events-none"></div>
                <div className="relative z-10">
                    <h1>Allison Tielking</h1>
                    <h3>software engineer & city planner in training</h3>
                    {/* ...rest of your content... */}
                </div>
            </div>
            <div className="flex flex-col gap-4 flex-grow border border-[#00BB77]/40 rounded-md p-10 text-lg">
                <div>
                    Hi, I'm Alli! I'm working on a Master in City Planning at{" "}
                    <a
                        href="https://dusp.mit.edu/masters"
                        target="_blank"
                        className="font-semibold">
                        MIT DUSP
                    </a>
                    . I'm developing skills in urban and landscape design,
                    community engagement, policy making, and more.
                </div>
                <div>
                    Before that, I was a founding engineer at{" "}
                    <a
                        href="https://www.getflipturn.com"
                        target="_blank"
                        className="font-semibold">
                        Flipturn
                    </a>
                    , helping cities and companies electrify their fleets. I
                    came to climate tech after taking a gap year, and I compiled
                    a list of resources that I used during my career transition{" "}
                    <a
                        href="https://lnk.bio/pivot-to-climate-work"
                        target="_blank"
                        className="font-semibold">
                        here
                    </a>
                    .
                </div>
                <div>
                    Other fun experiences include:
                    <ul className="list-disc pl-6 text-base">
                        <li>
                            Coding for an{" "}
                            <a
                                href="https://ministryofscent.com/"
                                target="_blank">
                                indie perfume boutique
                            </a>
                            , which led to apprenticing at a natural perfumery
                            one summer in Spain
                        </li>
                        <li>
                            Working on the webapp infrastructure team at{" "}
                            <a href="https://slack.com/" target="_blank">
                                Slack
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    In my free time, I love{" "}
                    <span
                        className="font-semibold cursor-pointer"
                        onClick={() =>
                            setActive(active === "reading" ? null : "reading")
                        }>
                        reading
                    </span>
                    ,{" "}
                    <span
                        className="font-semibold cursor-pointer"
                        onClick={() =>
                            setActive(active === "writing" ? null : "writing")
                        }>
                        writing
                    </span>
                    ,{" "}
                    <span
                        className="font-semibold cursor-pointer"
                        onClick={() =>
                            setActive(
                                active === "languages" ? null : "languages"
                            )
                        }>
                        learning languages
                    </span>
                    , and admiring beauty in the world.
                </div>
                {active && (
                    <div className="flex items-center justify-between p-4 bg-[#FFD700]/40 border border-[#FFD700]/40 rounded text-base text-[#171717] max-w-2xl relative">
                        {info[active]}
                        <button
                            className=" text-xl text-gray-600 hover:text-black hover:cursor-pointer"
                            onClick={() => setActive(null)}
                            aria-label="Close">
                            ×
                        </button>
                    </div>
                )}
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
