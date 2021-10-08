const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout,
});
const fs =require("fs");
var dirname="";
var filename="";
var content ="";

var menu =()=>{
    console.log("\n Enter create Directory");
    console.log("\n Enter remove Directory");
    console.log("\n Enter write file");
    console.log("\n Enter read file");
    console.log("\n Enter delete a file ");
    console.log("\n Enter Append data to file");
    console.log("\n Enter update/Replace file with new data");
    console.log("\n Enter Rename a text file..");
    console.log("\n Enter exit");
};
var start=()=>{
    rl.question("Enter Your Choice:",(answer)=>{
        if(answer==="1"){
            createDirwizard();
        }else if (answer==="2"){
            removeDirwizard();
        }else if(answer==="3"){
            writefilewizard();
        }else if(answer==="4"){
            readfilewizard();
        }else if(answer==="5"){
            deletefilewizard();
        }else if(answer==="6"){
            appendfilewizard();
        }else if(answer==="7"){
            replacefilewizard();
        }else if(answer==="8"){
            renamefilewizard();
        }else if(answer===""){
            rl.close()
        }
    });
};    

var createDirwizard=()=>{
    console.log("\n the file creation wizard")
      rl.question("Name Of The Directory:",(ans)=>{
          dirname=ans;
          create_dir();
      });

};

var create_dir=()=>{
   fs.mkdir(dirname,(err)=>{
       if(err){
           console.log(err);
       }else{
           console.log("Directory Create Successfully");
       }
       repeat()
   });
};

var removeDirwizard=()=>{
    rl.question("Enter Directory Name:",(ans)=>{
        dirname=ans;
        remove_dir();
    });
};
var remove_dir=()=>{
    fs.rmdir(dirname,(err)=>{
        if(err){
            console.log(err);
        }else {
            console.log("Directory Removed successfully");
        }
        repeat();
    });
};
var writefilewizard=()=>{
    rl.question("Enter File Name:",(ans)=>{
        filename=ans;
        r1.question("Enter File Content:",(ans)=>
        {
            writefiledata();
        });
    });
};
var writefiledata=()=>{
    fs.writefiledata(filename+".txt",content,(err)=>{
        if(err){
            console.log("File Created Successfully");

        }
        repeat();
    });
};
var readfilewizard=()=>{
    rl.question("Enter File Name:",(ans)=>{
        filename=ans;
        fs.readfile(filename+".txt","utf8",(err,result)=>{
            if(err){
                console.log(err);

            }else{
                console.log(result);
            }
            repeat();
        });
    });
};

var deletefilewizard=()=>{
    rl.question("Enter File Name:",(ans)=>{
        fs.unlink(ans + ".txt",(err)=>{
            if(err){
                console.log(err);
            }else{
                console.log("File Deleted Successfully");
            }
            repeat();
        });
    });
};

var appendfilewizard=()=>{
    rl.question("Enter File Name To Append:",(ans)=>{
        filename=ans;
        rl.question("Enter Contect:",(ans)=>{
            content=ans;
            fs.appendfile(filename + ".txt",content,(err)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log("File Appended Successfully" + filename);
                }
                repeat();
            });
        });
    });
};
var replacefilewizard=()=>
{
    rl.question("Enter Your File Name: ",(ans)=>{
     filename=ans;
     rl.question("Enter Content Of Replace:",(ans)=>
     {
         content=ans;
         rl.question("Enter New Content To Replace:",(ans)=>{
             const replace_str = ans;
             fs.readfile(filename +".txt","utf8",(err,data)=>{
                 if(err){
                     console.log(err);
                     repeat();
                 }else{
                     const res =data.replace(content,replace_str);
                     fs.writefile(filename+".txt",res,(err)=>{
                         if(err){
                             console.log(err);
                             
                         }else{
                             console.log("File Updated / Replaced Successefully"+filename); 
                            }
                            repeat();
                     });
                 };
             });
         });
     });
    });
};
var renamefilewizard=()=>{
    rl.question("Enter Old File Name:",(ans)=>{
        var oldfile=ans;
        rl.question("Enetr New File Name:",(ans)=>{
            fs.rename(oldfile+".txt",ans+".txt",(err)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log("File Renamed Succssfully"+ans+".txt");
                }
                repeat();
            });
        });
    });
};
var repeat = () => {
    menu();
    start();
  };
  
  console.log("Welcome To This Game..");
  repeat();