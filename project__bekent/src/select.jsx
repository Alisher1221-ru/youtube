import { Box } from "@mui/material";

function Select() {


    return(
        <Box component={"section"}>
            <Box component={"div"}>
                <div className="items">
                    <img src="https://cdn.icon-icons.com/icons2/3215/PNG/512/home_house_building_main_icon_196477.png" width={"50px"}/>
                    <p>about</p>
                </div>
                <div className="items">
                    <img src="https://storage.googleapis.com/support-forums-api/attachment/thread-192129487-1835648349494362801.png" width={"50px"}/>
                    <p>shorts</p>
                </div>
                <div className="items">
                    <img src="https://cdn.pixabay.com/photo/2021/03/18/10/21/subscribe-6104536_1280.png" width={"50px"}/>
                    <p>subscribe</p>
                </div>
                <hr />
                <br />
                <div className="items">
                    <img src="https://static.thenounproject.com/png/2481186-200.png" width={"45px"}/>
                    <p>bibliotec</p>
                </div>
                <div className="items">
                    <img src="https://cdn-icons-png.flaticon.com/512/32/32284.png" width={"40px"}/>
                    <p>istori</p>
                </div>
                <hr />
            </Box>
        </Box>
    )
}

export default Select