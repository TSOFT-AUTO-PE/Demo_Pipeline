pipeline {

    agent any

   stages {
       stage('Building') {
         steps {
            echo 'Contruyendo Interface'
            }
        }
       stage('Versioning') {
         steps {
            // Get some code from a GitHub repository
            git 'https://github.com/TSOFT-AUTO-PE/Demo_Pipeline.git'
            }
        }
        stage('Clean the Script') {
            steps {
            bat 'mvn clean'
            }
      }
        stage('Update DATA') {
         steps {
            echo 'Se realiza cambio de DATA'
            }
        }
        stage('Running the Test') {
            steps {
            bat 'mvn test'
            }
      }
        stage('Archive Results WORD') {
            steps {
            archiveArtifacts 'target/resultado/*.docx'
            }
      }
      stage('Archive Results HTML') {
            steps {
		    archiveArtifacts 'frontend-reporte.html'
            }
      }
      stage('Cleaning') {
            steps {
            dir('target') {
                deleteDir()
}
            dir('img') {
                deleteDir()
}
            }
      }
    }
}

