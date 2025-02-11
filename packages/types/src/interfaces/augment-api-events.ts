// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Option, U256, Vec, bool, u32 } from '@polkadot/types';
import type { SmartContract } from '@plasm/types/interfaces/operator';
import type { BalanceStatus } from '@polkadot/types/interfaces/balances';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { EvmLog, ExitReason } from '@polkadot/types/interfaces/evm';
import type { AuthorityList } from '@polkadot/types/interfaces/grandpa';
import type { Kind, OpaqueTimeSlot } from '@polkadot/types/interfaces/offences';
import type { AccountId, AccountIndex, Balance, BlockNumber, H160, H256, Hash } from '@polkadot/types/interfaces/runtime';
import type { TaskAddress } from '@polkadot/types/interfaces/scheduler';
import type { IdentificationTuple, SessionIndex } from '@polkadot/types/interfaces/session';
import type { EraIndex } from '@polkadot/types/interfaces/staking';
import type { DispatchError, DispatchInfo, DispatchResult } from '@polkadot/types/interfaces/system';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/events' {
  export interface AugmentedEvents<ApiType> {
    balances: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A balance was set by root. \[who, free, reserved\]
       **/
      BalanceSet: AugmentedEvent<ApiType, [AccountId, Balance, Balance]>;
      /**
       * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
       **/
      Deposit: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss. \[account, balance\]
       **/
      DustLost: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was created with some free balance. \[account, free_balance\]
       **/
      Endowed: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was reserved (moved from free to reserved). \[who, value\]
       **/
      Reserved: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       * \[from, to, balance, destination_status\]
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [AccountId, AccountId, Balance, BalanceStatus]>;
      /**
       * Transfer succeeded. \[from, to, value\]
       **/
      Transfer: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * Some balance was unreserved (moved from reserved to free). \[who, value\]
       **/
      Unreserved: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    contracts: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A code with the specified hash was removed.
       * \[code_hash\]
       * 
       * This happens when the last contract that uses this code hash was removed or evicted.
       **/
      CodeRemoved: AugmentedEvent<ApiType, [Hash]>;
      /**
       * Code with the specified hash has been stored. \[code_hash\]
       **/
      CodeStored: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A custom event emitted by the contract.
       * \[contract, data\]
       * 
       * # Params
       * 
       * - `contract`: The contract that emitted the event.
       * - `data`: Data supplied by the contract. Metadata generated during contract
       * compilation is needed to decode it.
       **/
      ContractEmitted: AugmentedEvent<ApiType, [AccountId, Bytes]>;
      /**
       * Contract has been evicted and is now in tombstone state. \[contract\]
       **/
      Evicted: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * Contract deployed by address at the specified address. \[deployer, contract\]
       **/
      Instantiated: AugmentedEvent<ApiType, [AccountId, AccountId]>;
      /**
       * Restoration of a contract has been successful.
       * \[restorer, dest, code_hash, rent_allowance\]
       * 
       * # Params
       * 
       * - `restorer`: Account ID of the restoring contract.
       * - `dest`: Account ID of the restored contract.
       * - `code_hash`: Code hash of the restored contract.
       * - `rent_allowance`: Rent allowance of the restored contract.
       **/
      Restored: AugmentedEvent<ApiType, [AccountId, AccountId, Hash, Balance]>;
      /**
       * Triggered when the current schedule is updated.
       * \[version\]
       * 
       * # Params
       * 
       * - `version`: The version of the newly set schedule.
       **/
      ScheduleUpdated: AugmentedEvent<ApiType, [u32]>;
      /**
       * Contract has been terminated without leaving a tombstone.
       * \[contract, beneficiary\]
       * 
       * # Params
       * 
       * - `contract`: The contract that was terminated.
       * - `beneficiary`: The account that received the contracts remaining balance.
       * 
       * # Note
       * 
       * The only way for a contract to be removed without a tombstone and emitting
       * this event is by calling `seal_terminate`.
       **/
      Terminated: AugmentedEvent<ApiType, [AccountId, AccountId]>;
    };
    ethCall: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A call just executed. \[result\]
       **/
      Executed: AugmentedEvent<ApiType, [AccountId, DispatchResult]>;
    };
    ethereum: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
       **/
      Executed: AugmentedEvent<ApiType, [H160, H160, H256, ExitReason]>;
    };
    evm: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A deposit has been made at a given address. \[sender, address, value\]
       **/
      BalanceDeposit: AugmentedEvent<ApiType, [AccountId, H160, U256]>;
      /**
       * A withdrawal has been made from a given address. \[sender, address, value\]
       **/
      BalanceWithdraw: AugmentedEvent<ApiType, [AccountId, H160, U256]>;
      /**
       * A contract has been created at given \[address\].
       **/
      Created: AugmentedEvent<ApiType, [H160]>;
      /**
       * A \[contract\] was attempted to be created, but the execution failed.
       **/
      CreatedFailed: AugmentedEvent<ApiType, [H160]>;
      /**
       * A \[contract\] has been executed successfully with states applied.
       **/
      Executed: AugmentedEvent<ApiType, [H160]>;
      /**
       * A \[contract\] has been executed with errors. States are reverted with only gas fees applied.
       **/
      ExecutedFailed: AugmentedEvent<ApiType, [H160]>;
      /**
       * Ethereum events from contracts.
       **/
      Log: AugmentedEvent<ApiType, [EvmLog]>;
    };
    grandpa: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * New authority set has been applied. \[authority_set\]
       **/
      NewAuthorities: AugmentedEvent<ApiType, [AuthorityList]>;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
    };
    imOnline: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * At the end of the session, no offence was committed.
       **/
      AllGood: AugmentedEvent<ApiType, []>;
      /**
       * A new heartbeat was received from `AuthorityId` \[authority_id\]
       **/
      HeartbeatReceived: AugmentedEvent<ApiType, [AuthorityId]>;
      /**
       * At the end of the session, at least one validator was found to be \[offline\].
       **/
      SomeOffline: AugmentedEvent<ApiType, [Vec<IdentificationTuple>]>;
    };
    indices: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A account index was assigned. \[index, who\]
       **/
      IndexAssigned: AugmentedEvent<ApiType, [AccountId, AccountIndex]>;
      /**
       * A account index has been freed up (unassigned). \[index\]
       **/
      IndexFreed: AugmentedEvent<ApiType, [AccountIndex]>;
      /**
       * A account index has been frozen to its current account ID. \[index, who\]
       **/
      IndexFrozen: AugmentedEvent<ApiType, [AccountIndex, AccountId]>;
    };
    nicks: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A name was changed. \[who\]
       **/
      NameChanged: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A name was cleared, and the given balance returned. \[who, deposit\]
       **/
      NameCleared: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * A name was forcibly set. \[target\]
       **/
      NameForced: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A name was removed and the given balance slashed. \[target, deposit\]
       **/
      NameKilled: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * A name was set. \[who\]
       **/
      NameSet: AugmentedEvent<ApiType, [AccountId]>;
    };
    offences: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * There is an offence reported of the given `kind` happened at the `session_index` and
       * (kind-specific) time slot. This event is not deposited for duplicate slashes. last
       * element indicates of the offence was applied (true) or queued (false)
       * \[kind, timeslot, applied\].
       **/
      Offence: AugmentedEvent<ApiType, [Kind, OpaqueTimeSlot, bool]>;
    };
    operator: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Contract assigned to operator: [operator, contract].
       **/
      ContractClaimed: AugmentedEvent<ApiType, [AccountId, SmartContract]>;
    };
    plasmRewards: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * The whole reward issued in that Era.
       * (era_index: EraIndex, reward: Balance)
       **/
      WholeEraReward: AugmentedEvent<ApiType, [EraIndex, Balance]>;
    };
    plasmValidator: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Validator set changed.
       **/
      NewValidators: AugmentedEvent<ApiType, [Vec<AccountId>]>;
      /**
       * The total amount of minted rewards for validators.
       **/
      TotalValidatorRewards: AugmentedEvent<ApiType, [EraIndex, Balance]>;
      /**
       * The amount of minted rewards for validators.
       **/
      ValidatorReward: AugmentedEvent<ApiType, [EraIndex, AccountId, Balance]>;
    };
    scheduler: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Canceled some task. \[when, index\]
       **/
      Canceled: AugmentedEvent<ApiType, [BlockNumber, u32]>;
      /**
       * Dispatched some task. \[task, id, result\]
       **/
      Dispatched: AugmentedEvent<ApiType, [TaskAddress, Option<Bytes>, DispatchResult]>;
      /**
       * Scheduled some task. \[when, index\]
       **/
      Scheduled: AugmentedEvent<ApiType, [BlockNumber, u32]>;
    };
    session: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * New session has happened. Note that the argument is the \[session_index\], not the block
       * number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [SessionIndex]>;
    };
    sudo: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * The \[sudoer\] just switched identity; the old key is supplied.
       **/
      KeyChanged: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [DispatchResult]>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [DispatchResult]>;
    };
    system: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed. \[error, info\]
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [DispatchError, DispatchInfo]>;
      /**
       * An extrinsic completed successfully. \[info\]
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [DispatchInfo]>;
      /**
       * An \[account\] was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A new \[account\] was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [AccountId]>;
    };
    utility: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error. \[index, error\]
       **/
      BatchInterrupted: AugmentedEvent<ApiType, [u32, DispatchError]>;
    };
  }

  export interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
    [key: string]: ModuleEvents<ApiType>;
  }
}
