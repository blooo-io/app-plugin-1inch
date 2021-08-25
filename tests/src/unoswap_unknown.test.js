import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { waitForAppScreen, zemuFixture } from './test.fixture';

test('Unoswap unknown token swap', async () => {
    await zemuFixture(async (sim, eth) => {
        // Unknown token to something (900,090,000,000,000 DOGESHLD to 0.02 ETH)
        // https://etherscan.io/tx/0x4c0f96df7eea94239b86c0844278b9fd71f9ca025adc96027403487d58fb56d7
        const tx = eth.signTransaction(
            "44'/60'/0'/0/0",
            'f9012a178507aef40a0083024d1a9411111112542d85b3ef69ae05771c2dccff4faa2680b8c42e95b6c80000000000000000000000003f1421cb90d26b28e7495cb952f6f4eb1b8681fa0000000000000000000000000000000000002c60bba58d87e26180f29000000000000000000000000000000000000000000000000000000000590893da0b06bf0000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000140000000000000003b6d034001ff7b1932a70997726e4be1fb34a9fbc3cdc4c525a0ede622fb15f5520a04e91e55da29217630e1e766ca3d590b8039637224a607cba06c40eb54332b89df559c874d3415127e58477cdf188630a22e406af843e57419',
        );
        await waitForAppScreen(sim);
        await sim.navigateAndCompareSnapshots('.', 'unoswap_unknown', [4, 0]);

        await expect(tx).resolves.toEqual({
            r: '538f0851ae4f0711993ed8d91259f87f94b0207465b84429925ae641a60f3150',
            s: '1c6c49f7baa53dc492765f1a12348a72b9eff4afa7977f3c4c3344797ae65b24',
            v: '6e',
        });
    });
});
