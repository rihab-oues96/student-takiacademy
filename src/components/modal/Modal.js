import React from "react";
import BankTransfer from "../../pages/myWallet/components/bankTransfer/BankTransfer";
import D17 from "../../pages/myWallet/components/D17/D17";
import OnlinePayment from "../../pages/myWallet/components/onlinePayment/OnlinePayment";
import RechargerAccount from "../../pages/myWallet/components/rechargeAccount/RechargerAccount";
import OffreCardDescription from "../offreCard/OffreCardDescription";
import "./Modal.scss";

const Modal = ({ content }) => {
  return (
    <div className="modal">
      {content === "offreDescription" && <OffreCardDescription />}

      {content === "AddPoint" && <RechargerAccount />}
    </div>
  );
};

export default Modal;
