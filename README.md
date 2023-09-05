
# WatsonX Challenge - Track 6

### Solve for a personal productivity use case with Watson Orchestrate

## Team Name: WatsonX Productivity Maestros

## Members
- Oliver Rodriguez (Team admin)
- Ann Umberhocker
- Cole Potter
- Kevin Silva
- Carlos Toledo
- Mark Stephens
- Grep Mount
- Jeff Achtermann

## Description
Our team decided to create a Watson Orchestrate flow that would take as input a meeting transcript, summarize it, post the summary to a Trello card and a Slack channel.  We also added a Next Steps skill that would extract out potential next steps to be taken from the meeting like setting up a new meeting, sending out emails, etc.

We followed similar steps as the [Generate Welcome Message in Watsonx.ai and broadcast it over Slack](https://ibmdocs-test.dcs.ibm.com/docs/en/watson_orchestrate_watsonx_challenge_test?topic=al-generate-welcome-message-watsonxai-broadcast-it-over-slack) example.

## Steps
1. We first created a custom **[User Default Settings](https://ibmdocs-test.dcs.ibm.com/docs/en/watson_orchestrate_watsonx_challenge_test?topic=skills-user-default-settings)** skill to set up some of the defaults like Trello board, Slack channel IDs (Slack), WatsonX text prompts

2. We used the ready-to-import **[Watsonx content generation](https://ibmdocs-test.dcs.ibm.com/docs/en/watson_orchestrate_watsonx_challenge_test?topic=skills-watsonx-content-generation)** skill, defaulted to the prompt to train the model on how to Summarize, and requested meeting transcript be added to the input text body
3. We used the ready-to-import **Watsonx content generation** skill, defaulted to the prompt to train the model on how to how to extract Next Steps
4. We created a custom skill to add a note to a Trello card
5. We used an out of the box skill to post to a Slack channel

6. Once we had all of the necessary skills, we combined them into a flow to prompt user for meeting transcript, send the resulting summary into the Trello skill to post onto a card, and send resulting summary into the Slack skill to post to the channel

## Challenges and Considerations:

- We had to experiment with how to default the watsonx.ai skills with the training text to get the desired results

- One of the team members used Code Engine to deploy some node code to bypass the double authentication requirement for Trello

- In order to quickly have permissions to post to a slack channel, we had to sign up for Slack using private email and create a public slack channel

- We were able to divide up the tasks among the team, however it took us a bit to figure out how to import the skills to our team area so we could all access them and build our workflow

## Promotion Video Link

https://ibm.box.com/s/lx323mrubukff5vrqrqz0me83kyov6do

## Resources

[IBM Watson Orchestrate - watsonx Challenge](
https://ibmdocs-test.dcs.ibm.com/docs/en/watson_orchestrate_watsonx_challenge_test)

[Watson Orchestrate SaaS environment](https://dl.watson-orchestrate.ibm.com/home)

[IBM Code Engine](https://cloud.ibm.com/docs/codeengine?topic=codeengine-about#:~:text=IBM%20Cloud%C2%AE%20Code%20Engine,want%20their%20code%20to%20run)

