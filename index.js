// 1. Lade das Express-Paket, das wir installiert haben.
const express = require('express');
const path = require('path'); // Ein Helfer, um mit Dateipfaden zu arbeiten.

// 2. Erstelle eine Express-Anwendung (unseren Server).
const app = express();
const PORT = 3000; // Der "Kanal" oder "Port", auf dem unser Server lauscht.

// 3. Middleware: Erlaube dem Server, einfache Formulardaten zu lesen.
app.use(express.urlencoded({ extended: true }));

// 4. Sage Express, dass es statische Dateien (CSS, Bilder) aus einem 'public' Ordner laden soll.
app.use(express.static('public'));

app.set('view engine', 'ejs');

// Ein temporärer Speicher für unsere Blog-Posts
let posts = [];

// 5. Definiere eine "Route": Was passiert, wenn jemand die Startseite ('/') besucht?
app.get('/', (req, res) => {
    res.render('index', { posts: posts });
});

// 6. Definiere eine Route für das Hochladen (wenn das Formular gesendet wird)
app.post('/upload', (req, res) => {
    const newPost = {
        title: req.body.title,
        content: req.body.content
    };
    posts.unshift(newPost); // Füge den neuen Post am Anfang der Liste hinzu

    res.redirect('/'); // Leite den Benutzer zurück zur Startseite
});

// 7. Starte den Server und lass ihn auf Anfragen warten.
app.listen(PORT, () => {
    console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
});