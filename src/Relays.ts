import { Relays } from "./interfaces";

/**
 * Relays
 *
 * @example
 *
 * bancorx.relays.BNT
 * // => { code: "bntbntbntbnt", account: "bnt2eoscnvrt", symbol: "BNT", precision: 10 }
 *
 * bancorx.relays.CUSD
 * // => { code: "stablecarbon", account: "bancorc11144", symbol: "CUSD", precision: 2 }
 *
 */
export const relays: Relays = {
  EOS: {
    code: "eosio.token",
    account: "bnt2eoscnvrt",
    symbol: "EOS",
    precision: 4
  },
  BNT: {
    code: "bntbntbntbnt",
    account: "bnt2eoscnvrt",
    symbol: "BNT",
    precision: 10
  },
  BLACK: {
    code: "eosblackteam",
    account: "bancorc11111",
    symbol: "BLACK",
    precision: 4
  },
  KARMA: {
    code: "therealkarma",
    account: "bancorc11112",
    symbol: "KARMA",
    precision: 4
  },
  PGL: {
    code: "prospectorsg",
    account: "bancorc11113",
    symbol: "PGL",
    precision: 4
  },
  CET: {
    code: "eosiochaince",
    account: "bancorc11114",
    symbol: "CET",
    precision: 4
  },
  // bancorc11115 DEOS (removed)
  HORUS: {
    code: "horustokenio",
    account: "bancorc11121",
    symbol: "HORUS",
    precision: 4
  },
  MEETONE: {
    code: "eosiomeetone",
    account: "bancorc11122",
    symbol: "MEETONE",
    precision: 4
  },
  IQ: {
    code: "everipediaiq",
    account: "bancorc11123",
    symbol: "IQ",
    precision: 3
  },
  EPRA: {
    code: "epraofficial",
    account: "bancorc11124",
    symbol: "EPRA",
    precision: 4
  },
  DICE: {
    code: "betdicetoken",
    account: "bancorc11125",
    symbol: "DICE",
    precision: 4
  },
  HVT: {
    code: "hirevibeshvt",
    account: "bancorc11131",
    symbol: "HVT",
    precision: 4
  },
  OCT: {
    code: "octtothemoon",
    account: "bancorc11132",
    symbol: "OCT",
    precision: 4
  },
  // bancorc11133 POKER (removed)
  MEV: {
    code: "eosvegascoin",
    account: "bancorc11134",
    symbol: "MEV",
    precision: 4
  },
  // bancorc11135 PEG (removed)
  // bancorc11141 ? (does not exist)
  ZKS: {
    code: "zkstokensr4u",
    account: "bancorc11142",
    symbol: "ZKS",
    precision: 0
  },
  // bancorc11143 EPT (removed)
  CUSD: {
    code: "stablecarbon",
    account: "bancorc11144",
    symbol: "CUSD",
    precision: 2
  },
  TAEL: {
    code: "realgoldtael",
    account: "bancorc11145",
    symbol: "TAEL",
    precision: 6
  },
  ZOS: {
    code: "zosdiscounts",
    account: "bancorc11151",
    symbol: "ZOS",
    precision: 4
  },
  EQUA: {
    code: "equacasheos1",
    account: "bancorc11152",
    symbol: "EQUA",
    precision: 8
  },
  PEOS: {
    code: "thepeostoken",
    account: "bancorc11153",
    symbol: "PEOS",
    precision: 4
  },
  DAPP: {
    code: "dappservices",
    account: "bancorc11154",
    symbol: "DAPP",
    precision: 4
  },
  CHEX: {
    code: "chexchexchex",
    account: "bancorc11155",
    symbol: "CHEX",
    precision: 8
  },
  NUT: {
    code: "eosdtnutoken",
    account: "bancorc11215",
    symbol: "NUT",
    precision: 9
  },
  EOSDT: {
    code: "eosdtsttoken",
    account: "bancorc11222",
    symbol: "EOSDT",
    precision: 9
  },
  STUFF: {
    code: "stuff.eos",
    account: "bnr123553535",
    symbol: "STUFF",
    precision: 4
  },
  FINX: {
    code: "finxtokenvci",
    account: "bnr215453322",
    symbol: "FINX",
    precision: 8
  },
  EMT: {
    code: "emanateoneos",
    account: "bancorc11213",
    symbol: "EMT",
    precision: 4
  },
  DRAGON: {
    code: "eosdragontkn",
    account: "bancorc11223",
    symbol: "DRAGON",
    precision: 4
  },
  PIXEOS: {
    code: "pixeos1token",
    account: "bancorc11214",
    symbol: "PIXEOS",
    precision: 4
  },
  LUME: {
    code: "lumetokenctr",
    account: "bancorc11225",
    symbol: "LUME",
    precision: 3
  },
  SENSE: {
    code: "sensegenesis",
    account: "bancorc11231",
    symbol: "SENSE",
    precision: 4
  },
  USDT: {
    code: "tethertether",
    account: "bancorc11232",
    symbol: "USDT",
    precision: 4
  }
};
