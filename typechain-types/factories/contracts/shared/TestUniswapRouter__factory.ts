/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestUniswapRouter,
  TestUniswapRouterInterface,
} from "../../../contracts/shared/TestUniswapRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_WETH",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AdditionsOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "Expired",
    type: "error",
  },
  {
    inputs: [],
    name: "IdenticalAddresses",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientAAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientBAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientInputAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientInputAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientLiquidity",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientOutputAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientOutputAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidPath",
    type: "error",
  },
  {
    inputs: [],
    name: "MultiplicationsOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "SubtractionsUnderflow",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "WETH",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountADesired",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountBDesired",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountAMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountBMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "addLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "amountA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountTokenDesired",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountTokenMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountETHMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "addLiquidityETH",
    outputs: [
      {
        internalType: "uint256",
        name: "amountToken",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveOut",
        type: "uint256",
      },
    ],
    name: "getAmountIn",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveOut",
        type: "uint256",
      },
    ],
    name: "getAmountOut",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
    ],
    name: "getAmountsIn",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
    ],
    name: "getAmountsOut",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveB",
        type: "uint256",
      },
    ],
    name: "quote",
    outputs: [
      {
        internalType: "uint256",
        name: "amountB",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountAMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountBMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "removeLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "amountA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountB",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountTokenMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountETHMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "removeLiquidityETH",
    outputs: [
      {
        internalType: "uint256",
        name: "amountToken",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountETH",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapExactTokensForTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountInMax",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapTokensForExactTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60c06040523480156200001157600080fd5b506040516200347e3803806200347e8339818101604052810190620000379190620000c4565b8173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b8152505050506200015e565b600081519050620000be8162000144565b92915050565b60008060408385031215620000de57620000dd6200013f565b5b6000620000ee85828601620000ad565b92505060206200010185828601620000ad565b9150509250929050565b600062000118826200011f565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b6200014f816200010b565b81146200015b57600080fd5b50565b60805160601c60a05160601c6132626200021c6000396000818160cd015281816104600152818161049e015281816109ec01528181610e6401528181610ebd01528181610ef10152610f7201526000818161055a015281816105ca015281816106c60152818161080c015281816108fc01528181610a6901528181610c8d01528181610cb601528181610d4101528181610e9b015281816119f301528181611a4701528181611e2e01528181611ef70152611fae01526132626000f3fe6080604052600436106100c65760003560e01c8063ad5c46481161007f578063c45a015511610059578063c45a015514610343578063d06ca61f1461036e578063e8e33700146103ab578063f305d719146103ea57610129565b8063ad5c46481461029d578063ad615dec146102c8578063baa2abde1461030557610129565b806302751cec1461012e578063054d50d41461016c5780631f00ca74146101a957806338ed1739146101e657806385f8c259146102235780638803dbee1461026057610129565b36610129577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461012757610126612fdd565b5b005b600080fd5b34801561013a57600080fd5b50610155600480360381019061015091906126da565b61041c565b604051610163929190612c6b565b60405180910390f35b34801561017857600080fd5b50610193600480360381019061018e919061294a565b61053d565b6040516101a09190612c50565b60405180910390f35b3480156101b557600080fd5b506101d060048036038101906101cb9190612814565b610553565b6040516101dd9190612bce565b60405180910390f35b3480156101f257600080fd5b5061020d600480360381019061020891906128b0565b610588565b60405161021a9190612bce565b60405180910390f35b34801561022f57600080fd5b5061024a6004803603810190610245919061294a565b6107b4565b6040516102579190612c50565b60405180910390f35b34801561026c57600080fd5b50610287600480360381019061028291906128b0565b6107ca565b6040516102949190612bce565b60405180910390f35b3480156102a957600080fd5b506102b26109ea565b6040516102bf9190612b2a565b60405180910390f35b3480156102d457600080fd5b506102ef60048036038101906102ea919061294a565b610a0e565b6040516102fc9190612c50565b60405180910390f35b34801561031157600080fd5b5061032c60048036038101906103279190612582565b610a24565b60405161033a929190612c6b565b60405180910390f35b34801561034f57600080fd5b50610358610c8b565b6040516103659190612b2a565b60405180910390f35b34801561037a57600080fd5b5061039560048036038101906103909190612814565b610caf565b6040516103a29190612bce565b60405180910390f35b3480156103b757600080fd5b506103d260048036038101906103cd9190612624565b610ce4565b6040516103e193929190612ce0565b60405180910390f35b61040460048036038101906103ff91906126da565b610e1e565b60405161041393929190612ce0565b60405180910390f35b600080824281101561045a576040517f203d82d800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610489897f00000000000000000000000000000000000000000000000000000000000000008a8a8a308a610a24565b809350819450505061049c8986856110e3565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d836040518263ffffffff1660e01b81526004016104f59190612c50565b600060405180830381600087803b15801561050f57600080fd5b505af1158015610523573d6000803e3d6000fd5b505050506105318583611219565b50965096945050505050565b600061054a848484611319565b90509392505050565b60606105807f0000000000000000000000000000000000000000000000000000000000000000848461140e565b905092915050565b606081428110156105c5576040517f203d82d800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106317f000000000000000000000000000000000000000000000000000000000000000089888880806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050506115a0565b91508682600184516106439190612e60565b815181106106545761065361306a565b5b60200260200101511015610694576040517f42301c2300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61075d868660008181106106ab576106aa61306a565b5b90506020020160208101906106c09190612528565b3361073c7f00000000000000000000000000000000000000000000000000000000000000008a8a60008181106106f9576106f861306a565b5b905060200201602081019061070e9190612528565b8b8b60018181106107225761072161306a565b5b90506020020160208101906107379190612528565b611722565b856000815181106107505761074f61306a565b5b60200260200101516117b8565b6107a982878780806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050866118f1565b509695505050505050565b60006107c1848484611b4a565b90509392505050565b60608142811015610807576040517f203d82d800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108737f000000000000000000000000000000000000000000000000000000000000000089888880806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505061140e565b9150868260008151811061088a5761088961306a565b5b602002602001015111156108ca576040517f098fb56100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610993868660008181106108e1576108e061306a565b5b90506020020160208101906108f69190612528565b336109727f00000000000000000000000000000000000000000000000000000000000000008a8a600081811061092f5761092e61306a565b5b90506020020160208101906109449190612528565b8b8b60018181106109585761095761306a565b5b905060200201602081019061096d9190612528565b611722565b856000815181106109865761098561306a565b5b60200260200101516117b8565b6109df82878780806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050866118f1565b509695505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000610a1b848484611c4c565b90509392505050565b6000808242811015610a62576040517f203d82d800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610a8f7f00000000000000000000000000000000000000000000000000000000000000008c8c611722565b90508073ffffffffffffffffffffffffffffffffffffffff166323b872dd33838c6040518463ffffffff1660e01b8152600401610ace93929190612b6e565b602060405180830381600087803b158015610ae857600080fd5b505af1158015610afc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b209190612767565b506000808273ffffffffffffffffffffffffffffffffffffffff166389afcb44896040518263ffffffff1660e01b8152600401610b5d9190612b2a565b6040805180830381600087803b158015610b7657600080fd5b505af1158015610b8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bae9190612870565b915091506000610bbe8e8e611cf5565b5090508073ffffffffffffffffffffffffffffffffffffffff168e73ffffffffffffffffffffffffffffffffffffffff1614610bfb578183610bfe565b82825b80975081985050508a871015610c40576040517f8dc525d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b89861015610c7a576040517fef71d09100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505097509795505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6060610cdc7f000000000000000000000000000000000000000000000000000000000000000084846115a0565b905092915050565b60008060008342811015610d24576040517f203d82d800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d328c8c8c8c8c8c611e11565b80945081955050506000610d677f00000000000000000000000000000000000000000000000000000000000000008e8e611722565b9050610d758d3383886117b8565b610d818c3383876117b8565b8073ffffffffffffffffffffffffffffffffffffffff16636a627842886040518263ffffffff1660e01b8152600401610dba9190612b2a565b602060405180830381600087803b158015610dd457600080fd5b505af1158015610de8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0c91906127e7565b92505050985098509895505050505050565b60008060008342811015610e5e576040517f203d82d800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e8c8a7f00000000000000000000000000000000000000000000000000000000000000008b348c8c611e11565b80945081955050506000610ee17f00000000000000000000000000000000000000000000000000000000000000008c7f0000000000000000000000000000000000000000000000000000000000000000611722565b9050610eef8b3383886117b8565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0856040518263ffffffff1660e01b81526004016000604051808303818588803b158015610f5757600080fd5b505af1158015610f6b573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb82866040518363ffffffff1660e01b8152600401610fcb929190612ba5565b602060405180830381600087803b158015610fe557600080fd5b505af1158015610ff9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101d9190612767565b61102a57611029612fdd565b5b8073ffffffffffffffffffffffffffffffffffffffff16636a627842886040518263ffffffff1660e01b81526004016110639190612b2a565b602060405180830381600087803b15801561107d57600080fd5b505af1158015611091573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b591906127e7565b9250833411156110d5576110d43385346110cf9190612e60565b611219565b5b505096509650969350505050565b6000808473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8585604051602401611115929190612ba5565b6040516020818303038152906040529060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516111639190612b13565b6000604051808303816000865af19150503d80600081146111a0576040519150601f19603f3d011682016040523d82523d6000602084013e6111a5565b606091505b50915091508180156111d357506000815114806111d25750808060200190518101906111d19190612767565b5b5b611212576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161120990612bf0565b60405180910390fd5b5050505050565b60008273ffffffffffffffffffffffffffffffffffffffff1682600067ffffffffffffffff81111561124e5761124d613099565b5b6040519080825280601f01601f1916602001820160405280156112805781602001600182028036833780820191505090505b5060405161128e9190612b13565b60006040518083038185875af1925050503d80600081146112cb576040519150601f19603f3d011682016040523d82523d6000602084013e6112d0565b606091505b5050905080611314576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161130b90612c10565b60405180910390fd5b505050565b600080841415611355576040517f098fb56100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008314806113645750600082145b1561139b576040517fbb55fd2700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006113b26103e5866120d090919063ffffffff16565b905060006113c984836120d090919063ffffffff16565b905060006113f4836113e66103e8896120d090919063ffffffff16565b61212c90919063ffffffff16565b905080826114029190612e2f565b93505050509392505050565b606060028251101561144c576040517f20db826700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b815167ffffffffffffffff81111561146757611466613099565b5b6040519080825280602002602001820160405280156114955781602001602082028036833780820191505090505b5090508281600183516114a89190612e60565b815181106114b9576114b861306a565b5b6020026020010181815250506000600183516114d59190612e60565b90505b60008111156115985760008061152f87866001866114f69190612e60565b815181106115075761150661306a565b5b60200260200101518786815181106115225761152161306a565b5b6020026020010151612188565b915091506115588484815181106115495761154861306a565b5b60200260200101518383611b4a565b846001856115669190612e60565b815181106115775761157661306a565b5b6020026020010181815250505050808061159090612f39565b9150506114d8565b509392505050565b60606002825110156115de576040517f20db826700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b815167ffffffffffffffff8111156115f9576115f8613099565b5b6040519080825280602002602001820160405280156116275781602001602082028036833780820191505090505b509050828160008151811061163f5761163e61306a565b5b60200260200101818152505060005b6001835161165c9190612e60565b81101561171a576000806116b18786858151811061167d5761167c61306a565b5b6020026020010151876001876116939190612dd9565b815181106116a4576116a361306a565b5b6020026020010151612188565b915091506116da8484815181106116cb576116ca61306a565b5b60200260200101518383611319565b846001856116e89190612dd9565b815181106116f9576116f861306a565b5b6020026020010181815250505050808061171290612f94565b91505061164e565b509392505050565b60008373ffffffffffffffffffffffffffffffffffffffff1663e6a4390584846040518363ffffffff1660e01b815260040161175f929190612b45565b60206040518083038186803b15801561177757600080fd5b505afa15801561178b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117af9190612555565b90509392505050565b6000808573ffffffffffffffffffffffffffffffffffffffff166323b872dd8686866040516024016117ec93929190612b6e565b6040516020818303038152906040529060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405161183a9190612b13565b6000604051808303816000865af19150503d8060008114611877576040519150601f19603f3d011682016040523d82523d6000602084013e61187c565b606091505b50915091508180156118aa57506000815114806118a95750808060200190518101906118a89190612767565b5b5b6118e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118e090612c30565b60405180910390fd5b505050505050565b60005b600183516119029190612e60565b811015611b445760008084838151811061191f5761191e61306a565b5b6020026020010151856001856119359190612dd9565b815181106119465761194561306a565b5b602002602001015191509150600061195e8383611cf5565b5090506000876001866119719190612dd9565b815181106119825761198161306a565b5b602002602001015190506000808373ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146119ca578260006119ce565b6000835b91509150600060028a516119e29190612e60565b88106119ee5788611a40565b611a3f7f0000000000000000000000000000000000000000000000000000000000000000878c60028c611a219190612dd9565b81518110611a3257611a3161306a565b5b6020026020010151611722565b5b9050611a6d7f00000000000000000000000000000000000000000000000000000000000000008888611722565b73ffffffffffffffffffffffffffffffffffffffff1663022c0d9f848484600067ffffffffffffffff811115611aa657611aa5613099565b5b6040519080825280601f01601f191660200182016040528015611ad85781602001600182028036833780820191505090505b506040518563ffffffff1660e01b8152600401611af89493929190612c94565b600060405180830381600087803b158015611b1257600080fd5b505af1158015611b26573d6000803e3d6000fd5b50505050505050505050508080611b3c90612f94565b9150506118f4565b50505050565b600080841415611b86576040517f42301c2300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000831480611b955750600082145b15611bcc576040517fbb55fd2700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611bf56103e8611be787876120d090919063ffffffff16565b6120d090919063ffffffff16565b90506000611c206103e5611c12888761229a90919063ffffffff16565b6120d090919063ffffffff16565b9050611c4160018284611c339190612e2f565b61212c90919063ffffffff16565b925050509392505050565b600080841415611c88576040517f5945ea5600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000831480611c975750600082145b15611cce576040517fbb55fd2700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b82611ce283866120d090919063ffffffff16565b611cec9190612e2f565b90509392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415611d5e576040517fbd969eb000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610611d98578284611d9b565b83835b8092508193505050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611e0a576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b9250929050565b600080600073ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e6a439058a8a6040518363ffffffff1660e01b8152600401611e87929190612b45565b60206040518083038186803b158015611e9f57600080fd5b505afa158015611eb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ed79190612555565b73ffffffffffffffffffffffffffffffffffffffff161415611fa65760007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663c9c653968a8a6040518363ffffffff1660e01b8152600401611f50929190612b45565b602060405180830381600087803b158015611f6a57600080fd5b505af1158015611f7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fa29190612555565b9050505b600080611fd47f00000000000000000000000000000000000000000000000000000000000000008b8b612188565b91509150600082148015611fe85750600081145b15611ffc57878780945081955050506120c3565b6000612009898484611c4c565b905087811161205b578581101561204c576040517fef71d09100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b888180955081965050506120c1565b6000612068898486611c4c565b90508981111561207b5761207a612fdd565b5b878110156120b5576040517f8dc525d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80898096508197505050505b505b5050965096945050505050565b6000806120e683856122f690919063ffffffff16565b809350819250505080612125576040517f5797276a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5092915050565b600080612142838561234a90919063ffffffff16565b809350819250505080612181576040517fa259879500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5092915050565b60008060006121978585611cf5565b5090506000806121a8888888611722565b73ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b1580156121ed57600080fd5b505afa158015612201573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122259190612794565b506dffffffffffffffffffffffffffff1691506dffffffffffffffffffffffffffff1691508273ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614612284578082612287565b81815b8095508196505050505050935093915050565b6000806122b0838561237990919063ffffffff16565b8093508192505050806122ef576040517f682e7c7c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5092915050565b600080600084141561230f576001600091509150612343565b60008385029050838582816123275761232661303b565b5b041461233a576000809250925050612343565b60018192509250505b9250929050565b6000806000838501905084811015612369576000809250925050612372565b60018192509250505b9250929050565b60008083831115612390576000809150915061239a565b6001838503915091505b9250929050565b60006123b46123af84612d3c565b612d17565b905080838252602082019050828560208602820111156123d7576123d66130d2565b5b60005b8581101561240757816123ed8882612411565b8452602084019350602083019250506001810190506123da565b5050509392505050565b600081359050612420816131b9565b92915050565b600081519050612435816131b9565b92915050565b60008083601f840112612451576124506130cd565b5b8235905067ffffffffffffffff81111561246e5761246d6130c8565b5b60208301915083602082028301111561248a576124896130d2565b5b9250929050565b600082601f8301126124a6576124a56130cd565b5b81356124b68482602086016123a1565b91505092915050565b6000815190506124ce816131d0565b92915050565b6000815190506124e3816131e7565b92915050565b6000813590506124f8816131fe565b92915050565b60008151905061250d816131fe565b92915050565b60008151905061252281613215565b92915050565b60006020828403121561253e5761253d6130dc565b5b600061254c84828501612411565b91505092915050565b60006020828403121561256b5761256a6130dc565b5b600061257984828501612426565b91505092915050565b600080600080600080600060e0888a0312156125a1576125a06130dc565b5b60006125af8a828b01612411565b97505060206125c08a828b01612411565b96505060406125d18a828b016124e9565b95505060606125e28a828b016124e9565b94505060806125f38a828b016124e9565b93505060a06126048a828b01612411565b92505060c06126158a828b016124e9565b91505092959891949750929550565b600080600080600080600080610100898b031215612645576126446130dc565b5b60006126538b828c01612411565b98505060206126648b828c01612411565b97505060406126758b828c016124e9565b96505060606126868b828c016124e9565b95505060806126978b828c016124e9565b94505060a06126a88b828c016124e9565b93505060c06126b98b828c01612411565b92505060e06126ca8b828c016124e9565b9150509295985092959890939650565b60008060008060008060c087890312156126f7576126f66130dc565b5b600061270589828a01612411565b965050602061271689828a016124e9565b955050604061272789828a016124e9565b945050606061273889828a016124e9565b935050608061274989828a01612411565b92505060a061275a89828a016124e9565b9150509295509295509295565b60006020828403121561277d5761277c6130dc565b5b600061278b848285016124bf565b91505092915050565b6000806000606084860312156127ad576127ac6130dc565b5b60006127bb868287016124d4565b93505060206127cc868287016124d4565b92505060406127dd86828701612513565b9150509250925092565b6000602082840312156127fd576127fc6130dc565b5b600061280b848285016124fe565b91505092915050565b6000806040838503121561282b5761282a6130dc565b5b6000612839858286016124e9565b925050602083013567ffffffffffffffff81111561285a576128596130d7565b5b61286685828601612491565b9150509250929050565b60008060408385031215612887576128866130dc565b5b6000612895858286016124fe565b92505060206128a6858286016124fe565b9150509250929050565b60008060008060008060a087890312156128cd576128cc6130dc565b5b60006128db89828a016124e9565b96505060206128ec89828a016124e9565b955050604087013567ffffffffffffffff81111561290d5761290c6130d7565b5b61291989828a0161243b565b9450945050606061292c89828a01612411565b925050608061293d89828a016124e9565b9150509295509295509295565b600080600060608486031215612963576129626130dc565b5b6000612971868287016124e9565b9350506020612982868287016124e9565b9250506040612993868287016124e9565b9150509250925092565b60006129a98383612af5565b60208301905092915050565b6129be81612e94565b82525050565b60006129cf82612d78565b6129d98185612d9b565b93506129e483612d68565b8060005b83811015612a155781516129fc888261299d565b9750612a0783612d8e565b9250506001810190506129e8565b5085935050505092915050565b6000612a2d82612d83565b612a378185612dac565b9350612a47818560208601612f06565b612a50816130e1565b840191505092915050565b6000612a6682612d83565b612a708185612dbd565b9350612a80818560208601612f06565b80840191505092915050565b6000612a99601f83612dc8565b9150612aa4826130f2565b602082019050919050565b6000612abc602383612dc8565b9150612ac78261311b565b604082019050919050565b6000612adf602483612dc8565b9150612aea8261316a565b604082019050919050565b612afe81612eec565b82525050565b612b0d81612eec565b82525050565b6000612b1f8284612a5b565b915081905092915050565b6000602082019050612b3f60008301846129b5565b92915050565b6000604082019050612b5a60008301856129b5565b612b6760208301846129b5565b9392505050565b6000606082019050612b8360008301866129b5565b612b9060208301856129b5565b612b9d6040830184612b04565b949350505050565b6000604082019050612bba60008301856129b5565b612bc76020830184612b04565b9392505050565b60006020820190508181036000830152612be881846129c4565b905092915050565b60006020820190508181036000830152612c0981612a8c565b9050919050565b60006020820190508181036000830152612c2981612aaf565b9050919050565b60006020820190508181036000830152612c4981612ad2565b9050919050565b6000602082019050612c656000830184612b04565b92915050565b6000604082019050612c806000830185612b04565b612c8d6020830184612b04565b9392505050565b6000608082019050612ca96000830187612b04565b612cb66020830186612b04565b612cc360408301856129b5565b8181036060830152612cd58184612a22565b905095945050505050565b6000606082019050612cf56000830186612b04565b612d026020830185612b04565b612d0f6040830184612b04565b949350505050565b6000612d21612d32565b9050612d2d8282612f63565b919050565b6000604051905090565b600067ffffffffffffffff821115612d5757612d56613099565b5b602082029050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b6000612de482612eec565b9150612def83612eec565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612e2457612e2361300c565b5b828201905092915050565b6000612e3a82612eec565b9150612e4583612eec565b925082612e5557612e5461303b565b5b828204905092915050565b6000612e6b82612eec565b9150612e7683612eec565b925082821015612e8957612e8861300c565b5b828203905092915050565b6000612e9f82612ecc565b9050919050565b60008115159050919050565b60006dffffffffffffffffffffffffffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b60005b83811015612f24578082015181840152602081019050612f09565b83811115612f33576000848401525b50505050565b6000612f4482612eec565b91506000821415612f5857612f5761300c565b5b600182039050919050565b612f6c826130e1565b810181811067ffffffffffffffff82111715612f8b57612f8a613099565b5b80604052505050565b6000612f9f82612eec565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612fd257612fd161300c565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f5472616e7366657248656c7065723a205452414e534645525f4641494c454400600082015250565b7f5472616e7366657248656c7065723a204554485f5452414e534645525f46414960008201527f4c45440000000000000000000000000000000000000000000000000000000000602082015250565b7f5472616e7366657248656c7065723a205452414e534645525f46524f4d5f464160008201527f494c454400000000000000000000000000000000000000000000000000000000602082015250565b6131c281612e94565b81146131cd57600080fd5b50565b6131d981612ea6565b81146131e457600080fd5b50565b6131f081612eb2565b81146131fb57600080fd5b50565b61320781612eec565b811461321257600080fd5b50565b61321e81612ef6565b811461322957600080fd5b5056fea26469706673582212201940e2bdfadfd822d74a7d1d18c4d959c3bf0a40711d7008d154f35ba2b5c1ee64736f6c63430008070033";

type TestUniswapRouterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestUniswapRouterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestUniswapRouter__factory extends ContractFactory {
  constructor(...args: TestUniswapRouterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _factory: PromiseOrValue<string>,
    _WETH: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestUniswapRouter> {
    return super.deploy(
      _factory,
      _WETH,
      overrides || {}
    ) as Promise<TestUniswapRouter>;
  }
  override getDeployTransaction(
    _factory: PromiseOrValue<string>,
    _WETH: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, _WETH, overrides || {});
  }
  override attach(address: string): TestUniswapRouter {
    return super.attach(address) as TestUniswapRouter;
  }
  override connect(signer: Signer): TestUniswapRouter__factory {
    return super.connect(signer) as TestUniswapRouter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestUniswapRouterInterface {
    return new utils.Interface(_abi) as TestUniswapRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestUniswapRouter {
    return new Contract(address, _abi, signerOrProvider) as TestUniswapRouter;
  }
}
