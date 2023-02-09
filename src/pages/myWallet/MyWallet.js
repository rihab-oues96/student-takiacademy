import React from "react";
import BlueButton from "../../components/buttons/blueButton/BlueButton";
import "./MyWallet.scss";

import down from "../../assets/icons/down.png";
import right from "../../assets/icons/right.png";
import left from "../../assets/icons/left.png";

import { points } from "../../data";
import { accounts } from "../../data";

import { useSelector } from "react-redux";
import Modal from "../../components/modal/Modal";

const MyWallet = () => {
  const { isModalOpen } = useSelector((state) => state.modal);

  return (
    <section className="my-wallet">
      <div className="heading">
        <p className="main-title">Wallet</p>

        <div className="wallet-content">
          <div className="current-Balance">
            <p className="wallet-info">
              Your Current Balance: <span className="amount">300</span>
              <span>PTS</span>
            </p>

            <div className="btns">
              <BlueButton
                content="AddPoint"
                style="wallet-btn btn-add"
                modalContent="RechargerAccount"
              />
              <BlueButton
                content="TransferPoint"
                style="wallet-btn btn-trans"
                modalContent="TransferPoints"
              />

              {isModalOpen && <Modal />}
            </div>
          </div>

          <div className="paiment-accounts">
            {accounts.map((account, index) => (
              <div className={`account account-${index + 1}`}>
                <div className="account-info">
                  <img src={account.image} alt="account-logo" />
                  <p>{account.name}</p>
                </div>

                <div className="account-name">
                  <span>Account:</span>
                  <p> {account.account}</p>
                </div>

                <div className="account-rib">
                  <span>RIB:</span>
                  <p> {account.rib}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="content">
        <p className="main-title">Points History</p>

        <table>
          <tr className="line line-1">
            <td className="column col-1">
              <p>Code</p>
            </td>
            <td className="column col-2">
              <p>Payment Method</p>
            </td>
            <td className="column col-3">
              <p>Amount in dinar</p>
            </td>
            <td className="column col-4">
              <p>Description</p>
            </td>
            <td className="column col-5">
              <p>Date</p>
            </td>
            <td className="column col-6">
              <p>Status</p>
            </td>
          </tr>

          {points.map((point, index) => (
            <tr className={`line line-${index}`}>
              <td className="column col-1">
                <span>{point.code}</span>
              </td>
              <td className="column col-2">
                <span>{point.paimentMethod}</span>
              </td>
              <td className="column col-3">
                <span>{point.amount}</span>
              </td>
              <td className="column col-4">
                <span> {point.description}</span>
              </td>
              <td className="column col-5">
                <span>{point.date}</span>
              </td>
              <td className="column col-6">
                <span>{point.status}</span>
              </td>
            </tr>
          ))}

          <tr className="line last-line">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="column-buttom">
              <p>
                Rows per Page :
                <span>
                  10
                  <img src={down} />
                </span>
              </p>
            </td>
            <td className="column-buttom-end">
              <p>
                1-0 of <img src={left} /> <img src={right} />
              </p>
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default MyWallet;
