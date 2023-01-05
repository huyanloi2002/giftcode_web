import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const GiftCode = () => {
  const [isCopy, setIsCopy] = useState(0);

  const location = useLocation();
  const item = location.state;
  const giftcode = item.giftcode;

  const hadleCopy = (code, id) => {
    navigator.clipboard.writeText(code);
    setIsCopy(id);
    setTimeout(() => {
      setIsCopy(false);
    }, 10000);
  };

  return (
    <>
      <div className="giftcode_container">
        <div className="giftcode_content">
          <div className="info_game">
            <img src={item.img} alt={item.name} width="100px" />
            <div className="name_game">
              <h1>{item.name}</h1>
              <h6>#giftcode</h6>
            </div>
          </div>
          <div className="list_code">
            {giftcode?.map((item) => (
              <div className="giftcode">
                <input type="text" value={item.code} disabled />
                <button onClick={() => hadleCopy(item.code, item.id)}>
                  {isCopy === item.id ? (
                    <span style={{ color: "greenyellow" }}>Copied!</span>
                  ) : (
                    <span style={{ color: "white" }}>Copy</span>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftCode;
