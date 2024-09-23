import { useContextApp } from "../store/context"


function HeaderComponents(){
    const { inputFilm, updateFilm, filmArray, updateArray } = useContextApp();

    const handleChange = (e) =>{
        updateFilm(e)
    }
    const handleSubmit = () => {
        fetch(`http://www.omdbapi.com/?apikey=ab671afb&t=${inputFilm.title}`)
        .then((response)=> response.json())
        .then(data =>{
            console.log(data);
            updateArray(data)
        })
    };

    return (
        <>
            <header className="bg-dark d-flex justify-content-between align-items-center p-5">
                <h1 className="text-white">
                    Netflix 
                </h1>
                <div className="d-flex">
                    <button className="btn btn-danger mx-3"  onClick={handleSubmit}>Cerca</button>
                    <input type="text" className="form-control" name="title" value={inputFilm.value} onChange={handleChange}/>
                </div>
            </header>
        </>
    )
}

export default HeaderComponents