import React from "react";
import Button from "../UI-components/Button/Button";
import "./Modal.scss";
import productImage from "../../assets/products/paypass/1.jpg";

interface ModalProps {
  showModal: boolean;
  setShowModal: (bool: boolean) => void;
}

const Modal = ({ showModal, setShowModal }: ModalProps) => {
  return (
    <div className={`modal ${showModal ? "active" : ""}`}>
      <div className="modal__wrapper">
        <div className="modal__close" onClick={() => setShowModal(false)}>
          ×
        </div>
        <div className="modal__content">
          <div className="modal__content-title">Выберите товар</div>
          <div className="modal__content-items">
            <div className="modal__content-item">
              <img className="modal__content-img" src={productImage} alt="product_image" />
              <div className="modal__content-textblock">
                <div className="modal__textblock-title">PayPass-1</div>
                <div className="modal__textblock-pricetitle">Цена товара</div>
                <div className="modal__textblock-price">1800₽</div>
                <div className="modal__textblock-button">
                  <Button type="secondary" title="Выбрать" />
                </div>
              </div>
            </div>

            <div className="modal__content-item">
              <img className="modal__content-img" src={productImage} alt="product_image" />
              <div className="modal__content-textblock">
                <div className="modal__textblock-title">PayPass-1</div>
                <div className="modal__textblock-pricetitle">Цена товара</div>
                <div className="modal__textblock-price">1800₽</div>
                <div className="modal__textblock-button">
                  <Button type="secondary" title="Выбрать" />
                </div>
              </div>
            </div>

            <div className="modal__content-item">
              <img className="modal__content-img" src={productImage} alt="product_image" />
              <div className="modal__content-textblock">
                <div className="modal__textblock-title">PayPass-1</div>
                <div className="modal__textblock-pricetitle">Цена товара</div>
                <div className="modal__textblock-price">1800₽</div>
                <div className="modal__textblock-button">
                  <Button type="secondary" title="Выбрать" />
                </div>
              </div>
            </div>

            <div className="modal__content-item">
              <img className="modal__content-img" src={productImage} alt="product_image" />
              <div className="modal__content-textblock">
                <div className="modal__textblock-title">PayPass-1</div>
                <div className="modal__textblock-pricetitle">Цена товара</div>
                <div className="modal__textblock-price">1800₽</div>
                <div className="modal__textblock-button">
                  <Button type="secondary" title="Выбрать" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal__backdrop"></div>
    </div>
  );
};

export default Modal;
