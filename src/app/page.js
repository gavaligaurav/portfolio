import { Montserrat, Poppins } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({ weight: "variable", subsets: ["latin"] });
const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen p-8 lg:px-48 lg:py-0 bg-slate-900 lg:grid lg:grid-cols-2 gap-4">
      <div className=" flex flex-col justify-between lg:sticky lg:top-0 max-h-screen py-24">
        <div className="container">
          <div className={montserrat.className + " text-4xl font-extrabold"}>
            GAURAV GAVALI
          </div>
          <div className={poppins.className + " text-xl mt-3 font-medium"}>
            Web Developer
          </div>
          <div className={poppins.className + " mt-5 text-gray-400"}>
            Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Tenetur repellendus saepe.
          </div>
        </div>
        <div
          className={
            montserrat.className +
            " container font-medium text-sm hidden lg:block"
          }
        >
          <ul className=" flex flex-col gap-2">
            <li className="">
              <Link className="" href="#about">
                ABOUT
              </Link>
            </li>
            <li className="">
              <Link className="" href="#about">
                EXPERIENCE
              </Link>
            </li>
            <li className="">
              <Link className="" href="#about">
                PROJECTS
              </Link>
            </li>
          </ul>
        </div>
        <aside
          className={
            montserrat.className +
            " container font-light mt-5 lg:mt-0 flex gap-5"
          }
        >
          <svg
            className=" opacity-50 hover:opacity-100 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
          <svg
            className=" opacity-50 hover:opacity-100 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
          <svg
            className=" opacity-50 hover:opacity-100 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 1200"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
              fill="currentColor"
            ></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="opacity-50 hover:opacity-100 h-7 w-7"
          >
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
        </aside>
      </div>
      <div className=" mt-20 lg:mt-0  py-24">
        <div className=" container">
          <p className=" text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            vero iste nemo quaerat veniam dolores, sunt vel possimus pariatur,
            rerum architecto facere nam beatae aspernatur, exercitationem illum!
            Voluptatibus, ipsa maxime?
          </p>
          <br />
          <p className=" text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas
            adipisci cumque cupiditate magni molestiae, pariatur, minus,
            reprehenderit voluptatibus at quis repellat rerum maxime. Similique
            dolorum quis perspiciatis illo blanditiis. Voluptates dolor,
            quibusdam non vitae aliquid harum sunt, necessitatibus eos, ut
            doloribus dolores rerum accusantium? Ex aspernatur, maxime repellat
            necessitatibus labore tenetur nesciunt similique eligendi provident
            eum repellendus hic voluptatum.
          </p>
          <br />
          <p className=" text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facere
            sit voluptatum labore, nesciunt aspernatur corporis veritatis
            reprehenderit ut quae ducimus aut sint beatae, odit dolores cum nemo
            sunt dolore.
          </p>
        </div>
      </div>
    </main>
  );
}
