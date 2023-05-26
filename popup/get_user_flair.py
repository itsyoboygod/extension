import praw
import json


reddit = praw.Reddit(client_id='aHqR_ECfwPEHP-2Kl7G8sg',
                     client_secret='jRIYVzM9xpNrovkBtxZ0BwlkBjvKgA',
                     user_agent='test',
                     username="Marcus_Aguiar",
                     password="diaensolarado")

subreddit = reddit.subreddit("BACHARELOVE")
flairs = subreddit.flair(limit=None)

flair_texts = [flair['flair_text'] for flair in flairs if 'flair_text' in flair]

with open('user_flair.json', 'w') as outfile:
    json.dump(flair_texts, outfile)

    print(flair_texts)
