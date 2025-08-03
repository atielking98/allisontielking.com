import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans items-start justify-items-start min-h-screen p-8 sm:p-20">
      <div>
        <h1>Allison Tielking</h1>
        <div className="flex gap-2">        
          <div><h2>software engineer & city planner</h2></div>
          <div>{'\u00B7'}</div>
          <div><a href="mailto:hi@allisontielking.com">hi@allisontielking.com</a></div>
        </div>
      </div>
    </div>
  );
}
