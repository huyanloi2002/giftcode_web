import React from "react";
import { Link } from "react-router-dom";

const listgame = [
  {
    id: 1,
    img: "https://chiengioi.vplay.vn/pc/images/icongames.png",
    name: "Chiến Giới 4D",
    key: "chiengioi4d",
    giftcode: [
      { id: 1, code: "CHIENGIOI4D" },
      { id: 2, code: "CHIENGIOIVIP" },
      { id: 3, code: "CHIENGIOI999" },
      { id: 4, code: "CANHVIP999" },
      { id: 5, code: "LANDING999" },
      { id: 6, code: "THOITRANGVIP999" },
      { id: 7, code: "QUANGCUON" },
      { id: 8, code: "TUANTIENTI" },
      { id: 9, code: "MINAYOUNG" },
      { id: 10, code: "QUYNHALEE" },
      { id: 11, code: "KHOIDAUMOI" },
      { id: 12, code: "1000MEM" },
      { id: 13, code: "2000MEM" },
      { id: 14, code: "3000MEM" },
      { id: 15, code: "5000MEM" },
      { id: 16, code: "DUAVIT" },
      { id: 17, code: "NHANDUYEN" },
      { id: 18, code: "TRANGBIXX" },
      { id: 19, code: "ANHY" },
      { id: 20, code: "VALENTINENUHON" },
      { id: 21, code: "DJINNLUZZ" },
      { id: 22, code: "tinhhuynhde" },
      { id: 23, code: "tulachientruong" },
      { id: 24, code: "vutruanhhung" },
      { id: 25, code: "cuoituanxahoi" },
      { id: 26, code: "chiendaukhongngung" },
      { id: 27, code: "Moibanvaogroup" },
      { id: 28, code: "Vaogroupbanoi" },
      { id: 29, code: "chiengioino1" },
    ],
  },
];

const HomePage = () => {
  return (
    <>
      <div className="homepage_container">
        <div className="homepage_content">
          {listgame.map((item) => (
            <Link
              className="list_game"
              to={`giftcode/${item.key}`}
              state={item}
            >
              <img src={item.img} alt={item.name} width="80" height="80" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
