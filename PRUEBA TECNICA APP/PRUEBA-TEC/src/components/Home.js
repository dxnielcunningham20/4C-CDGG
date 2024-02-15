import java.util.ArrayList;
import java.util.List;

class Movie {
    private String title;
    private String genre;
    private int length; 

    public Movie(String title, String genre, int length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
    }

    public String getTitle() { return title; }
    public String getGenre() { return genre; }
    public int getLength() { return length; }
}

class Cinema {
    private List<Movie> movies;

    public Cinema() {
        movies = new ArrayList<>();
    }

    public void addMovie(Movie movie) {
        movies.add(movie);
    }

    public void projectMovies() {
        for (Movie movie : movies) {
            System.out.println("Proyecting " + movie.getTitle() + " (" + movie.getGenre() + ", " + movie.getLength() + " minutes)");
        }
    }
}

public class MovieProjection {
    public static void main(String[] args) {
        Cinema cinema = new Cinema();

        cinema.addMovie(new Movie("The Shawshank Redemption", "Drama", 142));
        cinema.addMovie(new Movie("The Godfather", "Crime", 175));
        cinema.addMovie(new Movie("Pulp Fiction", "Crime", 154));

        cinema.projectMovies();
    }
}