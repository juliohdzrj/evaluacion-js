import React, {useState, useEffect} from 'react'

export const Evaluacion = () => {
    const [data, setData] = useState([]);
    const getData=async()=>{
        const urlData=await fetch('https://api.datos.gob.mx/v1/condiciones-atmosfericas');
        const resultData=await urlData.json();
        setData(resultData.results);
    }

    useEffect(() => {
        getData();
    },[]);

    return (
        <div>
            <h1>Evaluación</h1>
            <table>
                <th>_id</th>
                <th>Cityid</th>
                <th>Name</th>
                <th>State</th>
                <th>Probability of precip</th>
                <th>Relative humidity</th>
                <th>Lastreporttime</th>
                <th>Llueve</th>
                {data.map(({_id,cityid,name,state,probabilityofprecip,relativehumidity,lastreporttime})=>{
                    return <><tr>
                <td>{_id}</td>
                <td>{cityid}</td>
                <td>{name}</td>
                <td>{state}</td>
                <td>{probabilityofprecip}</td>
                <td>{relativehumidity}</td>
                <td>{lastreporttime}</td>
                <td>{(probabilityofprecip>60)?'Llueve':'-'}</td>
                </tr>
                </>
                })}
            </table>
        </div>
    )
}
