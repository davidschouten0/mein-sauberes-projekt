const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts'); 
const { title } = require('process');

// 1. ERSTELLE DIE EXPRESS-ANWENDUNG ZUERST!
const app = express();
const PORT = 3000; 

// 2. KONFIGURATION (Setups in einem Block):

// Sag Express, wo die EJS-Dateien liegen (views)
app.set('view engine', 'ejs'); 

// Aktiviere den Layout-Helfer
app.use(expressLayouts); 

// Sag dem Layout-Helfer, welche Datei dein Basis-Template ist:
// (Express sucht automatisch nach views/base.ejs)
app.set('layout', 'base'); 

// 3. MIDDLEWARE (Helfer-Funktionen):

// Erlaube das Lesen von statischen Dateien (CSS, JS, Bilder)
app.use(express.static('public'));

// Erlaube dem Server, einfache Formulardaten zu lesen
app.use(express.urlencoded({ extended: true }));


// 4. DATEN (Dein temporärer Speicher):
let posts = [
    { 
        id: 1, 
        title: "Test-Post #1", 
        excerpt: "Dieser Beitrag ist nur zum Testen des Layouts da.",
        category: "Test",
        imageUrl: "https://via.placeholder.com/600x400"
    },
    { 
        id: 2, 
        title: "Test-Post #2", 
        excerpt: "Super wichtig für das Debugging!",
        category: "Debugging",
        imageUrl: "https://via.placeholder.com/600x400"
    }
];

// 5. ROUTEN (Was passiert, wenn die URL aufgerufen wird?):

// Startseite ('/')
app.get('/', (req, res) => {
    res.render('index', { posts: posts, title: 'Startseite'});
});

// Route für das Hochladen (Posten eines Formulars)
app.post('/upload', (req, res) => {
    const newPost = {
        title: req.body.title,
        content: req.body.content
    };
    posts.unshift(newPost);

    res.redirect('/');
});

// 6. SERVER STARTEN:
app.listen(PORT, () => {
    console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
});