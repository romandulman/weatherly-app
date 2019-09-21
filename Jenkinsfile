pipeline {
   environment {
             registry = 'repos.opotel.com/weatherly'
             registryCredential = 'localdockerreg'
             registyAddr = 'repos.opotel.com'
             dockerImage = ''
             scannerHome = tool 'SonarQubeScanner'
   }
  agent {
    node {
      label 'host-2-jenkins-dind-nodejs-slave'
    }
  }

  stages {
    stage ('Verify Tools'){
      steps {
            parallel (
              node: { sh "npm -v" },
              docker: { sh "docker -v" }

            )
      }
    }


  stage('Static Code Analysis'){
       /* SonarQube Analysis  */
     steps {
            withSonarQubeEnv('Host-2-SonarQube') {
                sh "${scannerHome}/bin/sonar-scanner"
            }
            timeout(time: 1, unit: 'MINUTES') {
                waitForQualityGate abortPipeline: true
            }
      }
    }

    stage('Build Frontend'){
          /* Build React Frontend  */
             steps{
              sh  npm install && npm run build'
             }
          }

 stage('Build Docker Image & Publish'){
      /* Build Docker Image & Publish to Nexus Local  Private Docker registry  */
         steps{
             script {
               dockerImage = docker.build(registry + ":$BUILD_NUMBER" ,"-f Dockerfile .")
                docker.withRegistry( 'https://repos.opotel.com', registryCredential ) {
                  dockerImage.push()
                }
             }
         }
    }


     stage ('Deploy To AWS') {
             steps{
                  sshagent(credentials : ['AWS-eu-central-key']) {

                      sh 'ssh -o StrictHostKeyChecking=no ubuntu@3.122.220.39 uptime'
                      sh 'ssh -v ubuntu@3.122.220.39'
                      sh 'ssh ubuntu@3.122.220.39 sudo docker pull repos.opotel.com/weatherly' + ":$BUILD_NUMBER"
                      sh 'ssh ubuntu@3.122.220.39 sudo docker rm --force weatherly'
                      sh 'ssh ubuntu@3.122.220.39 sudo docker run --detach  --name weatherly  --restart=always --env "VIRTUAL_HOST=weatherly.romandulman.com"  --env "LETSENCRYPT_HOST=weatherly.romandulman.com"    romandulman/weatherly'+ ":$BUILD_NUMBER"
                  }
              }
        }

  }
}
