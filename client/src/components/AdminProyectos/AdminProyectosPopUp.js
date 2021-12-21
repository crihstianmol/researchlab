import React, {useState,useEffect} from 'react'
import "./AdminProyectosPopUp.css"
import { Button } from "@mui/material"
import { styled } from "@mui/material/styles"

// H6 LISTA TODOS LOS PROYECTOS
// H7 APROBAR CREACION DEL PROYECTO
// H8 ACTUALIZAR ESTADO
// H9 ACTUALIZAR FASE

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
        console.log(project.status)
        setState(project.status);
        setPhase(project.phase);
      }, [isOpen]);

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
                      {states.map(status =>{
                          if(status == state){
                              return <option key={status} defaultValue value={status}>{status}</option>
                          }
                          return <option key={status} value={status}>{status}</option>
                      })}
                    </select>
                  </div>

                  <label>Actualizar Fase:</label>
                  <div className="pop-select">
                  <select onChange={(e)=>{setPhase(e.target.value)}}>
                      {phases.map(phases =>{
                          if(phases == phase){
                              return <option key={phases} defaultValue value={phases}>{phases}</option>
                          }
                          return <option key={phases} value={phases}>{phases}</option>
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