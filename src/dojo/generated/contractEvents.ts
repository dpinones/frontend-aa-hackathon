/* Autogenerated file. Do not edit manually. */

import {
  num,
  GetTransactionReceiptResponse,
  InvokeTransactionReceiptResponse,
  SuccessfulTransactionReceiptResponse,
  Contract,
} from "starknet";

export enum WorldEvents {
  Upgraded = "0x2db340e6c609371026731f47050d3976552c89b4fbb012941663841c59d1af3",
  Decision = "0xc9315f646a66dd126a564fa76bfdc00bdb47abe0d8187e464f69215dbf432a",
  Consequence = "0x1335a57b72e0bcb464f40bf1f140f691ec93e4147b91d0760640c19999b841d",
  GameOver = "0x165460ded86991fa560a0d331810f83651da90c5df6d4b61357c3b3807ff41c",
  GameCreated = "0x230f942bb2087887c3b1dd964c716614bb6df172214f22409fefb734d96a4d2",
  PlayerJoined = "0x214916ce0265d355fd91110809ffba7b5e672b108a8beea3dd235818431264b",
  BoughtItem = "0x96f1e086de05db8162b5bf8e95b3ff061eeb8a5a88750a793a297379dd74ea",
  DroppedItem = "0x2abc912df1c0f1fee176c373767d13b5e7e1fcdd11f8e44714334335b1ed653",
  Bought = "0x20cb8131637de1953a75938db3477cc6b648e5ed255f5b3fe3f0fb9299f0afc",
  Sold = "0x123e760cef925d0b4f685db5e1ac87aadaf1ad9f8069122a5bb03353444c386",
  Traveled = "0x2c4d9d5da873550ed167876bf0bc2ae300ce1db2eeff67927a85693680a2328",
  AdverseEvent = "0x3605d6af5b08d01a1b42fa16a5f4dc202724f1664912948dcdbe99f5c93d0a0",
  MarketEvent = "0x255825b8769ab99d6c1bd893b440a284a39d8db18c76b91e8e6a70ef5c7a8e0",
  AtPawnshop = "0x32bd5f84a36928d15d6fee2bf7ac959c1443e069aac774e6e00e596dec31a65",
}

export interface BaseEventData {
  game_id: number;
  event_type: WorldEvents;
  event_name: string;
}

export interface DecisionData extends BaseEventData {
  game_id: number;
  player_id: string;
  action: String;
}

export interface ConsequenceData extends BaseEventData {
  game_id: number;
  player_id: string;
  outcome: String;
  health_loss: number;
  drug_loss: number;
  cash_loss: bigint;
  dmg_dealt: number;
  cash_earnt: bigint;
}

export interface GameOverData extends BaseEventData {
  game_id: number;
  player_id: string;
  player_name: string;
  player_status: String;
  turn: number;
  cash: bigint;
}

export interface GameCreatedData extends BaseEventData {
  game_id: number;
  game_mode: String;
  creator: string;
  start_time: number;
}

export interface PlayerJoinedData extends BaseEventData {
  game_id: number;
  player_id: string;
  player_name: string;
}

export interface BoughtItemData extends BaseEventData {
  game_id: number;
  player_id: string;
  item_id: String;
  level: number;
  cost: number;
}

export interface DroppedItemData extends BaseEventData {
  game_id: number;
  player_id: string;
  item_id: String;
}

export interface BoughtData extends BaseEventData {
  game_id: number;
  player_id: string;
  drug_id: String;
  quantity: number;
  cost: bigint;
}

export interface SoldData extends BaseEventData {
  game_id: number;
  player_id: string;
  drug_id: String;
  quantity: number;
  payout: bigint;
}

export interface TraveledData extends BaseEventData {
  game_id: number;
  player_id: string;
  turn: number;
  from_location: String;
  to_location: String;
}

export interface AdverseEventData extends BaseEventData {
  game_id: number;
  player_id: string;
  player_status: String;
  health_loss: number;
  demand_pct: number;
}

export interface MarketEventData extends BaseEventData {
  game_id: number;
  location_id: String;
  drug_id: String;
  increase: boolean;
}

export interface AtPawnshopData extends BaseEventData {
  game_id: number;
  player_id: string;
}

export const parseAllEvents = (receipt: GetTransactionReceiptResponse) => {
  if (receipt.status === "REJECTED") {
    throw new Error(`transaction REJECTED`);
  }
  if (receipt.status === "REVERTED") {
    throw new Error(`transaction REVERTED`);
  }

  const flatEvents = parseEvents(receipt as SuccessfulTransactionReceiptResponse);
  return flatEvents;
};

export const parseEvents = (receipt: SuccessfulTransactionReceiptResponse) => {
  const parsed = receipt.events.map((e) => parseEvent(e));
  return parsed;
};

export type ParseEventResult = ReturnType<typeof parseEvent>;

export const parseEvent = (raw: any) => {
  switch (raw.keys[0]) {
    case WorldEvents.Decision:
      return {
        event_type: WorldEvents.Decision,
        event_name: "Decision",
        game_id: Number(raw.keys[1]),
        player_id: num.toHexString(raw.keys[2]),
        action: num.toHexString(raw.data[0]),
      } as DecisionData;

    case WorldEvents.Consequence:
      return {
        event_type: WorldEvents.Consequence,
        event_name: "Consequence",
        game_id: Number(raw.keys[1]),
        player_id: num.toHexString(raw.keys[2]),
        outcome: num.toHexString(raw.data[0]),
        health_loss: Number(raw.data[1]),
        drug_loss: Number(raw.data[2]),
        cash_loss: BigInt(raw.data[3]),
        dmg_dealt: Number(raw.data[4]),
        cash_earnt: BigInt(raw.data[5]),
      } as ConsequenceData;

    case WorldEvents.GameOver:
      return {
        event_type: WorldEvents.GameOver,
        event_name: "GameOver",
        game_id: Number(raw.keys[1]),
        player_id: num.toHexString(raw.keys[2]),
        player_name: num.toHexString(raw.data[0]),
        player_status: num.toHexString(raw.data[1]),
        turn: Number(raw.data[2]),
        cash: BigInt(raw.data[3]),
      } as GameOverData;

    case WorldEvents.GameCreated:
      return {
        event_type: WorldEvents.GameCreated,
        event_name: "GameCreated",
        game_id: Number(raw.data[0]),
        game_mode: num.toHexString(raw.data[1]),
        creator: num.toHexString(raw.data[2]),
        start_time: Number(raw.data[3]),
      } as GameCreatedData;

    case WorldEvents.PlayerJoined:
      return {
        event_type: WorldEvents.PlayerJoined,
        event_name: "PlayerJoined",
        game_id: Number(raw.keys[1]),
        player_id: num.toHexString(raw.keys[2]),
        player_name: num.toHexString(raw.data[0]),
      } as PlayerJoinedData;

    case WorldEvents.BoughtItem:
      return {
        event_type: WorldEvents.BoughtItem,
        event_name: "BoughtItem",
        game_id: Number(raw.keys[1]),
        player_id: num.toHexString(raw.keys[2]),
        item_id: num.toHexString(raw.data[0]),
        level: Number(raw.data[1]),
        cost: Number(raw.data[2]),
      } as BoughtItemData;

    case WorldEvents.DroppedItem:
      return {
        event_type: WorldEvents.DroppedItem,
        event_name: "DroppedItem",
        game_id: Number(raw.keys[1]),
        player_id: num.toHexString(raw.keys[2]),
        item_id: num.toHexString(raw.data[0]),
      } as DroppedItemData;

    case WorldEvents.Bought:
      return {
        event_type: WorldEvents.Bought,
        event_name: "Bought",
        game_id: Number(raw.keys[1]),
        player_id: num.toHexString(raw.keys[2]),
        drug_id: num.toHexString(raw.data[0]),
        quantity: Number(raw.data[1]),
        cost: BigInt(raw.data[2]),
      } as BoughtData;

    case WorldEvents.Sold:
      return {
        event_type: WorldEvents.Sold,
        event_name: "Sold",
        game_id: Number(raw.keys[1]),
        player_id: num.toHexString(raw.keys[2]),
        drug_id: num.toHexString(raw.data[0]),
        quantity: Number(raw.data[1]),
        payout: BigInt(raw.data[2]),
      } as SoldData;

    case WorldEvents.Traveled:
      return {
        event_type: WorldEvents.Traveled,
        event_name: "Traveled",
        game_id: Number(raw.keys[1]),
        player_id: num.toHexString(raw.keys[2]),
        turn: Number(raw.data[0]),
        from_location: num.toHexString(raw.data[1]),
        to_location: num.toHexString(raw.data[2]),
      } as TraveledData;

    case WorldEvents.AdverseEvent:
      return {
        event_type: WorldEvents.AdverseEvent,
        event_name: "AdverseEvent",
        game_id: Number(raw.keys[1]),
        player_id: num.toHexString(raw.keys[2]),
        player_status: num.toHexString(raw.data[0]),
        health_loss: Number(raw.data[1]),
        demand_pct: Number(raw.data[2]),
      } as AdverseEventData;

    case WorldEvents.MarketEvent:
      return {
        event_type: WorldEvents.MarketEvent,
        event_name: "MarketEvent",
        game_id: Number(raw.data[0]),
        location_id: num.toHexString(raw.data[1]),
        drug_id: num.toHexString(raw.data[2]),
        increase: raw.data[3] === "0x0" ? false : true,
      } as MarketEventData;

    case WorldEvents.AtPawnshop:
      return {
        event_type: WorldEvents.AtPawnshop,
        event_name: "AtPawnshop",
        game_id: Number(raw.keys[1]),
        player_id: num.toHexString(raw.keys[2]),
      } as AtPawnshopData;

    default:
      return {
        gameId: undefined,
        event_type: raw.keys[0],
        event_name: raw.keys[0],
      };
      break;
  }
};
