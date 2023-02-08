import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../../features/modal/ModalSlice";
import close from "../../../../assets/icons/close.png";

import "./D17.scss";
import BlueButton from "../../../../components/buttons/blueButton/BlueButton";

const D17 = () => {
  const dispatch = useDispatch();

  return (
    <section className="d17">
      <div className="d17-heading">
        <p>D17</p>
        <img
          src={close}
          alt="close-icon"
          onClick={() => dispatch(closeModal())}
        />
      </div>

      <p className="title-info">Add The Necessary Info</p>

      <form>
        <label>
          Amount<span>*</span>
        </label>
        <input type="text" placeholder="Add amount in DInar" />

        <BlueButton content="Add Points" style="add-points" />
      </form>
    </section>
  );
};

export default D17;
