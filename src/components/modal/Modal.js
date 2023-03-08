import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BankTransfer from "../../pages/myWallet/components/bankTransfer/BankTransfer";
import D17 from "../../pages/myWallet/components/D17/D17";
import TransferPoints from "../../pages/myWallet/components/transferPoints/TransferPoints";
import OnlinePayment from "../../pages/myWallet/components/onlinePayment/OnlinePayment";
import RechargerAccount from "../../pages/myWallet/components/rechargeAccount/RechargerAccount";
import OffreCardDescription from "../offreCard/OffreCardDescription";
import "./Modal.scss";

import { closeModal } from "../../features/modal/ModalSlice";
import { removeOffreDescription } from "../../features/offres/offreDetailsSlice";

const Modal = () => {
  const { componentName } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const componentLookup = {
    TransferPoints,
    OffreCardDescription,
    BankTransfer,
    RechargerAccount,
    OnlinePayment,
    D17,
  };

  let renderComponent;
  if (componentName) {
    const SelectedComponent = componentLookup[componentName];
    if (SelectedComponent) {
      renderComponent = <SelectedComponent />;
    }
  }

  return (
    <div className="modal">
      <div>{renderComponent}</div>

      <div
        className="overlay"
        onClick={() => {
          dispatch(removeOffreDescription());
          dispatch(closeModal());
        }}
      ></div>
    </div>
  );
};

export default Modal;
