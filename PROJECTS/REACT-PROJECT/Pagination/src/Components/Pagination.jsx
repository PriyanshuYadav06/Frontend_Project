import React from "react";
export default function Pagination({
  NO_OF_PAGE,
  setStartIdx,
  setEndIdx,
  PRODUCT,
  currPage,
  setCurrPage,
}) {
  const arr = [];
  for (let i = 0; i < NO_OF_PAGE; i++) {
    arr[i] = i + 1;
  }
  const handleClick = (idx) => {
    const newPage = idx + 1;
    const newStart = idx * PRODUCT;
    const newEnd = newStart + PRODUCT;
    setCurrPage(newPage);
    setStartIdx(newStart);
    setEndIdx(newEnd);
  };
  const handleLeftClick = () => {
    handleClick(currPage - 2);
    console.log("Left");
  };
  const handleRightClick = () => {
    console.log("Right");
    handleClick(currPage);
  };
  /*
      arrayIdx-> 0-29;
      page1->0-10;(0-9)
      page2->10-20;(10-19)
      page3->20-30;(20-29)

    */
  return (
    <div className="Pages">
      <button onClick={handleLeftClick} disabled={currPage == 1}>
        ◀️
      </button>
      {arr.map((val, idx) => {
        return (
          <button
            className={currPage == val ? "Active" : ""}
            onClick={() => {
              handleClick(idx);
            }}
            key={val}
          >
            {val}
          </button>
        );
      })}
      <button disabled={currPage == NO_OF_PAGE} onClick={handleRightClick}>
        ▶️
      </button>
    </div>
  );
}
