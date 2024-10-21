import  { Predictions} from '@aws-amplify/predictions';
import { TranslateClient, TranslateTextCommand } from "@aws-sdk/client-translate";
import { getAmplifyUserAgentObject, Category, PredictionsAction, Signer } from '@aws-amplify/core/internals/utils';
import { ConsoleLogger, Amplify, fetchAuthSession } from '@aws-amplify/core';


async function ProcessChatText(content, sourceLang, tagretLang) {

    let transcriptMessage = await Predictions.convert({
        translateText: {
            source: {
                text: content,
                language: sourceLang, // defaults configured on aws-exports.js
                // supported languages https://docs.aws.amazon.com/translate/latest/dg/how-it-works.html#how-it-works-language-codes
            },
            targetLanguage: tagretLang
        }
    });
    return transcriptMessage.text
}
export default ProcessChatText
