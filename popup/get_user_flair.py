import praw
import json

reddit = praw.Reddit(
    client_id='aHqR_ECfwPEHP-2Kl7G8sg',
    client_secret='jRIYVzM9xpNrovkBtxZ0BwlkBjvKgA',
    user_agent='test',
    username="Marcus_Aguiar",
    password="diaensolarado"
)

subreddit = reddit.subreddit("BACHARELOVE")
flairs = subreddit.flair(limit=None)

flair_data = [{'post_id': flair['user'].id, 'flair': flair['flair_text']} for flair in flairs if 'flair_text' in flair]

with open('user_flair.json', 'w') as outfile:
    json.dump(flair_data, outfile)

print(flair_data)
print("data exported to user_flair.json file.")