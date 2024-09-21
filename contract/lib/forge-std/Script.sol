// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import {Mchango} from "../../src/Mchango.sol";
import {Script} from "forge-std/Script.sol";

contract DeployMchango is Script {
    uint256 private constant premiumFee = 0.00001 ether;

    function run() external returns (Mchango) {
        Mchango mchango;

        vm.startBroadcast();
        mchango = new Mchango(premiumFee);
        vm.stopBroadcast();

        return mchango;
    }
}
