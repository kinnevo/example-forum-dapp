/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Forum, ForumInterface } from "../Forum";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "author",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
    ],
    name: "NewComment",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "author",
        type: "address",
      },
    ],
    name: "NewPost",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "contentUri",
        type: "string",
      },
    ],
    name: "addComment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "contentCID",
        type: "string",
      },
    ],
    name: "addPost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "commentId",
        type: "uint256",
      },
    ],
    name: "getComment",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "author",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "postId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "contentCID",
            type: "string",
          },
        ],
        internalType: "struct Forum.Comment",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
    ],
    name: "getPost",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "author",
            type: "address",
          },
          {
            internalType: "string",
            name: "contentCID",
            type: "string",
          },
        ],
        internalType: "struct Forum.Post",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
    ],
    name: "getPostComments",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "author",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "postId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "contentCID",
            type: "string",
          },
        ],
        internalType: "struct Forum.Comment[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "postOrCommentId",
        type: "uint256",
      },
    ],
    name: "getVotes",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "commentId",
        type: "uint256",
      },
      {
        internalType: "int8",
        name: "voteValue",
        type: "int8",
      },
    ],
    name: "voteForComment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "postId",
        type: "uint256",
      },
      {
        internalType: "int8",
        name: "voteValue",
        type: "int8",
      },
    ],
    name: "voteForPost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611851806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063a63228191161005b578063a632281914610125578063aa7e568314610141578063d524ff761461015d578063ff9810991461018d57610088565b80630800e3001461008d5780630c8ecba9146100bd57806340731c24146100d957806385692e3414610109575b600080fd5b6100a760048036038101906100a29190610f1e565b6101bd565b6040516100b49190611314565b60405180910390f35b6100d760048036038101906100d29190610f47565b6102e6565b005b6100f360048036038101906100ee9190610f1e565b61049e565b6040516101009190611336565b60405180910390f35b610123600480360381019061011e9190610f47565b6105bd565b005b61013f600480360381019061013a9190610edd565b610775565b005b61015b60048036038101906101569190610f83565b610890565b005b61017760048036038101906101729190610f1e565b610a47565b6040516101849190611277565b60405180910390f35b6101a760048036038101906101a29190610f1e565b610cbf565b6040516101b49190611299565b60405180910390f35b6101c5610d33565b60036000838152602001908152602001600020604051806080016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201805461025d906115d1565b80601f0160208091040260200160405190810160405280929190818152602001828054610289906115d1565b80156102d65780601f106102ab576101008083540402835291602001916102d6565b820191906000526020600020905b8154815290600101906020018083116102b957829003601f168201915b5050505050815250509050919050565b8160026000848152602001908152602001600020600001541461033e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610335906112f4565b60405180910390fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8160000b12158015610375575060018160000b13155b6103b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ab906112d4565b60405180910390fd5b60006103bf33610cdf565b9050600060016000858152602001908152602001600020600001600083815260200190815260200160002060009054906101000a900460000b90508260000b8160000b14610498578260016000868152602001908152602001600020600001600084815260200190815260200160002060006101000a81548160ff021916908360000b60ff1602179055508260000b8160000b600160008781526020019081526020016000206001015461047391906114a8565b61047d9190611414565b60016000868152602001908152602001600020600101819055505b50505050565b6104a6610d71565b60026000838152602001908152602001600020604051806060016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282018054610534906115d1565b80601f0160208091040260200160405190810160405280929190818152602001828054610560906115d1565b80156105ad5780601f10610582576101008083540402835291602001916105ad565b820191906000526020600020905b81548152906001019060200180831161059057829003601f168201915b5050505050815250509050919050565b81600360008481526020019081526020016000206000015414610615576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060c906112b4565b60405180910390fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8160000b1215801561064c575060018160000b13155b61068b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610682906112d4565b60405180910390fd5b600061069633610cdf565b9050600060016000858152602001908152602001600020600001600083815260200190815260200160002060009054906101000a900460000b90508260000b8160000b1461076f578260016000868152602001908152602001600020600001600084815260200190815260200160002060006101000a81548160ff021916908360000b60ff1602179055508260000b8160000b600160008781526020019081526020016000206001015461074a91906114a8565b6107549190611414565b60016000868152602001908152602001600020600101819055505b50505050565b61077f6000610d0f565b600061078b6000610d25565b9050600033905060405180606001604052808381526020018273ffffffffffffffffffffffffffffffffffffffff16815260200184815250600260008481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002019080519060200190610843929190610da8565b509050508073ffffffffffffffffffffffffffffffffffffffff16827f9fa1d45302bd9fcb3284255e19bfd6b44a866ae45a18606aec53c1b7d7bdc0ac60405160405180910390a3505050565b816002600084815260200190815260200160002060000154146108e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108df906112f4565b60405180910390fd5b6108f26000610d0f565b60006108fe6000610d25565b9050600033905060405180608001604052808381526020018273ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815250600360008481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030190805190602001906109c6929190610da8565b509050508160046000868152602001908152602001600020600181600181540180825580915050039060005260206000200181905550838173ffffffffffffffffffffffffffffffffffffffff16837f1ff20e30c9a9fc163c7f565155d8539bb4da2fd3abae3bf1eaa3e9ab9dae2e2b60405160405180910390a450505050565b60606000600460008481526020019081526020016000208054905067ffffffffffffffff811115610aa1577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015610ada57816020015b610ac7610d33565b815260200190600190039081610abf5790505b50905060005b8151811015610cb5576000600460008681526020019081526020016000208281548110610b36577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905060036000828152602001908152602001600020604051806080016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382018054610bdb906115d1565b80601f0160208091040260200160405190810160405280929190818152602001828054610c07906115d1565b8015610c545780601f10610c2957610100808354040283529160200191610c54565b820191906000526020600020905b815481529060010190602001808311610c3757829003601f168201915b505050505081525050838381518110610c96577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181905250508080610cad90611634565b915050610ae0565b5080915050919050565b600060016000838152602001908152602001600020600101549050919050565b600081604051602001610cf2919061125c565b604051602081830303815290604052805190602001209050919050565b6001816000016000828254019250508190555050565b600081600001549050919050565b604051806080016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001606081525090565b604051806060016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001606081525090565b828054610db4906115d1565b90600052602060002090601f016020900481019282610dd65760008555610e1d565b82601f10610def57805160ff1916838001178555610e1d565b82800160010185558215610e1d579182015b82811115610e1c578251825591602001919060010190610e01565b5b509050610e2a9190610e2e565b5090565b5b80821115610e47576000816000905550600101610e2f565b5090565b6000610e5e610e598461137d565b611358565b905082815260208101848484011115610e7657600080fd5b610e8184828561158f565b509392505050565b600081359050610e98816117ed565b92915050565b600082601f830112610eaf57600080fd5b8135610ebf848260208601610e4b565b91505092915050565b600081359050610ed781611804565b92915050565b600060208284031215610eef57600080fd5b600082013567ffffffffffffffff811115610f0957600080fd5b610f1584828501610e9e565b91505092915050565b600060208284031215610f3057600080fd5b6000610f3e84828501610ec8565b91505092915050565b60008060408385031215610f5a57600080fd5b6000610f6885828601610ec8565b9250506020610f7985828601610e89565b9150509250929050565b60008060408385031215610f9657600080fd5b6000610fa485828601610ec8565b925050602083013567ffffffffffffffff811115610fc157600080fd5b610fcd85828601610e9e565b9150509250929050565b6000610fe38383611137565b905092915050565b610ff48161153c565b82525050565b61100b6110068261153c565b61167d565b82525050565b600061101c826113be565b61102681856113e1565b935083602082028501611038856113ae565b8060005b8581101561107457848403895281516110558582610fd7565b9450611060836113d4565b925060208a0199505060018101905061103c565b50829750879550505050505092915050565b61108f8161154e565b82525050565b60006110a0826113c9565b6110aa81856113f2565b93506110ba81856020860161159e565b6110c38161172e565b840191505092915050565b60006110db601683611403565b91506110e68261174c565b602082019050919050565b60006110fe602783611403565b915061110982611775565b604082019050919050565b6000611121601383611403565b915061112c826117c4565b602082019050919050565b600060808301600083015161114f600086018261124d565b5060208301516111626020860182610feb565b506040830151611175604086018261124d565b506060830151848203606086015261118d8282611095565b9150508091505092915050565b60006080830160008301516111b2600086018261124d565b5060208301516111c56020860182610feb565b5060408301516111d8604086018261124d565b50606083015184820360608601526111f08282611095565b9150508091505092915050565b6000606083016000830151611215600086018261124d565b5060208301516112286020860182610feb565b50604083015184820360408601526112408282611095565b9150508091505092915050565b61125681611585565b82525050565b60006112688284610ffa565b60148201915081905092915050565b600060208201905081810360008301526112918184611011565b905092915050565b60006020820190506112ae6000830184611086565b92915050565b600060208201905081810360008301526112cd816110ce565b9050919050565b600060208201905081810360008301526112ed816110f1565b9050919050565b6000602082019050818103600083015261130d81611114565b9050919050565b6000602082019050818103600083015261132e818461119a565b905092915050565b6000602082019050818103600083015261135081846111fd565b905092915050565b6000611362611373565b905061136e8282611603565b919050565b6000604051905090565b600067ffffffffffffffff821115611398576113976116ff565b5b6113a18261172e565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600061141f8261154e565b915061142a8361154e565b9250817f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03831360008312151615611465576114646116a1565b5b817f800000000000000000000000000000000000000000000000000000000000000003831260008312161561149d5761149c6116a1565b5b828201905092915050565b60006114b38261154e565b91506114be8361154e565b9250827f8000000000000000000000000000000000000000000000000000000000000000018212600084121516156114f9576114f86116a1565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018213600084121615611531576115306116a1565b5b828203905092915050565b600061154782611565565b9050919050565b6000819050919050565b60008160000b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156115bc5780820151818401526020810190506115a1565b838111156115cb576000848401525b50505050565b600060028204905060018216806115e957607f821691505b602082108114156115fd576115fc6116d0565b5b50919050565b61160c8261172e565b810181811067ffffffffffffffff8211171561162b5761162a6116ff565b5b80604052505050565b600061163f82611585565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611672576116716116a1565b5b600182019050919050565b60006116888261168f565b9050919050565b600061169a8261173f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b7f436f6d6d656e7420646f6573206e6f7420657869737400000000000000000000600082015250565b7f496e76616c696420766f74652076616c75652e204d757374206265202d312c2060008201527f302c206f72203100000000000000000000000000000000000000000000000000602082015250565b7f506f737420646f6573206e6f7420657869737400000000000000000000000000600082015250565b6117f681611558565b811461180157600080fd5b50565b61180d81611585565b811461181857600080fd5b5056fea2646970667358221220b801e543b74476b1b5594417e585e2d6bf07c9486c78f6b76e9bf658e089d6dd64736f6c63430008040033";

export class Forum__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Forum> {
    return super.deploy(overrides || {}) as Promise<Forum>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Forum {
    return super.attach(address) as Forum;
  }
  connect(signer: Signer): Forum__factory {
    return super.connect(signer) as Forum__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ForumInterface {
    return new utils.Interface(_abi) as ForumInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Forum {
    return new Contract(address, _abi, signerOrProvider) as Forum;
  }
}