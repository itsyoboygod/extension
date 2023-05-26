import praw
import json

reddit = praw.Reddit(client_id='aHqR_ECfwPEHP-2Kl7G8sg',
                     client_secret='jRIYVzM9xpNrovkBtxZ0BwlkBjvKgA',
                     user_agent='test')

post_id = "e354qx"  # Replace with the post ID of your choice

# Load existing data from post_flair.json if it exists
try:
    with open('post_flair.json', 'r') as file:
        data_list = json.load(file)
except FileNotFoundError:
    data_list = []

# Retrieve the submission based on the post ID
submission = reddit.submission(id=post_id)

# Get the link flair of the submission
flair = submission.link_flair_text

# Create a dictionary to store the post ID and flair
data = {
    'post_id': post_id,
    'flair': flair
}

# Add new data to the existing list if it doesn't exist
if flair and data not in data_list:
    data_list.append(data)

# Save the updated data list to post_flair.json
with open('post_flair.json', 'w') as file:
    json.dump(data_list, file)

print(flair)
print("Data exported to post_flair.json file.")