import React, {useState,useEffect} from 'react'
import "./AddObjective.css"
import { Button } from "@mui/material"
import { styled } from "@mui/material/styles"
import { Paper, TextField } from "@mui/material";


const ColorButton = styled(Button)({
    backgroundColor: "#fff",
    color:"#000",
  });

const AddObjective = ({ isOpen, close, values}) => {
    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if(values.ob){
            setObText(values.ob.objective);
        }
      }, [isOpen]);
    
    const handleChange = (event) => {
        setObText(event.target.value);
    };

    const printTitles= () => {
        if(values.type == "general"){
            return  <label>{"Editar Objetivo General"}</label>
        }else{
            return  <label>{"Editar Objetivo Especifico"}</label>
        }
    }
    
    const [obText, setObText] = useState("")

    return (
      <>
        <div
          className={`pop-modal-back ${isOpen && "pop-modal-open"}`}
          onClick={() => close()}
        >
          <div className="pop-addOb-modal__dialog" onClick={handleModalDialogClick}>
            <div className="pop-update-box">
              <div className="pop-update-label pop-title">
                <div className="pop-titleCloseBtn">
                  <button onClick={() => close()}>X</button>
                </div>
                <div className="pop-label-title">
                <label>
                    {printTitles()}
                  </label>
                </div>
              </div>
              <div className="pop-update-label pop-body-edit">
                <TextField
                  id="outlined-multiline-flexible"
                  label="Editar Objetivo"
                  multiline
                  maxRows={4}
                  value={obText}
                  onChange={handleChange}
                />
                <div className="pop-projectbutton">
                  <ColorButton
                    variant="contained"
                    onClick={() => close(values.project,values.ob.id,obText,values.type)}
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

export default AddObjective;