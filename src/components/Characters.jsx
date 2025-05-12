import { useEffect } from "react";
import { CharacterCard } from "./CharacterCard";
export const Characters = ({name, gender, hair_color, eye_color}) => {
    
   


    return (
        <div className="body-Character mt-4">
            <h3 className="text-danger">Characters</h3>
            <CharacterCard 
              name={name}
              gender={gender}
              hairColor={hair_color}
              eyeColor={eye_color}
            />
        </div>
      
      
    )
}