pipeline {
   environment {
             registry = 'repos.opotel.com/weatherly'
             registryCredential = 'localdockerreg'
             registyAddr = 'repos.opotel.com'
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

  stage('Unit Tests'){
      /* React Frontend Unit Tests Analysis  */
      steps {
        sh 'cd frontend && npm install && npm test'
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
           sh 'cd frontend && npm run build'
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


/* QA Env */
/* stage ('Deploy Docker Image To Test Server') {
/* QA Env: Deploy Docker image to Stage/Test Server and test */
     agent {
          node {
            label 'app-test-jenkins-dind'
          }
     }
     steps {
      sh 'docker pull repos.opotel.com/weatherly' + ":$BUILD_NUMBER"
     }

  }*/

 /* Production Env; Deploy Docker image to AWS Production Server and run */
   stage ('Deploy To AWS') {
       steps{
          sshagent(credentials : ['AWS-eu-central-key']) {
              sh 'ssh -o StrictHostKeyChecking=no ubuntu@3.122.220.39 uptime'
              sh 'ssh -v ubuntu@3.122.220.39'
              sh 'ssh ubuntu@3.122.220.39 sudo docker pull repos.opotel.com/weatherly' + ":$BUILD_NUMBER"
              sh 'ssh ubuntu@3.122.220.39 sudo docker rm --force repos.opotel.com/weatherly'
              sh 'ssh ubuntu@3.122.220.39 sudo docker run --detach  --name weatherly  --restart=always --env "VIRTUAL_HOST=weatherly.romandulman.com"   repos.opotel.com/weatherly + ":$BUILD_NUMBER"
          }
       }
   }

  }
}

