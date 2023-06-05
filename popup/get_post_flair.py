import praw
import json

reddit = praw.Reddit(client_id='aHqR_ECfwPEHP-2Kl7G8sg',
                     client_secret='jRIYVzM9xpNrovkBtxZ0BwlkBjvKgA',
                     user_agent='test')

# Add the new post_id to the array
post_id = "141nbu6"  # Replace with the post ID of your choice

# Load existing data from post_flair.json if it exists
try:
    with open('post_flair.json', 'r') as file:
        data_list = json.load(file)
except FileNotFoundError:
    data_list = []

# Check if the post ID already exists in the data_list
if any(data['post_id'] == post_id for data in data_list):
    print(f"Post ID '{post_id}' already exists in post_flair.json. Skipping.")
else:
    # Retrieve the submission based on the post ID
    try:
        submission = reddit.submission(id=post_id)
    except praw.exceptions.PRAWException:
        print(f"Invalid post ID '{post_id}'. Skipping.")
        submission = None

    # Get the link flair of the submission if it exists
    post_flair = submission.link_flair_text if submission else None

    # Create a dictionary to store the post ID and flair
    data = {
        'post_id': post_id,
        'post_flair': post_flair
    }

    # Add new data to the existing list if it doesn't exist
    if post_flair:
        data_list.append(data)
        print(f"Post ID '{post_id}' processed successfully.")
    else:
        print(f"Post ID '{post_id}' doesn't have a link flair or is invalid. Skipping.")

    # Save the updated data list to post_flair.json
    with open('post_flair.json', 'w') as file:
        json.dump(data_list, file)

    print("Data exported to post_flair.json file.")
