import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {
    
    const isMounted = useRef(true);


    const [state, setstate] = useState({data:null,loading:true,error:null});

    useEffect(() => {

        return()=>{
            isMounted.current=false;
        }
        
      
    }, [])
        
    useEffect(() => {
        setstate({data:null,loading:true,error:null});
        fetch(url)
         .then(resp=>resp.json())
         .then(data=>{

             if(isMounted.current){

                 setstate({
                     loading:false,
                     error:null,
                     data
                 })

             }else{
                //  console.log('setState no se llamo xq el componente esta desmontado');
             }
             
         })
         .catch(()=>{
             setstate({
                 data:null,
                 loading:true,
                 error:'no se puede cargar la info'
             })
         })
            
    }, [url])

    return state


}
