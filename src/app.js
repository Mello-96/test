// Import des modules
const express = require('express');
const mainRouter = require('./routes/index');

// Création de l'application Express
const app = express();

// Configuration du port
const PORT = process.env.PORT || 3000;

// Middlewares globaux
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Définition des routes principales
app.use(mainRouter);

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});