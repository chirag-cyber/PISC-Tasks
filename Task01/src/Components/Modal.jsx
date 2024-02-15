import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import PropTypes from 'prop-types';


function PopupComponent({name,onClose,position}) {
    return (
      <Popup
        trigger={<button className="triggerbtn">Trigger</button>}
        position={position}
        modal
        nested>
        {close => (
          <div className="modal">
            <div className="content">
              Hi {name ? name : 'Chirag'} this is a modal
            </div>
            <div>
              <button onClick={() => { onClose(); close(); }}>Close modal</button>
            </div>
          </div>
        )}
      </Popup>
    );
  }

PopupComponent.propTypes = {
    name: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    position: PropTypes.string.isRequired
};
  
export default PopupComponent;



