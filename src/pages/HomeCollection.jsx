



export  const HomeCollection = () => {

const { store, dispatch} = useGlobalReducer();

   useEffect(() =>{
    fetchAllData()
   }, [])


   const fetchAllData = async() => {
   const response = await fetch("https://www.swapi.tech/api/films") 
   try {
    if (!response.ok) {
        throw new Error("Cannot fetch data ", response.status);
        
    }
    const data = await response.json();
    console.log(data.character);
    

    
   } catch (error) {
    
   }
   return data;


   }




    return (
        <>
        </>
    )
}