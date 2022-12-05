# CLASSES AND OBJECTS

class Movie:
    def __init__(self, title, year, imbd_score, seen):
        self.movie_title = title
        self.movie_year = year
        self.movie_score = imbd_score
        self.movie_seen = seen


dog_movie = Movie("Dogs the Movie", 2020, 10.0, True)
cat_movie = Movie("Cats the Movie", 2010, 8.0, False)

print(dog_movie)
print(cat_movie)
