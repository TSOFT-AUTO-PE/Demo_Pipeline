pipeline {

    agent {
        node { label 'Abraham_PC'}
    }
     parameters {
      string(name: 'TEST_TAG', defaultValue: 'mvn test -Dcucumber.options="--tags @InputYourTAG', description: 'Enter the Tag of your Test, just change the TAG in this line')
      string(name: 'DATA_FILE', defaultValue: 'Enter the Route of the DATA INPUT', description: 'Enter the Route of the DATA INPUT')
      string(name: 'COPY_DESC', defaultValue: 'Copy Description HERE', description: 'C:\Jenkins\workspace\TDP Mi Movistar Recarga Web\src\main\resources\excel')
     }

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
              stage('Update DATA') {
                          steps {
                          bat "REPLACE ${params.DATA_FILE} ${params.COPY_DESC}"

                          }
                    }
         stage('Run Static Analysis with SonarQ') {
                    steps {
                    script{
                        withSonarQubeEnv('sonarserver') {
                                             bat "mvn sonar:sonar"
                                            }
                                   //         timeout(time: 1, unit: 'HOURS'){
                                     //       def qg = waitForQualityGate()
                                         //       if(qg.status != 'OK'){
                                            //    error "Pipeline aborted due to Quality gate failure: ${qg.status}"
                                           //     }
                                         //   }
                                         
                    }

                    }
              }
        stage('Clean the Script') {
            steps {
            bat 'mvn clean'
            }
      }

        stage('Running the Test') {
            steps {
            bat "${params.TEST_TAG}"

            }
      }
        stage('Archive Results WORD') {
            steps {
            archiveArtifacts 'target/resultado/*.docx'
            }
      }
       stage('Archive Results IMG') {
             steps {
      		 archiveArtifacts 'target/resultado/img/**/*.*'
                  }
            }
      stage('Archive Results HTML') {
            steps {
		    archiveArtifacts 'target/resultado/frontend-reporte.html'
            }
      }
      stage('Cleaning WS') {
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
