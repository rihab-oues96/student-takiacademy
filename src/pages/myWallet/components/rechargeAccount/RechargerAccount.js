import React from "react";
import "./RechargerAccount.scss";
import Modal from "../../../../components/modal/Modal";

import close from "../../../../assets/icons/close.png";
import bankTransfer from "../../../../assets/images/bankTransfer.png";
import onlinePayment from "../../../../assets/images/onlinePayment.png";
import d17 from "../../../../assets/images/d17.png";
import BankTransfer from "../bankTransfer/BankTransfer";
import { closeModal, openModal } from "../../../../features/modal/ModalSlice";
import { useDispatch, useSelector } from "react-redux";

const RechargerAccount = () => {
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector((state) => state.modal);
  return (
    <section className="recharger-account">
      <div className="recharger-account-heading">
        <p>Recharge my Account</p>
        <img
          src={close}
          alt="close-icon"
          onClick={() => {
            dispatch(closeModal());
          }}
        />
      </div>

      <p className="title-info">Choose your Fill-Up method</p>

      <div className="payment-methods">
        <div className="method">
          <div className="image bank-tansfer">
            <img
              src={bankTransfer}
              alt="money-img"
              onClick={() => dispatch(openModal())}
            />
          </div>
          <p>Bank Transfer</p>
        </div>

     

        <div className="method ">
          <div className="image online-payment">
            <img src={onlinePayment} alt="cart-img" />
          </div>
          <p>Online Payment</p>
        </div>

        <div className="method ">
          <div className="image d17">
            <img src={d17} alt="d17-img" />
          </div>
          <p>Through D17</p>
        </div>
      </div>
    </section>
  );
};

export default RechargerAccount;
