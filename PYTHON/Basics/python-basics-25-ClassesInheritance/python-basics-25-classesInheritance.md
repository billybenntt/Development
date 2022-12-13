# Classes and Objects

### Definition

* Classes is a special data type to describe something, they are also defined as  custom made data types of something, a blueprint of something.

* Objects are products of classes, they are called instances.

* Variables in classes are attributes whereas functions are called methods.

### Declaration

Class declaration uses capitalized convention to flag other devs

`def__init__` is the constructor used to pass data to to the class 

`self` refers to the current object datafields 

```python
class Movie:
    def __init__(self, title, year, imbd_score, seen):
        self.movie_title = title
        self.movie_year = year
        self.movie_score = imbd_score
        self.movie_seen = seen
```

### Instances

Instances are assigned to variables and will be of type `class` 

```python
# Create Instances of Objects
dog_movie = Movie("Dogs the Movie", 2020, 10.0, True)
cat_movie = Movie("Cats the Movie", 2010, 8.0, False)
```

### Calling

```python
# Call Object Directly with Instance
Movie.nice_print(dog_movie)

# Call Instance of Object
cat_movie.nice_print()

# Create list of objects
list_films = [dog_movie, cat_movie]
print(list_films[0].movie_title)
print(list_films[1].movie_title)
```
