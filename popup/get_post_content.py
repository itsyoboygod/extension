import praw
import json
import re

# Reddit API credentials
client_id = 'aHqR_ECfwPEHP-2Kl7G8sg'
client_secret = 'jRIYVzM9xpNrovkBtxZ0BwlkBjvKgA'
user_agent = 'test'

# Initialize the Reddit instance
reddit = praw.Reddit(client_id=client_id, client_secret=client_secret, user_agent=user_agent)

# Array to store post IDs
post_ids = [
    "e354qx",
    "e32h16", 
    "13rp4xi", 
    "e32a2x", 
    "13xhcos", 
    "13xp391", 
    "13yj9p3", 
    "13yjkqp", 
    "13yjrb5", 
    "141f0vg", 
    "141ki0l",
    "141n4ns",
    "141nbu6"
    ]

# Load existing data from the JSON file if it exists
try:
    with open('post_content.json', 'r') as file:
        existing_data = json.load(file)
except FileNotFoundError:
    existing_data = []

# Iterate over the post IDs
for post_id in post_ids:
    # Check if the post ID is already processed or a duplicate
    if any(data['id_post'] == post_id for data in existing_data):
        print(f"Post ID '{post_id}' is already processed or a duplicate. Skipping.")
        continue

    # Retrieve the submission based on the post ID
    try:
        submission = reddit.submission(id=post_id)
        title = submission.title
        text = submission.selftext

        # Extract URLs after "fURL:" using regular expressions
        pattern_simplified = r'fURL:\s*\[([^\]]+)\]\(([^\)]+)\)'
        matches = re.findall(pattern_simplified, text)

        # Extract all possible URL links from the matches
        fURL_pattern = r'(https?://\S+)'
        extracted_urls = []
        for match in matches:
            url_matches = re.findall(fURL_pattern, match[1])
            extracted_urls.extend(url_matches)

        # Create a dictionary to store the post information
        data = {
            'id_post': post_id,
            'title': title,
            'text': text,
            'fURL': extracted_urls
        }

        # Append the new data to the existing data
        existing_data.append(data)

        print(f"Post ID '{post_id}' processed successfully.")
    except praw.exceptions.PRAWException:
        print(f"Invalid or inaccessible post ID: '{post_id}'")

# Save the updated data to the JSON file
with open('post_content.json', 'w') as outfile:
    json.dump(existing_data, outfile)

print("Data appended to post_content.json file.")
