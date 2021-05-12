export default{
    paletter:{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    paletterColor:{
        height: "90%"
    },
    goback:{
        width:"20%",
        height:"50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        opacity: "1",
        backgroundColor: "black",
        "& a":{
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline-block",
            top:"50%",
            left: "50%",
            marginLeft: "-50px",
            marginTop: "5px",
            textAlign: "center",
            outline: "none",
            background: "rgb(255,255,255,0.3)",
            fontSize: "1rem",
            color: "white",
            lineHeight: "30px",
            textTransform: "uppercase",
            border: "none",
            textDecoration: "none",
        }

    }
    
}