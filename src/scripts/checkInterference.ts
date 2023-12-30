import oneToTwo from "./indexConvert";
import memoize from "./memoize";

function isInterfered(
  target: number,
  checkAgainst: number
): boolean {
  if (target === checkAgainst || target < 0) return false;

  const [tx, ty] = oneToTwo(target);
  const [cx, cy] = oneToTwo(checkAgainst);

  if (
    tx === cx ||
    ty === cy ||
    JSON.stringify([Math.floor(tx / 3), Math.floor(ty / 3)]) ===
      JSON.stringify([Math.floor(cx / 3), Math.floor(cy / 3)])
  ) {
    return true;
  }

  return false;
}

export default memoize(isInterfered);