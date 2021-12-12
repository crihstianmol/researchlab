import React, {useState,useEffect} from 'react'
import "./AdminProyectosPopUp.css"
import { Button } from "@mui/material"
import { styled } from "@mui/material/styles"

const ColorButton = styled(Button)({
    backgroundColor: "#fff",
    color:"#000",
  });

const AdminProyectosPopup = ({ isOpen, close, project}) => {
    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    };

    const states = [
        "Activo",
        "Inactivo"
    ]

    const phases = [
        "Iniciado",
        "En_desarrollo",
        "Finalizado"
    ]

    useEffect(() => {
        setState(project.status);
        setPhase(project.phase);
      }, []);

    const [state, setState] = useState("")
    const [phase, setPhase] = useState("")
  
    return (
      <>
        <div
          className={`pop-modal-back ${isOpen && "pop-modal-open"}`}
          onClick={() => close()}
        >
          <div className="pop-modal__dialog" onClick={handleModalDialogClick}>
            <div className="pop-update-box">
              <div className="pop-update-label pop-title">
                <div className="pop-titleCloseBtn">
                  <button onClick={() => close()}>X</button>
                </div>
                <div className="pop-label-title">
                  <label>{"Id del Proyecto: "+project._id}</label>
                  <label>{"Nombre del Proyecto: "+ project.projectName}</label>
                </div>
              </div>
              <div className="pop-update-label pop-body">
                <div className="pop-projectdata">
                  <label>{"Nombre del Lider: "+project.leaderName}</label>
                  <label>{"Presupuesto: "+project.budget}</label>
                  <label>{"Fecha de Inicio: "+project.startDate}</label>
                  <label>{"Fecha de Terminacion: "+project.endDate}</label>
                </div>
                <div className="pop-projectselect">
                  <label>Actualizar Estado:</label>
                  <div className="pop-select">
                    <select onChange={(e)=>{setState(e.target.value)}}>
                      {states.map(state =>{
                          if(state === project.status){
                              return <option key={state} defaultValue value={state}>{state}</option>
                          }
                          return <option key={state} value={state}>{state}</option>
                      })}
                    </select>
                  </div>

                  <label>Actualizar Fase:</label>
                  <div className="pop-select">
                  <select onChange={(e)=>{setPhase(e.target.value)}}>
                      {phases.map(phase =>{
                          if(phase === project.phase){
                              return <option key={phase} defaultValue value={phase}>{phase}</option>
                          }
                          return <option key={phase} value={phase}>{phase}</option>
                      })}
                    </select>
                  </div>
                </div>
                <div className="pop-projectbutton">
                  <ColorButton
                    variant="contained"
                    onClick={() => close(project._id,state,phase)}
                  >
                    Guardar Cambios
                  </ColorButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default AdminProyectosPopup;