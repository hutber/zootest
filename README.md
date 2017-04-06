# zootest
A simple repo to display my test.

# Developer notes
First off sorry I didn't have time to write any tests let alone first. I spent about 60% of the time looking at newer ways to build the test, just from an excitment point of view I wanted to use newer techs. I didn't feel restricted how I would normally and decided I would only support the latest browsers and see how we go.

Just so you know I saw this opportunity to just have some fun and use it as a playground. Normally I wouldn't be so cavalier about my builds. 

So I started with webpack then spent some time playing around getting x,y,z to work. A lot of stuff I knew about, but still. The packages are changing very fast which effects breaking changes. 

Anyway, the biggest mistake was using postcss and writting my own grid with css modules, this does not work too well ;) I had planned to build the app as a single page and routes etc but again too much time.  

So here you have it... a round about way for me to create a test :D

# Getting Started
Simply run `npm install`

* Once installed run `npm start`
* Navigate to `localhost:8080`
* See the project.

# Contributing
We are using Commitizen for our commits.

`npm install -g commitizen`

Init commitizen configuration

`commitizen init hutber-conventional-changelog --save-dev --save-exact`

## Useage

When making changes, add files then

`git cz`


