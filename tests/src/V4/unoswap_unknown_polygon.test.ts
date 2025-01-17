import {populateTransaction, processTest} from '../test.fixture';

const contractName = 'AggregationRouterV4';

const testLabel = 'unoswapUnknowTokenSwapV4';  // <= Name of the test
const testDirSuffix =
    'unoswap_unknown_v4';  // <= directory to compare device snapshots to
const testNetwork = 'polygon';
const signedPlugin = false;

const contractAddr = '0x1111111254fb6c44bac0bed2854e76f90643097d';
const chainID = 137;


const selector = '0x2e95b6c8';
const srcToken =
    '0000000000000000000000003f1421cb90d26b28e7495cb952f6f4eb1b8681fa';
const amount =
    '00000000000000000000000000000000000000000000000000b1a2bc2ec50000';
const minReturn =
    '00000000000000000000000000000000000000000000048c48c63f0944606781';
const pools =
    '0000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000180000000000000003b6d0340c06dadbfde48c0bdeb4608ddc7f232fd07a02da1cfee7c08';

const inputData = selector + srcToken + amount + minReturn + pools;
;
// Create serializedTx and remove the "0x" prefix
const serializedTx = populateTransaction(contractAddr, inputData, chainID);

const devices = [
    {
        name: 'nanos',
        label: 'Nano S',
        steps: 9,  // <= Define the number of steps for this test case and this
                   // device
    },
    {
        name: 'nanox',
        label: 'Nano X',
        steps: 8,  // <= Define the number of steps for this test case and this
                   // device
    },
    {
        name: 'nanosp',
        label: 'Nano S+',
        steps: 8,  // <= Define the number of steps for this test case and this
                   // device
    },
    {
        name: 'stax',
        label: 'Stax',
    },
    {
        name: 'flex',
        label: 'Flex',
    }
];

devices.forEach(
    (device) => processTest(
        device, contractName, testLabel, testDirSuffix, '', signedPlugin,
        serializedTx, testNetwork));