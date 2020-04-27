# Template Engine - Employee Summary

**** INSTRUCTIONS ****

-Prompt (inquirer) user for team manager info
    -Name
    -Manager
    -ID
    -Email
    -Office Number

-Prompt (inquirer) user for team member info
    -Name
    -Engineer or Intern
    -ID
    -Email
    -GitHub Profile or School

-Testing!

-Builds HTML file that displays team roster

**** WORKFLOW ****

1. Run tests
2. Create or update classes to pass a single test case
3. Repeat


### Classes
The project must have the these classes: `Employee`, `Manager`, `Engineer`,
`Intern`. The tests for these classes in the `tests` directory must all pass.

The first class is an `Employee` parent class with the following properties and
methods:

  * name
  * id
  * title
  * getName()
  * getId()
  * getEmail()
  * getRole() // Returns 'Employee'

The other three classes will extend `Employee`. 

In addition to `Employee`'s properties and methods, `Manager` will also have:

  * officeNumber

  * getRole() // Overridden to return 'Manager'

In addition to `Employee`'s properties and methods, `Engineer` will also have:

  * github  // GitHub username

  * getGithub()

  * getRole() // Overridden to return 'Engineer'

In addition to `Employee`'s properties and methods, `Intern` will also have:

  * school 

  * getSchool()

  * getRole() // Overridden to return 'Intern'
