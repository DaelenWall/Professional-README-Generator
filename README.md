# Professional-README-Generator
UConn Bootcamp Chapter 9 Node.js Challenge

## Description
In this chapter 9 challenge I took my knowledge of Node.js and used it to create a Professional README Generator.  I now have a valuable asset to use in my journey towards becoming a web developer as I can use this README Generator for projects or as a part of my coding portfolio.


## Process
* The first thing I did after creating the repository was downloading 'inquirer 8.2.4' and 'fs' so that I could create my user prompts.  I also added in an 'index.js' file and a 'Develop' folder to hold all of my edited files.
![sidebarimg]("Professional-README-Generator\assets\sidebarimg.png")


* The next step was to start my index.js where I added in my requirements and my inquirer prompts.  These are used to create prompts for the user that will eventually be turned into data that is used to create the generated README. 
![promptsimg]("Professional-README-Generator\assets\promptsimg.png")


* Next, I added in a new const called 'generateREADME'.  This takes all of the user's answers from the prompts and turns them into data to be used in the README.  To do this, I had to create a README skeleton that would surround the data I was inputting.
![constgenreadmeimg]("Professional-README-Generator\assets\constgenreadmeimg.png")


* Then, I added in a new const called 'init', which is designed to initiate or generate the actual file.  This is essentially what creates 'genREADME.md', the new generated README file.  It will also catch errors if they were to occur.
![constinitimg]("Professional-README-Generator\assets\constinitimg.png")


* Finally, I added in a table of contents to the README skeleton in 'const generateREADME'.  This would ensure easy access to every section of 'genREADME.md'.
![tblofcntsimg]("Professional-README-Generator\assets\tblofcntsimg.png")


## Walkthrough


## Conclusion
Overall, this was a great first Node.js project.  I enjoyed using the 'inquirer' extension and the action of creating files using a function was very interesting to me as previously we had only done it in the terminal.  It was a little bit basic, but it served as a useful introduction to Node.js.