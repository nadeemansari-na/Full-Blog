import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
export const Landing = () => {


    return (
        <div className="min-h-screen relative overflow-hidden bg-linear-to-br from-blue-200 via-purple-200 to-indigo-300">

            {/*  Background Blur Circles */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 opacity-30 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 opacity-30 blur-3xl rounded-full"></div>

            {/*  Social Icons */}
            <div className="absolute top-6 right-10 flex gap-4 z-20">
                <a href="https://github.com/nadeemansari-na/Full-Blog">
                    <FaGithub className="text-black/80 hover:text-black text-3xl cursor-pointer transition" />
                    </a>
                
                <a href="https://www.linkedin.com/in/nadeem-ansari-81a71336a"><FaLinkedin className="text-black text-3xl  cursor-pointer transition" /></a>
                <a href="https://x.com/AnsariNadeem899?t=hwn-lF--Ij5zxKcMt3_lcw&s=08" ><FaTwitter className="text-black text-3xl  cursor-pointer transition" /></a>
            </div>

            {/* Glass Container  */}
            <div className="flex items-center justify-center min-h-screen px-4">
                <div className="backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-10 max-w-3xl w-full text-center">

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-bold text-black drop-shadow-lg">
                        Express Your Ideas <br />
                    </h1>

                    {/* Statement */}
                    <p className="mt-6 text-black/80 text-lg">
                        A simple and beautiful space for students and creators to write,
                        share, and grow their thoughts. Start your blogging journey today.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex justify-center gap-4">
                        <button className="px-6 py-3 -inset-px rounded-full bg-linear-to-r from-blue-500 to-indigo-600 text-black font-semibold  shadow-lg hover:scale-105 transition">
                            <a href="/signup">Sign Up</a>
                        </button>

                        <button className="px-6 py-3 -inset-px rounded-full border border-white/50 text-black font-semibold hover:bg-white/20 transition  ">
                            <a href="/signin">Sign In</a>
                        </button>
                    </div>

                </div>
            </div>


        </div>

    );
}




// absolute transitiona - all duration - 1000 opacity - 70 - inset - px bg - gradient - to - r from - [#44BCFF] via - [#FF44EC] to - [#FF675E] rounded - xl blur - lg group - hover: opacity - 100 group - hover: -inset - 1 group - hover: duration - 200 animate - tilt