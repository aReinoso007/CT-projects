// ItemComponentActions.ts
import Item from "./Items";

type ItemComponentActions =
  | { type: 'ADD_ITEM'; payload: Item }
  | { type: 'REMOVE_ITEM'; payload: number };

export default ItemComponentActions;
