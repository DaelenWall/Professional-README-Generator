# Professional-README-Generator
UConn Bootcamp Chapter 9 Node.js Challenge

## Description
In this chapter 9 challenge I took my knowledge of Node.js and used it to create a Professional README Generator.  I now have a valuable asset to use in my journey towards becoming a web developer as I can use this README Generator for projects or as a part of my coding portfolio.


## Process
* The first thing I did after creating the repository was downloading 'inquirer 8.2.4' and 'fs' so that I could create my user prompts.  I also added in an 'index.js' file and a 'Develop' folder to hold all of my edited files.
* ![sidebarimg](https://user-images.githubusercontent.com/122398507/228098739-71f6d8aa-890c-4789-bcb1-630f91bb36d7.png)


* The next step was to start my index.js where I added in my requirements and my inquirer prompts.  These are used to create prompts for the user that will eventually be turned into data that is used to create the generated README. 
* ![promptsimg](https://user-images.githubusercontent.com/122398507/228098776-84541acf-47fb-42f2-82fc-7cfc837bdae1.png)


* Next, I added in a new const called 'generateREADME'.  This takes all of the user's answers from the prompts and turns them into data to be used in the README.  To do this, I had to create a README skeleton that would surround the data I was inputting.
* ![constgenreadmeimg](https://user-images.githubusercontent.com/122398507/228098801-b060ed18-5aa7-46ad-8498-65ea7440c8ac.png)


* Then, I added in a new const called 'init', which is designed to initiate or generate the actual file.  This is essentially what creates 'genREADME.md', the new generated README file.  It will also catch errors if they were to occur.
* ![constinitimg](https://user-images.githubusercontent.com/122398507/228098834-f3364ce8-8bdb-4b88-b116-e0144b4380f2.png)


* Finally, I added in a table of contents to the README skeleton in 'const generateREADME'.  This would ensure easy access to every section of 'genREADME.md'.
* ![tblofcntsimg](https://user-images.githubusercontent.com/122398507/228098850-c0d5ecce-cdca-4d7b-86a3-970ce47a4af6.png)


## Walkthrough
[genREADME.webm](https://user-images.githubusercontent.com/122398507/228098545-2f497441-7c77-44e5-86d2-722431196df3.webm)


## Conclusion
Overall, this was a great first Node.js project.  I enjoyed using the 'inquirer' extension and the action of creating files using a function was very interesting to me as previously we had only done it in the terminal.  It was a little bit basic, but it served as a useful introduction to Node.js.
