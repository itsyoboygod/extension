import praw
import json

reddit = praw.Reddit(client_id='aHqR_ECfwPEHP-2Kl7G8sg',
                     client_secret='jRIYVzM9xpNrovkBtxZ0BwlkBjvKgA',
                     user_agent='test')

# post_id = "e354qx"  # Replace with the post ID of your choice
# post_id = "e32h16"  # Replace with the post ID of your choice
post_id = "13rp4xi"  # Replace with the post ID of your choice
# post_id = "e32a2x"  # Replace with the post ID of your choice

# Retrieve the submission based on the post ID
submission = reddit.submission(id=post_id)

# Get the title and text of the submission
title = submission.title
text = submission.selftext

# Create a dictionary to store the title and text
data = {
    'id_post' : post_id,
    'title': title,
    'text': text
}

# Load existing data from the JSON file if it exists
try:
    with open('post_content.json', 'r') as file:
        existing_data = json.load(file)
except FileNotFoundError:
    existing_data = []

# Check if the data already exists in the JSON file
if data not in existing_data:
    # Append the new data to the existing data
    existing_data.append(data)

    # Save the updated data to the JSON file
    with open('post_content.json', 'w') as outfile:
        json.dump(existing_data, outfile)

    print("New data appended to post_content.json file.")
else:
    print("Data already exists in post_content.json file. Skipping append.")