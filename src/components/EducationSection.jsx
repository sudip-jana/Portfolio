import React from "react";
import collegelogo from "/projects/collegelogo.png";
import cbselogo from "/projects/CBSE-logo.png";

export const EducationSection = () => {

    return (
        <section id="education" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"> 
                    My <span className="text-primary">Education</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* colllege card */}
                    <div className="gradient-border p-6 card-hover flex gap-4 items-start">
                        <img 
                            src={collegelogo}
                            alt = "College Logo"
                            className="w-16 h-16 rounded-md object-contain"
                        />
                        <div className="text-left space-y-1">
                            <h3 className="text-xl font-semibold">
                                B.Tech in Communication and Computer Engineering
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                The LNM Institute of Information Technology | 2022 - 2026
                            </p>

                        </div>
                    </div>

                    {/* School Card */}
                    <div className="gradient-border p-6 card-hover flex gap-4 items-start">
                        <img 
                            src = {cbselogo}
                            alt="School Logo"
                            className="w-16 h-16 rounded-md object-contain"
                        />
                        <div className="text-left space-y-1">
                            <h3 className="text-xl font-semibold">
                                All India Senior School Certificate Examination
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Vaish Public School | 2019 - 2021
                            </p>

                        </div>

                    </div>
                    <div className="gradient-border p-6 card-hover flex gap-4 items-start">
                        <img 
                            src = {cbselogo}
                            alt="School Logo"
                            className="w-16 h-16 rounded-md object-contain"
                        />
                        <div className="text-left space-y-1">
                            <h3 className="text-xl font-semibold">
                                All India Secondary School Examination
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Shri Baba Mastnath Public School | - 2019
                            </p>

                        </div>

                    </div>

                </div>

            </div>


        </section>
    );
};