### How to & What to

- Probably need to create a class to represent a User and all of its data(like name and age)
- User class needs to have the ability to store some data, retrieve it, and change it
- Also needs to have the ability to notify the rest of the app when some data is changed
- User needs to be able to persist data to an outside server, and then retrieve it as some future point

### Extraction Approach

1. Build class User as a 'mega' class with tons of methods
2. Refactor User to use composition
3. Refactor User to be a reusable class that can represent any piece of data, not just a User
