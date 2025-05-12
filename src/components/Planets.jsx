import { PlanetsCard } from "./PlanetsCard"
import { useEffect } from "react";
export const Planets = ({}) => {


    return (
        <>
     
           <div className="row">
             <div className="col-2"></div>
             <div className="col-8">
                  <div className="body-Character mt-4">
                 <h3 className="text-danger">Planet</h3>
                 <PlanetsCard
                 />
             </div>
             </div>
             <div className="col-2"></div>
           </div>
        
        
        
        </>
        //  <div className="row">
        //         <div className="col-2"></div>
        //         <div className="col-8">
        //              <div className="body-Character mt-4">
        //             <h3 className="text-danger"></h3>
        //             <PlanetsCard
                     
        //             />
        //         </div>
        //         </div>
        //         <div className="col-2"></div>
        //       </div>
               
      
    )
}