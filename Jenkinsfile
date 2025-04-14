pipeline {
    agent any

    environment {
        NODE_ENV = 'production' // Exemple d'une variable d'environnement
    }

    stages {
        stage('Initialisation') {
            steps {
                echo 'Préparation de l\'environnement Jenkins...'
                sh 'echo "Initialisation réussie."'
            }
        }

        stage('Cloner le dépôt') {
            steps {
                echo 'Clonage du dépôt Git depuis GitHub...'
                git branch: 'master', url: 'git@github.com:Ben43-code/toshvector.git'
            }
        }

        stage('Installer les dépendances') {
            steps {
                echo 'Installation des dépendances nécessaires...'
                sh 'npm install' // Pour les projets Node.js, sinon remplace par tes besoins
            }
        }

        stage('Analyse du code') {
            steps {
                echo 'Analyse de la qualité du code...'
                sh 'npx eslint . || echo "Avertissements ESLint."'
            }
        }

        stage('Exécuter les tests') {
            steps {
                echo 'Exécution des tests automatisés...'
                sh 'npm test' // Remplace par `pytest`, `mvn test` ou autre selon ton stack
            }
        }

        stage('Construction du projet') {
            steps {
                echo 'Construction de l\'application pour le déploiement...'
                sh 'npm run build'
            }
        }

        stage('Déploiement') {
            steps {
                echo 'Déploiement de l\'application sur le serveur...'
                sh './deploy.sh' // Script personnalisable
            }
        }
    }

    post {
        always {
            echo 'Pipeline terminé. Vérifie le statut dans les logs Jenkins.'
        }
        success {
            echo 'Succès : Toutes les étapes du pipeline ont été exécutées correctement !'
        }
        failure {
            echo 'Erreur : Une étape du pipeline a échoué. Consulte les logs Jenkins pour plus de détails.'
        }
    }
}
