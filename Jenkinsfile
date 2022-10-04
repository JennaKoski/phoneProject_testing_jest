pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage("Build"){
            steps{
                sh 'npm run moro'
                echo 'building app...'

            }
        }
        stage("Test"){
            steps{
                echo 'testing app...'
            }

        }
        stage("Deliver"){
            steps{
                echo 'delivering app...'
            }

        }

    }
}