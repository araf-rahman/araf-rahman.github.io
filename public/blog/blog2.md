In order to write complex programs, one must understand the importance of object Orientation as an essential part of programming. It helps me as a programmer to create objects and have them interact with each other. During my training, I have been working heavily with JavaScript and creating objects based off of a prototype. A good example is a prototype of a song within an album. Let's look at the variety of properties such as a song title, artist, genre, composer, and how long the song is.  
 
Using a constructor function helps define this prototype. The constructor function defines the different properties of the prototype. 

```javascript

class song(title, artist genre, song_length) { 
 this.title = title; 
 this.artist = writer; 
 this.genre = genre; 
 this.song_length = song_length; 
} 
```
In this constructor, we pass in a number of values and set the properties of that particular object equal to the values we passed in. Let's create a new instance of the constructor below using Maroon 5's hit song "Sugar"  
 
`var maroon_5 = new song(“sugar”, “maroon 5”, “funkpop”, 300);` 
 
In addition to learning about JavaScript objects, I learned about object orientation in Ruby. An example of us this is Instagram. A user has to be able to interact with their posts and other users. An Instagram post has one user, and that user has many posts. In my example below, I attach a user object to a post in Ruby.  

 ```ruby
class User 
 attr_accessor :name, :email 
 def initialize(name, email) 
   @name = name 
   @email = email 
 end 
end 
```
Similar to JavaScript, in Ruby, we can create classes with instance variables. The attr_accessor property allows access to instance variables. To associate another class named post, we must set the post's user, using  a :user variable inside the Post class. 
```ruby
class Post 
  attr_accessor :name, :content, :user 
  def initialize(name, content) 
    @name = name 
    @content = content 
  end  
end 

```
Next steps would be to create new instances of both the post and User classes, then set the user property of the post to equal the new User object. When the new post is a new Post object, we access the properties of the Post class such as its name and content.  
 
new_post.user returns the object araf; the post now has a user, through the association made.  
````ruby
new_post = Post.new("New Post", "content") 
araf = User.new("araf")
new_post = araf 
````
We can also create a user that has many posts, by adding to the User class. We can create an array that holds a list of posts inside of the User initialize class. In the add_post method, we can create a new post object, and add it to the posts array. We can then set the user property of this new post to the current User object. 
 
```ruby

class User 
  
  attr_accessor :name, :email 
    
  def initialize(name, email) 
    @name = name 
    @email = email 
    @posts = [] 
  end 
  
  def add_post(name, content) 
    post = post.new(name, genre) 
    @posts << post 
   post.user = self 
  end 
       
  def post 
    @posts 
  end 
  
end 
```
 
Grouping a number of things with similar properties through class creation is easy thanks to Object-orientation. It also allows us to effectively associate objects with one another. 
