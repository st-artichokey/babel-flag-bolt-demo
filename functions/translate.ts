import * as deepl from 'deepl-node';


const deeplClient = new deepl.DeepLClient(authKey);

(async () => {
    const result = await deeplClient.translateText('Hello, world!', null, 'fr');
    console.log(result.text); // Bonjour à tous !
})();