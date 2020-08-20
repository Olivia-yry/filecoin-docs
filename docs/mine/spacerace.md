---
title: Space Race
description: An overview of the 'Space Race', the Filecoin testnet incentive program.
---

# The Filecoin Space Race

The testnet incentives program (also known as the 'Space Race') is a collaborative competition intended to stress-test the network, encourage participation all over the world, and help miners get ready to run the world’s biggest decentralized storage network. 

## Structure and rules 

The competition’s basic structure is simple: for three weeks, miners will compete to onboard as much storage capacity as possible to the network. The top 100 miners globally, as well as the top 50 miners from each continent, will earn Filecoin rewards based on how much storage they and the network achieve during the test period.

A miner’s “location,” for regional leaderboards, is the physical location of the mining operation. Operations split between multiple regions must run multiple miners. Miners will be required to submit documentation verifying their location claims. Claiming to be from a different location will disqualify you from rewards and leaderboard inclusion.

## How do I participate?

**The calibration period is currently open.** To join, run at least 1 miner on the [calibration devnet](https://docs.filecoin.io/how-to/networks/#calibration-devnet). A preview of calibration standings is available on the [Preview Dashboard](https://calibration.spacerace.filecoin.io/). 

**The competition period will begin Monday, August 24th at 20:00 UTC** and is open for 3 weeks. To participate in the competition, run 1 or more miners on the Testnet. You'll also need to complete these steps to be eligible for rewards:
- Maintain a deal success average of 80% or greater for both storage and retrieval deals.
- Demonstrate at least one sector upgrade per miner.
- Register your miner(s) by submitting your individual or company info via the Dashboard. It will generate a message for your miner to sign and submit via the competition dashboard. Miners that qualify for rewards will also need to pass an AML/KYC check once the competition ends. (See [Can I run multiple miners?](#can-i-run-multiple-miners) if you are running multiple miners.)

For help or additional questions, join the [#space-race](https://filecoinproject.slack.com/archives/C0179RNEMU4) channel on the Filecoin Slack. 

## What are the possible rewards?

### Storage Rewards
The top 50 miners in each region and globally are eligible to split a reward pool of up to 4mm FIL, depending on regional network storage achieved.

| Total FIL rewards (global pool)	| Global network storage achieved |
|------|------|
| 100k FIL | 5 PiB| 
| 200k FIL	| 10 PiB| 
| 300k FIL	| 25 PiB| 
| 500k FIL	| 50 PiB| 
| 1MM FIL *	| 100 PiB| 
* Only unlocked if each region achieves at least 1PiB of storage

|	Total FIL rewards (regional pool)|		Regional network storage achieved|	
|------|------|
|	25k FIL |	100 TiB|	
|	50k FIL	|	500 TiB|	
|	100k FIL	|	1 PiB|	
|	250k FIL	|	5 PiB|	
|	500k FIL	|	10 PiB|	

### Block Rewards
The top 20 FIL-denominated block reward producers who are also eligible to receive Space Race rewards will share a reward pool of 100k FIL on a pro rata basis. For example, if you receive 100,000 FIL in block rewards, and the top 20 producers cumulatively receive 2,000,000 FIL, you would be eligible to receive an additional 5,000 FIL. Like other competition rewards, any FIL received will vest linearly over six months. During the calibration period, miners can check their total block rewards mined at https://reward.calibration.fildev.network.

Any rewards earned will be encoded into the genesis block and will vest linearly over six months from mainnet launch.

## Frequently asked questions

#### What branch and network will be used for the Space Race?

The [calibration devnet](https://docs.filecoin.io/how-to/networks/#calibration-devnet) is designed for the initial calibration phase in order to prepare equipment and client setups. Once the competition starts, the [testnet](https://docs.filecoin.io/how-to/networks/#testnet) will be the used network.

#### How is the "location" of a mining operation determined?

The “location” of a storage mining operation is the location of the storage and sealing hardware for the operation. Since the hardware is what matters, it is not acceptable to relay from hardware in Continent A to a Lotus node in Continent B and try to claim Continent B rewards.

Thus, to verify location claims, the Filecoin team will be implementing a custom-built software suite running during the competition, and will be doing hands-on verification during and after the competition. **Please do not try to “spoof” your location – we have many layers of detection in place and a team in place to ensure fairness**; if you are thinking about using a proxy or a VPN to hide your location, think again.

Any miner found misrepresenting their location will result in a *total forfeiture of all rewards*, across all associated miners.

#### Is a static IP required?

A public IP is required so that your miner can make storage and retrieval deals and compete in Space Race. This can achieved through a static IP, or a relay or VPN. See the [Improving connectivity](https://docs.filecoin.io/mine/connectivity/) page for more details.

#### How exactly is deal success measured?
Once your miner is online, the dealbot will automatically begin making storage and retrieval deals. Only deals made through the dealbot count towards deal success rate for this competition. To qualify for rewards, your miner must show >90% success in both storage and retreival deals during the competition period.

To see a detailed log of all deal attempts for your miner, visit the [Calibration Dashboard](https://calibration.spacerace.filecoin.io/) and search for your miner ID.

#### Can I run multiple miners?
Yes, you can combine your competition results from multiple miners. Once the competition begins, register all your miners with the same email address. Then, email mining@filecoin.io during the first week of the competition and ask for those miners to be combined on the leaderboard. The miners will be displayed together under a common name (your company name, for example) and treated as one miner for purposes of calculating rankings and rewards.

#### How are rewards distributed?
If you’re eligible for rewards, someone from CoinList will reach out to your provided email address shortly after the competition to conduct AML/KYC and coordinate delivery of the tokens. You will have the option to receive rewards directly to your wallet.

#### How do I prioritize deals from competition bots?
By default, Lotus nodes accept all inbound deals that match their criteria. However, during the Space Race competition, miners may want to limit the clients to avoid spam deals from malicious agents.

To filter deals based on certain parameters, modify the `~/.lotusminer/config.toml` file to include a `Filter` param. This param should be a shell command that will be run when processing a deal proposal. Deals are accepted if the `Filter`'s exit code is 0. For any other exit code, deals will be rejected. 

```
~/.lotusminer/config.toml

[Dealmaking]
Filter = <shell command>

## Reject all deals
Filter = "false"

## Accept all deals
Filter = "true"

## Only accept deals from the 3 competition dealbots
Filter = "jq -e '.Proposal.Client == \"t1capnpwjvm4gfbdlbavblmvjldwqzdo6ukh7mmqq\" or .Proposal.Client == \"t12thv7e3x3tomo5nuunsvzqnl5txflpztdqcbtai\" or .Proposal.Client == \"t12heuwfbg654jgdnctywyafxrqbmcidwj6osecha\" '"
```

You can also write advanced deal filters based on any field in deal info (for example, you may wish to accept only `VerifiedClient` deals). Deal info is piped into `stdin` as JSON.

#### How do I change gas fees?

If you would like to change the default gas fees to accelerate your messages, edit the `~/.lotusminer/config.toml` config file.

```
[Fees]
  MaxPreCommitGasFee = "0.05 FIL"
  MaxCommitGasFee = "0.05 FIL"
  MaxWindowPoStGasFee = "50 FIL"
```

#### How do I demonstrate a sector upgrade?

To be eligible for Space Race rewards, you will need to demonstrate at least _one_ sector upgrade per miner.

* Run `lotus-miner sectors list`.
* From the results, find a CommittedCapacity sector. It will look like this: `1: Proving sSet: YES active: YES tktH: XXXX seedH: YYYY deals: [0]`. In this case, `1` represents the sector number.
* Use that sector number to run `./lotus-miner sectors mark-for-upgrade $SECTOR_NUMBER`.

There is no immediate feedback that `mark-for-upgrade` has succeeded or failed. However, within 24 hours, the `active: YES` should change to `active: NO`. This result will also be visible on the calibration/competition Dashboard.

## Additional notes

* If a bug is identified during the competition that threatens the validity of the power table, the Filecoin team may end the competition early. Rewards will still be awarded for the period prior to the discovery of the bug. If such a bug is responsibly disclosed to the Filecoin team, the team reporting it will be eligible for rewards of up to 250k FIL, depending on the severity and practicality of the bug, as determined by the Filecoin team.

* While we don’t expect it, in the unlikely event that Protocol Labs or the Filecoin Foundation determine in their sole discretion that legal or regulatory issues prevent the delivery of any portion of rewards, the rewards may be restructured, postponed, or cancelled.
