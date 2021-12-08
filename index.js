var arr = [];

function AddBlock()
{
    const dynamicBox = document.getElementById("box")
    dynamicBox.style.visibility = "visible"
    dynamicBox.style.position = "absolute"
    dynamicBox.style.top = "120px"
    const Addlist = document.getElementById("newlist");
    Addlist.style.visibility = "hidden";

    // blur background after add the block
    const Blur = document.getElementById("blur");
    Blur.style.filter = "blur(3px)";
   


}

function RemoveBox()
{
    const RmvBox = document.getElementById("box");
    RmvBox.style.visibility = "hidden";
    const Blur = document.getElementById("blur");
    Blur.style.filter = "blur(0px)"

}

// var arr = [];
function AddTask()
{
    const cptur = document.getElementById("input").value;
    var myobj = {
        text:cptur
    }
    arr.push(myobj);
    console.log(arr .length)

    //remove the "No item text"
    const remv = document.getElementById("noitm");
    remv.style.display = "none"

   //creating the cards
    const element = document.createElement("div");
    element.setAttribute("id","box1");
    element.innerText = arr[arr.length - 1].text;
    const a = document.getElementById("parent").appendChild(element);
    
    //creat border

    var createBorder = document.createElement("hr");
    element.appendChild(createBorder);

    const CreatPara = document.createElement("p")
    CreatPara.setAttribute("id","para");
    CreatPara.innerText = "Hi"
    element.appendChild(CreatPara);
    console.log(CreatPara)

    //creating a icons inside the cards

    const creatDelete = document.createElement("button");
    creatDelete.setAttribute("id","delete");
    creatDelete.innerHTML = '<i class="fas fa-trash-alt"></i>'
    element.appendChild(creatDelete);
    creatDelete.onclick = function(){
        DeleteCard()
        // function DeleteCard()
    }
    function DeleteCard()
    {
        element.style.display ="none"
    }

    //creat Add Icon on the card

    const CreatAdd = document.createElement("button");
    CreatAdd.setAttribute("id","plus");
    CreatAdd.innerHTML = '<i class="fas fa-plus-circle"></i>'
    element.appendChild(CreatAdd);

    //Creat the "New list Box"

    CreatAdd.onclick = function()
    {
        AddNewList()
    }
    function AddNewList()
    {
        const Addlist = document.getElementById("newlist");
        Addlist.style.visibility = "visible";
        Addlist.style.position  = "absolute"
        Addlist.style.top = "120px"

        // blur background after add the block

        const Blur = document.getElementById("blur");
        Blur.style.filter = "blur(3px)";

        //after click the plus button the new list is removed

        const RmvBox = document.getElementById("box");
        RmvBox.style.visibility = "hidden";
        
    }
}

var array = []

function AddList()
{
    const List = document.getElementById("data").value;
    var newobj = {
        data:List
    }
    console.log(newobj)
    array.push(newobj)

    const Para = document.getElementById("para");
    // Para.appendChild(newobj)
    console.log(array)
    console.log(List)

    
}

function RemoveList()
{
    const RmvList = document.getElementById("newlist");
    RmvList.style.visibility = "hidden"

    const Blur = document.getElementById("blur");
    Blur.style.filter = "blur(0px)"
}