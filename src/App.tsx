import {Button, Image, Modal, Tag} from "antd";
import {useState} from "react";

import logo from './assets/logo_utp.png'
import astm_pag_1 from './assets/astm_pag_01.jpg'
import astm_pag_2 from './assets/astm_pag_02.jpg'
import astm_pag_1_650 from './assets/page_1_650.jpg'
import astm_pag_2_650 from './assets/page_02_650.jpg'
import Panel from './Panel.tsx';
import './App.css'

function App() {
    const [openPdf, setOpenPdf] = useState(false);
    const [openEmpalmes, setOpenEmpalmes] = useState(false);
    const [openEmpalmes2, setOpenEmpalmes2] = useState(false);

    return (
        <div className={'container fade-in'}>
            <img className={'logo'} src={logo} alt=""/>
            <h1 className={'main-title'}>
                NORMA E.060 CONCRETO ARMADO<br/><small>21.3 REQUISITOS GENERALES</small>
            </h1>
            <Panel number={'21.3.1'} title={'Análisis y diseño de elementos estructurales'}>
                <p className={'item-content'}>
                    <span>21.3.1.1</span>Debe tenerse en cuenta en el análisis la interacción de todos los elementos
                    estructurales y no estructurales que afecten la respuesta lineal y no lineal de la estructura frente
                    a los movimientos sísmicos.
                </p>
                <p className={'item-content'}>
                    <span>21.3.1.2</span>Los elementos estructurales situados por debajo del nivel basal de la
                    estructura y que se requieren para transmitir a la cimentación las fuerzas resultantes de los
                    efectos sísmicos, deben cumplir también con las disposiciones de este Capítulo.
                </p>
            </Panel>
            <Panel number={'21.3.2'} title={'Concreto en elementos resistentes a fuerzas inducidas por sismo'}>
                <p className={'item-content'}><span>21.3.2.1</span> La resistencia especificada a la compresión del
                    concreto, <span className={'pre'}>f’c</span>, no debe ser
                    menor que 21 MPa.
                </p>
                <p className={'item-content'}><span>21.3.2.2</span> La resistencia especificada a la compresión del
                    concreto, f’c, no
                    debe ser mayor que 55 MPa.</p>
                <p className={'item-content'}>
                    <span>21.3.2.3</span> La resistencia especificada a la compresión del concreto liviano, f’c, no debe
                    ser mayor
                    que 35 MPa a menos que se demuestre, por medio de evidencia experimental, que los elementos
                    estructurales hechos
                    con dicho concreto liviano proporcionan resistencia y tenacidad iguales o mayores que las de
                    {' '}<span className={'bold'} style={{color:'#cc0000'}}>elementos comparables</span> hechos por concreto de peso normal de la misma resistencia.
                </p>
            </Panel>
            <Panel number={'21.3.3'}
                   title={'Refuerzo de acero para elementos resistentes a fuerzas inducidas por sismo'}>
                <p>
                    El refuerzo de acero longitudinal y transversal en todos los elementos con responsabilidad sísmica
                    será corrugado y deberá cumplir con las disposiciones de ASTM A 706M. Se permite el empleo de acero
                    de refuerzo ASTM A 615M, grados 280 y 420, en estos elementos siempre y cuando:
                </p>
                <div style={{textAlign: 'center'}}>
                    <Image.PreviewGroup>
                        <p>ASTM A706M</p>
                        <Image src={astm_pag_1} width={60} height={90}/>
                        <Image src={astm_pag_2} width={60} height={90}/>
                    </Image.PreviewGroup>
                    <Image.PreviewGroup>
                        <p>ASTM A650M</p>
                        <Image src={astm_pag_1_650} width={60} height={90}/>
                        <Image src={astm_pag_2_650} width={60} height={90}/>
                    </Image.PreviewGroup>
                </div>
                <ol type={"a"}>
                    <li>
                        La resistencia real a la fluencia (obtenida en ensayos de laboratorio) no sea mayor que el
                        esfuerzo de fluencia especificado fy, en más de 125 MPa;
                    </li>
                    <li>
                        La relación entre la resistencia de tracción (fu) y el esfuerzo de fluencia (fy), medida en el
                        laboratorio, no sea menor de 1,25.
                    </li>
                </ol>
                <Modal open={openPdf} width={800} onCancel={() => setOpenPdf(false)} footer={null}>
                    <iframe
                        width={'100%'}
                        height={600}
                        src="https://acerosarequipa.com//sites/default/files/fichas/2020-07/HOJA%20TECNICA_FIERRO%20CORRUGADO-A706.pdf?fv=CRFlGIr2"
                        frameBorder="0"></iframe>
                </Modal>
            </Panel>
            <Panel number={'21.3.4'} title={'Empalmes mecánicos'}>
                <p><span>21.3.4.1</span>Los empalmes mecánicos deben clasificarse como Tipo 1 o Tipo 2, de acuerdo con
                    lo siguiente:</p>
                <ol type={"a"}>
                    <li>Los empalmes mecánicos Tipo 1 deben cumplir con <Tag style={{cursor:'pointer'}} color={'red'} onClick={() => setOpenEmpalmes(true)}>12.14.3.2</Tag>;</li>
                    <li>
                        Los empalmes mecánicos Tipo 2 deben cumplir con 12.14.3.2 y deben desarrollar la resistencia a
                        tracción especificada de las barras empalmadas.
                    </li>
                    <li>
                        Los empalmes mecánicos Tipo 2 deben cumplir con 12.14.3.2 y deben desarrollar la resistencia a
                        tracción especificada de las barras empalmadas.
                    </li>
                </ol>
                <p>
                    <span>21.3.4.2</span> Los empalmes mecánicos Tipo 1 no deben usarse dentro de
                    una distancia igual al doble del peralte del elemento medida desde la cara de la viga o columna, o
                    donde sea probable que se produzca fluencia del refuerzo como resultado de desplazamientos laterales
                    inelásticos. Se pueden
                    usar empalmes mecánicos Tipo 2 en cualquier ubicación.
                </p>

                <Modal open={openEmpalmes} onCancel={() => setOpenEmpalmes(false)} footer={null} centered>
                    <p>
                        <span>12.14.3.2</span>
                        Un empalme mecánico debe desarrollar en tracción o compresión, según sea requerido, al
                        menos 1,25 fy de la barra
                    </p>
                </Modal>
            </Panel>
            <Panel number={'21.3.5'} title={'Empalmes soldados'}>
                <p><span>21.3.5.1</span> Los empalmes soldados del refuerzo que resiste fuerzas inducidas por sismos
                    deben cumplir
                    con 12.14.3.4 y no deben usarse dentro de una distancia igual al doble del peralte del elemento
                    medida desde la cara de la viga o columna, o en las regiones
                    donde sea probable que se produzca fluencia del refuerzo como resultado de desplazamientos laterales
                    inelásticos.</p>
                <Button icon={'+'} onClick={() => setOpenEmpalmes2(true)}>Más información</Button>
                <Modal open={openEmpalmes2} onCancel={() => setOpenEmpalmes2(false)} footer={null} centered>
                    <p>
                        <span>12.14.3.4</span>
                        Un empalme soldado debe desarrollar, por lo menos, 1,25 fy de la barra.
                    </p>
                </Modal>
                <p><span>21.3.5.2</span>No se puede soldar estribos, insertos u otros elementos al refuerzo longitudinal
                    requerido por el
                    diseño.</p>
            </Panel>
        </div>
    )
}

export default App
