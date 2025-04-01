import BarGraph from "./BarGraph";
import DownloadIcon from "@mui/icons-material/Download";

export default function Resume() {
  return (
    <div id="resume" className="min-h-screen flex-col text-center">
      <div className="text-5xl font-bold py-8" data-aos={"slide-down"}>
        Resume
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-7">
        <ol class="relative border-l  border-gray-700 ml-9 mb-6">
          <li class="mb-10" data-aos="zoom-in">
            <span class="absolute flex items-center justify-center w-6 h-6   rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3  text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white">
              Lead Developer
            </h3>
            <h4 class="block pt-1 pb-3  text-sm font-normal leading-none  text-gray-500">
            DSB (remote) | 2021-2024 
            </h4>
            <h4 class="block pt-1 pb-3  text-sm font-normal leading-none  text-gray-500">
            Ohio, United States
            </h4>
            {/* <time class="block pt-1 pb-3  text-sm font-normal leading-none  text-gray-500">
              Completed on July 7th, 2023
            </time> */}
            <p class="mb-4 text-base font-normal  text-gray-400">
              I developed a responsive frontend with React and Babylon.js for 3D rendering and built a Django backend with PostgreSQL for smooth functionality. I also optimized APIs with Node.js, led a team to improve project speed, enhanced UI for better engagement, and created a 3D product configurator that boosted sales, all while streamlining CI/CD pipelines for faster deployments.
            </p>
          </li>
          <li class="mb-10" data-aos="zoom-out" data-aos-delay="700">
            <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white">
            Senior Web Developer
            </h3>
            <h4 class="block pt-1 pb-3  text-sm font-normal leading-none  text-gray-500">
            Freelance/Self-Employment | 2020-2021 
            </h4>
            <h4 class="block pt-1 pb-3  text-sm font-normal leading-none  text-gray-500">
            
            </h4>
            {/* <time class="block mb-2 text-sm font-normal leading-none text-gray-500">
              Completed on May 28th, 2022
            </time> */}
            <p class="text-base font-normal text-gray-400">
            Built custom high-performance apps with React, Angular, Vue, Nuxt, and Next.js, turning client needs into effective web solutions. Managed projects end-to-end, delivering on time and exceeding expectations
            </p>
            
          </li>
          <li class="mb-10" data-aos="zoom-out" data-aos-delay="700">
            <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white">
            Web Developer
            </h3>
            <h4 class="block pt-1 pb-3  text-sm font-normal leading-none  text-gray-500">
            Aoza | 2018-2020 
            </h4>
            <h4 class="block pt-1 pb-3  text-sm font-normal leading-none  text-gray-500">
            Milan, Italy
            </h4>
            {/* <time class="block mb-2 text-sm font-normal leading-none text-gray-500">
              Completed on December 9, 2022
            </time> */}
            <p class="text-base font-normal text-gray-400">
            Built scalable e-commerce platforms with React, improving user retention by 15%. Optimized site speed and responsiveness for a better customer experience and streamlined team collaboration with Git
            </p>
           
          </li>
          <li data-aos="zoom-in" data-aos-offset={"-15"} data-aos-delay="1300">
            <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white">
            Web Development Intern
            </h3>
            <h4 class="block pt-1 pb-3  text-sm font-normal leading-none  text-gray-500">
            Stels Gas | 2017-2018  
            </h4>
            <h4 class="block pt-1 pb-3  text-sm font-normal leading-none  text-gray-500">
            Milan, Italy
            </h4>
            {/* <time class="block mb-2 text-sm font-normal leading-none text-gray-500">
              Completed on December 9, 2022
            </time> */}
            <p class="text-base font-normal text-gray-400">
            Developed a React and Node.js e-commerce platform, streamlining online sales and gaining full-stack development experience
            </p>
          </li>
        </ol>

        <div className="flex flex-col text-center" data-aos="slide-up">
          <div className="text-3xl font-bold py-3">My Skills</div>
          <div className="ml-16 flex flex-col gap-8 mt-6">
            <BarGraph name={"Next.js"} percent={85} />
            <BarGraph name={"JavaScript"} percent={80} />
            <BarGraph name={"React"} percent={70} />
            <BarGraph name={"TypeScript"} percent={60} />
            <BarGraph name={"Node.js"} percent={75} />
            <BarGraph name={"Django"} percent={85} />
            <BarGraph name={"HTML/CSS"} percent={85} />
            <BarGraph name={"AWS"} percent={80} />
          </div>

          <a
            href={require("../../assets/files/Resume.pdf")}
            download={"Adrian's Resume"}
            class="inline-flex items-center px-6 py-2 mt-12 mx-auto w-fit text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
          >
            Download CV <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
