import React from 'react';
import profile from '../images/profile.jpg'
import medium from '../images/medium.svg'
import github from '../images/github.svg'
import twitter from '../images/twitter.svg'


const Sidebar: React.FC = () => {
    return (
       <aside className="w-64 min-h-screen bg-slate-600 flex flex-col items-center divide-gray-900" aria-label="Sidebar">
        <div className="avatar pt-5">
            <div className="w-24 mask mask-hexagon">
                <img  src={profile} alt="Profile" />
            </div>
        </div>
        <div className=" grid grid-cols-3 gap-5 justify-center pt-5">
            
            <button>
                <img src={medium} alt="Medium" />
            </button>

            <button> 
                <img src={github} alt="Github" />
            </button>

            <button>
                <img src={twitter} alt="Medium" />
            </button>


        </div>
        <div className="overflow-y-auto py-4 px-3">
            <ul className="space-y-2 divide-y divide-gray-900 w-60">
                <li>
                    <button>
                        About
                    </button>   
                </li>
                <li>
                    <button>
                        Projects
                    </button>    
                </li>
                <li>
                    <button>
                        Research
                    </button>   
                </li>
            </ul>
        </div>
       </aside>
    );
}

export default Sidebar;