import axios from "axios";


export const SubmitFunction = ( data ) => {
    // const FD = new FormData
    // let value = new XMLHttpRequest()
    // value.open('GET',`http://localhost/Alop/testAPI/itemDetail.php`)
    // FD.append(id, data[id])
    console.log(data)
    
    
};


export const getState = (seaWordrch, setDataList) => {
    axios.get(`http://localhost/Alop/testAPI/newItemList.php`)
    .then(res => {
        const data = res.data;
        setDataList(data);     
    })
}


// 引数(検索カテゴリー,要素番号,カテゴリーリスト,クリックにつけるクラス,カテゴリーリスト更新関数)
export const SearchNavigateFunction = (pash, index, isLists, checkClassName,setLists, navigate) => {
    // let navigate = useNavigate();
    let categoryLists = document.getElementsByClassName("categoryLists__item");
    let navList = isLists
    for(let i=0;i<=navList.length-1;i++){
        if(navList[i].choiceFlag){
            navList[i].choiceFlag = false
            categoryLists[i].classList.remove(checkClassName)
        }
    }
    navList[index].choiceFlag = true
    categoryLists[index].classList.add(checkClassName)
    setLists(navList)
    navigate(`/CourseList/category=${pash}`)
    
}



