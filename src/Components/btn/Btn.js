import React from "react";

const Btn = ({ onClickBtn }) => {
  return (
    <>
      <button type="button" name="good" onClick={onClickBtn}>
        Good
      </button>
      <button type="button" name="neutral" onClick={onClickBtn}>
        Neutral
      </button>
      <button type="button" name="bad" onClick={onClickBtn}>
        Bad
      </button>
    </>
  );
};

export default Btn;
