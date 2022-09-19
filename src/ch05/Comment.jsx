import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 9,
        display: "flex",
        flexDirection: "row",
        border: "1px, solid, grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "left",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};

const Comment = (props) => {
    console.log(props);
    return (
        <div style={styles.wrapper} key={props.name}>
            <div style={styles.imageContainer}>
                <img
                    style={styles.image}
                    src="https://images.unsplash.com/photo-1517115358639-5720b8e02219?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmlzaCUyMG1hcmtldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=100&q=60"
                    alt="hio"
                />
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment} </span>
            </div>
        </div>
    );
};

export default Comment;
