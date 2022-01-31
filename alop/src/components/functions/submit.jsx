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

