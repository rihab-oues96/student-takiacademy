import React from "react";
import "./RechargerAccount.scss";

import close from "../../../../assets/icons/close.png";
import bankTransfer from "../../../../assets/images/bankTransfer.png";
import onlinePayment from "../../../../assets/images/onlinePayment.png";
import d17 from "../../../../assets/images/d17.png";
import { closeModal, openModal } from "../../../../features/modal/ModalSlice";
import { useDispatch } from "react-redux";

const RechargerAccount = () => {
  const dispatch = useDispatch();

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
              onClick={() => dispatch(openModal("BankTransfer"))}
            />
          </div>
          <p>Bank Transfer</p>
        </div>

        <div className="method ">
          <div className="image online-payment">
            <img
              src={onlinePayment}
              alt="cart-img"
              onClick={() => dispatch(openModal("OnlinePayment"))}
            />
          </div>
          <p>Online Payment</p>
        </div>

        <div className="method ">
          <div className="image d17">
            <img
              src={d17}
              alt="d17-img"
              onClick={() => dispatch(openModal("D17"))}
            />
          </div>
          <p>Through D17</p>
        </div>
      </div>
    </section>
  );
};

export default RechargerAccount;
