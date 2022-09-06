# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?

Your answer:
From Developer Joyce
Researched answer:
A hash is a collection of key:value pairs and are referenced by their unique key rather than their index like you would an array. Hashes have the ability to hold information. Because hashes have the ability to store information, developers are able to create hashes, read the information that is stored, update the information that is stored, as well as delete information that is no longer needed. This is the idea of CRUD, which is considered all the ways you can manipulate the data. Something to also consider is that hashes fall inside the enumerable module which means developers can use iterations/iteration methods on hashes to receive some return for each value that the hash holds.
An example of when I used iterations to access the values of the hash, were when I wanted to receive an output of a string that include the data of hash which held information about phone applications - it had 5 five key:value pairs of different phone application names. Because I wanted to have an expected output of a string which returned the name of each application and from what key, I was able to utilize the .each method, so that I could receive a return for each value in the hash.
To access the value, I needed to make sure that I was first setting that the parameters of the method were to accept both the key, value as arguments in that order.  Within my return, I was able to call for both the key and value to be returned in my string output by also utilizing string interpolation which prints out the values within the return.

2. What is a gem?

Your answer:
From Developer Rashad
Researched answer:
RubyGems is a package manager for the Ruby programming language that provides a standard format for distributing Ruby programs and libraries (in a self-contained format called a "gem"), a tool designed to easily manage the installation of gems, and a server for distributing them. The gem command is used to build, upload, download, and install Gem packages. RubyGems is very similar to apt-get, portage, and yum in functionality.

3. What is Ruby on Rails?

Your answer:
From Developer Hieu
Researched answer:
Ruby on Rails is actually an entire framework that handles a lot of the things done on the backend such as creating models, changing the shapes of databases, and queries.

4. What is a relational database? Are there other kinds of databases?

Your answer:

Researched answer:
In my response above I'd mentioned two types of relationships relational databases can have but outside of this categorization, there are many other kinds as well. On the topic of relational databases, graph databases function similarly. The main difference in relational and graph databases is how the relationship is modeled. In the case of graph databases, the relationships are stored within the original data as apposed to being defined through other means. This gives developers greater potential in database efficiency. An abstract but common type of database used is a NoSQL database. You could think of a NoSQL database structure as akin to a file folder system that has no other structural and relational constraints. The main draw for using this kind of database is the scalability and processing speed that comes from data being easier to access. Lastly, every database I've mentioned thus far can be set up as an Operational Databases. These databases are defined by the ability to quickly mutate their contents while also allowing easy access. This is done without the need for batch processing and is often the ground works for many NoSQL and relational databases.

5. What are primary keys? Why are they important?

Your answer:
From Developer Cody
Researched answer:
A primary key is a special relational database table column that is used to quickly go through data. A good example I found was that lets says you are looking up things sold on Jan 1 and you can tell by the order of the primary keys of when it was sold since the oldest will be the smaller number because of how the data is stored.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: map between HTTP verb and crud actions

2. JSON: javascript object notation, allows interaction between data and user interface

3. ERB: embedded ruby, allows ruby to be embedded within the text

4. Params: parameters, allow user to add more information to the application

5. API: application programming interface, connects apps together
