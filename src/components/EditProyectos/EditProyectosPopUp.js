import React, {useState,useEffect} from 'react'
import "./EditProyectosPopUp.css"
import { Button } from "@mui/material"
import { styled } from "@mui/material/styles"
import { Paper, TextField } from "@mui/material";

const ColorButton = styled(Button)({
    backgroundColor: "#fff",
    color:"#000",
  });

const EditProyectosPopup = ({ isOpen, close, project}) => {
    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    };

    useEffect(() => {
      const vals = {
        name:project.projectName,
        budget:project.budget
      }
      setValues(vals)
      console.log(project.times)
      console.log(values)
      }, [isOpen]);
    
    const handleChange = (event) => {
      setValues({...values,[event.target.name]:event.target.value});
      console.log({...values,[event.target.name]:event.target.value})
    };
      
    const [values, setValues] = useState({})

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
                  <label>{"Id del Proyecto: " + project._id}</label>
                </div>
              </div>
              <div className="pop-update-label pop-body-edit">
                <TextField
                    name="name"
                    label="Cambie el Nombre"
                    fullWidth
                    autoComplete="off"
                    margin="normal"
                    value={values["name"]}
                    onChange={handleChange}
                  />
                  <TextField
                    name="budget"
                    label="Cambie el Presupuesto"
                    fullWidth
                    autoComplete="off"
                    margin="normal"
                    value={values["budget"]}
                    type="number"
                    onChange={handleChange}
                  />
                <div className="pop-projectbutton">
                  <ColorButton
                    variant="contained"
                    onClick={() => close(values,project)}
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

export default EditProyectosPopup;