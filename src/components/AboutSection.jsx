
import { Shuffle, Code , Brain } from "lucide-react";

export const AboutSection = () => {

    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"> 
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3>Passionate Web Developer and Problem Solver</h3>
                    
                    <p className="text-muted-foreground">
                        I spacialize in creating responsive, accessible and performant Web
                        applications using modern technologies.
                    </p>

                    <p className="text-muted-foreground">
                        I'm passionate about creating elegant solutions to complex
                        problems, and I'm constantly learning new technologies and
                        techniques to stay at the forefront of the ever-evolving web 
                        landscape.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button"> Get In Touch</a>
                        <a href="https://drive.google.com/file/d/1cLSwN_Th1aH43O7SdLsLQqTvw-vMMG7y/view?usp=drive_link" className="px-6 py-2 rounded-full border border-primary text-primary 
                        hover:bg-primary/15 transition-colors duration-300"> See Resume</a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">Creating responsive websites and
                                    web applications with modern frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Brain className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Problem Solver</h4>
                                <p className="text-muted-foreground">Problem solver driven by curiosity, creativity, and continuous learning spirit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Shuffle className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Adaptability</h4>
                                <p className="text-muted-foreground">Quickly learning and applying new technologies to solve emerging challenges.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>  

    </section>
}