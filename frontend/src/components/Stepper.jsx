import React from "react";

function Stepper({steps, current}){
    return (
        <div className="stepper">
            {steps.map((step, index) => (
                <div key={step} className={index === current ? "current" : ""}>
                    {index + 1} . {step}
                </div>
            ))}

        </div>
    );
}

export default Stepper;