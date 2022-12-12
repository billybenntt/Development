# CLASSES AND OBJECTS

class Movie:
    def __init__(self, title, year, imbd_score, seen):
        self.movie_title = title
        self.movie_year = year
        self.movie_score = imbd_score
        self.movie_seen = seen
    def nice_print(self):
        print("Title: ", self.movie_title)
        print("Year of Production: ", self.movie_year)
        print("IMDB Score: ", self.movie_score)
        print("I have seen it: ", self.movie_seen)

# Create Instances of Objects
dog_movie = Movie("Dogs the Movie", 2020, 10.0, True)
cat_movie = Movie("Cats the Movie", 2010, 8.0, False)

# Call Object Directly with Instance
Movie.nice_print(dog_movie)

# Call Instance of Object
cat_movie.nice_print()

# Create list of objects
list_films = [dog_movie, cat_movie]
print(list_films[0].movie_title)
print(list_films[1].movie_title)