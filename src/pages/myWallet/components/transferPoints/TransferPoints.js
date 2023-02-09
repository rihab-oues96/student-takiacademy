import React from "react";
import "./TransferPoints.scss";

import close from "../../../../assets/icons/close.png";
import BlueButton from "../../../../components/buttons/blueButton/BlueButton";
import { closeModal } from "../../../../features/modal/ModalSlice";
import { useDispatch } from "react-redux";

const TransferPoints = () => {
  const dispatch = useDispatch();

  return (
    <section className="transfet-points">
      <div className="transfet-points-heading">
        <p>Bank Transfer</p>
        <img
          src={close}
          alt="close-icon"
          onClick={() => dispatch(closeModal())}
        />
      </div>

      <p className="title-info">Add your beneficiary ID and amount</p>

      <form>
        <label>
          Beneficiary ID<span>*</span>
        </label>
        <input type="text" placeholder="Add Beneficiary ID" />

        <label>
          Amount<span>*</span>
        </label>
        <input type="text" placeholder="Add your amount" />

        <BlueButton content="Transfer" style="add-points" />
      </form>
    </section>
  );
};

export default TransferPoints;
