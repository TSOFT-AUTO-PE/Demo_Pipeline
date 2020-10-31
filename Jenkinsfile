pipeline {
     parameters {
      string(name: 'NODE_NAME', defaultValue: '', description: 'Enter the name of the node for the execution')
      string(name: 'DATA_FILE', defaultValue: '', description: 'Enter the Route of the DATA INPUT')
      string(name: 'TEST_TAG', defaultValue: 'mvn test -Dcucumber.options="--tags ', description: 'This parameter is STATIC, do not Change')
      //file description: 'Ingrese Excel Input', name: 'DATA_EXCEL'
      //string(name: 'COPY_DESC', defaultValue: '.\\src\\main\\resources\\excel', description: 'Change backslash')
     }

      agent {
             node { label "${params.NODE_NAME}"}
         }

   stages {
     stage('Building') {
            steps {
               // Get some code from a GitHub repository
               echo 'Creando WorkSpace'
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
                          bat "REPLACE ${params.DATA_FILE} .\\src\\main\\resources\\excel"

                          }
                    }
         /*stage('Run Static Analysis with SonarQ') {
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
              }*/
        stage('Clean the Script') {
            steps {
            bat 'mvn clean'
            }
      }

        stage('Especify the TAG') {
                            steps {
                                script {

                                    def userInputTxt = input(
                                                        id: 'inputTAG', message: 'Please enter mvn TAG Description', parameters: [
                                                        [$class: 'TextParameterDefinition', description: 'mvn test -Dcucumber.options="--tags @InputYourTAG',name: 'input']
                                                       ])
                                       echo ("The TAG Test Running is: ${userInputTxt}")
                                       bat "${params.TEST_TAG}${userInputTxt}"

                                }
                                }
                           }
       /*   stage('Running the Test') {
                             steps {
                                bat "${userInputTxt}"
                             }
                       }*/

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
