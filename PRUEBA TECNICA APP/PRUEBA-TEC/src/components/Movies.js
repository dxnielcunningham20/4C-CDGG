import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class Main extends Application {

    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("Catálogo de Series");

        Label titleLabel = new Label("Stranger Things");
        Image image = new Image("https://via.placeholder.com/150");
        ImageView imageView = new ImageView(image);
        imageView.setFitWidth(150);
        imageView.setFitHeight(150);

        Label descriptionLabel = new Label("Una serie sobre misterios y aventuras en un pequeño pueblo de Indiana.");

        VBox seriesBox = new VBox(titleLabel, imageView, descriptionLabel);
        seriesBox.setSpacing(10);

        Scene scene = new Scene(seriesBox, 300, 400);

        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}