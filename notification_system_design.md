
# Stage 1
## Approach
The priority inbox is implemented using weighted notification ranking.
Priority Weights:
1. Placement = 3
2. Result = 2
3. Event = 1
Each unread notification is assigned a score based on:
1. Notification type weight
2. Recency (latest notifications receive higher priority)
Notifications are sorted in descending order using:
1. Weight first
2. Timestamp second
Top 10 notifications are displayed in the Priority Inbox.
To efficiently maintain the top 10 notifications when new notifications arrive, a Min Heap of size 10 can be used. Whenever a new notification arrives:
1.Calculate its priority score
2.Compare it with the minimum element in the heap
3.Replace if the new notification has higher priorit

The system fetches notifications from the provided API and processes them in memory without using a database.
