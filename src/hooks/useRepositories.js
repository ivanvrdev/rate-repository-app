import { useState, useEffect } from "react"

const useRepositories = () =>{
    const [repositories, setRepositories] = useState(null)
  
    const fetchRepositories = async () =>{
      try{
        const response = await fetch('http://192.168.1.137:5000/api/repositories')
        const json = await response.json()
        setRepositories(json)
        // console.log(json)
      }catch(err){
        console.log('Error al hacer el fetch: ', err)
      }
    }
  
    const repositoriesNodes = repositories ? repositories.edges.map(edge => edge.node) : []
  
    useEffect(()=>{
      fetchRepositories()
    }, [])
  
    return {repositories: repositoriesNodes}
}

export default useRepositories