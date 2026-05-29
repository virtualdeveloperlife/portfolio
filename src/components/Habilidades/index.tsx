import { Badge } from "../Badge";


export function Habilidades() {

    return (
        <section className="w-full h-dvh bg-[##0C0E12] text-[##F8FAFC] flex flex-col items-center justify-center">
            <div className="w-[80%] h-187 flex flex-col items-center justify-center">
                <div className="flex gap-4 w-full py-4 items-center">
                    <h2 className="font-bold text-3xl ">Habilidades</h2>
                    <div className=" h-0.5 w-full bg-[#2B303B]/50 "></div>
                </div>
                <div className="flex gap-4 w-full">
                    <div className="w-[50%] flex flex-col">
                        <h3 className="py-2 text-2xl">Principais Tecnologias</h3>
                        <p className="border-b-2 border-b-[#3EE0CF] py-2">React</p>
                        <p className="border-b-2 border-b-[#3EE0CF] py-2">TypeScript</p>
                        <p className="border-b-2 border-b-[#3EE0CF] py-2">Next.js</p>
                        <p className="border-b-2 border-b-[#3EE0CF] py-2">Tailwind CSS</p>
                        <p className="border-b-2 border-b-[#3EE0CF] py-2">Node.js</p>
                        <p className="border-b-2 border-b-[#3EE0CF] py-2">PostgresSQL</p>
                        <p className="border-b-2 border-b-[#3EE0CF] py-2">Python</p>

                    </div>
                    <div className="flex flex-col w-[50%] ">
                        <h3 className="py-2 text-2xl">Outras Tecnologias</h3>
                        <div className="flex flex-wrap gap-2">
                            <Badge text="Javascript" />
                            <Badge text="HTML5" />
                            <Badge text="CSS3" />
                            <Badge text="Git" />
                            <Badge text="APIs" />
                            <Badge text="GraphQL" />
                            <Badge text="MongoDB" />
                            <Badge text="Redis" />
                            <Badge text="Vercel" />
                            <Badge text="Figma" />
                            <Badge text="Jest" />
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}