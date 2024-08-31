## Endpoints

### `/create` (`POST`)

Adds a question to the database. Duplicate questions are not allowed. Must include at least two elements in the choices
array and a correct answer index.

#### Example usage

```
curl -X POST -H "Content-Type: application/json" -d "{\"question\": \"What is the answer to life, the universe, and everything?\", \"choices\": [41, 42, 43, 44, 45], \"correct\": 1}" http://localhost:5000/create
```

#### Example request body

```
{
    "question": "What is the answer to life, the universe, and everything?",
    "choices": [41, 42, 43, 44, 45],
    "correct": 1
}
```

### `/update` (`POST`)

Updates an existing question in the database.

#### Example usage

```
curl -X POST -H "Content-Type: application/json" -d "{\"question\": \"What is the answer to life, the universe, and everything?\", \"choices\": [100, 99, 42, 2, 1], \"correct\": 2}" http://localhost:5000/update
```

#### Request body

```
{
    "question": "What is the answer to life, the universe, and everything?",
    "choices": [100, 99, 42, 2, 1],
    "correct": 2
}
```

### `/delete` (`POST`)

Deletes a question from the database.

#### Example usage

```
curl -X POST -H "Content-Type: application/json" -d "{\"question\": \"What is the answer to life, the universe, and everything?\"}" http://localhost:5000/delete
```

#### Example request body

```
{
    "question": "What is the answer to life, the universe, and everything?"
}
```

### `/get` (`GET`)

Fetches question data from the database.

#### Example usage

```
curl -X GET -H "Content-Type: application/json" -d "{\"question\": \"What is the answer to life, the universe, and everything?\"}" http://localhost:5000/get
```

#### Example request body

```
{
    "question": "What is the answer to life, the universe, and everything?"
}
```

### `/list` (`GET`)

Lists all question data in the database.

#### Example usage

```
curl -X GET -H "Content-Type: application/json" http://localhost:5000/list
```

### `/check-answer` (`GET`)

Checks an answer to a question in the database.

#### Example usage

```
curl -X GET -H "Content-Type: application/json" -d "{\"question\": \"What is the answer to life, the universe, and everything?\", \"answer\": 42}" http://localhost:5000/check-answer
```

#### Example request body

```
{
    "question": "What is the answer to life, the universe, and everything?",
    "answer": 42
}
```
