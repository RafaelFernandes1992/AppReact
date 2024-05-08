import { useState, useEffect } from "react";

function Contador() {
    const [TotalHomem, setTotalHomem] = useState(0);
    const [TotalMulher, setTotalMulher] = useState(0);
    const [Total, setTotal] = useState(TotalHomem + TotalMulher);

    useEffect(() => {setTotal(TotalHomem + TotalMulher);}, [TotalHomem, TotalMulher]);

    const maisHomem = () => {setTotalHomem(TotalHomem + 1)};
    const menosHomem = () => {if (TotalHomem > 0) setTotalHomem(TotalHomem - 1)};

    const maisMulher = () => {setTotalMulher(TotalMulher + 1)};
    const menosMulher = () => {if (TotalMulher > 0) setTotalMulher(TotalMulher - 1)};

    const zerar = () => {
        setTotal(0);
        setTotalHomem(0);
        setTotalMulher(0);
    };

    return(
        <>
        <div class="container">
            <div class="w-50 h-50 border border-black border-3 mx-auto mt-5 p-1">
                
                <div class="row ps-1">
                    <div class="col-10 text-center">
                        <h2 class="ms-5 ps-5">Total</h2>
                    </div>
                    <div class="col-2">
                        <a href="#" onClick={zerar}>
                            <img src="atualizar.svg" class="img-fluid" width="50" />
                        </a>
                    </div>
                </div>

                <div class="row">
                    <div class="border border-black border-2 rounded w-25 mx-auto text-center h4">{Total}</div>
                </div>

                <div class="row pt-5 text-center">
                    <div class="col-6">
                        <img src="homem.png" class="mx-auto img-fluid w-40" />
                    </div>
                    <div class="col-6">
                        <img src="mulher.png" class="mx-auto img-fluid w-40" />
                    </div>
                </div>

                <div class="row mt-3">

                    <div class="col-3 text-center">
                        <button type="button" class="btn btn-success" onClick={maisHomem}>+</button>
                    </div>
                    
                    <div class="col-3 text-center">
                        <button type="button" class="btn btn-danger" onClick={menosHomem}>-</button>
                    </div>

                    <div class="col-3 text-center">
                        <button type="button" class="btn btn-success" onClick={maisMulher}>+</button>
                    </div>

                    <div class="col-3 text-center">
                        <button type="button" class="btn btn-danger" onClick={menosMulher}>-</button>
                    </div>

                </div>


                <div class="row mt-3">
                    <div class="col-6">
                        <h4 class="text-center">Homens</h4>
                        <div class="border border-black rounded border-2 w-50 mx-auto text-center h4">{TotalHomem}</div>
                    </div>
                    <div class="col-6">
                        <h4 class="text-center">Mulheres</h4>
                        <div class="border border-black rounded border-2 w-50 mx-auto text-center h4">{TotalMulher}</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Contador;
