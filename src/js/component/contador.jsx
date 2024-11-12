import React, { useEffect, useState } from "react";

const Contador = () => {
    const [segundos, setSegundos] = useState(0)
    const [segundosDecimales, setSegundosDecimales] = useState(0)
    const [minutos, setMinutos] = useState(0)
    const [minutosDecimales, setMinutosDecimales] = useState(0)
    const [horas, setHoras] = useState(0)
    const [horasDecimales, setHorasDecimales] = useState(0)
    const [active, setActive] = useState(false)

    useEffect(() => {
        let interval
        if (active) {
            interval = setInterval(() => {
                setSegundos(prev => prev + 1)
            }, 1)
        }
        return () => clearInterval(interval)
    }, [active])

    useEffect(() => {
        if (segundos === 10) {
            setSegundosDecimales(prev => prev + 1)
            setSegundos(0)
        }
        if (segundosDecimales === 6) {
            setSegundosDecimales(0)
            setMinutos(prev => prev + 1)
        }
        if (minutos === 10) {
            setMinutos(0)
            setMinutosDecimales(prev => prev + 1)
        }
        if (minutosDecimales === 6) {
            setMinutosDecimales(0)
            setHoras(prev => prev + 1)
        }
        if (horas === 10) {
            setHoras(0)
            setHorasDecimales(prev => prev + 1)
        }
    }, [segundos])

    const detenerComenzar = () => setActive(prev => !prev)
    const resetear = () => { setActive(false) 
        setSegundos(0)
        setSegundosDecimales(0)
        setMinutos(0)
        setMinutosDecimales(0)
        setHoras(0)
        setHorasDecimales(0)
    }
    //console.log(active);

    return (
        <div className="d-flex gap-5 justify-content-center container container-padre">
            <div className="container-hijo">{horasDecimales}</div>
            <div className="container-hijo">{horas}</div>
            <div className="container-hijo">{minutosDecimales}</div>
            <div className="container-hijo">{minutos}</div>
            <div className="container-hijo">{segundosDecimales}</div>
            <div className="container-hijo">{segundos}</div>
            <div className="d-flex flex-column justify-content-evenly container-botones ">
                <button onClick={detenerComenzar} className="mx-1 btn btn-outline-light btn-lg">{active ? "DETENER" : "COMENZAR"}</button>
                <button onClick={resetear} className="mx-1 btn btn-outline-light btn-lg">RESETEAR</button>
            </div>
        </div>
    )

}

export default Contador