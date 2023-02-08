import React from "react";
import "./BankTransfer.scss";
import close from "../../../../assets/icons/close.png";

import BlueButton from "../../../../components/buttons/blueButton/BlueButton";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../../features/modal/ModalSlice";

const BankTransfer = () => {
  const dispatch = useDispatch();

  return (
    <section className="bank-transfer">
      <div className="bank-transfer-heading">
        <p>Bank Transfer</p>
        <img
          src={close}
          alt="close-icon"
          onClick={() => dispatch(closeModal())}
        />
      </div>

      <p className="title-info">Add The Necessary Info</p>

      <form>
        <label>
          code<span>*</span>
        </label>
        <input type="text" placeholder="Add your code" />

        <label>
          Amount<span>*</span>
        </label>
        <input type="text" placeholder="Add your amount in Dinar" />

        <label>
          Description<span>*</span>
        </label>
        <input type="text" placeholder="Add your Description" />

        <BlueButton content="Add Points" style="add-points" />
      </form>
    </section>
  );
};

export default BankTransfer;
