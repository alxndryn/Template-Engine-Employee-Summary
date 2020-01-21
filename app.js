inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    }
]).then(function(data) {
    
    this.name = JSON.stringify(data.name);
    
    
    
    

    console.log("Success!");
})
