//Print all function
var alldocs = app.documents.everyItem();
var myDialog = app.dialogs.add({name:"Print all"});

with(myDialog.dialogColumns.add()){
    staticTexts.add({staticLabel:"Print all open documents?"});
}
var myResult = myDialog.show();

if(myResult == true){
    main();
} else {
    myDialog.destroy();
}

function main(){
    try {
        alldocs.print(false);
    } catch (e) {
        alldocs.print(true);
    }
}
