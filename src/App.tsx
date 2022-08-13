import { useCallback, useMemo, useState } from "react";
import Box from "./components/Box";

function App() {
  const [selectedBox, setSelectedBox] = useState<{ x: number; y: number }>({ x: -1, y: -1 });
  const [possibleMoves, setPossibleMoves] = useState<{ x: number; y: number }[]>([]);
  const moves = useMemo(
    () => [
      [-2, -1],
      [-1, -2],
      [1, -2],
      [2, -1],
      [2, 1],
      [1, 2],
      [-1, 2],
      [-2, 1],
    ],
    [],
  );

  const chessBoard = useMemo(
    () => [...Array(8)].map((_, inxR) => [...Array(8)].map((__, inxC) => [inxR + 1, inxC + 1])),
    [],
  );
  const handleSelect = useCallback((x: number, y: number) => {
    const possible = moves.map(([moveX, moveY]) => ({ x: x + moveX, y: y + moveY }));
    setSelectedBox({ x, y });
    setPossibleMoves(possible);
  }, []);
  return (
    <div className="container h-full w-screen mx-auto flex flex-col gap-6 items-center justify-center">
      <div className="grid grid-cols-8 gap-0.5 items-center justify-center border-2 border-slate-800 p-2">
        {chessBoard.map((row) => {
          return row.map(([indexRow, indexCol]) => (
            <Box
              key={`${indexRow}-${indexCol}`}
              onClick={() => handleSelect(indexRow + 1, indexCol + 1)}
              isSelected={selectedBox.x === indexRow + 1 && selectedBox.y === indexCol + 1}
              variant={
                possibleMoves.some(({ x, y }) => x === indexRow + 1 && y === indexCol + 1)
                  ? "green"
                  : indexRow % 2 === 1
                  ? indexCol % 2 === 0
                    ? "black"
                    : "white"
                  : indexCol % 2 === 0
                  ? "white"
                  : "black"
              }
            />
          ));
        })}
      </div>
      <div className="flex gap-10">
        <div className="flex gap-2 items-center">
          <div className="w-16 h-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="svg2"
              className="h-full"
              viewBox="0 0 500 500"
              version="1.0"
            >
              <g
                id="layer1"
                // transform="translate(-572.77 -269.79)"
              >
                <path
                  id="path2396"
                  fill="#000000"
                  d="m157.19 457.86c-1.46-13.67 1.35-29.06 7.56-41.36 5.12-10.15 12.11-18.38 33.98-40 12.97-12.83 23.85-24.53 26.97-29 10.14-14.55 17.9-32.54 21.66-50.23 1.93-9.07 2.52-33.8 1.06-44.05l-0.83-5.79-6.17 4.39c-11.51 8.18-23.12 15-43.83 25.77-39.56 20.57-46.31 26.67-61.27 55.34-8.36 16.02-13.15 23.14-19.08 28.37-4.77 4.2-11.75 7.2-16.72 7.2-6.569 0-12.765-6.19-12.773-12.75l-0.004-3.25h-5.45c-8.085 0-15.238-1.8-22.774-5.72-20.569-10.71-27.733-33.7-18.805-60.35 4.271-12.75 8.353-20.19 23.843-43.43 16.097-24.16 21.043-33.04 25.343-45.5 3.219-9.33 3.279-9.83 3.331-27.5 0.067-22.53-0.059-22.25 17.949-40 15.06-14.83 21.56-23.86 21.56-29.91 0-2.162-0.92-15.136-2.06-28.832-1.13-13.697-1.92-25.999-1.75-27.339 0.3-2.299 2.03-1.407 30.92 15.938l30.6 18.373 18.19-19.365c10.01-10.651 18.54-19.365 18.96-19.365s6.24 12.038 12.93 26.75c6.7 14.712 12.55 26.665 13.01 26.562 6.73-1.52 20.93-2.466 30.2-2.01 35.46 1.741 65.89 15.428 91.5 41.148 23.65 23.75 39.07 51.15 54.08 96.05 20.99 62.83 34.72 142.81 37.08 216.05l0.66 20.45h-154.58-154.58l-0.71-6.64z"
                  // transform="translate(572.77 269.79)"
                />
                <path
                  id="path2388"
                  fill="#ffffff"
                  d="m126.72 187.21c6.43-3.18 10.29-6 16-11.7 6.91-6.9 15.02-18.65 15.02-21.76 0-3.35-9.35-4.18-15.51-1.39-5.49 2.5-9.07 6.88-18.28 22.37-11.24 18.91-10.86 18.09-8.04 17.31 1.28-0.35 6.15-2.53 10.81-4.83z"
                  // transform="translate(572.77 269.79)"
                />
                <path
                  id="path2386"
                  fill="#ffffff"
                  d="m76.493 304.54c1.238-1.83 2.25-4.42 2.25-5.74 0-5.68-5.572-11.31-11.2-11.3-4.351 0.01-8.801 3.76-11.528 9.72-2.061 4.5-2.693 7.72-3.075 15.64l-0.48 9.98 10.891-7.48c5.991-4.11 11.905-8.98 13.142-10.82z"
                  // transform="translate(572.77 269.79)"
                />
                <path
                  id="path2384"
                  fill="#ffffff"
                  d="m458.38 454.95c2.51-2.51 2.54-2.71 1.89-13.25-3.64-59.55-10-105.29-22.14-159.2-10.28-45.67-20.78-77.34-34.5-104-9.03-17.56-18.01-30.14-30.38-42.53-19.28-19.31-40.06-30.74-66.59-36.611-18.53-4.102-53.48-2.712-58.9 2.341-2.95 2.74-2.43 8.42 0.99 10.96 2.38 1.77 3 1.79 12.5 0.36 37.43-5.64 72.03 5.22 99.64 31.26 27.07 25.53 46.05 68.31 62.24 140.22 11.73 52.09 18.17 97.19 21.65 151.5 0.96 15.07 1.32 17.25 3.2 19.25 2.85 3.04 7.19 2.92 10.4-0.3z"
                  // transform="translate(572.77 269.79)"
                />
              </g>
            </svg>
          </div>
          <span className="text-xl">- Knight Position</span>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-16 h-16 bg-green-600" />{" "}
          <span className="text-xl">- Possible Move</span>
        </div>
      </div>
    </div>
  );
}

export default App;
