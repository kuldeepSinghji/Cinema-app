const useGenres = (selectedGeners)=>{
    if(selectedGeners.length < 1) return "";
    const genresID = selectedGeners.map((e)=>e.id) 
    return genresID.reduce((acc,curr)=>acc+","+curr)
}

export default useGenres;