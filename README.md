# BabelFlag for Slack

BabelFlag translates a message when a user reacts with an emoji (*"reacji"*). 

Currently this repo is borrowed heavily from the Reacjilator sample app in the Slack CLI. This doc will be updated as this project is built.

For example, when a message gets a `:flag-de:` reacji, this bot translates the original message to German and posts it in the message thread.

(more specific demo image to come)
![Reacjilator demo](tutorial_images/reacjilator-demo.gif)

## Set Up Your Slack App

1. Create an app at your Slack App Settings page at [api.slack.com/apps](https://api.slack.com/apps)
2. Choose "From an app manifest", select the workspace you want to use, then paste the contents of [`manifest.yml`](./manifest.yml) into the dialog marked "Enter app manifest below".
3. On the **OAuth & Permissions** page, install the app and get a **Bot User OAuth Token** - it begins with `xoxb-`.
4. On the **Basic Information** page, scroll down to **App-Level Tokens** and click **Generate Token and Scopes**.
5. Add the `connections:write` scope, give your token a name, and click **Generate**. Copy this new token to your `.env` file as `SLACK_APP_TOKEN`

### Credentials

Rename the `.env.sample` to `.env` and fill the env vars with your credentials. You also need DeepL credentials to use the DeepL translation API:

```
SLACK_SIGNING_SECRET={your-app-signing-secret}
SLACK_APP_TOKEN={your-app-token-xapp-1234}
SLACK_BOT_TOKEN={your-bot-token-xoxb-1234}
DEEPL_AUTH_KEY=
PORT=3000
```

Go to your [Slack app](https://api.slack.com/apps) to get the follwing tokens:
- Your Slack App-Level Token at **Basic Information**
- Your bot token at **OAuth & Permissions**.

Get your DeepL auth key via a plan at their [website](https://www.deepl.com/en/pro#developer).

> [!IMPORTANT]  
> This project requires a *DeepL API account*, not the *DeepL Translator* account. These two things are not the same. If you create a DeepL Translator account, you’ll need to cancel that and then go make a different account for DeepL API. These two accounts can’t share an email address. This is terrible.


