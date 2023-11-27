import { BACKEND_URL } from "./config.js";

/** @typedef {import("./config.js").Item} Item */
/** @typedef {import("./config.js").ItemPayload} ItemPayload */

export async function getItems(url) {
  /** @type {Item[]} */
  const items = await fetch(`${BACKEND_URL}/${url}`).then((r) => r.json());
  return items;
}

/**
 * @param {ItemPayload} item
 */

export async function createItem(item,url) {
  await fetch(`${BACKEND_URL}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
}

/**
 * @param {string} id
 * @param {ItemPayload} item
 */
export async function editItem(id, item) {
  await fetch(`${BACKEND_URL}/items/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
}

export async function deleteItem(id, item) {
  await fetch(`${BACKEND_URL}/items/${id}`, {
    method: "DELETE",
  });
}

export async function updateScore(scoreBoard){
  await fetch(`${BACKEND_URL}/scores`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(scoreBoard),
  });
}