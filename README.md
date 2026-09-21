````markdown
# MongoDB Atlas and Compass

**Atlas = where your database actually lives.**

**Compass = a tool you use to connect to and manage that database.**

## Step 1 — MongoDB Atlas

MongoDB Atlas is a cloud service used to host our MongoDB database.

When we create `Cluster0`, MongoDB creates a database cluster on its cloud infrastructure.

```text
MongoDB Atlas
│
└── Cluster0
      │
      ├── Database 1
      │    └── Collections
      │
      └── Database 2
           └── Collections
````

Our actual application data is stored inside this Atlas cluster.

## Step 2 — Database User

To access the database, we create a **Database User**.

For example:

```text
yashkumarsrivastav36_db_user
```

MongoDB uses the database username and password for authentication.

```text
Username + Password
        ↓
MongoDB checks credentials
        ↓
Access Allowed / Denied
```

This is separate from our normal MongoDB Atlas account login.

## Step 3 — Connect Atlas to Compass

Atlas provides a **connection string**:

```text
mongodb+srv://username:<password>@cluster.mongodb.net/
```

To connect:

1. Copy the connection string from Atlas.
2. Replace `<password>` with the Database User's password.
3. Make sure your IP is allowed under **Network Access** in Atlas.
4. Paste the connection string into MongoDB Compass.
5. Click **Connect**.

```text
MongoDB Compass
       ↓
Connection String
       ↓
Authentication + Network Check
       ↓
MongoDB Atlas
       ↓
Cluster → Database → Collections
```

**In short:** Atlas stores the database, while Compass provides a graphical interface to connect to and manage that database.

```
```
