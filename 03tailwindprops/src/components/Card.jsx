import React from "react";
function Card({name, picsrc= '#'}) {
    return (
        <>
            <div>
                <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                    <img className="w-24 h-24 md md:rounded-none rounded-full mx-auto" src={picsrc} alt={name} width="384" height="512" />
                    <div className="pt-6 md:p-8 text-center space-y-4">
                        <blockquote>
                            <p className="text-lg font-medium">
                                "Watch Movies"
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-sky-500 dark:text-sky-400">
                                {name || 'Director'}
                            </div>
                            <div className="text-slate-700 dark:text-slate-500">
                                Director
                            </div>
                        </figcaption>
                    </div>
                    <br />
                </figure>
            </div>
        </>
    );
}

export default Card;
