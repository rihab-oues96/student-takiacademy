import React from "react";
import { useDispatch } from "react-redux";
import BankTransfer from "../../pages/myWallet/components/bankTransfer/BankTransfer";
import D17 from "../../pages/myWallet/components/D17/D17";
import OnlinePayment from "../../pages/myWallet/components/onlinePayment/OnlinePayment";
import RechargerAccount from "../../pages/myWallet/components/rechargeAccount/RechargerAccount";
import OffreCardDescription from "../offreCard/OffreCardDescription";
import "./Modal.scss";

import { closeModal } from "../../features/modal/ModalSlice";
const Modal = ({ content }) => {
  const dispatch = useDispatch();
  return (
    <div className="modal">
      {content === "offreDescription" && <OffreCardDescription />}

      {content === "AddPoint" && <BankTransfer />}

      {content === "BankTransfer" && <RechargerAccount />}

      <div className="overlay" onClick={() => dispatch(closeModal())}></div>
    </div>
  );
};

export default Modal;
