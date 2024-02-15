import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class InicioPeliculas {
    public static void main(String[] args) {
        JFrame splash = new JFrame();
        splash.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        splash.setSize(400, 200);
        splash.setLocationRelativeTo(null);
        splash.setUndecorated(true);

        JLabel label = new JLabel();
        label.setIcon(new ImageIcon(InicioPeliculas.class.getResource("/ruta/imagen.png"))); // Reemplazar con la ruta de la imagen
        label.setHorizontalAlignment(JLabel.CENTER);
        label.setVerticalAlignment(JLabel.CENTER);

        splash.add(label);

        JLabel texto = new JLabel("Inicio de películas", SwingConstants.CENTER);
        texto.setFont(new Font("Serif", Font.BOLD, 24));
        label.add(texto);

        Timer timer = new Timer(3000, new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                splash.dispose();
                new VentanaPrincipal().setVisible(true);
            }
        });
        timer.start();

        splash.setVisible(true);
    }
}