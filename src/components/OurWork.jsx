import React from "react";
import WorkImage from '../assets/work_mobile_app.png'
import WorkFitness from '../assets/work_fitness_app.png'
import WorkDashboard from '../assets/work_dashboard_management.png'


const WorkPortfolio = [
    {
        img: WorkImage,
        headline: 'Mobile app marketing',
        text: 'We turn bold ideas into powerful digital solutions that connect...'
    },
     {
        img: WorkDashboard,
        headline: 'Dashboard management',
        text: 'We turn bold ideas into powerful digital solutions that connect...'
    },
    {
        img: WorkFitness,
        headline: 'Fitness app promotion',
        text: 'We turn bold ideas into powerful digital solutions that connect...'
    },
]


const OurWork = () => {
  return (
    <>
      <div className="mt-3 sm:mt-14 md:mt-20 max-w-6xl mx-auto py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Our latest work
        </h2>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto mt-3">
          Browse our portfolio of innovative digital projects that showcase creativity performance and results.
        </p> 

        <div className="flex flex-col md:flex-row gap-5 mt-10 justify-center items-center">
            {WorkPortfolio.map(({img,headline,text},) => (
              <div>
                <div>
                    <img src={img} alt="" className="w-full max-w-[400px]"/>
                </div>
                <div className="text-left mt-3">
                    <h4 className="text-gray-950">{headline}</h4>
                    <p className="text-sm text-gray-500">{text}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default OurWork;
