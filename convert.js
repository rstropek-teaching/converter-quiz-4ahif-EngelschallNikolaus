if(require('convert-units')().possibilities().indexOf(process.argv[3]) !== -1 && require('convert-units')().from(process.argv[3]).possibilities().indexOf(process.argv[5])!==-1 && parseInt(process.argv[2]) && process.argv[4]==="to" && process.argv.length===6)
    console.log(process.argv[2]+" "+process.argv[3]+" are "+require('convert-units')(process.argv[2]).from(process.argv[3]).to(process.argv[5])+" "+process.argv[5])
else
    console.log('Invalid parameters');